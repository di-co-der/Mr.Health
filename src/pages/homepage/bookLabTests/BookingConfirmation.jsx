import React from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../../components/common/Header";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  const handleProceedToPay = () => {
    navigate("/book-lab-tests/slot/booking-confirmation/payment");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <div className="max-w-sm w-full">
        <header className="mt-16">
          <Header title={"Package Details"} />
        </header>
        <div className="flex items-center justify-between">
          <button className="text-gray-600">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>

        <div className="w">
          <div className="mt-4">
            <div className="flex items-center">
              <i className="fas fa-home text-gray-500"></i>
              <div className="ml-2">
                <p className="text-sm text-gray-500">
                  Pick Sample from Address
                </p>
                <p className="text-base font-medium">
                  H40/ Malhotra Street, Purani Ma...
                </p>
              </div>
              <button className="text-[#00cccc] text-sm font-medium ml-auto">
                Change
              </button>
            </div>
          </div>

          <div className="mt-4 border-y border-gray-300 py-4">
            <div className="flex items-center">
              <i className="fas fa-calendar-alt text-gray-500"></i>
              <div className="ml-2">
                <p className="text-sm text-gray-500">Pick Up Time</p>
                <p className="text-base font-medium">Sat, 9 Sep 11:30 AM</p>
              </div>
              <span className="text-xs text-gray-500 ml-auto">Today</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <i className="fas fa-flask text-gray-500"></i>
              <div className="ml-2">
                <p className="text-sm text-gray-500">2 Tests are added</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium">Standard Pick Up</p>
                  <p className="text-gray-500 text-lg">|</p>
                  <p className="text-sm text-gray-500">
                    From nearest Medico Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 h-2 my-4"></div>

        <div className="cursor-pointer text-center font-medium text-[#00cccc] text-sm">
          View Detailed Bill
        </div>
      </div>

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa] z-[10000]">
        <button
          className="w-full text-white py-2 rounded-lg bg-[#0086ff] hover:bg-[#0080ee]"
          onClick={handleProceedToPay}
        >
          Proceed To Pay
        </button>
      </footer>
    </div>
  );
};

export default BookingConfirmation;
