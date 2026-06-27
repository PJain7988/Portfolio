import React from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/html5.png',
    label: 'HTML',
    desc: 'Structure & Markup'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface Styling'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Web Interactivity'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Tailwind CSS',
    desc: 'Utility-first CSS'
  },
  {
    imgSrc: '/images/bootstrap.png',
    label: 'Bootstrap',
    desc: 'Responsive UI Framework'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'Node.js',
    desc: 'Backend Runtime'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'Express.js',
    desc: 'Web Server Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'NoSQL Database'
  },
  {
    imgSrc: '/images/sql.png',
    label: 'SQL',
    desc: 'Relational Databases'
  },
  {
    imgSrc: '/images/cpp.png',
    label: 'C++',
    desc: 'Core Programming Language'
  },
  {
    imgSrc: '/images/dsa.png',
    label: 'DSA',
    desc: 'Data Structures & Algorithms'
  },
  {
    imgSrc: '/images/python.png',
    label: 'Python',
    desc: 'Basic Programming'
  },
  {
    imgSrc: '/images/java.png',
    label: 'Java',
    desc: 'Basic Programming'
  },
  {
    imgSrc: '/images/git.png',
    label: 'Git & GitHub',
    desc: 'Version Control'
  }
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center">
          Technologies & Tools I Work With
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] mx-auto text-center">
          These are the core technologies, frameworks, and tools I use to develop clean, efficient, and scalable web applications.
          I continuously explore and improve my tech stack to stay updated with industry standards and best practices.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
