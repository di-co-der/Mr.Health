import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";

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
    <div className="min-h-screen w-full max-w-sm mx-auto bg-red-100">
        <Header title="Payment" onClick={handleAppointmentClick} />
      <div className=" px-4">
        <h1 className="text-xl font-bold mb-4">Payment</h1>
        <div className="mb-4">
          <h2 className="text-lg mb-2">Choose mode of payment</h2>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
                className="mr-2"
              />
              Pay Online
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="clinic"
                checked={paymentMethod === "clinic"}
                onChange={() => setPaymentMethod("clinic")}
                className="mr-2"
              />
              Pay at Clinic
            </label>
          </div>
        </div>

        {paymentMethod === "online" && (
          <>
            <div className="mb-4">
              <h2 className="text-lg mb-2">UPI</h2>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="googlePay"
                    checked={upiMethod === "googlePay"}
                    onChange={() => setUpiMethod("googlePay")}
                    className="mr-2"
                  />
                  <span className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png"
                      alt="Google Pay"
                      className="w-6 h-6 mr-2"
                    />
                    Google Pay
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="upiMethod"
                    value="phonePe"
                    checked={upiMethod === "phonePe"}
                    onChange={() => setUpiMethod("phonePe")}
                    className="mr-2"
                  />
                  <span className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/PhonePe-Logo.svg/512px-PhonePe-Logo.svg.png"
                      alt="PhonePe"
                      className="w-6 h-6 mr-2"
                    />
                    PhonePe
                  </span>
                </label>
                <button className="flex items-center px-2 py-1 border rounded">
                  + Add New UPI ID
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg mb-2">Card Payment</h2>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardMethod"
                    value="axisBank"
                    checked={cardMethod === "axisBank"}
                    onChange={() => setCardMethod("axisBank")}
                    className="mr-2"
                  />
                  <span className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/MasterCard_Logo.svg/512px-MasterCard_Logo.svg.png"
                      alt="Axis Bank"
                      className="w-6 h-6 mr-2"
                    />
                    Axis Bank **** 8395
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardMethod"
                    value="hdfcBank"
                    checked={cardMethod === "hdfcBank"}
                    onChange={() => setCardMethod("hdfcBank")}
                    className="mr-2"
                  />
                  <span className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Visa_Inc._logo.svg/512px-Visa_Inc._logo.svg.png"
                      alt="HDFC Bank"
                      className="w-6 h-6 mr-2"
                    />
                    HDFC Bank **** 6246
                  </span>
                </label>
                <button className="flex items-center px-2 py-1 border rounded">
                  + Add New Card
                </button>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-semibold">Total amount</span>
          <span className="text-xl font-bold">₹ 500</span>
        </div>
        <div
          className="mt-14 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-center cursor-pointer "
          onClick={handleConfirmClick}
        >
          Pay Now
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
