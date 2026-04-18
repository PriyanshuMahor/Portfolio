export default function Experience() {
  const experiences = [
    {
      role: "AI in Marketing Summer Internship",
      company: "MITS Gwalior",
      location: "Gwalior, MP",
      date: "2024",
      points: [
        "Gained hands-on exposure to AI-driven marketing strategies, focusing on customer insights and campaign personalization.",
        "Utilized predictive analytics and ad optimization techniques to enhance marketing efficiency."
      ]
    },
    {
      role: "Software Engineering Job Simulation",
      company: "Virtual Experience",
      location: "Remote",
      date: "2024",
      points: [
        "Completed comprehensive governance analysis to identify vulnerabilities in security practices.",
        "Identified weak password hashing practices and proposed robust password protection measures using modern hashing recommendations."
      ]
    }
  ];

  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tighter text-center">
          Professional <span className="text-[#c084fc] italic pr-2">Experience</span>
        </h2>
        
        <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-16">
          { experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-[#070010] border-4 border-[#c084fc] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(192,132,252,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline mb-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-[#c084fc] transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-gray-400 mt-2 md:mt-0 md:ml-4 font-mono text-sm tracking-widest uppercase">
                  {exp.date}
                </span>
              </div>
              
              <div className="text-[#c084fc] uppercase tracking-widest text-sm mb-6 font-semibold">
                {exp.company} &bull; {exp.location}
              </div>
              
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-400 font-light text-lg flex items-start">
                    <span className="text-[#c084fc] mr-3 mt-1.5 opacity-70">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
