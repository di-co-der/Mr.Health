import React from "react";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ConfirmationModal = ({ type, onClose, onConfirm, onCancel, slot }) => {
  const isCancel = type === 'cancel';
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "50%" }}
        className="relative bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <button
          className="absolute top-2 right-2 p-1 bg-gray-100 hover:scale-95 transition-all rounded-full"
          onClick={onClose}
        >
          <IoIosCloseCircleOutline className="w-6 h-6 text-gray-600 hover:scale-100" />
        </button>
        <h2 className="text-lg font-semibold mb-4">{isCancel ? "Cancel Appointment" : "Reschedule Appointment"}</h2>
        <p className="text-gray-700 mb-4">
          {isCancel ? "Are you sure you want to cancel this appointment?" : "Are you sure you want to reschedule this appointment?"}
        </p>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="text-sm font-semibold">Selected Slot:</div>
          <div className="text-gray-700 mt-1">{slot}</div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${isCancel ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            onClick={onConfirm}
          >
            Yes, I'm sure
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationModal;
