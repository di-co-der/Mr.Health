import React from "react";
import { motion } from "framer-motion";

const CancellationAnimation = () => {
  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
  };

  const tickVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center justify-center"
      >
        <svg
          className="w-14 h-14 mb-2 border-4 border-[#ff0000] rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="#0000"
            strokeWidth="1.5"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M6 12l4 4 8-8"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={tickVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
        <h2 className="text-lg font-semibold mb-2">Appointment Cancelled</h2>
        <p className="text-gray-700">
          Your appointment has been cancelled successfully.
        </p>
      </motion.div>
    </div>
  );
};

export default CancellationAnimation;
