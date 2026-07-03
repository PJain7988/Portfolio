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
    <section id="education" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle blue background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Excellence</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="reveal-up group relative rounded-3xl p-[1px] bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-500 transition-all duration-700"
            >
              <div className="relative flex flex-col md:flex-row bg-zinc-950/80 backdrop-blur-xl rounded-[23px] overflow-hidden">
                
                {/* Left Side: Duration (Mobile: Top, Desktop: Left) */}
                <div className="md:w-1/3 p-6 md:p-8 bg-zinc-900/40 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center items-start md:items-end text-left md:text-right relative overflow-hidden group-hover:bg-blue-900/10 transition-colors duration-700">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-rounded text-blue-500">school</span>
                    <span className="text-blue-400 font-bold text-lg">{edu.duration}</span>
                  </div>
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{index === 0 ? 'Current' : 'Completed'}</p>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3 p-6 md:p-8 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-50 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-blue-400 mb-6">
                    <span className="material-symbols-rounded text-lg">domain</span>
                    <span className="text-lg font-medium">{edu.institution}</span>
                  </div>

                  <ul className="space-y-3">
                    {edu.details.map((point, idx) => (
                      <li key={idx} className="flex items-start text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                        <span className="material-symbols-rounded text-[18px] text-cyan-500 mr-3 shrink-0">
                          arrow_right
                        </span>
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
