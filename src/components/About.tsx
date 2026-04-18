export default function About() {
  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter text-center">
          About <span className="text-[#c084fc] italic pr-2">Me</span>
        </h2>
        
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-16 rounded-[2rem] shadow-2xl hover:border-[#c084fc]/50 transition-colors duration-500">
          <p className="text-gray-300 text-xl md:text-3xl leading-relaxed font-light mb-8 text-center md:text-left">
            I am <span className="text-white font-semibold">Priyanshu Mahor</span>, an <span className="text-[#c084fc] font-medium">Artificial Intelligence & Data Science Engineer</span> passionate about bridging complex deep learning architectures with scalable software engineering.
          </p>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light text-center md:text-left">
            Currently pursuing my Bachelor of Technology at Madhav Institute of Technology and Science, Gwalior. I specialize in developing high-performance computer vision pipelines, natural language processing applications, and robust end-to-end data systems. From privacy-first human behavior analysis models to hybrid recommendation engines, my work focuses on crafting impactful, efficient, and intelligent solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
