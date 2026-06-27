import React from 'react';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { imgSrc: '/images/cpp.png', label: 'C++' },
      { imgSrc: '/images/java.png', label: 'Java' },
      { imgSrc: '/images/python.png', label: 'Python' },
      { imgSrc: '/images/javascript.svg', label: 'JavaScript' },
      { imgSrc: '/images/sql.png', label: 'SQL' }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { imgSrc: '/images/html5.png', label: 'HTML' },
      { imgSrc: '/images/css3.svg', label: 'CSS' },
      { imgSrc: '/images/react.svg', label: 'React' },
      { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS' },
      { imgSrc: '/images/bootstrap.png', label: 'Bootstrap' },
      { imgSrc: '/images/nodejs.svg', label: 'Node.js' },
      { imgSrc: '/images/expressjs.svg', label: 'Express.js' },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB' }
    ]
  },
  {
    category: "AI & Data Science",
    skills: [
      { imgSrc: '/images/ai-icon.svg', label: 'Machine Learning' },
      { imgSrc: '/images/ai-icon.svg', label: 'NLP' },
      { imgSrc: '/images/ai-icon.svg', label: 'Computer Vision' },
      { imgSrc: '/images/ai-icon.svg', label: 'Data Analysis' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', label: 'NumPy' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', label: 'Pandas' },
      { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', label: 'Scikit-learn' }
    ]
  },
  {
    category: "Core Computer Science",
    skills: [
      { imgSrc: '/images/dsa.png', label: 'DSA' },
      { imgSrc: '/images/cs-icon.svg', label: 'OOPs' },
      { imgSrc: '/images/cs-icon.svg', label: 'Operating Systems' },
      { imgSrc: '/images/cs-icon.svg', label: 'DBMS' },
      { imgSrc: '/images/cs-icon.svg', label: 'Computer Networks' }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { imgSrc: '/images/git.png', label: 'Git & GitHub' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', label: 'VS Code' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', label: 'Postman' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', label: 'Oracle SQL' }
    ]
  }
];

const Skill = () => {
  return (
    <section id="skills" className="section py-20 bg-zinc-950">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center text-white mb-4">
          Technical Expertise
        </h2>
        <p className="text-zinc-400 mb-16 max-w-[65ch] mx-auto text-center reveal-up">
          A comprehensive overview of my technical stack, blending core programming, modern web development, and artificial intelligence to build scalable, high-performance applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map(({ category, skills }, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors reveal-up shadow-xl hover:shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-zinc-800/80 border border-zinc-700/50 rounded-lg hover:bg-zinc-700/80 hover:border-zinc-600 transition-colors group cursor-default">
                    <img src={skill.imgSrc} alt={skill.label} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.label}</span>
                  </div>
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
