import React from 'react';

const PaymentPage = () => {
  return (
    <div className="max-w-sm mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Choose mode of payment</h3>
          <div className="flex items-center mb-2">
            <input type="radio" id="payOnline" name="paymentMode" className="mr-2" checked />
            <label htmlFor="payOnline" className="text-sm">Pay Online</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="payAtClinic" name="paymentMode" className="mr-2" />
            <label htmlFor="payAtClinic" className="text-sm">Pay at Clinic</label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">UPI</h3>
          <div className="flex items-center mb-2">
            <input type="radio" id="googlePay" name="upiOption" className="mr-2" />
            <label htmlFor="googlePay" className="flex items-center">
              <img src="path/to/googlepay-logo.png" alt="Google Pay" className="w-6 h-6 mr-2" />
              <span className="text-sm">Google Pay</span>
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="phonePe" name="upiOption" className="mr-2" />
            <label htmlFor="phonePe" className="flex items-center">
              <img src="path/to/phonepe-logo.png" alt="PhonePe" className="w-6 h-6 mr-2" />
              <span className="text-sm">PhonePe</span>
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="newUpiId" name="upiOption" className="mr-2" />
            <label htmlFor="newUpiId" className="text-sm">Add New UPI ID</label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Card Payment</h3>
          <div className="flex items-center mb-2">
            <input type="radio" id="axisBank" name="cardOption" className="mr-2" />
            <label htmlFor="axisBank" className="flex items-center">
              <img src="path/to/mastercard-logo.png" alt="Axis Bank" className="w-6 h-6 mr-2" />
              <span className="text-sm">Axis Bank **** **** 8395</span>
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="hdfcBank" name="cardOption" className="mr-2" />
            <label htmlFor="hdfcBank" className="flex items-center">
              <img src="path/to/visa-logo.png" alt="HDFC Bank" className="w-6 h-6 mr-2" />
              <span className="text-sm">HDFC Bank **** **** 6246</span>
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="newCard" name="cardOption" className="mr-2" />
            <label htmlFor="newCard" className="text-sm">Add New Card</label>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Total amount</span>
          <span className="text-lg font-semibold">₹ 500</span>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;
