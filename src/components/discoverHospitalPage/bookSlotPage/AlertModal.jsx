import React from "react";

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center text-lg font-semibold text-red-600 mb-4">
          {message}
        </div>
        <button
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
