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
      <header className="pt-[60px]">
        <Header title="Booking Confirmation" onClick={handleAppointmentClick} />
      </header>
{/* 
      <div
        className="bg-cyan-400 mt-96 rounded-md mx-10 py-4 text-center cursor-pointer"
        onClick={handleHomeClick}
      >
        Back to HomeScreen
      </div> */}

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa]">
          <button
            className="w-full bg-[#00cccc] text-white py-2 rounded-lg hover:bg-[#02c1c1]"
            onClick={handleHomeClick}
          >
        Back to HomeScreen
        </button>
          </footer>
    </div>
  );
}

export default ConfirmationPage;
