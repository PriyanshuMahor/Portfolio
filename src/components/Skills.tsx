export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "SQL", "R", "HTML/CSS"]
    },
    {
      title: "AI / ML Frameworks",
      skills: ["TensorFlow / Keras", "scikit-learn", "YOLOv8", "MediaPipe", "NLP (spaCy / NLTK)"]
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV", "Pose Estimation", "Object Detection & Tracking", "Kalman Filters"]
    },
    {
      title: "Data & Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Streamlit", "Git", "Jupyter Notebook"]
    },
    {
      title: "Concepts",
      skills: ["Deep Learning", "Transfer Learning", "Real-time Inference", "Data Analysis", "Predictive Modelling"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Github", "Vercel", "MySQL", "Docker", "FastAPI"]
    }
  ];

  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter text-center">
          Technical <span className="text-[#c084fc] italic pr-2">Arsenal</span>
        </h2>
        <div className="w-16 h-1 bg-white/20 mx-auto mb-16 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="backdrop-blur-xl bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] hover:border-[#c084fc]/30 transition-colors duration-500 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-light hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
