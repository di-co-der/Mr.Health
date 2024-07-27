import React from 'react';

const ConsultedDoctor = ({ doctor }) => {
  return (
    <div className="pt-3 pb-5 border-t-[3px] border-t-[#d9d9d9] border-b-4 border-b-[#d9d9d9] px-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Doctors you have consulted</h3>
        <button className="text-blue-500 text-sm">See All</button>
      </div>
      <div className="mt-2 flex items-center bg-zinc-50 p-2 pl-4 rounded-md border border-zinc-300 hover:bg-zinc-100 cursor-pointer">
        <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full" />
        <div className="ml-5">
          <h4 className="font-medium">{doctor.name}</h4>
          <p className="text-sm text-gray-500">{doctor.specialty}</p>
          <p className="text-sm text-green-600 mt-1 ">{doctor.lastConsultation}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultedDoctor;
