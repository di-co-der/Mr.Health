import React from "react";

const ClinicInfo = () => (
  <div className="p-4 m-4 bg-gradient-to-br from-slate-100 to-slate-300 rounded-lg shadow-md mt-4">
    <h2 className="text-lg font-semibold mb-2">Clinic Information</h2>
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Clinic Location"
          className="w-12 h-12 mr-2 rounded-full"
        />
        <div>
          <p className="font-medium">HealthCare Clinic</p>
          <p className="text-sm text-gray-600">123 Sadar Bazaar, Agra</p>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.94 2.94a1.5 1.5 0 112.12 2.12L3.414 7H6.5a1.5 1.5 0 010 3H2.5a1.5 1.5 0 01-1.5-1.5V2.5a1.5 1.5 0 013 0v2.086l2.561-2.561a1.5 1.5 0 012.12 2.12L5.622 6.5h1.878a3.5 3.5 0 000-7H3.5a1.5 1.5 0 000 3h1.878L2.94 2.94z"></path>
          <path d="M15.06 15.06a1.5 1.5 0 10-2.12 2.12L13.878 16H10.5a1.5 1.5 0 010-3h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-3 0v-1.878l2.561 2.561a1.5 1.5 0 002.12-2.12l-1.44-1.44h1.878a3.5 3.5 0 000-7h-3.878a1.5 1.5 0 100 3h1.878l-2.56 2.56z"></path>
        </svg>
        <p className="text-sm text-gray-600 pl-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 5a3 3 0 016 0h4a3 3 0 016 0v7a3 3 0 01-3 3H5a3 3 0 01-3-3V5z"></path>
          <path
            fillRule="evenodd"
            d="M14 10a1 1 0 01-1 1H7a1 1 0 110-2h6a1 1 0 011 1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-sm text-gray-600 pl-1 pb-1.5">Contact: +91 9876543210</p>
      </div>
    </div>
  </div>
);

export default ClinicInfo;
