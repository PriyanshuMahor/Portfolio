"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119 frames

export default function ScrollyCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImages = async () => {
      // Async preload to not block main thread violently
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
        
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });

        loadedImages.push(img);
        loadedCount++;
        
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      }
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[index];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Object fit cover calculation
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      // We must clear canvas to prevent artifacts
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial render
    render(0);

    const unsubscribe = frameIndex.on("change", (latestResult) => {
      const index = Math.round(latestResult);
      if (index >= 0 && index < FRAME_COUNT) {
        render(index);
      }
    });

    const handleResize = () => {
      render(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#070010]">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#070010]">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-[#c084fc] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm uppercase tracking-widest text-[#ededed]">Loading Sequence...</p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Subtle blend layer to ensure the text overlays remain highly readable regardless of the sequence brightness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070010]/40 via-transparent to-[#070010]/80 pointer-events-none" />
    </div>
  );
}
