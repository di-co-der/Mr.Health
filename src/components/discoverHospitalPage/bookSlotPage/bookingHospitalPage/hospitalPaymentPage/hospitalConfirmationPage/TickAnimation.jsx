import React from 'react';
import Lottie from 'lottie-react';
import tickAnimation from './TickAnimation.json';

const TickAnimation = () => {
  return (
    <div className="tick-animation w-7 pb-0.5">
      <Lottie animationData={tickAnimation} loop={true} />
    </div>
  );
};

export default TickAnimation;
