import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//data
import hospitals from "../../../data/hospitals";

function HospitalPaymentPage() {
  const { hospitalName, hospitalId } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const navigate = useNavigate();

  const handleConfirmation = () => {
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot/booking/payment/confirmation`);
  };
  return (
    <div className="max-w-sm bg-gray-100 min-h-screen mx-auto">
      HospitalPaymentPage
      <button
        className="bg-blue-500 p-4 rounded-md cursor-pointer"
        onClick={handleConfirmation}
      >
        Next
      </button>
    </div>
  );
}

export default HospitalPaymentPage;
