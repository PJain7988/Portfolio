import React from 'react';

const aboutItems = [
  {
    label: 'LeetCode Problems Solved',
    number: 500
  },
  {
    label: 'Projects Completed',
    number: 10
  },
  {
    label: 'Internships Completed',
    number: 2
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:mx-w-[60ch]">
            Hi! I'm Priya Jain, a Computer Science Engineering student pursuing my B.Tech at Geeta University, with graduation in 2027. I’m passionate about Data Structures, Algorithms, and building impactful software solutions. I've solved over 500 problems on LeetCode and developed 10+ real-world projects focused on performance and design. With internship experience and a strong foundation in C++, JavaScript, and modern web development, I'm continuously growing into a skilled and versatile software developer.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
            <img src="/images/logo.svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
