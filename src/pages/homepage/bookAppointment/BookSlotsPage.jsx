import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import DoctorCard from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/DoctorCard";
import SlotDate from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/SlotDate";

function BookSlotsPage() {
  
  //Handle MyAppointment
  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  //Handle confirm booking button
  const handleBookingClick = (doctorId, doctorName, specialty) => {
    navigate(
      `/book-appointment/${specialty}/${doctorName}/${doctorId}/slot/booking`
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
          <header className="pt-[64px]">
            <Header title="Slot Booking" onClick={handleAppointmentClick} />
          </header>

          {/* doctorcard  */}
          <DoctorCard />

          {/* choose your slot  */}
          <div className="m-4 text-[#0086FF] font-semibold">
            Choose your Slot
          </div>

          {/* slotcard */}
          <SlotDate />

          {/* slot timing  */}
          <div>
            <div></div>
            <div></div>
          </div>

          {/* button  */}
          <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa]">
            <button
              className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
              onClick={handleBookingClick}
            >
              Confirm Booking
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default BookSlotsPage;
