import React from 'react';

const ConsultedDoctor = ({ doctor }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mt-4 hover:shadow-2xl transition-shadow duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white group">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 flex items-center justify-between group-hover:bg-transparent transition-colors duration-300">
        <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">Doctors You Have Consulted</h3>
        <button className="text-white text-sm bg-blue-700 hover:bg-blue-800 py-1 px-3 rounded-md transition duration-200">
          See All
        </button>
      </div>
      <div className="flex items-center p-4 border-t border-gray-200 group-hover:border-transparent transition-colors duration-300">
        <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
        <div className="ml-4">
          <h4 className="text-lg font-medium group-hover:text-white transition-colors duration-300">{doctor.name}</h4>
          <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">{doctor.specialty}</p>
          <p className="text-sm text-green-500 group-hover:text-white transition-colors duration-300 mt-1">{doctor.lastConsultation}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultedDoctor;
