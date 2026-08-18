import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, Github, Filter, Sparkles } from "lucide-react";

const projects = [
  {
    category: "fullstack",
    imgSrc: '/images/kimi-chat.png',
    title: 'KimiChat - Real-Time Chat App',
    tags: ['React', 'NodeJS', 'Socket.io', 'TailwindCSS'],
    projectLink: 'https://kimi-chat-app.vercel.app/',
    githubLink: 'https://github.com/PJain7988/KimiChat_App',
    description: 'Instant messaging app with real-time room communication and online presence.'
  },
  {
    category: "fullstack",
    imgSrc: '/images/career-karma.png',
    title: 'CareerKarma - Modern Job Portal',
    tags: ['MERN Stack', 'Redux', 'TailwindCSS', 'REST API'],
    projectLink: 'https://career-karma-job-portal.vercel.app/',
    githubLink: 'https://github.com/PJain7988/CareerKarma_Job_Portal',
    description: 'Full-stack platform connecting recruiters and job seekers with application tracking.'
  },
  {
    category: "ecommerce",
    imgSrc: '/images/ecommerce.png',
    title: 'Lumina - E-Commerce Solution',
    tags: ['MERN Stack', 'Redux', 'OAuth', 'TailwindCSS'],
    projectLink: 'https://lumina-ecommerce-mauve.vercel.app/',
    githubLink: 'https://github.com/PJain7988/Lumina_Ecommerce',
    description: 'Feature-rich store with payment gateway integration, admin dashboard, and cart.'
  },
  {
    category: "ai",
    imgSrc: '/images/omnisync-ai.png',
    title: 'OmniSync AI | Analytics Platform',
    tags: ['MERN Stack', 'NLP', 'ML', 'Computer Vision'],
    projectLink: 'https://omni-sync-ai.vercel.app/',
    githubLink: 'https://github.com/PJain7988/OmniSync-AI',
    description: 'AI-driven business analytics web platform utilizing predictive computer vision models.'
  },
  {
    category: "ai",
    imgSrc: '/images/cognisphere.png',
    title: 'CogniSphere - AI Tutor Dashboard',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    projectLink: 'https://cognisphere-ai-personal-tutor-dashboard.vercel.app',
    githubLink: 'https://github.com/PJain7988/CogniSphere_-AI_Personal_Tutor_Dashboard',
    description: 'Intelligent personalized AI tutoring interface with study metrics and learning analytics.'
  },
  {
    category: "fullstack",
    imgSrc: '/images/aegiscare.png',
    title: 'AegisCare - Healthcare Web App',
    tags: ['React', 'Node.js', 'JWT Auth', 'RBAC'],
    projectLink: 'https://aegis-care-health-care-api.vercel.app',
    githubLink: 'https://github.com/PJain7988/AegisCare_HealthCare_API',
    description: 'Secure digital healthcare platform supporting patient records and role-based access.'
  },
  {
    category: "react",
    imgSrc: '/images/scholar-space.png',
    title: 'ScholarSpace - Notes App',
    tags: ['React', 'Local Storage', 'TailwindCSS', 'Vite'],
    projectLink: 'https://scholar-space-nine.vercel.app/',
    githubLink: 'https://github.com/PJain7988/ScholarSpace',
    description: 'Clean student note-taking workspace with instant search and markdown rendering.'
  },
  {
    category: "ecommerce",
    imgSrc: '/images/fruitables.png',
    title: 'Fruitables - Organic E-Commerce',
    tags: ['React', 'TailwindCSS', 'Vite', 'E-Commerce'],
    projectLink: 'https://fruitables-five.vercel.app/',
    githubLink: 'https://github.com/PJain7988/Fruitables',
    description: 'Organic grocery store with product filtering, responsive cart, and checkout UI.'
  },
  {
    category: "react",
    imgSrc: '/images/pixstock.png',
    title: 'PixStock - Free Stock Photo App',
    tags: ['React', 'Pexels API', 'SPA', 'TailwindCSS'],
    projectLink: 'https://pixstock-official.vercel.app/',
    githubLink: 'https://github.com/PJain7988',
    description: 'High-performance image search web application fetching high-res photography via API.'
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Code size={16} />
            <span>Featured Software Applications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Showcase</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Full-stack web applications, AI/ML tools, and interactive digital experiences engineered with clean code and modern frameworks.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-zinc-900/90 border border-zinc-800 rounded-2xl backdrop-blur-md">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full-Stack (MERN)" },
              { id: "ai", label: "AI & ML Apps" },
              { id: "ecommerce", label: "E-Commerce" },
              { id: "react", label: "Frontend & Web" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  imgSrc={project.imgSrc}
                  title={project.title}
                  tags={project.tags}
                  projectLink={project.projectLink}
                  githubLink={project.githubLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectsPage;
