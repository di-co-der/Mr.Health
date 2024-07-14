import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-3 shadow-lg">
        <p className="text-lg text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
