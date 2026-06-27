import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  // Programming Languages
  { imgSrc: '/images/cpp.png', label: 'C++', desc: 'Programming Language' },
  { imgSrc: '/images/java.png', label: 'Java', desc: 'Programming Language' },
  { imgSrc: '/images/python.png', label: 'Python', desc: 'Programming Language' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Programming Language' },
  { imgSrc: '/images/sql.png', label: 'SQL', desc: 'Programming Language' },

  // Web Development
  { imgSrc: '/images/html5.png', label: 'HTML', desc: 'Web Development' },
  { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'Web Development' },
  { imgSrc: '/images/react.svg', label: 'React.js', desc: 'Web Development' },
  { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Web Development' },
  { imgSrc: '/images/bootstrap.png', label: 'Bootstrap', desc: 'Web Development' },
  { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Web Development' },
  { imgSrc: '/images/expressjs.svg', label: 'Express.js', desc: 'Web Development' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Web Development' },

  // AI & Data Science
  { imgSrc: '/images/ai-icon.svg', label: 'Machine Learning', desc: 'AI' },
  { imgSrc: '/images/ai-icon.svg', label: 'NLP', desc: 'AI' },
  { imgSrc: '/images/ai-icon.svg', label: 'Computer Vision', desc: 'AI' },
  { imgSrc: '/images/ai-icon.svg', label: 'Data Analysis', desc: 'AI' },
  
  // Libraries & Frameworks
  { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', label: 'NumPy', desc: 'Libraries & Frameworks' },
  { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', label: 'Pandas', desc: 'Libraries & Frameworks' },
  { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', label: 'Scikit-learn', desc: 'Libraries & Frameworks' },

  // Core Computer Science
  { imgSrc: '/images/dsa.png', label: 'DSA', desc: 'Core Computer Science' },
  { imgSrc: '/images/cs-icon.svg', label: 'OOPs', desc: 'Core Computer Science' },
  { imgSrc: '/images/cs-icon.svg', label: 'Operating Systems', desc: 'Core Computer Science' },
  { imgSrc: '/images/cs-icon.svg', label: 'DBMS', desc: 'Core Computer Science' },
  { imgSrc: '/images/cs-icon.svg', label: 'Computer Networks', desc: 'Core Computer Science' },

  // Developer Tools
  { imgSrc: '/images/git.png', label: 'Git & GitHub', desc: 'Developer Tools' },
  { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', label: 'VS Code', desc: 'Developer Tools' },
  { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', label: 'Postman', desc: 'Developer Tools' },
  { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', label: 'Oracle SQL', desc: 'Developer Tools' }
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center text-4xl md:text-5xl font-extrabold text-white">
          Technologies & Tools
        </h2>
        <p className="text-zinc-400 mt-4 mb-12 max-w-[60ch] mx-auto text-center text-lg leading-relaxed reveal-up">
          The core technologies, frameworks, and tools I use to architect clean, efficient, and scalable applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
