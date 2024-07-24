import React from "react";
import { useParams } from "react-router-dom";

const BookDoctorPage = () => {
  const { specialty, doctorId } = useParams();
// .
// //   You can fetch the doctor's details using the doctorId and display them here
// //   For this example, we'll just display the IDs from the URL
// .
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <h1>{specialty} - Doctor ID: {doctorId}</h1>

      </div>
    </div>
  );
};

export default BookDoctorPage;
