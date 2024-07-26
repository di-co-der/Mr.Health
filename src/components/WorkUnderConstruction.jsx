import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const WorkUnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200">
      {/* Rotating Background Element */}
      <div className=" w-full mx-2 bg-white shadow-xl rounded-lg overflow-hidden relative">
        <div className="text-center p-6 z-10">
          <motion.div
            className="absolute inset-5 bg-blue-200 opacity-30"
            animate={{
              rotate: [0, 360],
              borderRadius: ["5%", "50%", "5%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
          <motion.div
            className="text-yellow-400 text-7xl mb-4 mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaTools className="animate-pulse" />
          </motion.div>
          <motion.h1
            className="text-2xl font-bold text-gray-800 mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Under Construction
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're working hard to improve this page. Please check back soon!
          </motion.p>
          <motion.button
            onClick={() => navigate("/")}
            className="px-6 py-3 relative bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Home
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WorkUnderConstruction;
