import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const appointmentsData = {
  missed: {
    inClinic: [
      {
        id: 1,
        name: "Dr. John Doe",
        specialty: "Cardiologist",
        distance: "1 km",
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        specialty: "Dermatologist",
        distance: "2 km",
      },
    ],
    online: [
      {
        id: 3,
        name: "Dr. Emily Davis",
        specialty: "Pediatrician",
        distance: "Online",
      },
      {
        id: 4,
        name: "Dr. Michael Brown",
        specialty: "Psychiatrist",
        distance: "Online",
      },
    ],
    lab: [
      {
        id: 5,
        name: "Dr. Olivia Wilson",
        specialty: "Pathologist",
        distance: "3 km",
      },
      {
        id: 6,
        name: "Dr. William Johnson",
        specialty: "Radiologist",
        distance: "4 km",
      },
    ],
  },
  upcoming: {
    inClinic: [
      {
        id: 7,
        name: "Dr. Raja Selvarajan",
        specialty: "General Physician",
        distance: "589 m",
        date: "9 Sep, 11:45 AM",
      },
      {
        id: 8,
        name: "Dr. Raja Selvarajan",
        specialty: "General Physician",
        distance: "589 m",
        date: "25 Sep, 11:45 AM",
      },
    ],
    online: [
      {
        id: 9,
        name: "Dr. Anna Lee",
        specialty: "Neurologist",
        distance: "Online",
      },
      {
        id: 10,
        name: "Dr. James White",
        specialty: "Orthopedic",
        distance: "Online",
      },
    ],
    lab: [
      {
        id: 11,
        name: "Dr. Linda Green",
        specialty: "Pathologist",
        distance: "5 km",
      },
      {
        id: 12,
        name: "Dr. Chris Black",
        specialty: "Radiologist",
        distance: "6 km",
      },
    ],
  },
  completed: {
    inClinic: [
      {
        id: 13,
        name: "Dr. Nancy Thomas",
        specialty: "Dentist",
        distance: "7 km",
      },
      {
        id: 14,
        name: "Dr. Karen Scott",
        specialty: "Optometrist",
        distance: "8 km",
      },
    ],
    online: [
      {
        id: 15,
        name: "Dr. Robert Harris",
        specialty: "Psychologist",
        distance: "Online",
      },
      {
        id: 16,
        name: "Dr. Jessica King",
        specialty: "Gynecologist",
        distance: "Online",
      },
    ],
    lab: [
      {
        id: 17,
        name: "Dr. Barbara Hill",
        specialty: "Pathologist",
        distance: "9 km",
      },
      {
        id: 18,
        name: "Dr. Patricia Adams",
        specialty: "Radiologist",
        distance: "10 km",
      },
    ],
  },
};

const DoctorCard = ({ doctor }) => (
  <div className="p-4 bg-white rounded-lg shadow-md mb-2 flex items-center">
    <div className="flex-shrink-0 mr-4">
      <img
        src="doctor-placeholder.png"
        alt={doctor.name}
        className="w-12 h-12 rounded-full"
      />
    </div>
    <div>
      <div className="font-bold">{doctor.name}</div>
      <div className="text-sm text-gray-500">{doctor.specialty}</div>
      <div className="text-sm text-gray-500">{doctor.distance}</div>
      {doctor.date && (
        <div className="text-sm text-blue-500">{doctor.date}</div>
      )}
    </div>
  </div>
);

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [collapsedSections, setCollapsedSections] = useState({
    inClinic: false,
    online: false,
    lab: false,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <button className="mr-2 text-blue-500">&lt; Back</button>
        <h1 className="text-xl font-bold">My Appointments</h1>
      </div>
      <div className="flex justify-around mb-4 bg-gray-200">
        {["missed", "upcoming", "completed"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 my-1 ${
              activeTab === tab
                ? "rounded-md bg-white shadow-md"
                : "text-gray-500"
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
        style={{ display: activeTab === "missed" ? "block" : "none" }}
      >
        {["inClinic", "online", "lab"].map((section) => (
          <div key={section}>
            <button
              className="w-full text-left font-bold mb-2"
              onClick={() => toggleSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} Appointments
            </button>
            <motion.div
              initial="collapsed"
              animate={collapsedSections[section] ? "open" : "collapsed"}
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {appointmentsData[activeTab][section].map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
      {/* Repeat the above motion.div for 'upcoming' and 'completed' tabs */}
    </div>
  );
};

export default Appointments;

  
