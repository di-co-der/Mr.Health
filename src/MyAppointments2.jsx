import React, { useState } from "react";

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const appointments = [
    {
      date: "9 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "upcoming",
      daysLeft: "1 day left",
    },
    {
      date: "25 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "upcoming",
    },
    {
      date: "9 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "missed",
      daysLeft: "1 day left",
    },
    {
      date: "25 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "missed",
    },
    {
      date: "9 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "completed",
      daysLeft: "1 day left",
    },
    {
      date: "25 Sep, 11:45 AM",
      doctor: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      distance: "589 m",
      status: "completed",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-around mb-4">
        <button
          className={`py-2 px-4 ${
            selectedTab === "missed" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedTab("missed")}
        >
          Missed
        </button>
        <button
          className={`py-2 px-4 ${
            selectedTab === "upcoming" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`py-2 px-4 ${
            selectedTab === "completed" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedTab("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {selectedTab === "upcoming" &&
          appointments
            .filter((appointment) => appointment.status === "upcoming")
            .map((appointment, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-600">{appointment.date}</div>
                    <div className="text-xl font-bold">
                      {appointment.doctor}
                    </div>
                    <div className="text-gray-600">{appointment.specialty}</div>
                    <div className="text-gray-600">{appointment.distance}</div>
                  </div>
                  <div className="text-blue-500">
                    {appointment.daysLeft && (
                      <span className="bg-blue-100 text-blue-500 py-1 px-2 rounded-full">
                        {appointment.daysLeft}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Appointments;
