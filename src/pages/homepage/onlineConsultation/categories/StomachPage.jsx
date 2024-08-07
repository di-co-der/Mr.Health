import React from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../../../components/common/Header";

function StomachPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="max-w-sm bg-gray-100 min-h-screen mx-auto">
      <Header title="Stomach Page" onClick={handleAppointmentClick} />
      <h1 className="pt-10 pl-10"></h1>
      <div
        className="rounded-xl bg-yellow-500 p-4 mt-80 mx-10 cursor-pointer text-center"
        onClick={handleBack}
      >
        See another one for now
      </div>
    </div>
  );
}

export default StomachPage;
