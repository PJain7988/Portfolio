import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ content, imgSrc, name, company, rating = 5 }) => {
  const maxStars = 5;

  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] lg:min-w-[420px] flex flex-col shadow-md hover:shadow-lg transition-shadow">
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(maxStars)].map((_, i) => (
          <span
            key={i}
            className={`material-symbols-rounded text-[20px] ${
              i < rating ? 'text-yellow-400' : 'text-zinc-600'
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
      <p className="text-zinc-400 mb-8 text-sm">{content}</p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-auto">
        <figure className="w-16 h-16 rounded-md overflow-hidden border border-zinc-700">
          <img
            src={imgSrc}
            alt={name}
            width={64}
            height={64}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <div>
          <p className="text-white font-medium">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
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
