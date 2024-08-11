import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import oneTImeAnimation from "./OneTimeAnimation.json";

const OneTimeAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onAnimationEnd();  // Notify parent component to remove the animation
    }, 3000); // Duration of the animation in milliseconds

    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <div className="">
      <Lottie animationData={oneTImeAnimation} loop={false} />
    </div>
  );
};

export default OneTimeAnimation;
