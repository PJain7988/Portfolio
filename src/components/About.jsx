import React from 'react';

const aboutItems = [
  { label: 'LeetCode Problems', number: '1000+' },
  { label: 'Real-world Projects', number: '10+' },
  { label: 'Internships', number: '2+' }
];

const About = () => {
  return (
    <section id="about" className="section py-20 bg-[#111]">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 p-8 md:p-14 rounded-[2rem] reveal-up shadow-2xl relative overflow-hidden">
          
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
              </h2>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed font-medium">
                Hello! I'm <strong className="text-white">Priya Jain</strong>, a passionate Software Engineer and Computer Science student at Geeta University (Class of 2027), specializing in Full-Stack Development and Artificial Intelligence.
              </p>
              <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
                With a robust foundation in Data Structures and Algorithms, I thrive on solving complex computational challenges and engineering highly optimized solutions. My expertise lies in architecting scalable web applications using the MERN stack and integrating intelligent systems. I am driven by a continuous desire to innovate, learn, and build impactful software that bridges the gap between complex algorithms and seamless user experiences.
              </p>
              <div className="inline-block p-1.5 rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800/50 shadow-lg">
                 <img src="/images/logo.svg" alt="logo" width={40} height={40} className="w-[40px] h-[40px]" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key} className={`${key === 0 ? 'col-span-2' : ''} bg-zinc-950/50 border border-zinc-800 p-6 md:p-8 rounded-2xl flex flex-col justify-center items-center text-center hover:border-blue-500/30 transition-colors group`}>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{number}</h3>
                  <p className="text-sm md:text-base text-zinc-400 font-medium">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
