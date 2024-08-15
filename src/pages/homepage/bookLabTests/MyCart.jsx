import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//assets
import ApplyCoupon from "../../../assets/svgs/ApplyCoupon.svg";
import Info from "../../../assets/svgs/Info.svg";
import Whatsapp from "../../../assets/svgs/Whatsapp.svg";


const MyCart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("labTests");
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const locationName = location.state?.location || "Mumbai";

  console.log("Cart Items:", cartItems); // Debug log

  useEffect(() => {
    // Load cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (index, change) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += change;

      if (updatedItems[index].quantity <= 0) {
        updatedItems.splice(index, 1);
      }

      return updatedItems;
    });
  };

  const labTestsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleApplyCoupon = () => {
    // Handle coupon part here
  };

  const handleProceedToBook = () => {
    navigate("/book-lab-tests/slot");
  };

  const renderTabContent = () => {
    if (activeTab === "labTests") {
      return (
        <div className="mt-2">
          {/* <section className="pb-4">
            <h2 className="text-gray-700 font-semibold pb-2">
              Deliver to - {locationName}
              <br />
              Deliver to - {location.state?.location || "Mumbai"}
            </h2>
          </section> */}
          <section className="">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex justify-start gap-4 w-[140vw]">
                    <div className="w-24 ">
                      <img
                        src={item.icon || "https://via.placeholder.com/64"}
                        alt={item.name}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center pt-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500 pt-1 pb-4">
                        Includes {item.tests.length} Tests
                      </p>
                      <p className="text-lg font-semibold pb-2">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center border-2 rounded-md border-gray-400 mb-0.5">
                      <button
                        className="px-2 pb-0.5 text-xl text-[#00cccc] font-semibold"
                        onClick={() => handleQuantityChange(index, -0.5)}
                      >
                        -
                      </button>
                      <span className="w-8 text-[#00cccc] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 text-[#00cccc] font-semibold"
                        onClick={() => handleQuantityChange(index, 0.5)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
          <section>
            <div className="py-4 text-center mt-4 mx-4 rounded-xl border border-[#00cccc] text-[#00cccc] cursor-pointer">
              Add more Tests
            </div>
          </section>
          <div className="bg-gray-300 h-2 mt-6"></div>
          {/* <div className="border-4 mb-4 bg-red-300"></div> */}
          <div className="mt-5">
            <div className="flex items-center justify-between border-2 border-[#7a7a7a8e] rounded-lg px-2 py-2">
              <div className="flex items-start gap-3">
                <img src={ApplyCoupon} className="mt-1" alt="" />
                <div className="pr-5">
                  <p className="font-medium bg-blue-40 mb-0.5">Apply Coupon</p>
                  <p className="text-[#525252] text-sm bg-yelow-400 font-normal">
                    Unlock Offers & Discounts with coupon codes
                  </p>
                </div>
              </div>
              <button className="text-[#00cccc] font-medium mr-3">APPLY</button>
            </div>
          </div>

          <div className="my-4 mx-4">
          <h4 className="font-medium">Bill Details</h4>
          <div className=" pl-3 text-[#7a7a7a]">
            <div className="flex justify-between mt-2">
              <p>Items Total</p>
              <p>₹{labTestsPrice}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="flex items-center gap-2">
                Service Fee & Tax
                <img src={Info} alt="" />
              </p>
              <div className="flex items-center gap-2"> 
                <p className="line-through">₹ 49</p>
                <p className="text-green-500">FREE</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 mb-3 mt-3"></div>

          <div className="flex justify-between mt-2 font-medium pl-3">
            <p>Total Payable</p>
            <p>₹{labTestsPrice}</p>
          </div>
          <div className="text-[#25d366] text-center mt-4 bg-[#f0fcf4] py-1 inline-flex ml-3 px-2 text-sm font-normal border border-dashed border-[#25d366] rounded-md">
            You have saved ₹ 49 on this appointment
          </div>
        </div>

        <div className="border-4 mb-4"></div>

        <div className="mb-4 mx-4 flex items-center text-black">
          <input type="checkbox" id="whatsapp" className="mr-2" />
          <label htmlFor="whatsapp" className="text-black flex gap-2 items-start">
            Get notification on Whatsapp
            <img src={Whatsapp} alt="" />
          </label>
        </div>
        <div className="mb-24 mx-4 text-[#7a7a7a] text-sm">
          <p className="mb-2">*Updates will be sent to +91 9876543210</p>
          <p>*By booking the appointment, you agree to Medico's <span className="underline text-[#00cccc] cursor-pointer">Terms and Conditions</span>. You can also pay for this appointment by selecting offline mode.</p>
        </div>

        </div>
      );
    } else if (activeTab === "orders") {
      return (
        <section className="text-center mt-8">
          <h1 className="text-3xl font-bold text-gray-700">My Orders divyansh</h1>
        </section>
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 min-h-screen">
      <header className="flex justify-between items-center pb-4">
        <button onClick={() => navigate(-1)}>
          <span className="material-icons">Back</span>
        </button>
        <h1 className="font-semibold text-xl">My Cart</h1>
        <span className="material-icons cursor-pointer">Cart</span>
      </header>

      <div className="flex justify-center items-center border-b-2 rounded-md p-1 bg-gray-300">
        <button
          className={`w-1/2 py-2 font-semibold text-blue-500 ${
            activeTab === "orders" ? "bg-white rounded-md" : ""
          }`}
          onClick={() => setActiveTab("orders")}
        >
          My Orders
        </button>
        <button
          className={`w-1/2 py-2 font-semibold text-blue-500 ${
            activeTab === "labTests" ? "bg-white rounded-md" : ""
          }`}
          onClick={() => setActiveTab("labTests")}
        >
          My Lab Tests
        </button>
      </div>

      <div className="py-4">{renderTabContent()}</div>

      {activeTab === "labTests" && (
        <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-2 pb-3 px-8 bg-[#fafafa]">
        <div className="flex justify-start items-center gap-3 font-medium mb-2">
          <p className="text-[#8f8f8f] text-sm">Total amount</p>
          <p className="text-lg text-[#3d3d3d]">₹{labTestsPrice}</p>
        </div>
        <button
          className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
          onClick={handleProceedToBook}
        >
           Proceed To Book Your Slot
        </button>
      </footer>
      )}
    </div>
  );
};

export default MyCart;
