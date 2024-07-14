import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
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
          className={`text-3xl hover:scale-x-110 ${
            isScaled ? "scale-50" : " "
          }`}
        >
          <IoIosArrowRoundBack />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
        <button className="text-2xl">
          <MdAssignmentAdd />
        </button>
      </div>
    </>
  );
};

export default Header;
