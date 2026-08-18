import React from 'react';
import { motion } from 'framer-motion';

const aboutItems = [
  { label: 'LeetCode Solved', number: '1000+' },
  { label: 'Real-world Projects', number: '10+' },
  { label: 'Coding Platforms', number: '5+' }
];

const About = () => {
  return (
    <section id="about" className="section py-20 bg-zinc-950">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >

          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">

            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
              </h2>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed font-medium">
                Hello! I'm <strong className="text-white">Priya Jain</strong>, a passionate Software Development Engineer (SDE) and Computer Science student at Geeta University, specializing in Full-Stack Web Engineering and Artificial Intelligence.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed text-base md:text-lg">
                With a robust foundation in Data Structures and Algorithms, I thrive on solving complex computational problems and building scalable software solutions. Rated across Codeforces (Priya_GU), CodeChef (priya_jain_01), and LeetCode (Student_GU), I am driven to architect high-performance web applications and intelligent systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key} className={`${key === 0 ? 'col-span-2' : ''} bg-zinc-950/80 border border-zinc-800 p-6 md:p-8 rounded-2xl flex flex-col justify-center items-center text-center hover:border-blue-500/40 transition-colors group`}>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{number}</h3>
                  <p className="text-sm text-zinc-400 font-medium">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
