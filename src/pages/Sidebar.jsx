import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// assets
import Profile from "../assets/svgs/Profile.svg";
import HelpCenter from "../assets/svgs/HelpCenter.svg";
import Settings from "../assets/svgs/Settings.svg";
import Likeus from "../assets/svgs/Likeus.svg";
import AreyouDoctor from "../assets/svgs/AreYouDoctor.svg";

import Aabha from "../assets/svgs/Aabha.svg";
import MyAppointments from "../assets/svgs/MyAppointments.svg";
import LabTestBookings from "../assets/svgs/LabTestBookings.svg";
import MyDoctors from "../assets/svgs/MyDoctors.svg";
import MyOrders from "../assets/svgs/MyOrders.svg";
import MedicalRecords from "../assets/svgs/MedicalRecords.svg";
import InsurancePolicy from "../assets/svgs/InsurancePolicy.svg";
import HealthCash from "../assets/svgs/HealthCash.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleMedicalRecordsClick = () => {
    navigate("/health-records");
    onClose(); // Close the sidebar after navigation
  };

  return (
    <>
      <div
        className={`fixed inset-0 w-[390px] h-[100vh] bg-black bg-opacity-50 z-[100] transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full opacity-0"
        } transition-transform duration-500 ease-in-out z-[10000]`}
      >
        <div className="flex items-center justify-between pl-3 py-4 pr-4 border-b-2">
          <div className="flex gap-2">
            <img
              src={Profile}
              alt="Profile"
              className="bg-yellow-300 rounded-full"
            />
            <div className="text-lg font-semibold">
              Udit Mahajan
              <p className="text-sm text-[#00cccc] cursor-pointer">
                View and edit profile
              </p>
            </div>
          </div>
          <button onClick={onClose}>
            <IoClose className="text-gray-700 text-2xl" />
          </button>
        </div>
        <div className="bg-white pt-2 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
          <ul className="pb-2">
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={Aabha} alt="" />
              <span className="ml-3 text-[#0086ff]">ABHA</span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={MyAppointments} alt="" />
              <span className="ml-3 text-[#0086ff]">
                My Appointments
              </span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={LabTestBookings} alt="" />
              <span className="ml-3 text-[#0086ff]">
                Lab Test Bookings
              </span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={MyDoctors} alt="" />
              <span className="ml-3 text-[#0086ff]">
                My Doctors
              </span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={MyOrders} alt="" />
              <span className="ml-3 text-[#0086ff]">
                My Orders
              </span>
            </li>
            <li
              className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointe cursor-pointerr"
              onClick={handleMedicalRecordsClick}
            >
              <img src={MedicalRecords} alt="" />
              <span className="ml-3 text-[#0086ff]">My Medical Records</span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={InsurancePolicy} alt="" />
              <span className="ml-3 text-[#0086ff]">
                My Insurance Policy
              </span>
            </li>
            <li className="hover:bg-gray-100 py-4 my-1 mx-2 rounded-md flex items-center px-2 cursor-pointer">
              <img src={HealthCash} alt="" />
              <span className="ml-3 text-[#0086ff]">
                Payments & HealthCash
              </span>
            </li>
          </ul>
          <div className="bg-white py-4 pb-24 border-t-4 border-gray-200">
            <ul className="pb-3">
              <li className="hover:bg-gray-100 py-2 my-1 mx-2 rounded-md flex items-center px-4">
                <img src={HelpCenter} alt="" />
                <span className="ml-3 text-gray-700">
                  Help Center
                </span>
              </li>
              <li className="hover:bg-gray-100 py-2 my-1 mx-2 rounded-md flex items-center px-4">
                <img src={Settings} alt="" />
                <span className="ml-3 text-gray-700">
                  Settings
                </span>
              </li>
              <li className="hover:bg-gray-100 py-2 my-1 mx-2 rounded-md flex items-center px-4">
                <img src={Likeus} alt="" />
                <span className="ml-3 text-gray-700">
                  Like us? Give us Feedback
                </span>
              </li>
              <li className="hover:bg-gray-100 py-2 my-1 mx-2 rounded-md flex items-center px-4">
                <img src={AreyouDoctor} alt="" />
                <span className="ml-3 text-gray-700">
                  Are you a doctor?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
};

export default Sidebar;
