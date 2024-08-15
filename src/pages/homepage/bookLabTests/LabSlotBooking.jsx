import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../../components/common/Header";
import ConfirmationModal from "../../../components/discoverHospitalPage/bookSlotPage/ConfirmationModal";

// assets
import SunIcon from "../../../assets/svgs/SunIcon.svg";
import AfternoonIcon from "../../../assets/svgs/AfternoonIcon.svg";
import EveningIcon from "../../../assets/svgs/EveningIcon.svg";

// data
import slotsData from "../../../data/slotsData";

const TemporaryAlert = ({ message }) => (
  <div className="fixed bottom-20 inset-x-0 flex items-center justify-center z-[10000]">
    <div className="bg-red-50 border border-red-600 text-red-700 text-md font-normal py-2 px-4 rounded-lg shadow-lg opacity-90">
      {message}
    </div>
  </div>
);

const LabSlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState("2024-09-09");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTimeout, setAlertTimeout] = useState(null);

  const hospitalSlots = slotsData[1] || {};
  const slots = hospitalSlots[selectedDate] || {};

  const handleSlotSelect = (slot) => {
    if (selectedSlot === slot) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slot);
    }
  };

  const navigate = useNavigate();

  const handleBooking = () => {
    if (!selectedSlot) {
      setShowAlert(true);
      if (alertTimeout) clearTimeout(alertTimeout);
      setAlertTimeout(setTimeout(() => setShowAlert(false), 2000));
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmBooking = () => {
    setShowModal(false);
    navigate("/book-lab-tests/slot/booking-confirmation");
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const getAvailableSlotCount = (date) => {
    const slots = hospitalSlots[date] || {};
    return (
      (slots.morning?.length || 0) +
      (slots.afternoon?.length || 0) +
      (slots.evening?.length || 0)
    );
  };

  const generateAvailableDays = () => {
    const availableDays = Object.keys(hospitalSlots).map((date) => ({
      date,
      dayName: hospitalSlots[date].dayName,
    }));

    if (availableDays.length > 0) {
      availableDays[0].dayName = "Today";
      if (availableDays.length > 1) {
        availableDays[1].dayName = "Tomorrow";
      }
    }

    return availableDays;
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", day: "numeric", month: "short" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen max-w-sm mx-auto items-center">
      <header className="pt-[64px]">
        <Header title="Slot Booking" onClick={handleAppointmentClick} />
      </header>

      <div>
        <div className="px-4 mt-4">
          <h3 className="text-md font-semibold mb-2 text-[#0086ff]">
            Choose your Slot
          </h3>

          <div className="overflow-hidden">
            <div className="flex overflow-x-auto whitespace-nowrap space-x-3 py-1 px-2 hide-scrollbar">
              {generateAvailableDays().map(({ date, dayName }) => (
                <div
                  key={date}
                  onClick={() => handleDateChange(date)}
                  className={`text-sm px-3 py-1 rounded-md cursor-pointer ${
                    selectedDate === date
                      ? "bg-[#e5f9f9] border border-[#00cccc]"
                      : "border border-gray-400"
                  }`}
                >
                  <div className="font-semibold">
                    {dayName}, {new Date(date).getDate()}{" "}
                    {new Date(date).toLocaleString("default", {
                      month: "short",
                    })}
                  </div>
                  <div className="text-xs font-medium text-[#25d366]">
                    {getAvailableSlotCount(date) === 0 ? (
                      <span className="text-[#8f8f8f] font-normal">
                        No slots available
                      </span>
                    ) : (
                      `${getAvailableSlotCount(date)} slots available`
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display selected date */}
          <div className="mt-4 text-center text-lg font-semibold ">
            {selectedDate
              ? `${formatDate(selectedDate)}`
              : "Select a date to see available slots"}
          </div>

          {/* Slots */}
          <div className="mt-2 flex items-start gap-2">
            <img src={SunIcon} alt="" className="" />
            <div className="">
              <div className="mb-2 font-medium text-sm">Morning</div>
              <div className="grid grid-cols-3 gap-3">
                {slots.morning && slots.morning.length > 0 ? (
                  slots.morning.map((slot, index) => (
                    <button
                      key={index}
                      className={`text-sm px-3 py-1 rounded-xl ${
                        selectedSlot === slot
                          ? "bg-[#e5f9f9] border border-[#00cccc]"
                          : "bg-white border border-[#a3a3a3]"
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))
                ) : (
                  <div className="text-gray-500 w-60 text-sm">
                    No slots available
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2">
            <img src={AfternoonIcon} alt="" className="" />
            <div className="">
              <div className="mb-2 font-medium text-sm">Afternoon</div>
              <div className="grid grid-cols-3 gap-3">
                {slots.afternoon && slots.afternoon.length > 0 ? (
                  slots.afternoon.map((slot, index) => (
                    <button
                      key={index}
                      className={`text-sm px-3 py-1 rounded-xl ${
                        selectedSlot === slot
                          ? "bg-[#e5f9f9] border border-[#00cccc]"
                          : "bg-white border border-[#a3a3a3]"
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))
                ) : (
                  <div className="text-gray-500 w-60 text-sm">
                    No slots available
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2">
            <img src={EveningIcon} alt="" className="" />
            <div className="">
              <div className="mb-2 font-medium text-sm">Evening</div>
              <div className="grid grid-cols-3 gap-3">
                {slots.evening && slots.evening.length > 0 ? (
                  slots.evening.map((slot, index) => (
                    <button
                      key={index}
                      className={`text-sm px-3 py-1 rounded-xl ${
                        selectedSlot === slot
                          ? "bg-[#e5f9f9] border border-[#00cccc]"
                          : "bg-white border border-[#a3a3a3]"
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))
                ) : (
                  <div className="text-gray-500 w-60 text-sm">
                    No slots available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa] z-[10000]">
        <button
          className="w-full text-white py-2 rounded-lg bg-[#0086ff] hover:bg-[#0080ee]"
          onClick={handleBooking}
          // disabled={!selectedSlot}
        >
          Confirm Booking
        </button>
      </footer>

      {showModal && (
        <ConfirmationModal
          onConfirm={handleConfirmBooking}
          onClose={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          slot={selectedSlot}
        />
      )}

      {showAlert && <TemporaryAlert message="Please select a slot." />}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default LabSlotBooking;
