import React from 'react';

const NearbyDoctors = ({ doctors }) => {
  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Find Doctors near you</h3>
        <button className="text-blue-500 text-sm">See All</button>
      </div>
      <div className="mt-2 grid grid-cols-2 md:grid-cols-2 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={doctor.image} alt={doctor.name} className="w-56 h-44 rounded-md cursor-pointer hover:scale-95 transition ease-in-out duration-300" />
            <p className="text-sm text-center">{doctor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyDoctors;
