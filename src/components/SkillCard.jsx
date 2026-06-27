import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({
    imgSrc, label, desc, classes
}) => {
  return (
    <div className={'flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 hover:bg-zinc-800/80 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300 group shadow-lg hover:shadow-2xl ' + (classes || "")}>
        <figure className="bg-zinc-800/80 rounded-xl overflow-hidden w-14 h-14 p-2.5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 border border-zinc-700/50 group-hover:border-blue-500/50">
            <img src={imgSrc} width={32} height={32} alt={label} className="group-hover:scale-110 transition-transform duration-300 object-contain w-full h-full" />
        </figure>
        <div>
            <h3 className="text-zinc-100 font-bold tracking-wide text-base md:text-lg group-hover:text-blue-400 transition-colors duration-300">{label}</h3>
            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-0.5">
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard
