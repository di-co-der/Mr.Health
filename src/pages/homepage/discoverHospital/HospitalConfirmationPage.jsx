import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//data
import hospitals from "../../../data/hospitals";

function HospitalConfirmationPage() {
  const { hospitalId } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const navigate = useNavigate();

  const handleHomescreen = () => {
    navigate(`/`);
  };
  return (
    <div className="max-w-sm bg-gray-100 min-h-screen mx-auto">
      HospitalConfirmationPage
      <button
        className="bg-blue-500 p-4 rounded-md cursor-pointer"
        onClick={handleHomescreen}
      >
        Next
      </button>
      Back to Homescreen
    </div>
  );
}

export default HospitalConfirmationPage;
