import React, { useState } from 'react';
import "./css/Filter.css";


const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'star-filled' : 'star-empty'}
          onClick={() => handleStarClick(index)}
        >
          &#9733; {/* Render a star character */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;