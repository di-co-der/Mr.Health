import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//data
import hospitals from "../../../data/hospitals";

function BookSlotsPage() {
  const { hospitalName, hospitalId } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const navigate = useNavigate();

  const handleHospitalSlots = () => {
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot/booking`);
  };
  return (
    <div className="max-w-sm bg-gray-100 min-h-screen mx-auto">
      BookSlotsPage
      <button
        className="bg-blue-500 p-4 rounded-md cursor-pointer"
        onClick={handleHospitalSlots}
      >
        Next
      </button>
    </div>
  );
}

export default BookSlotsPage;
