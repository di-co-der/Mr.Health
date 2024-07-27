// StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <img key={index} src="/path-to-star-full.png" alt="Full Star" className="w-4 h-4" />
        ))}
      {halfStar && <img src="/path-to-star-half.png" alt="Half Star" className="w-4 h-4" />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <img key={index} src="/path-to-star-empty.png" alt="Empty Star" className="w-4 h-4" />
        ))}
    </div>
  );
};

export default StarRating;
