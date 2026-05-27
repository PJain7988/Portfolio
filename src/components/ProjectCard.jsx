import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc, title, tags, projectLink, githubLink, classes}) => {
        return (
            <div className={"group relative p-4 rounded-2xl bg-zinc-805 hover:bg-zinc-700/30 active:bg-zinc-700/40 ring-1 ring-inset ring-zinc-50/5 transition-all duration-300 " + classes}>
                <a href={projectLink || githubLink || '#'} target='_blank' rel="noopener noreferrer" className="block overflow-hidden rounded-lg mb-4 aspect-square">
                    <figure className="img-box w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105">
                        <img src={imgSrc} alt={title} className="img-cover w-full h-full object-cover" loading='lazy' />
                    </figure>
                </a>
                <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                        <a href={projectLink || githubLink || '#'} target='_blank' rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                            <h3 className="title-1 mb-3 text-lg font-semibold line-clamp-1">
                                {title}
                            </h3>
                        </a>
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.map((label, key) => (
                               <span key={key} className="h-7 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2.5 rounded-lg border border-zinc-50/5">
                                {label}
                               </span> 
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shrink-0">
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg grid place-items-center bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600 hover:text-white transition-colors"
                                title="View Source Code"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                </svg>
                            </a>
                        )}
                        {projectLink && (
                            <a 
                                href={projectLink} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 hover:bg-sky-300 transition-colors"
                                title="Live Demo"
                            >
                                <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_outward
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
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

export default ProjectCard
