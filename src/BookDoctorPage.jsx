import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import DoctorDetails from "./components/DoctorDetails";
import { doctors } from "./data/doctors";

const BookDoctorPage = () => {
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="min-h-screen max-w-sm mx-auto bg-green-100 items-center">
      <Header title={doctor.name} onClick={handleAppointmentClick} />
      <DoctorDetails doctor={doctor} />
    </div>
  );
};

export default BookDoctorPage;
