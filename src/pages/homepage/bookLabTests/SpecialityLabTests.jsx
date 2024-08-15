import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Header from "../../../components/common/Header";
import SearchBar from "../../../components/common/SearchBar";
import LocationDropdown from "../../../components/bookAppointmentPage/LocationDropdown";

// assets
import Experts from "../../../assets/svgs/Experts.svg";
import Call from "../../../assets/svgs/CallIcon.svg";
import Whatsapp from "../../../assets/svgs/Whatsapp.svg";
import WhyBook1 from "../../../assets/svgs/WhyBook1.svg";
import WhyBook2 from "../../../assets/svgs/WhyBook2.svg";
import WhyBook3 from "../../../assets/svgs/WhyBook3.svg";
import Medico from "../../../assets/svgs/Medico.svg";
import DrLal from "../../../assets/svgs/DrLal.svg";
import Pathkind from "../../../assets/svgs/Pathkind.svg";
import Cart from "../../../assets/svgs/Cart.svg";

const SpecialityLabTests = () => {
  const location = useLocation();
  const concern = location.state?.concern;

  const [cartItems, setCartItems] = useState([]); // State to hold cart items
  const [showAllTests, setShowAllTests] = useState(false); // State to control visibility
  const [numPatients, setNumPatients] = useState(1); // State to control the number of patients
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Tracks if the item has been added to the cart
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const navigate = useNavigate();

  useEffect(() => {
    if (!concern) {
      navigate("/book-lab-tests", { replace: true });
    }
  }, [concern, navigate]);

  useEffect(() => {
    // Load cart items from local storage on mount
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);
}, []);

useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide the alert after 3 seconds

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [showAlert]);

  if (!concern) {
    return null;
  }

  const handleSearch = (term) => setSearchTerm(term);

  const handleAddToCart = () => {
    const itemToAdd = {
        ...concern,
        quantity: numPatients,
        labTestsPrice: concern.price * numPatients,
    };
    setCartItems((prevItems) => {
        const updatedItems = prevItems.filter(item => item.id !== itemToAdd.id);
        updatedItems.push(itemToAdd);
        return updatedItems;
    });
    setIsAddedToCart(true);
    setTimeout(() => setShowAlert(true), 1000);
};

  const handleViewCart = () => {
    // Navigate to the MyCart page with the cart items
    navigate("/my-cart", {
      state: { cartItems, location: "Mumbai" }, // Adjust location as needed
    });
  };

  const toggleShowAllTests = () => {
    setShowAllTests(!showAllTests);
  };

  const increasePatients = () => {
    setNumPatients((prev) => prev + 1);
  };

  const decreasePatients = () => {
    setNumPatients((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const adjustedPrice = concern.price * numPatients;
  const adjustedMRP = concern.mrp * numPatients;

  return (
    <div className="mt-3 max-w-sm mx-auto min-h-screen">
      <header className="pt-10">
        <Header title={concern.name} onClick={handleViewCart} />
      </header>

      <LocationDropdown
        locations={[
          "Agra",
          "Delhi",
          "Bengaluru",
          "Chennai",
          "Kolkata",
          "Mumbai",
        ]}
        defaultLocation="Mumbai"
      />

      <div className="sticky top-[54px] bg-white z-10 border-b-2 border-b-gray-300">
        <SearchBar
          onSearch={handleSearch}
          className="border-b border-gray-300"
        />
      </div>

      <section className="pt-4 border-b-4">
        <div className="flex flex-col gap-2 border-b border-gray-400 mx-6">
          <h1 className="font-semibold text-lg text-[#0086ff]">
            {concern.name}
          </h1>
          <div className="flex justify-between">
            <p className="text-[#525252]">
              Includes {concern.tests?.length || 0} tests
            </p>
            <p
              className="text-[#00cccc] transition-all font-semibold text-sm cursor-pointer"
              onClick={toggleShowAllTests}
            >
              {showAllTests ? "Show Fewer Tests" : "Show All Tests"}
              <span
                className={`transition-transform duration-500 inline-block ml-2 ${
                  showAllTests ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </p>
          </div>
        </div>

        {/* Smooth transition for test list */}
        <section
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showAllTests ? "max-h-screen" : "max-h-0"
          } px-6`}
        >
          <div className="grid grid-cols-2 gap-4 py-2">
            {concern.tests && Array.isArray(concern.tests) ? (
              concern.tests.map((test, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-2 flex flex-col justify-between"
                >
                  <p className="text-xs font-semibold tracking-tighter text-gray-700">
                    {test.name}
                  </p>
                  <p className="text-xs text-gray-500">₹{test.price}</p>
                </div>
              ))
            ) : (
              <p>No tests available for this concern.</p>
            )}
          </div>
        </section>

        <div className="flex justify-between items-end mx-6 py-4">
          <div className="flex gap-1 items-end">
            <div className="min-w-[72px]">
              <p className="text-xl font-bold bg-gradient-to-br from-[#f403c9] to-[#37329a] bg-clip-text text-transparent">
                ₹{adjustedPrice}
              </p>
              <p className="font-bold flex">
                <span className="relative">
                  <span className="bg-gradient-to-br from-[#f403c9] to-[#37329a] bg-clip-text text-transparent">
                    ₹{adjustedMRP}
                  </span>
                  <span className="absolute inset-0 pt-0.5 flex items-center justify-center">
                    <span className="block h-[1.5px] w-full bg-gradient-to-br from-[#f403c9] to-[#37329a]"></span>
                  </span>
                </span>
              </p>
            </div>

            <div className="text-red-500 text-sm font-bold pb-0.5">
              {concern.discount}% OFF
            </div>
          </div>
          <div className="flex items-center border-2 rounded-md border-gray-400 mb-0.5">
            <button
              className="text-[#00cccc] text-lg font-semibold px-2"
              onClick={decreasePatients}
            >
              -
            </button>
            <span className="mx-2 w-20 text-center text-[#00cccc]">
              {numPatients} Patient{numPatients > 1 ? "s" : ""}
            </span>
            <button
              className="text-[#00cccc] px-2 py-1"
              onClick={increasePatients}
            >
              +
            </button>
          </div>
        </div>
      </section>

      <section className="mt-3 flex flex-col gap-4">
        <div className="flex gap-4 px-6">
          <img src={Experts} alt="" />
          <div>
            <h1 className="font-medium text-lg">
              Talk to our Experts to book tests
            </h1>
            <p className="text-sm ">
              You will be connected with Medico expert on call to book tests
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 bg-[#25d366] mx-6 text-center rounded-lg py-3 text-white font-medium cursor-pointer">
          <img src={Call} alt="" />
          <p>Call us to book tests</p>
        </div>
        <div className="mx-6">
          <div className="flex justify-center gap-2 bg-[#0086ff] text-center rounded-lg py-3 text-white font-medium cursor-pointer">
            <img src={Whatsapp} alt="" className="w-4" />
            <p>Chat on Whatsapp</p>
          </div>
          <p className="text-xs pt-1 text-[#525252] italic">
            *On clicking, you allow Medico to message you over Whatsapp
          </p>
        </div>
      </section>
      <div className="bg-[#d9d9d9] py-0.5 mt-4"></div>

      <section className="my-2 px-6">
        <h1 className="font-medium text-[#0086ff] text-lg">Our Partner Labs</h1>
        <div className="flex my-4 gap-8">
          <div className="">
            <img src={Medico} alt="" />
            <p>Medico</p>
          </div>
          <div className="w">
            <img src={DrLal} alt="" />
            <p>Dr. Lal</p>
          </div>
          <div className="w">
            <img src={Pathkind} alt="" />
            <p>Path Kind</p>
          </div>
        </div>
      </section>

      <div className="bg-[#d9d9d9] py-0.5 mt-4"></div>

      <section className="p-4 rounded-md">
        <h2 className="text-lg text-[#292929] font-semibold mb-3 text-center">
          Why Book with us?
        </h2>
        <div className="flex gap-4 text-[#525252]">
          <img src={WhyBook1} alt="Home sample collection" />
          <div>
            <p className="font-medium">Home sample collection for FREE</p>
            <p className="leading-5 text-sm">
              A certified professional will collect your sample from your
              preferred location
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-4 text-[#525252]">
          <img src={WhyBook2} alt="Digital report" />
          <div>
            <p className="font-medium">Get digital report within 24 Hours</p>
            <p className="leading-5 text-sm">
              Our labs ensure turn-around-time of 24 hrs from specimen pickup
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-[#525252]">
          <img src={WhyBook3} alt="Affordable prices" />
          <div>
            <p className="font-medium">Offers and affordable prices</p>
            <p className="leading-5 text-sm">
              Get great discounts and offers on tests and packages
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#d9d9d9] py-0.5 mt-4 mb-28"></div>

      {/* Alert Section */}
      {showAlert && (
        <div className="fixed bottom-20 inset-x-16 mb-4 py-1 px-2 bg-green-400 text-white text-center rounded-md shadow-lg">
          Tests added to your cart!
        </div>
      )}

      <footer
        className={`fixed bottom-0 inset-x-5 mb-4 rounded-lg flex items-center text-white py-4 font-semibold text-lg cursor-pointer transition-colors duration-200 ${
          isAddedToCart
            ? "bg-[#00cccc] justify-center text-center px-auto"
            : "justify-between px-4 bg-gradient-to-br from-[#f403c9] to-[#37329a] font-semibold text-lg"
        }`}
        onClick={isAddedToCart ? handleViewCart : handleAddToCart}
      >
        {!isAddedToCart && (
          <div className="text-sm">
            {concern.tests?.length || 0} Tests | ₹{adjustedPrice}
          </div>
        )}
        <div className="flex items-center gap-2">
          <img src={Cart} alt="" />
          {isAddedToCart ? "View Cart" : "Add to Cart"}
        </div>
      </footer>
    </div>
  );
};

export default SpecialityLabTests;
