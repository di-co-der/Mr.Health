import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/common/Header";

const BookingDetailsPage = () => {
  const { specialty, doctorName, doctorId } = useParams();

  const doctor = {
    id: doctorId,
    name: doctorName,
    specialty: specialty,
    image: "https://via.placeholder.com/50",
    distance: "589 m",
  };

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handlePaymentClick = () => {
    navigate(
      `/book-appointment/${doctor.specialty
        .toLowerCase()
        .replace(/ /g, "-")}/${doctor.name
        .toLowerCase()
        .replace(/[\s.]+/g, "-")}/${doctor.id}/slot/booking/payment`
    );
  };

  return (
    <div className="h-screen max-w-sm mx-auto shadow-md rounded-lg">
        <header className="pt-[60px]">
        <Header title="Booking Details" onClick={handleAppointmentClick} />
      </header>
      <main className="flex-1 pb-28 overflow-y-auto p-4">
        <div className="flex items-center mb-4">
          <img
            className="rounded-full mr-4 w-12 h-12"
            src={doctor.image}
            alt="Doctor"
          />
          <div>
            <h3 className="text-lg font-medium">Dr. {doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>
          </div>
          <div className="ml-auto text-blue-500">{doctor.distance}</div>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="mb-4">
          <p className="text-gray-500">In-clinic appointment booking for</p>
          <div className="flex items-center">
            <p className="font-medium">Udit Mahajan, M, 22 yrs</p>
            <button className="text-blue-500 ml-2">Change</button>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Appointment Time</p>
          <p className="font-medium">
            Sat, 9 Sep 11:30 AM <span className="text-gray-500">| Today</span>
          </p>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="mb-4">
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
            <div>
              <p className="font-medium">Apply Coupon</p>
              <p className="text-gray-500">
                Unlock Offers & Discounts with coupon codes
              </p>
            </div>
            <button className="text-blue-500">APPLY</button>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-medium">Bill Details</h4>
          <div className="flex justify-between mt-2">
            <p>Consultation Fee</p>
            <p>₹ 500</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>
              Service Fee & Tax <i className="fas fa-info-circle"></i>
            </p>
            <p className="text-green-500">FREE</p>
          </div>
          <div className="flex justify-between mt-2 font-medium">
            <p>Total Payable</p>
            <p>₹ 500</p>
          </div>
          <div className="text-green-500 text-center mt-2">
            You have saved ₹ 49 on this appointment
          </div>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="whatsapp" className="mr-2" />
          <label htmlFor="whatsapp" className="text-gray-500">
            Get notification on Whatsapp
          </label>
        </div>
        <div className="mb-4">
          <p className="mb-2">Additional Information 1</p>
          <p>Additional Information 2</p>
        </div>
      </main>

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-2 pb-3 px-8 bg-[#fafafa]">
        <div className="flex justify-start items-center gap-3 font-medium mb-2">
          <p className="text-[#8f8f8f] text-sm">Total amount</p>
          <p className="text-lg text-[#3d3d3d]">₹ 500</p>
        </div>
        <button
          className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
          onClick={handlePaymentClick}
        >
          Proceed To Pay
        </button>
      </footer>
    </div>
  );
};

export default BookingDetailsPage;
