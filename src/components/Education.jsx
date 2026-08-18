import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award, ArrowRight } from 'lucide-react';

const educationList = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    duration: '2023 – 2027',
    institution: 'Geeta University, Panipat',
    details: [
      'Specializing in Full-Stack Web Engineering, Data Structures & Algorithms, and Artificial Intelligence.',
      'Active participant in coding hackathons, competitive programming, and technical clubs.',
    ],
  },
  {
    degree: 'Intermediate (12th Grade)',
    duration: '2022 – 2023',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed Senior Secondary education focused on Physics, Chemistry, and Mathematics (PCM).',
    ],
  },
  {
    degree: 'Matriculation (10th Grade)',
    duration: '2020 – 2021',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed matriculation with academic distinction and strong foundational skills.',
    ],
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-3">
            <GraduationCap size={16} />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Excellence</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {educationList.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-[1px] bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-500"
            >
              <div className="relative flex flex-col md:flex-row bg-zinc-900/90 backdrop-blur-xl rounded-[23px] overflow-hidden">
                
                {/* Left Side: Duration */}
                <div className="md:w-1/3 p-6 md:p-8 bg-zinc-950/60 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center items-start md:items-end text-left md:text-right">
                  <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold text-lg">
                    <GraduationCap size={18} />
                    <span>{edu.duration}</span>
                  </div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">{index === 0 ? 'Current' : 'Completed'}</p>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3 p-6 md:p-8 relative">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-cyan-400 mb-4 text-sm font-semibold">
                    <School size={16} />
                    <span>{edu.institution}</span>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((point, idx) => (
                      <li key={idx} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                        <span className="text-blue-500 mr-2 font-bold">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
