import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/common/Header";

function ConfirmationPage() {
  //   const { specialty, doctorName, doctorId } = useParams();
  //   const doctor = {
  //     id: doctorId,
  //     name: doctorName,
  //     specialty: specialty,
  //     image: "https://via.placeholder.com/50",
  //     distance: "589 m",
  //   };

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto bg-red-200">
      <Header title="Booking Confirmation" onClick={handleAppointmentClick} />
      <div
        className="bg-cyan-400 mt-96 rounded-md mx-10 py-4 text-center cursor-pointer"
        onClick={handleHomeClick}
      >
        Back to HomeScreen
      </div>
    </div>
  );
}

export default ConfirmationPage;
