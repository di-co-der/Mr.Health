import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//data
import hospitals from "../../../data/hospitals";

function BookingHospitalPage() {
  const { hospitalName, hospitalId } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot/booking/payment`);
  };
  return (
    <div className="max-w-sm bg-gray-100 min-h-screen mx-auto">
      BookingHospitalPage
      <button
        className="bg-blue-500 p-4 rounded-md cursor-pointer"
        onClick={handlePayment}
      >
        Next
      </button>
    </div>
  );
}

export default BookingHospitalPage;
