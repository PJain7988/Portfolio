import React from 'react'
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: '/images/kimi-chat.png',
    title: 'KimiChat - A Chat App',
    tags: ['React', 'NodeJS', 'Socket.io', 'TailwindCSS'],
    projectLink: 'https://kimi-chat-app.vercel.app/',
    githubLink: 'https://github.com/PJain7988/KimiChat_App'
  },
  {
    imgSrc: '/images/career-karma.png',
    title: 'CareerKarma - A Job Portal',
    tags: ['MERN Stack', 'Redux', 'TailwindCSS', 'REST API'],
    projectLink: 'https://career-karma-job-portal.vercel.app/',
    githubLink: 'https://github.com/PJain7988/CareerKarma_Job_Portal'
  },
  {
    imgSrc: '/images/ecommerce.png',
    title: 'Lumina - E-Commerce Solution',
    tags: ['MERN Stack', 'Redux', 'OAuth', 'TailwindCSS'],
    projectLink: 'https://lumina-ecommerce-mauve.vercel.app/',
    githubLink: 'https://github.com/PJain7988/Lumina_Ecommerce'
  },
  {
    imgSrc: '/images/scholar-space.png',
    title: 'ScholarSpace - Notes App',
    tags: ['React', 'Local Storage', 'TailwindCSS', 'Vite'],
    projectLink: 'https://scholar-space-nine.vercel.app/',
    githubLink: 'https://github.com/PJain7988/ScholarSpace'
  },
  {
    imgSrc: '/images/omnisync-ai.png',
    title: 'OmniSync AI | Analytics Platform',
    tags: ['MERN Stack', 'NLP', 'ML', 'Computer Vision'],
    projectLink: 'https://omni-sync-ai.vercel.app/',
    githubLink: 'https://github.com/PJain7988/OmniSync-AI'
  },
  {
    imgSrc: '/images/fruitables.png',
    title: 'Fruitables - Organic E-Commerce',
    tags: ['React', 'TailwindCSS', 'Vite', 'E-Commerce'],
    projectLink: 'https://fruitables-five.vercel.app/',
    githubLink: 'https://github.com/PJain7988/Fruitables'
  },
  {
    imgSrc: '/images/pixstock.png',
    title: 'PixStock - Free Stock Photo App',
    tags: ['React', 'Pexels API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/',
    githubLink: ''
  }
];

const Project = () => {
  return (
    <section
      id="project"
      className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up text-center">
          My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink, githubLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              githubLink={githubLink}
              classes="reveal-up"
            />
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Project
