import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { Cpu, Terminal, Globe, Brain, Database, Wrench, ShieldCheck, Code2, Zap, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="text-blue-400" size={20} />,
    items: [
      { imgSrc: '/images/cpp.png', label: 'C++', desc: 'Primary Competitive Language (5★ HackerRank)' },
      { imgSrc: '/images/java.png', label: 'Java', desc: 'Object-Oriented Programming' },
      { imgSrc: '/images/python.png', label: 'Python', desc: 'AI/ML & Data Analysis' },
      { imgSrc: '/images/javascript.svg', label: 'JavaScript (ES6+)', desc: 'Async & Frontend Logic' },
      { imgSrc: '/images/sql.png', label: 'SQL', desc: 'Relational Database Queries' }
    ]
  },
  {
    title: "Web Engineering & Frameworks",
    icon: <Globe className="text-cyan-400" size={20} />,
    items: [
      { imgSrc: '/images/react.svg', label: 'React.js', desc: 'Frontend Component Architecture' },
      { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Backend Event-Driven Runtime' },
      { imgSrc: '/images/expressjs.svg', label: 'Express.js', desc: 'RESTful Server Middleware' },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL Document Store' },
      { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Modern Utility Styling' },
      { imgSrc: '/images/html5.png', label: 'HTML5', desc: 'Semantic Structure & Accessibility' },
      { imgSrc: '/images/css3.svg', label: 'CSS3', desc: 'Flexbox, Grid & Animations' },
      { imgSrc: '/images/bootstrap.png', label: 'Bootstrap', desc: 'Responsive Grid UI' }
    ]
  },
  {
    title: "AI, ML & Data Science",
    icon: <Brain className="text-emerald-400" size={20} />,
    items: [
      { imgSrc: '/images/ai-icon.svg', label: 'Machine Learning', desc: 'Classification & Regression Models' },
      { imgSrc: '/images/ai-icon.svg', label: 'NLP', desc: 'Text Processing & Intent Parsing' },
      { imgSrc: '/images/ai-icon.svg', label: 'Computer Vision', desc: 'Image Feature Extraction' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', label: 'NumPy', desc: 'Matrix Operations' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', label: 'Pandas', desc: 'Data Wrangling' },
      { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', label: 'Scikit-learn', desc: 'Predictive Algorithms' }
    ]
  },
  {
    title: "Core Computer Science",
    icon: <Database className="text-amber-400" size={20} />,
    items: [
      { imgSrc: '/images/dsa.png', label: 'Data Structures & Algorithms', desc: '1000+ LeetCode Problems Solved' },
      { imgSrc: '/images/cs-icon.svg', label: 'OOPs', desc: 'Inheritance, Polymorphism & Abstraction' },
      { imgSrc: '/images/cs-icon.svg', label: 'Operating Systems', desc: 'Process Control & Memory Sync' },
      { imgSrc: '/images/cs-icon.svg', label: 'DBMS', desc: 'Relational Schemas & Normalization' },
      { imgSrc: '/images/cs-icon.svg', label: 'Computer Networks', desc: 'TCP/IP, HTTP/HTTPS Protocols' }
    ]
  },
  {
    title: "Developer Tools & Environment",
    icon: <Wrench className="text-purple-400" size={20} />,
    items: [
      { imgSrc: '/images/git.png', label: 'Git & GitHub', desc: 'Branching, PRs & Version Control' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', label: 'VS Code', desc: 'Primary Development IDE' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', label: 'Postman', desc: 'API Endpoint Testing' },
      { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', label: 'Oracle SQL', desc: 'Enterprise Database Querying' }
    ]
  }
];

const principles = [
  {
    icon: <Code2 className="text-blue-400" size={24} />,
    title: "Clean Code Architecture",
    description: "Writing maintainable, modular, and well-documented code adhering to industry design patterns."
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "Algorithmic Efficiency",
    description: "Optimizing time and space complexity ($O(N \\log N)$, $O(N)$) for maximum computational performance."
  },
  {
    icon: <Layers className="text-cyan-400" size={24} />,
    title: "Scalable Full-Stack Design",
    description: "Building robust MERN applications with secure REST APIs, JWT authentication, and responsive UIs."
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    title: "Continuous Learning",
    description: "Consistently competing in contests on Codeforces, CodeChef, and LeetCode to sharpen problem solving."
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
            <span>Technical Stack & Core Domain Competencies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Tech Matrix</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Languages, frameworks, database systems, AI tools, and core computer science concepts I utilize to build software.
          </p>
        </motion.div>

        {/* Engineering Philosophy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl hover:border-blue-500/40 transition-colors"
            >
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

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
