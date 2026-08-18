import React, { useState } from "react";
import Skill from "../components/Skill";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { Cpu, Terminal, Globe, Brain, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="text-blue-400" size={20} />,
    items: [
      { imgSrc: '/images/cpp.png', label: 'C++', desc: 'Primary Competitive Language' },
      { imgSrc: '/images/java.png', label: 'Java', desc: 'Object-Oriented Programming' },
      { imgSrc: '/images/python.png', label: 'Python', desc: 'AI/ML & Automation' },
      { imgSrc: '/images/javascript.svg', label: 'JavaScript (ES6+)', desc: 'Web & Async Logic' },
      { imgSrc: '/images/sql.png', label: 'SQL', desc: 'Relational Database Queries' }
    ]
  },
  {
    title: "Web Engineering & Frameworks",
    icon: <Globe className="text-cyan-400" size={20} />,
    items: [
      { imgSrc: '/images/react.svg', label: 'React.js', desc: 'Frontend UI Components' },
      { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Backend Runtime' },
      { imgSrc: '/images/expressjs.svg', label: 'Express.js', desc: 'RESTful Server APIs' },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL Cloud Database' },
      { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Modern Styling' },
      { imgSrc: '/images/html5.png', label: 'HTML5', desc: 'Semantic Structure' },
      { imgSrc: '/images/css3.svg', label: 'CSS3', desc: 'Responsive Design' },
      { imgSrc: '/images/bootstrap.png', label: 'Bootstrap', desc: 'UI Framework' }
    ]
  },
  {
    title: "AI, ML & Data Science",
    icon: <Brain className="text-emerald-400" size={20} />,
    items: [
      { imgSrc: '/images/ai-icon.svg', label: 'Machine Learning', desc: 'Predictive Modeling' },
      { imgSrc: '/images/ai-icon.svg', label: 'NLP', desc: 'Text Analysis' },
      { imgSrc: '/images/ai-icon.svg', label: 'Computer Vision', desc: 'Image Processing' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', label: 'NumPy', desc: 'Numerical Computing' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', label: 'Pandas', desc: 'Data Wrangling' },
      { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', label: 'Scikit-learn', desc: 'ML Algorithms' }
    ]
  },
  {
    title: "Core Computer Science",
    icon: <Database className="text-amber-400" size={20} />,
    items: [
      { imgSrc: '/images/dsa.png', label: 'Data Structures & Algorithms', desc: '1000+ Problems Solved' },
      { imgSrc: '/images/cs-icon.svg', label: 'OOPs', desc: 'Design Patterns' },
      { imgSrc: '/images/cs-icon.svg', label: 'Operating Systems', desc: 'Process & Memory' },
      { imgSrc: '/images/cs-icon.svg', label: 'DBMS', desc: 'Relational Database Schema' },
      { imgSrc: '/images/cs-icon.svg', label: 'Computer Networks', desc: 'Protocols & Architecture' }
    ]
  },
  {
    title: "Developer Tools & Environment",
    icon: <Wrench className="text-purple-400" size={20} />,
    items: [
      { imgSrc: '/images/git.png', label: 'Git & GitHub', desc: 'Version Control' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', label: 'VS Code', desc: 'Primary IDE' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', label: 'Postman', desc: 'API Testing' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', label: 'Oracle SQL', desc: 'Database Enterprise' }
    ]
  }
];

const SkillsPage = () => {
  return (
    <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Cpu size={16} />
            <span>Technical Expertise Matrix</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Tech Stack</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Languages, frameworks, database systems, and core computer science domains I work with daily.
          </p>
        </motion.div>

        {/* Skill Category Sections */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((skill, key) => (
                  <SkillCard
                    key={key}
                    imgSrc={skill.imgSrc}
                    label={skill.label}
                    desc={skill.desc}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
