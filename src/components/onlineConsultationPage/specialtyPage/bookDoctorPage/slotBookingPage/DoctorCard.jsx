import React from "react";
import { useParams } from "react-router-dom";

//data
import { doctors } from "../../../../../data/doctors.jsx";

//assets
import Location from "../../../../../assets/svgs/Location.svg";

function DoctorCard() {
  //Handle doctor.jsx from data
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  return (
    <div className="">
      <div className="flex items-center mt-3 mb-4 mx-4">
        <img
          className="rounded-full mr-4 w-12 h-12"
          src={doctor.image}
          alt="Doctor"
        />
        <div>
          <h3 className="text-lg font-medium">{doctor.name}</h3>
          <p className="text-gray-500">{doctor.specialty}</p>
        </div>
        <div className="ml-auto">
          <img src={Location} className="mx-auto" alt="" />
          <div className="text-blue-500 font-medium">{doctor.location}</div>
        </div>
      </div>
      <div className="border-b border-gray-300 mb-4 mx-4"></div>
    </div>
  );
}

export default DoctorCard;
