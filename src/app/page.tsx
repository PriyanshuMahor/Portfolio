"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen bg-[#070010] selection:bg-[#c084fc] selection:text-black">
      <div ref={containerRef} className="h-[500vh] w-full relative">
         <ScrollyCanvas progress={scrollYProgress} />
         <Overlay progress={scrollYProgress} />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 bg-[#070010]">
        <p className="text-sm tracking-widest uppercase">© {new Date().getFullYear()} Priyanshu Mahor. All rights reserved.</p>
      </footer>
    </main>
  );
}
