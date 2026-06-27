import React from 'react';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    skills: ["MERN Stack", "Tailwind CSS", "React.js", "Express.js", "Node.js"]
  },
  {
    category: "AI & Data Science",
    skills: ["Machine Learning", "NLP", "Computer Vision", "Data Analysis", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    category: "Core Computer Science",
    skills: ["DSA", "OOPs", "Operating Systems", "DBMS", "Computer Networks"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Oracle SQL Developer"]
  }
];

const Skill = () => {
  return (
    <section id="skills" className="section py-20 bg-zinc-950">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center text-white">
          Technical Expertise
        </h2>
        <p className="text-zinc-400 mt-3 mb-12 max-w-[60ch] mx-auto text-center reveal-up">
          A comprehensive overview of my technical skills, ranging from core programming and web development to artificial intelligence and foundational computer science concepts.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map(({ category, skills }, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/80 transition-colors reveal-up shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 rounded-full text-sm font-medium hover:bg-blue-500/10 hover:text-blue-400 transition-colors hover:border-blue-500/30">
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
};

export default Skill;
