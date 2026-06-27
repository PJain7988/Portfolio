import React from 'react';
import PropTypes from 'prop-types';
import { Quote } from 'lucide-react';

const ReviewCard = ({ content, imgSrc, name, company, rating = 5 }) => {
  const maxStars = 5;

  return (
    <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 rounded-[2rem] min-w-[320px] lg:min-w-[420px] flex flex-col shadow-xl hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group overflow-hidden">
      
      {/* Decorative Quote Icon Background */}
      <Quote className="absolute top-4 right-4 w-28 h-28 text-zinc-800/40 -rotate-12 group-hover:text-blue-500/10 transition-colors" />

      {/* Star Rating */}
      <div className="flex items-center gap-1.5 mb-6 z-10 relative">
        {[...Array(maxStars)].map((_, i) => (
          <span
            key={i}
            className={`material-symbols-rounded text-[22px] ${
              i < rating ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : 'text-zinc-700'
            }`}
            style={{
              fontVariationSettings: `"FILL" ${i < rating ? 1 : 0}`,
            }}
          >
            star
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-zinc-300 mb-10 text-base leading-relaxed z-10 relative font-medium italic">"{content}"</p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto z-10 relative border-t border-zinc-800/50 pt-5">
        <figure className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-blue-400 transition-colors shadow-lg">
          <img
            src={imgSrc}
            alt={name}
            width={56}
            height={56}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <div>
          <p className="text-white font-bold text-lg tracking-wide">{name}</p>
          <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider mt-1">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default ReviewCard;
