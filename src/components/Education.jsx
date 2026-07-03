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
    degree: 'Intermediate (12th Grade)',
    duration: '2022 – 2023',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed Intermediate education with a focus on Physics, Chemistry, and Mathematics (PCM).',
    ],
  },
  {
    degree: 'Matriculation (10th Grade)',
    duration: '2020 – 2021',
    institution: 'Guru Gobind Singh Sr. Sec. School, Safidon, Haryana (HBSE)',
    details: [
      'Completed matriculation education with a strong academic foundation.',
    ],
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#111] relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My academic background that laid the foundation for my software engineering career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="reveal-up group relative rounded-3xl p-[1px] bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-emerald-500/50 hover:to-cyan-500/50 transition-all duration-500"
            >
              {/* Inner Card */}
              <div className="relative h-full flex flex-col bg-zinc-950/90 backdrop-blur-xl p-8 rounded-[23px] overflow-hidden">
                
                {/* Top decorative glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors duration-500">
                    <span className="material-symbols-rounded text-3xl text-zinc-400 group-hover:text-emerald-400 transition-colors duration-500">
                      school
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-semibold rounded-full border border-zinc-800">
                    <span className="material-symbols-rounded text-[14px] text-emerald-500">calendar_month</span>
                    {edu.duration}
                  </span>
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all duration-500">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-400 font-medium flex items-center gap-2 mt-3">
                    <span className="material-symbols-rounded text-lg text-zinc-500">location_on</span>
                    {edu.institution}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 mb-6"></div>

                <ul className="space-y-3">
                  {edu.details.map((point, idx) => (
                    <li key={idx} className="flex items-start text-zinc-300 text-sm leading-relaxed">
                      <span className="material-symbols-rounded text-[16px] text-emerald-500 mr-2 mt-[2px]">
                        check_circle
                      </span>
                      {point}
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
