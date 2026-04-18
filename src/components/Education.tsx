export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      school: "Madhav Institute of Technology and Science",
      location: "Gwalior, MP",
      date: "2023 - Present",
      score: null
    },
    {
      degree: "Intermediate (Class XII)",
      school: "Govt. H.S. School Gorkhi",
      location: "Gwalior, MP",
      date: "2022",
      score: "82.7%"
    },
    {
      degree: "Matriculation (Class X)",
      school: "Govt. H.S. School Gorkhi",
      location: "Gwalior, MP",
      date: "2020",
      score: "88%"
    }
  ];

  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tighter">
          Academic <span className="text-[#c084fc] italic pr-2">Background</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <div 
              key={idx} 
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[2rem] overflow-hidden hover:border-[#c084fc]/50 transition-all duration-700 hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-[#c084fc]/10 flex flex-col justify-between min-h-[320px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#c084fc]/20 text-[#c084fc] text-xs font-mono tracking-widest uppercase">
                  {edu.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 font-light text-lg mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-500 font-light text-sm italic">
                  {edu.location}
                </p>
              </div>

              {edu.score && (
                <div className="relative z-10 mt-8 border-t border-white/10 pt-4 flex justify-between items-center text-gray-300">
                  <span className="uppercase text-xs tracking-widest text-gray-500">Score</span>
                  <span className="font-mono text-[#c084fc] font-bold">{edu.score}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
