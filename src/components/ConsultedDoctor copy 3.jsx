import React from 'react';

const ConsultedDoctor = ({ doctor }) => {
  return (
    <div className="pt-5 pb-6 border-t-4 border-t-[#d9d9d9] border-b-4 border-b-[#d9d9d9] px-6 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-800">Doctors You Have Consulted</h3>
        <button className="text-blue-600 text-sm font-medium hover:underline">See All</button>
      </div>
      <div className="mt-4 flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer transition duration-300 ease-in-out">
        <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full border-2 border-blue-300" />
        <div className="ml-5">
          <h4 className="text-xl font-semibold text-gray-900">{doctor.name}</h4>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
          <p className="text-sm text-green-700 mt-1">{doctor.lastConsultation}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultedDoctor;
