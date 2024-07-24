import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackArrowIcon from "../assets/BackArrow.svg";
import MyAppointmentsIcon from "../assets/MyAppointmentsIcon.svg";
// import Notification from "./Notification";

const Header = ({ title = "Book Appointment" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScaled, setIsScaled] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);

  const handleBack = () => {
    // if (location.pathname === "/") {
    // alert("Already on home page");
    // setShowNotification(true);
    //   console.log("Already on homepage");
    //   return;
    // }

    navigate(-1);
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 200);
  };

  return (
    <>
      {/* {showNotification && (
        <Notification
          message="Already on home page"
          onClose={() => setShowNotification(false)}
        />
      )} */}
      <div className="flex items-center justify-between p-4 border-b bg-zinc-50">
        <button
          onClick={handleBack}
          className={`text-3xl hover:scale-x-110 transition-all ${
            isScaled ? "scale-75" : " "
          }`}
        >
          <img src={BackArrowIcon} alt="BackArrowIcon" className="w-6" />{" "}
        </button>

        <h1 className="text-lg font-semibold">{title}</h1>

        <button
          className={`text-3xl hover:scale-105 transition-all ${
            isScaled ? "scale-75" : " "
          }`}
        >
          <img src={MyAppointmentsIcon} alt="MyAppointmentsIcon" className="w-6" />{" "}
        </button>
      </div>
    </>
  );
};

export default Header;
