import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Header from "../../components/common/Header";
import SearchBar from "../../components/common/SearchBar";
import LocationDropdown from "../../components/bookAppointmentPage/LocationDropdown";
import ImageSlider from "../../components/homePage/ImageSlider";

// assets
import WhyBook1 from "../../assets/svgs/WhyBook1.svg";
import WhyBook2 from "../../assets/svgs/WhyBook2.svg";
import WhyBook3 from "../../assets/svgs/WhyBook3.svg";

// data
import { labTests } from "../../data/labTests";

const BookLabTests = () => {
  const [showAllConcerns, setShowAllConcerns] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (term) => setSearchTerm(term);

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleConcernClick = (concernName) => {
    const selectedConcern = labTests.concerns.find(
      (concern) => concern.name === concernName
    );

    // Pass the selectedConcern data via state
    navigate(
      `/book-lab-tests/${concernName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")}`,
      { state: { concern: selectedConcern } }
    );
  };

  const displayedConcerns = showAllConcerns
    ? labTests.concerns
    : labTests.concerns.slice(0, 8);

  const displayedPackages = showAllPackages
    ? labTests.packages
    : labTests.packages.slice(0, 4);

  const handleSeeAllConcernsClick = () => {
    setShowAllConcerns(!showAllConcerns);
  };

  const handleSeeAllPackagesClick = () => {
    setShowAllPackages(!showAllPackages);
  };

  return (
    <div className="p-4 max-w-sm mx-auto min-h-screen">
      <header className="pt-10">
        <Header title="Book Lab Tests" onClick={handleAppointmentClick} />
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
      <SearchBar onSearch={handleSearch} />

      {/* Health Concern Section */}
      <section className="mb-4 pt-2 border-t-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[#0086ff] text-lg font-semibold pl-3">
            Find Tests by Health Concern
          </h2>
          <div
            className="text-[#00cccc] font-medium cursor-pointer"
            onClick={handleSeeAllConcernsClick}
          >
            {showAllConcerns ? "See Less" : "See All"}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {displayedConcerns.map((concern, index) => (
            <div
              key={index}
              className="group text-center py-1 cursor-pointer"
              onClick={() => handleConcernClick(concern.name)}
            >
              <img
                src={concern.icon}
                alt={concern.name}
                className="mx-auto w-14 h-14 rounded-full group-hover:scale-95"
              />
              <p className="text-sm px-2">{concern.name}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageSlider />

      {/* Health Packages Section */}
      <section className="mb-4 mt-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[#0086ff] text-lg font-semibold">
            Popular Health Packages
          </h2>
          <div
            className="text-[#00cccc] font-medium cursor-pointer"
            onClick={handleSeeAllPackagesClick}
          >
            {showAllPackages ? "See Less" : "See All"}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {displayedPackages.map((pkg, index) => (
            <div key={index} className="cursor-pointer">
              <div className="">
                <div className="absolute mt-4">
                  <p className="bg-[#df3020] text-white text-sm px-3 py-0.5 pr-4">
                    {pkg.discount}% OFF
                  </p>
                  <div className="pl-3 mt-1.5 font-medium">
                    <p className="line-through text-purple-800">
                      ₹{pkg.originalPrice}
                    </p>
                    <p className="text-purple-800 text-lg">
                      ₹{pkg.discountedPrice}
                    </p>
                  </div>
                </div>
                <div className="h-36">
                  <img
                    src={pkg.image}
                    alt=""
                    className="rounded-t-xl w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#0086ff] rounded-b-xl px-3 py-2">
                  <h3 className="text-sm text-white text-wrap font-semibold leading-5">
                    {pkg.name}
                  </h3>
                  <p className="text-xs italic text-white pt-1 pb-0.5">
                    *Include {pkg.testsIncluded} tests
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#d9d9d9] py-0.5 mt-4"></div>

      {/* Why Book With Us Section */}
      <section className="p-4 rounded-md ">
        <h2 className="text-lg text-[#292929] font-semibold mb-3 text-center">
          Why Book with us?
        </h2>
        <div className="flex gap-4 text-[#525252]">
          <img src={WhyBook1} alt="" />
          <div className="">
            <p className="font-medium">Home sample collection for FREE</p>
            <p className="leading-5 text-sm">
              A certified professional will collect your sample from your
              preferred location
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-4 text-[#525252]">
          <img src={WhyBook2} alt="" />
          <div className="">
            <p className="font-medium">Get digital report within 24 Hours</p>
            <p className="leading-5 text-sm">
              Our labs ensure turn-around-time of 24 hrs from specimen pickup
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-[#525252]">
          <img src={WhyBook3} alt="" />
          <div className="">
            <p className="font-medium">Offers and affordable prices</p>
            <p className="leading-5 text-sm">
              Get great discounts and offers on tests and packages
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#d9d9d9] py-0.5 mb-4"></div>
    </div>
  );
};

export default BookLabTests;
