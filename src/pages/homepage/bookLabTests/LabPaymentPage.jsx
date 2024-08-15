import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../../components/common/Header";
import PaymentOption from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/bookingDetailsPage/paymentPage/PaymentOption.jsx";
import ClinicInfo from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/bookingDetailsPage/paymentPage/ClinicInfo.jsx";

//assets
import GPay from "../../../assets/svgs/GPay.svg";
import PhonePay from "../../../assets/svgs/PhonePay.svg";
import MasterCard from "../../../assets/svgs/MasterCard.svg";
import Visa from "../../../assets/svgs/Visa.svg";

const LabPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [upiMethod, setUpiMethod] = useState("googlePay");
  const [cardMethod, setCardMethod] = useState("axisBank");

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleConfirmClick = () => {
    navigate("/book-lab-tests/slot/booking-confirmation/payment/confirmation");
};

  return (
    <div className="min-h-screen flex flex-col w-full max-w-sm mx-auto">
        <header className="pt-[56px]">
        <Header title="Payment" onClick={handleAppointmentClick} />
      </header>

      <div className="pt-5 pb-36 flex-grow overflow-y-auto ">
        <div className="px-4 border-b-[#d9d9d9be] border-b-[6px]">
          <h1 className="font-semibold text-lg">Choose mode of payment</h1>
          <div className="400 p-4 mt-2 mb-4 rounded-xl outline outline-1 outline-gray-200">
            <PaymentOption
              // title="Choose mode of payment"
              options={[
                { value: "online", label: "Pay Online" },
                { value: "clinic", label: "Pay at Clinic" },
              ]}
              selectedOption={paymentMethod}
              onChange={setPaymentMethod}
            />
          </div>
        </div>
        {paymentMethod === "online" && (
          <>
            <div className="pt-4 px-4">
              <h1 className="font-semibold text-lg">UPI</h1>
              <div className="400 p-4 mt-2 rounded-xl shadow-xl outline outline-1 outline-gray-200">
                <PaymentOption
                  title=""
                  options={[
                    {
                      value: "googlePay",
                      label: (
                        <span className="flex items-center">
                          <img
                            src={GPay}
                            alt="Google Pay"
                            className="h-6 mr-3"
                          />
                          Google Pay
                        </span>
                      ),
                    },
                    {
                      value: "phonePe",
                      label: (
                        <span className="flex items-center">
                          <img
                            src={PhonePay}
                            alt="PhonePe"
                            className="h-7 mr-2"
                          />
                          PhonePe
                        </span>
                      ),
                    },
                  ]}
                  selectedOption={upiMethod}
                  onChange={setUpiMethod}
                />
              </div>
            </div>

            <div className="pt-6 px-4">
              <h1 className="font-semibold text-lg">Card Payment</h1>
              <div className="400 p-4 mt-2 rounded-xl shadow-xl outline outline-1 outline-gray-200">
                <PaymentOption
                  title=" "
                  options={[
                    {
                      value: "axisBank",
                      label: (
                        <span className="flex items-center">
                          <img
                            src={MasterCard}
                            alt="Axis Bank"
                            className="h-6 mr-2.5"
                          />
                          Axis Bank **** 8395
                        </span>
                      ),
                    },
                    {
                      value: "hdfcBank",
                      label: (
                        <span className="flex items-center">
                          <img
                            src={Visa}
                            alt="HDFC Bank"
                            className="h-6 mr-3"
                          />
                          HDFC Bank **** 6246
                        </span>
                      ),
                    },
                  ]}
                  selectedOption={cardMethod}
                  onChange={setCardMethod}
                />
              </div>
            </div>
          </>
        )}

        {paymentMethod === "clinic" && <ClinicInfo />}
      </div>


      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-2 pb-3 px-8 bg-[#fafafa]">
      <div className="flex justify-start items-center gap-3 font-medium mb-2">
      {/* <p className="text-[#8f8f8f] text-sm">Total amount</p> */}
      {/* <p className="text-lg text-[#3d3d3d]">{hospital.fees}</p> */}
      </div>
        <button
          className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
          onClick={handleConfirmClick}
        >
          Pay Now
        </button>
      </footer>
    </div>
  );
};

export default LabPaymentPage;
