import React from 'react';

const educationList = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    duration: '2023 – 2027',
    institution: 'Geeta University, Panipat',
    details: [
      'Focusing on Full-Stack Development, Data Structures & Algorithms, and Artificial Intelligence.',
      'Active participant in coding clubs and technical hackathons.',
    ],
  },
  {
    degree: 'Intermediate (11th and 12th Grade)',
    duration: '2021 – 2023',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed Intermediate education with a focus on Physics, Chemistry, and Mathematics (PCM).',
    ],
  },
  {
    degree: 'Matriculation (10th Grade)',
    duration: '2019 – 2021',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed matriculation education with a strong academic foundation.',
    ],
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white reveal-up">
          My <span className="text-emerald-400">Education</span>
        </h2>

        <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12">
          {educationList.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12 reveal-up group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 border-4 border-[#0a0a0a] group-hover:bg-emerald-400 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>

              {/* Content Card */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg hover:border-zinc-700 transition-colors backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                    <p className="text-lg text-zinc-300 font-medium">{edu.institution}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-zinc-950 text-emerald-400 text-sm font-semibold rounded-full border border-zinc-800 w-fit shrink-0 shadow-inner">
                    {edu.duration}
                  </span>
                </div>

                <ul className="list-none space-y-3 mt-6">
                  {edu.details.map((point, idx) => (
                    <li key={idx} className="text-zinc-400 flex items-start">
                      <span className="mr-3 text-emerald-500 mt-[2px] font-bold">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
