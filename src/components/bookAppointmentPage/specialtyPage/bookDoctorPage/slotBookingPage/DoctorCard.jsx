import React from "react";
import blueMapIcon from "../../../../../assets/blue_map_icon.jpg";
import { useParams } from "react-router-dom";
import { doctors } from "../../../../../data/doctors";

function DoctorCard() {
  //Handle doctor.jsx from data
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  return (
    <div className="flex justify-center items-center p-2 gap-28 border-b-[1px]">
      <div className="flex justify-center items-center gap-3">
        <img
          src={doctor.image}
          alt="doctor image"
          className="rounded-full h-[60px] w-[60px]"
        />
        <div>
          <div className="text-[18px] font-medium">{doctor.name}</div>
          <div className="text-[14px] text-[#525252]">{doctor.specialty}</div>
        </div>
      </div>
      <div>
        <div className="p-2">
          <img src={blueMapIcon}></img>
        </div>
        <div className="text-[#0086FF] font-semibold text-[12px] text-center text-nowrap">
          {doctor.location}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
