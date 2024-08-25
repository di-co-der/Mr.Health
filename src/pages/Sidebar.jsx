import React from "react";

import { IoClose } from "react-icons/io5";

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
            <img src={Profile} alt="Profile" className="bg-yellow-300 rounded-full" />
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
        <div className="bg-white py-4 pt-6 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
          <ul className="space-y-8 pb-6">
            <li className="flex items-center px-4">
              <span className="text-purple-600 text-xl"><img src={Aabha} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">ABHA</span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-blue-600 text-xl"><img src={MyAppointments} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                My Appointments
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-pink-600 text-xl"><img src={LabTestBookings} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                Lab Test Bookings
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-purple-600 text-xl"><img src={MyDoctors} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                My Doctors
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-pink-600 text-xl"><img src={MyOrders} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                My Orders
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-purple-600 text-xl"><img src={MedicalRecords} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                My Medical Records
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-purple-600 text-xl"><img src={InsurancePolicy} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                My Insurance Policy
              </span>
            </li>
            <li className="flex items-center px-4">
              <span className="text-purple-600 text-xl"><img src={HealthCash} alt="" /></span>
              <span className="ml-3 text-[#0086ff] cursor-pointer">
                Payments & HealthCash
              </span>
            </li>
          </ul>
          <div className="bg-white py-4 pb-24 border-t-4 border-gray-200">
            <ul className="space-y-5 pb-3">
              <li className="flex items-center px-4">
                <span className="text-blue-600 text-xl"><img src={HelpCenter} alt="" /></span>
                <span className="ml-3 text-gray-700 cursor-pointer">
                  Help Center
                </span>
              </li>
              <li className="flex items-center px-4">
                <span className="text-gray-600 text-xl"><img src={Settings} alt="" /></span>
                <span className="ml-3 text-gray-700 cursor-pointer">
                  Settings
                </span>
              </li>
              <li className="flex items-center px-4">
                <span className="text-blue-600 text-xl"><img src={Likeus} alt="" /></span>
                <span className="ml-3 text-gray-700 cursor-pointer">
                  Like us? Give us Feedback
                </span>
              </li>
              <li className="flex items-center px-4">
                <span className="text-blue-600 text-xl"><img src={AreyouDoctor} alt="" /></span>
                <span className="ml-3 text-gray-700 cursor-pointer">
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