import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import MyAppointmentInClinic from "../../src/assets/svgs/MyAppointmentInClinic.svg";
import MyAppointmentLocation from "../../src/assets/svgs/MyAppointmentLocation.svg";
import MyAppointmentDoctorImage from "../../src/assets/svgs/MyAppointmentDoctorImage.svg";
import BackArrow from "../../src/assets/svgs/BackArrow.svg";
import AboveArrowIcon from "../../src/assets/svgs/AboveArrowIcon.svg";

import "tailwindcss/tailwind.css";

import { appointmentsData } from "../data/appointmentsData";

const DoctorCard = ({ doctor }) => (
  <div className="group">
    <motion.div
      className="px-4 py-2 rounded-lg outline outline-2 outline-[#d9d9d9] mb-4 group-hover:outline-gray-400 transition-all duration-300"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <div className="flex items-center justify-between py-1 pb-2 border-b-2 border-[#d9d9d9] group-hover:border-b-2 group-hover:border-gray-400 outline-[#d9d9d9] transition-colors duration-300">
          <div className="flex items-center gap-3">
            <img src={MyAppointmentInClinic} alt="" />
            {doctor.date && (
              <div className="text-sm text-black font-medium">
                {doctor.date}
              </div>
            )}
          </div>
          <div className="rounded-2xl px-5 py-[1px] text-[#00cccc] bg-[#ccf5f5] font-medium">
            1 day left
          </div>
        </div>
        <div className="pt-2 pb-1 flex items-center ">
          <div className="mr-4">
            <img
              src={MyAppointmentDoctorImage}
              alt={doctor.name}
              className="w-14 rounded-full"
            />
          </div>
          <div className="flex items-center grow ">
            <div className="">
              <div className="font-normal">{doctor.name}</div>
              <div className="text-sm text-gray-500">{doctor.specialty}</div>
            </div>
          </div>
          <div className="flex flex-col flex-none">
            <img
              src={MyAppointmentLocation}
              alt="MyAppointmentLocation"
              className="h-6"
            />{" "}
            <div className="text-sm font-medium text-gray-500">
              {doctor.distance}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const NoAppointmentCard = () => (
  <motion.div
    className="p-3 rounded-lg outline outline-2 outline-[#d9d9d9] hover:outline-gray-400 transition-all duration-300 mb-4 flex flex-col items-center justify-center text-gray-500"
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <FaRegCalendarAlt className="text-4xl mb-2" />
    <div className="text-lg font-semibold">No appointment scheduled</div>
    <div className="text-sm mt-1">
      Schedule your appointments to see them here.
    </div>
  </motion.div>
);

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [collapsedSections, setCollapsedSections] = useState({
    inClinic: false,
    online: true,
    lab: true,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const [isScaled, setIsScaled] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setIsScaled(true);
  };

  return (
    <div className="max-w-sm mx-auto outline-none">
      <div className="flex items-center justify-between p-4 mb-4 border-b bg-zinc-50">
        <button
          onClick={handleBack}
          className={`text-3xl hover:scale-x-110 transition-all ${
            isScaled ? "scale-75" : ""
          }`}
        >
          <img src={BackArrow} alt="BackArrow" />
        </button>

        <h1 className="text-lg font-semibold mx-auto">My Appointments</h1>

        <div className="ml-11"></div>
      </div>

      <div className="px-4">
        <div className="flex justify-around mb-4 bg-[#ececec] rounded-lg">
          {["missed", "upcoming", "completed"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 my-1 text-[#0086ff] rounded-md outline-none font-medium ${
                activeTab === tab
                  ? "bg-white drop-shadow-sm px-6 transition-all ease-linear duration-200 hover:bg-zinc-50"
                  : "hover:bg-zinc-100 hover:text-blue-500 transition-all duration-200 delay-75"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ display: activeTab === "upcoming" ? "block" : "none" }}
          className="mt-8"
        >
          {["inClinic", "online", "lab"].map((section) => (
            <div key={section}>
              <button
                className="w-full text-left font-medium mt-3 flex justify-between items-center outline-none"
                onClick={() => toggleSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
                Appointments
                <span
                  className={`transform transition-transform duration-500 ${
                    collapsedSections[section] ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={AboveArrowIcon} alt="AboveArrowIcon" />
                </span>
              </button>
              <motion.div
                initial="collapsed"
                animate={collapsedSections[section] ? "collapsed" : "open"}
                className="mt-4"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {appointmentsData[activeTab][section].length > 0 ? (
                  appointmentsData[activeTab][section].map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))
                ) : (
                  <NoAppointmentCard />
                )}
              </motion.div>
              <div className="w-full border-y-[#d9d9d9] border rounded-xl transform transition-transform duration-75"></div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ display: activeTab === "missed" ? "block" : "none" }}
          className="mt-8"
        >
          {["inClinic", "online", "lab"].map((section) => (
            <div key={section}>
              <button
                className="w-full text-left font-medium mt-3 flex justify-between items-center outline-none"
                onClick={() => toggleSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
                Appointments
                <span
                  className={`transform transition-transform duration-500 ${
                    collapsedSections[section] ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={AboveArrowIcon} alt="AboveArrowIcon" />
                </span>
              </button>
              <motion.div
                initial="collapsed"
                animate={collapsedSections[section] ? "collapsed" : "open"}
                className="mt-4"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {appointmentsData[activeTab][section].length > 0 ? (
                  appointmentsData[activeTab][section].map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))
                ) : (
                  <NoAppointmentCard />
                )}
              </motion.div>
              <div className="w-full border-y-[#d9d9d9] border rounded-xl"></div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ display: activeTab === "completed" ? "block" : "none" }}
          className="mt-8"
        >
          {["inClinic", "online", "lab"].map((section) => (
            <div key={section}>
              <button
                className="w-full text-left font-medium mt-3 flex justify-between items-center outline-none"
                onClick={() => toggleSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
                Appointments
                <span
                  className={`transform transition-transform duration-500 ${
                    collapsedSections[section] ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={AboveArrowIcon} alt="AboveArrowIcon" />
                </span>
              </button>
              <motion.div
                initial="collapsed"
                animate={collapsedSections[section] ? "collapsed" : "open"}
                className="mt-4"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {appointmentsData[activeTab][section].length > 0 ? (
                  appointmentsData[activeTab][section].map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))
                ) : (
                  <NoAppointmentCard />
                )}
              </motion.div>
              <div className="w-full border-y-[#d9d9d9] border rounded-xl"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MyAppointments;
