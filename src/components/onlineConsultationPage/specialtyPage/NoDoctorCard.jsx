import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHealthIncrease } from "react-icons/gi";

const NoDoctorCard = () => {
    const navigate = useNavigate();

    const handleBookAppointment = () => {
      navigate("/book-appointment");
    };
  return (
    <motion.div
      className="p-6 flex flex-col justify-center items-center min-h-[250px] bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg outline outline-2 outline-gray-100 hover:outline-gray-200 rounded-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GiHealthIncrease className="text-teal-500 text-7xl animate-pulse" />
      </motion.div>
      <div className="text-center">
        <div className="text-gray-600 text-2xl font-semibold mb-3">
          No Doctors Available
        </div>
        <p className="text-gray-500 mb-5">
          It seems there are no doctors available for the selected specialty at the moment.
        </p>
        <button
          onClick={handleBookAppointment}
          className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition outline-none"
        >
          Check Other Specialties
          </button>
      </div>
    </motion.div>
  );
};

export default NoDoctorCard;
