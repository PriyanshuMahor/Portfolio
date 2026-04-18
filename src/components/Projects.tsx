export default function Projects() {
  const projects = [
    { 
      title: "Privacy-First AI System for Human Behavior Analysis", 
      tag: "YOLOv8, MediaPipe, OpenCV, Python, FastAPI, Docker",
      description: "Engineered a privacy-first, real-time AI pipeline leveraging YOLOv8n and MediaPipe to safely monitor and classify behaviors for 50+ subjects. Achieved a rapid 67ms CPU latency and 95.4% F1 score while strictly enforcing GDPR/CCPA compliance using anonymous tracking metrics. The application is served via a Docker-containerized FastAPI and Streamlit dashboard with predictive trajectory tracking.",
      githubUrl: "https://github.com/PriyanshuMahor/Human-behavior-analysis-and-prediction-system"
    },
    { 
      title: "Neural Style Transfer for Modern Art", 
      tag: "Python, PyTorch, VGG-19, OpenCV, Streamlit",
      description: "Developed a sophisticated PyTorch-powered application utilizing a VGG-19 architecture to seamlessly transfer complex modern art styles onto cityscapes. The model optimizes high-fidelity textures using L-BFGS and enhances brushstroke realism through advanced OpenCV bilateral filtering pipelines. Users interact with the model via a dynamic Streamlit interface to configure artistic weights in real-time.",
      githubUrl: "https://github.com/PriyanshuMahor?tab=repositories"
    },
    { 
      title: "Movie Similarity Finder", 
      tag: "Python, Scikit-Learn, Pandas, NumPy, Streamlit, NLP",
      description: "Designed a highly precise, hybrid movie recommendation system capable of parsing over 10,000 films using TF-IDF vectorization and cosine similarity matrixes. The system features a custom re-ranking algorithm that blends normalized popularity weights and plot similarities to deliver remarkably accurate, real-time user selections through an interactive Streamlit front-end.",
      githubUrl: "https://github.com/PriyanshuMahor/Movie-Similarity-Finder"
    },
    { 
      title: "Hospital Ward Allotment Agent", 
      tag: "Python, LangGraph, LangChain, Gemini API, JSON",
      description: "Constructed an intelligent AI agent utilizing LangChain, LangGraph, and Google's Gemini 1.5 Flash to rapidly classify patient symptoms into priority tiers. It leverages robust JSON storage systems and algorithmic routing capabilities to execute real-time, automated hospital ward allocations and optimal doctor assignments.",
      githubUrl: "https://github.com/PriyanshuMahor?tab=repositories"
    }
  ];

  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tighter">
          Selected <span className="text-[#c084fc] italic pr-2">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden hover:border-[#c084fc]/50 transition-all duration-700 ease-out hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-[#c084fc]/10 flex flex-col justify-between"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col transform transition-transform duration-500 h-full">
                <div className="mb-auto">
                  <p className="text-[#c084fc] uppercase tracking-widest text-xs lg:text-sm mb-4 font-semibold opacity-90 transition-opacity">
                    {project.tag}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 font-light text-base leading-relaxed mt-6 mb-8">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-5 border-t border-white/10">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold tracking-wide text-white hover:text-[#c084fc] transition-colors gap-2"
                  >
                    View GitHub <span className="transform group-hover:translate-x-1.5 transition-transform">➔</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
