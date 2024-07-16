import React from 'react';

const ConsultedDoctor = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mt-4">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Doctors You Have Consulted</h3>
        <button className="text-white text-sm bg-blue-700 hover:bg-blue-800 py-1 px-3 rounded-md transition duration-200">
          See All
        </button>
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-800">{doctor.name}</h4>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
          <p className="text-sm text-green-500 mt-1">{doctor.lastConsultation}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultedDoctor;
