import React, { useState } from "react";
import doctorImage from "../assets/doctor1.png";

const AppointmentCard = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 80, y: 70 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <div className="flex ">
      <div
        className="grow mx-4 p-4 rounded-lg shadow-lg text-white appointment-card"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(44, 91, 186), rgba(14, 51, 134))`,
          transition: "background 0.3s",
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Upcoming appointment</h2>
          <button className="text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-90 transition-all"
            >
              <path
                d="M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM9.7 10.5L7 7.8L4.3 10.5L3.5 9.7L6.2 7L3.5 4.3L4.3 3.5L7 6.2L9.7 3.5L10.5 4.3L7.8 7L10.5 9.7L9.7 10.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="mt-1 flex items-center">
          <div className="text-md text-gray-200 pr-4 border-r border-r-white">
            Sat, 9 Sep; 11:45 AM
          </div>
          <div className="flex items-end text-md text-gray-200 ml-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" mr-1"
            >
              <path
                d="M8.16675 3.72222V8L10.889 9.55556M15.1667 8C15.1667 8.91925 14.9857 9.82951 14.6339 10.6788C14.2821 11.5281 13.7665 12.2997 13.1165 12.9497C12.4665 13.5998 11.6948 14.1154 10.8455 14.4672C9.99625 14.8189 9.086 15 8.16675 15C7.2475 15 6.33724 14.8189 5.48796 14.4672C4.63868 14.1154 3.86701 13.5998 3.217 12.9497C2.56699 12.2997 2.05137 11.5281 1.69959 10.6788C1.34781 9.82951 1.16675 8.91925 1.16675 8C1.16675 6.14348 1.90425 4.36301 3.217 3.05025C4.52976 1.7375 6.31023 1 8.16675 1C10.0233 1 11.8037 1.7375 13.1165 3.05025C14.4292 4.36301 15.1667 6.14348 15.1667 8Z"
                stroke="white"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="leading-none">Tomorrow</div>
          </div>
        </div>
        <hr className="my-2 mt-4 mb-3 border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <div className="text-lg font-semibold">Dr. Raja Selvarajan</div>
              <div className="text-sm text-gray-200">Kaveri Healthcare</div>
            </div>
          </div>
          <div className="leading-none text-sm text-gray-200 mr-4">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-1"
            >
              <path
                d="M9.1668 11.2676C8.38691 11.2676 7.63897 10.9578 7.08751 10.4064C6.53605 9.85491 6.22624 9.10696 6.22624 8.32708C6.22624 7.54719 6.53605 6.79925 7.08751 6.24779C7.63897 5.69632 8.38691 5.38652 9.1668 5.38652C9.94668 5.38652 10.6946 5.69632 11.2461 6.24779C11.7976 6.79925 12.1074 7.54719 12.1074 8.32708C12.1074 8.71324 12.0313 9.09562 11.8835 9.45238C11.7357 9.80915 11.5191 10.1333 11.2461 10.4064C10.973 10.6794 10.6489 10.896 10.2921 11.0438C9.93534 11.1916 9.55296 11.2676 9.1668 11.2676ZM9.1668 0.0935059C6.98312 0.0935059 4.88888 0.960969 3.34478 2.50506C1.80069 4.04916 0.933228 6.1434 0.933228 8.32708C0.933228 14.5023 9.1668 23.618 9.1668 23.618C9.1668 23.618 17.4004 14.5023 17.4004 8.32708C17.4004 6.1434 16.5329 4.04916 14.9888 2.50506C13.4447 0.960969 11.3505 0.0935059 9.1668 0.0935059Z"
                fill="white"
              />
            </svg>
            589 m
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
