import React from "react";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); 
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); 

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.01135 0L10.3233 5.48516L16 6.12418L11.7497 10.1297L12.9255 16L7.98699 12.9902L3.037 15.9795L4.23497 10.1137L0 6.09081L5.67875 5.47543L8.01135 0Z"
            fill="#FFC700"
          />
        </svg>
      ))}
      {halfStar && (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.01135 0.5L10.3233 5.98516L16 6.62418L11.7497 10.6297L12.9255 16.5L7.98699 13.4902L3.037 16.4795L4.23497 10.6137L0 6.59081L5.67875 5.97543L8.01135 0.5Z"
            fill="#3D3D3D"
            fill-opacity="0.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 13.4715V0.5L5.67875 5.94879L0 6.56416L4.23497 10.5871L3.037 16.4529L7.98699 13.4635L8 13.4715Z"
            fill="#FFC700"
          />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.01135 0L10.3233 5.48516L16 6.12418L11.7497 10.1297L12.9255 16L7.98699 12.9902L3.037 15.9795L4.23497 10.1137L0 6.09081L5.67875 5.47543L8.01135 0Z"
            fill="#3D3D3D"
            fill-opacity="0.5"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
