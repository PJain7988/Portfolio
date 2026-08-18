import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillCard = ({
    imgSrc, label, desc, classes = ''
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={'flex items-center gap-4 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-colors duration-300 group ' + classes}
    >
        <figure className="bg-zinc-950 rounded-xl overflow-hidden w-12 h-12 p-2 flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300 border border-zinc-800 group-hover:border-blue-500/50 shrink-0">
            <img 
              src={imgSrc} 
              alt={label} 
              className="group-hover:scale-110 transition-transform duration-300 object-contain w-full h-full" 
              loading="lazy"
            />
        </figure>
        <div className="min-w-0">
            <h3 className="text-zinc-100 font-bold tracking-wide text-sm md:text-base group-hover:text-blue-400 transition-colors duration-300 truncate">{label}</h3>
            <p className="text-zinc-400 text-xs font-medium mt-0.5 truncate">
                {desc}
            </p>
        </div>
    </motion.div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard;
