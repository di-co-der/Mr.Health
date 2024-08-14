import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddToCartPage = ({ cartItems = [], location }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("labTests"); // State to manage active tab

  const totalPrice = cartItems?.reduce((total, item) => total + item.price, 0) || 0;

  const handleApplyCoupon = () => {
    // Handle coupon application logic here
  };

  const handleProceedToBook = () => {
    // Proceed to booking logic
    navigate("/booking-confirmation");
  };

  const renderTabContent = () => {
    if (activeTab === "labTests") {
      return (
        <>
          <section className="pb-4">
            <h2 className="text-gray-700 font-semibold pb-2">Deliver to - {location}</h2>
          </section>

          <section className="bg-white rounded-md shadow-md p-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.tests.length} Tests</p>
                      <p className="text-lg font-bold">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="px-2 py-1 text-xl text-blue-500">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="px-2 py-1 text-xl text-blue-500">+</button>
                  </div>
                </div>
              ))
            )}
          </section>

          <section className="bg-white rounded-md shadow-md p-4 my-4">
            <button
              className="text-blue-500 font-semibold flex items-center"
              onClick={handleApplyCoupon}
            >
              <span className="material-icons">local_offer</span>
              Apply Coupon
            </button>
          </section>
        </>
      );
    } else if (activeTab === "orders") {
      return (
        <section className="text-center mt-8">
          <h1 className="text-3xl font-bold text-gray-700">My Orders</h1>
        </section>
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 min-h-screen">
      <header className="flex justify-between items-center pb-4">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h1 className="font-semibold text-xl">My Cart</h1>
        <span className="material-icons">shopping_cart</span>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-center items-center border-b-2">
        <button
          className={`w-1/2 py-2 font-semibold ${
            activeTab === "orders" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </button>
        <button
          className={`w-1/2 py-2 font-semibold ${
            activeTab === "labTests" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("labTests")}
        >
          My Lab Tests
        </button>
      </div>

      {/* Slider */}
      <div
        className={`transition-transform duration-300 transform ${
          activeTab === "orders" ? "translate-x-full" : "translate-x-0"
        } bg-blue-500 h-1 w-1/2`}
      />

      {/* Tab Content */}
      <div className="py-4">{renderTabContent()}</div>

      {activeTab === "labTests" && (
        <footer className="fixed bottom-0 inset-x-0 p-4 bg-white shadow-inner">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Total: ₹{totalPrice}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleProceedToBook}
            >
              Proceed To Book Your Slot
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default AddToCartPage;
