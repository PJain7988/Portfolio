import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const internships = [
  {
    role: 'AI/ML Developer',
    duration: 'June 2026 – July 2026',
    company: 'ThinkNEXT Technologies Pvt. Ltd., Mohali',
    details: [
      'Developed ML predictive models using Python, Pandas, NumPy, and Scikit-learn.',
      'Performed data preprocessing, feature engineering, and exploratory data analysis on real datasets.',
      'Implemented classification, regression, and clustering algorithms to solve analytics problems.',
    ],
  },
  {
    role: 'Full Stack Developer',
    duration: 'June 2025 – August 2025',
    company: 'Coding Blocks (Geeta University, Panipat)',
    details: [
      'Designed end-to-end full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Created responsive UIs and integrated RESTful APIs to ensure efficient data flow.',
      'Collaborated in Agile project sprints with Git version control.',
    ],
  },
  {
    role: 'Data Structures & Algorithms Mentor',
    duration: 'June 2024 – August 2024',
    company: 'Coding Blocks (Geeta University, Panipat)',
    details: [
      'Solved 1000+ DSA problems on LeetCode, mastering recursion, dynamic programming, backtracking, and greedy algorithms.',
      'Participated in peer learning and mentoring sessions for core computer science concepts.',
      'Improved problem-solving speed and accuracy through mock coding contests.',
    ],
  },
  {
    role: 'Frontend Developer',
    duration: 'May 2024 – June 2024',
    company: 'Octanet Pvt. Ltd. (Remote)',
    details: [
      'Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Completed real-world project modules in a remote collaboration workflow.',
      'Applied UI/UX best practices for cross-browser compatibility and accessible design.',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-3">
            <Briefcase size={16} />
            <span>Professional Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Internships & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-8 space-y-10">
          {internships.map((intern, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-zinc-950 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              
              {/* Content Card */}
              <div className="bg-zinc-900/90 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-lg hover:border-blue-500/40 transition-colors backdrop-blur-xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{intern.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                      <Building2 size={16} />
                      <span>{intern.company}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-zinc-950 text-zinc-300 text-xs font-semibold rounded-full border border-zinc-800 w-fit shrink-0">
                    <Calendar size={14} className="text-blue-400" />
                    {intern.duration}
                  </span>
                </div>
                
                <ul className="list-none space-y-2.5 mt-4">
                  {intern.details.map((point, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start leading-relaxed">
                      <span className="mr-2 text-blue-400 font-bold">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
