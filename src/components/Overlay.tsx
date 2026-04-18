"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% scroll
  const y1 = useTransform(progress, [0, 0.2], [0, -200]);
  const opacity1 = useTransform(progress, [0.0, 0.15], [1, 0]);

  // Section 2: 30% scroll
  const y2 = useTransform(progress, [0.2, 0.3, 0.4], [200, 0, -200]);
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4], [0, 1, 0]);

  // Section 3: 60% scroll
  const y3 = useTransform(progress, [0.5, 0.65, 0.8], [200, 0, -200]);
  const opacity3 = useTransform(progress, [0.5, 0.65, 0.8], [0, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ y: y1, opacity: opacity1 }}
          className="absolute w-full flex flex-col items-center justify-center text-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight text-white drop-shadow-xl mb-4">
            Hello, I am Priyanshu Mahor.
            <span className="block text-[#c084fc] mt-2">AI & Data Science Engineer.</span>
          </h1>
          <p className="text-[#ededed]/80 md:text-xl font-light tracking-wide max-w-lg mt-6">
            Building intelligent pipelines and high-performance algorithms.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ y: y2, opacity: opacity2 }}
          className="absolute w-full flex flex-col items-start justify-center p-8 md:p-24 lg:p-32"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl mb-4 max-w-2xl leading-tight">
            I build advanced <br />
            <span className="italic font-normal text-[#c084fc]">AI systems.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ y: y3, opacity: opacity3 }}
          className="absolute w-full flex flex-col items-end justify-center p-8 md:p-24 lg:p-32 text-right"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#c084fc] drop-shadow-2xl mb-4 max-w-2xl leading-tight">
            Bridging deep learning <br />
            <span className="text-white">and software engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
