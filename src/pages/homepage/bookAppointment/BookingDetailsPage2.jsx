import React from 'react';
import { FaMapMarkerAlt, FaBell } from 'react-icons/fa';

const BookingDetails = () => {
  return (
    <div className="flex flex-col max-w-sm justify-center mx-auto h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <button className="text-lg font-bold">&larr;</button>
        <h1 className="text-lg font-bold">Booking Details</h1>
        <button className="relative">
          <FaBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Doctor"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">Dr. Raja Selvarajan</h2>
            <p className="text-sm text-gray-500">General Physician</p>
          </div>
          <div className="ml-auto text-blue-500">
            <FaMapMarkerAlt />
            <span>589 m</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center border p-2 rounded mb-2">
            <span>In-clinic appointment booking for</span>
            <button className="text-blue-500">Change</button>
          </div>
          <p className="text-lg font-bold">Udit Mahajan, M, 22 yrs</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center border p-2 rounded">
            <span>Appointment Time</span>
            <div className="ml-auto text-right">
              <p>Sat, 9 Sep 11:30 AM</p>
              <p className="text-gray-500">Today</p>
            </div>
          </div>
        </div>

        <div className="border p-2 rounded mb-4">
          <div className="flex justify-between items-center">
            <span>Apply Coupon</span>
            <button className="text-blue-500">APPLY</button>
          </div>
          <p className="text-sm text-gray-500">Unlock Offers & Discounts with coupon codes</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Bill Details</h2>
          <div className="flex justify-between">
            <span>Consultation Fee</span>
            <span>₹ 500</span>
          </div>
          <div className="flex justify-between">
            <span>
              Service Fee & Tax
              <span className="text-blue-500"> ?</span>
            </span>
            <span className="text-green-500">FREE</span>
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-t border-b mb-4">
          <span className="font-bold">Total Payable</span>
          <span className="font-bold">₹ 500</span>
        </div>

        <div className="p-2 border mb-4 text-green-500 text-center rounded">
          You have saved ₹ 49 on this appointment
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="notification" className="mr-2" />
          <label htmlFor="notification">Get notification on Whatsapp</label>
        </div>

        <div className="mb-4">
          <p className="mb-2">Additional Information 1</p>
          <p>Additional Information 2</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span>Total amount</span>
          <span>₹ 500</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded">Proceed To Pay</button>
      </footer>
    </div>
  );
};

export default BookingDetails;
