import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { BiClinic } from "react-icons/bi";

//components
import Header from "../../../components/common/Header";
import MapComponent from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/MapComponent";
import ConfirmationModal from "../../../components/discoverHospitalPage/bookSlotPage/bookingHospitalPage/hospitalPaymentPage/hospitalConfirmationPage/ConfirmationModal.jsx";
import CancellationAnimation from "../../../components/discoverHospitalPage/bookSlotPage/bookingHospitalPage/hospitalPaymentPage/hospitalConfirmationPage/CancellationAnimation.jsx";

//data
import hospitals from "../../../data/hospitals";

//assets
import NeedHelp from "../../../assets/svgs/NeedHelp.svg";
import BookingTimeIcon from "../../../assets/svgs/BookingTimeIcon.svg";
import BookingUser from "../../../assets/svgs/BookingUser.svg";
import Tick from "../../../assets/svgs/Tick.svg";
import Cross from "../../../assets/svgs/Cross.svg";

function HospitalConfirmationPage() {
  const { state } = useLocation();
  const { selectedDate, selectedSlot } = state || {};

  const { hospitalName, hospitalId } = useParams();
  const hospital = hospitals.find((doc) => doc.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found!</div>;
  }

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showCancellationAnimation, setShowCancellationAnimation] =
    useState(false);
  const [modalType, setModalType] = useState("");

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCancelClick = () => {
    setModalType("cancel");
    setShowModal(true);
  };

  const handleRescheduleClick = () => {
    setModalType("reschedule");
    setShowModal(true);
  };

  const confirmCancellation = () => {
    setShowModal(false);
    setShowCancellationAnimation(true);
    setTimeout(() => {
      setShowCancellationAnimation(false);
      navigate("/");
    }, 2000);
  };

  const confirmRescheduling = () => {
    setShowModal(false);
      navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot/`);
  };

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto">
      <header className="pt-[60px]">
        <Header title="Booking Confirmation" onClick={handleAppointmentClick} />
      </header>

      <main className="">
        <div className="pt-6 px-4 pb-6 border-b-4">
          <div className="flex items-center justify-center mb-4 text-[#25d366]">
            <div className="flex items-center justify-center rounded-full">
              <img src={Tick} alt="" className="pt-0.5" />
            </div>
            <span className="ml-2 text-lg font-semibold">
              Appointment Confirmed
            </span>
          </div>
          <p className="text-center text-gray-700 mb-6 px-8 text-sm">
            Your Appointment ID is <strong>11001</strong>. We have also sent the
            details of your appointment to your registered phone number.
          </p>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div className="mb-5">
              <div className="mb-2">
                <div className="flex gap-2 text-sm mb-1">
                  <img src={BookingTimeIcon} alt="" className="pt-0.5" />
                  <p className="text-[#7a7a7a]">Appointment Time</p>
                </div>
                <p className="flex gap-2 items-center font-medium pl-6 text-lg">
                  {selectedDate && selectedSlot ? (
                    <>
                      {getDateLabel(selectedDate)} {selectedSlot}
                    </>
                  ) : (
                    "Select a date and slot"
                  )}
                </p>
              </div>
              <div className="border border-gray-300 mb-4"></div>

              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="flex gap-2 text-sm mb-1">
                    <img src={BookingUser} alt="" />
                    <p className="text-[#7a7a7a]">Hospital's Name</p>
                  </div>
                  <div className="text-gray-900 pl-6 font-semibold flex items-center text-lg">
                    {hospital.name}
                  </div>
                </div>
                <img
                  src={hospital.image}
                  alt="hospital"
                  className="w-12 h-12 rounded-full mr-2"
                />
              </div>

              <div className="border border-gray-300 mb-4"></div>

              <div className="flex gap-2 text-sm mb-1">
                <BiClinic className="text-[#7a7a7a] my-auto w-4 h-4" />
                <p className="text-[#7a7a7a]">Clinic's Details</p>
              </div>

              <div className="text-gray-900 font-medium pl-6">
                {hospital.map}
              </div>
              <div className="mt-2">
                <div className="">
                  <div className="flex justify-center items-center gap-3 -z-10">
                    <MapComponent
                      coordinates={hospital.coordinates}
                      location={hospital.map}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-12">
              <button
                className="flex-1 text-[#7a7a7a] border-2 border-[#7a7a7a] py-2 rounded-lg"
                onClick={handleCancelClick}
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={Cross} alt="" />
                  <p>Cancel</p>
                </div>
              </button>
              <button
                className="flex-1 border-2 border-[#0086ff] text-[#0086ff] py-2 rounded-lg transition-all hover:bg-[#0086ff] hover:text-white"
                onClick={handleRescheduleClick}
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <ConfirmationModal
            type={modalType}
            onClose={() => setShowModal(false)}
            onConfirm={
              modalType === "cancel" ? confirmCancellation : confirmRescheduling
            }
            onCancel={() => setShowModal(false)}
            slot={`${selectedDate} - ${selectedSlot}`}
          />
        )}

        {showCancellationAnimation && <CancellationAnimation />}

        <div className="pl-4 py-5 pb-40 flex items-start gap-4">
          <img src={NeedHelp} className="pt-1" alt="" />
          <div className="">
            <h3 className="text-lg font-semibold">Need Help <span className="font-bold text-lg">?</span></h3>
            <p className="text-sm text-gray-500 leading-4">
              In case you cannot make it for the appointment, please cancel or
              reschedule the appointment, preferably 2 hours prior to the
              scheduled time.
            </p>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa]">
        <button
          className="w-full bg-[#00cccc] text-white py-2 rounded-lg hover:bg-[#02c1c1]"
          onClick={handleHomeClick}
        >
          Back to HomeScreen
        </button>
      </footer>
    </div>
  );
}

export default HospitalConfirmationPage;






// // import CheckCircle from '../../../assets/svgs/CheckCircle.svg'; // Custom success icon