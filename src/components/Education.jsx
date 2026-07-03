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
              {/* Timeline Icon / Dot */}
              <div className="absolute -left-[22px] top-1 md:top-2 h-11 w-11 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-500 z-10">
                <span className="material-symbols-rounded text-emerald-500 text-xl group-hover:scale-110 transition-transform duration-300">school</span>
              </div>

              {/* Content Card */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900/50 to-zinc-900/50 group-hover:from-emerald-500/50 group-hover:via-zinc-800 group-hover:to-zinc-900/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full w-full bg-[#0d0d0d] p-6 md:p-8 rounded-[15px] shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-base md:text-lg text-zinc-400 font-medium flex items-center gap-2">
                        <span className="material-symbols-rounded text-lg text-zinc-500">apartment</span>
                        {edu.institution}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-zinc-900/80 text-emerald-400 text-sm font-semibold rounded-full border border-zinc-700/50 w-fit shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                      <span className="material-symbols-rounded text-sm">calendar_month</span>
                      {edu.duration}
                    </span>
                  </div>

                  <ul className="list-none space-y-3 mt-6">
                    {edu.details.map((point, idx) => (
                      <li key={idx} className="text-zinc-300 flex items-start text-[15px] leading-relaxed">
                        <span className="mr-3 text-emerald-500 mt-[2px] font-bold">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
