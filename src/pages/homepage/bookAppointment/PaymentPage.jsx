import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/common/Header";
import PaymentOption from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/bookingDetailsPage/paymentPage/PaymentOption.jsx";
import ClinicInfo from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/slotBookingPage/bookingDetailsPage/paymentPage/ClinicInfo.jsx";

//assets
import GPay from "../../../assets/svgs/GPay.svg";
import PhonePay from "../../../assets/svgs/PhonePay.svg";
import MasterCard from "../../../assets/svgs/MasterCard.svg";
import Visa from "../../../assets/svgs/Visa.svg";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [upiMethod, setUpiMethod] = useState("googlePay");
  const [cardMethod, setCardMethod] = useState("axisBank");

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

  const handleConfirmClick = () => {
    navigate(
      `/book-appointment/${doctor.specialty
        .toLowerCase()
        .replace(/ /g, "-")}/${doctor.name
        .toLowerCase()
        .replace(/[\s.]+/g, "-")}/${
        doctor.id
      }/slot/booking/payment/confirmation`
    );
  };

  return (
    <div className="min-h-screen flex flex-col w-full max-w-sm mx-auto">
      <header className="fixed inset-x-0 top-0">
        <Header title="Payment" onClick={handleAppointmentClick} />
      </header>

      <div className="pt-5 mt-14 flex-grow overflow-y-auto ">
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
        {/* <div className="w-full bg-[#] pt-1.5"></div> */}

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

            <div className="pt-6 px-4 mb-28">
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
            </div>y
          </>
        )}

        {paymentMethod === "clinic" && <ClinicInfo />}
      </div>


      <footer className="fixed bottom-0 inset-x-0 p-4 bg-white shadow-md">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600">Total amount</p>
          <p className="text-lg font-medium text-gray-800">₹ 500</p>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleConfirmClick}
        >
          Pay Now
        </button>
      </footer>
    </div>
  );
};

export default PaymentPage;
