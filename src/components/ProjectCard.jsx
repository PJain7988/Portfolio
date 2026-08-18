import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const ProjectCard = ({
    imgSrc, title, tags, projectLink, githubLink, classes = '' }) => {
        return (
            <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={"group relative p-5 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden " + classes}
            >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                    <a href={projectLink || githubLink || '#'} target='_blank' rel="noopener noreferrer" className="block overflow-hidden rounded-2xl mb-5 aspect-video relative group">
                        <figure className="img-box w-full h-full rounded-2xl overflow-hidden">
                            <img 
                                src={imgSrc} 
                                alt={title} 
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                                loading='lazy' 
                            />
                        </figure>
                        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                                <Sparkles size={14} />
                                View Project
                            </span>
                        </div>
                    </a>

                    <div className="mb-4">
                        <a href={projectLink || githubLink || '#'} target='_blank' rel="noopener noreferrer" className="group-hover:text-blue-400 transition-colors">
                            <h3 className="text-xl font-extrabold text-white line-clamp-1 mb-2">
                                {title}
                            </h3>
                        </a>
                        
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.map((label, key) => (
                               <span key={key} className="text-xs text-zinc-300 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-lg font-medium">
                                {label}
                               </span> 
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 mt-auto relative z-10">
                    <div className="flex items-center gap-2">
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl grid place-items-center bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500 transition-all shadow-md"
                                title="View Source Code"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {projectLink && (
                            <a 
                                href={projectLink} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-500/20"
                                title="Live Demo"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>

                    <span className="text-xs text-zinc-400 font-mono">
                        {projectLink ? "Live App" : "Code Repo"}
                    </span>
                </div>
            </motion.div>
        )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    githubLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard;
