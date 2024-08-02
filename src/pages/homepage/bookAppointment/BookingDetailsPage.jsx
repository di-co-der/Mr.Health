import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import Header from "../../../components/common/Header";

//data
import { doctors } from "../../../data/doctors";

//assets
import Location from "../../../assets/svgs/Location.svg";
import ApplyCoupon from "../../../assets/svgs/ApplyCoupon.svg";
import BookingUser from "../../../assets/svgs/BookingUser.svg";
import BookingTimeIcon from "../../../assets/svgs/BookingTimeIcon.svg";
import Info from "../../../assets/svgs/Info.svg";
import Whatsapp from "../../../assets/svgs/Whatsapp.svg";

const BookingDetailsPage = () => {
  const { specialty, doctorName, doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handlePaymentClick = () => {
    navigate(
      `/book-appointment/${doctor.specialty
        .toLowerCase()
        .replace(/ /g, "-")}/${doctor.name
        .toLowerCase()
        .replace(/[\s.]+/g, "-")}/${doctor.id}/slot/booking/payment`
    );
  };

  return (
    <div className="h-screen max-w-sm mx-auto">
      <header className="pt-[60px]">
        <Header title="Booking Details" onClick={handleAppointmentClick} />
      </header>
      <main className="flex-1 pb-28 overflow-y-auto py-4">
        <div className="flex items-center mb-4 mx-4">
          <img
            className="rounded-full mr-4 w-12 h-12"
            src={doctor.image}
            alt="Doctor"
          />
          <div>
            <h3 className="text-lg font-medium">{doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>
          </div>
          <div className="ml-auto">
            <img src={Location} className="mx-auto" alt="" />
            <div className="text-blue-500 font-medium">{doctor.location}</div>
          </div>
        </div>
        <div className="border-b border-gray-300 mb-4 mx-4"></div>
        <div className=" mx-4">
          <div className="mb-4">
            <div className="flex gap-2 text-sm mb-2">
              <img src={BookingUser} alt="" />
              <p className="text-[#7a7a7a]">
                In-clinic appointment booking for
              </p>
            </div>
            <div className="flex items-center justify-between pr-4">
              <p className="font-medium flex gap-2 items-center pl-2 text-lg">
                Udit Mahajan, M, 22 yrs
              </p>
              <button className="text-[#00cccc] ml-2 font-medium">
                Change
              </button>
            </div>
          </div>
          <div className="border border-gray-300 mb-4"></div>

          <div className="mb-4">
            <div className="flex gap-2 text-sm mb-2 ">
              <img src={BookingTimeIcon} alt="" />
              <p className="text-[#7a7a7a]">Appointment Time</p>
            </div>
            <p className="font-medium flex gap-2 items-center pl-2 text-lg">
              Sat, 9 Sep 11:30 AM{" "}
              <span className="text-lg text-gray-500 font-normal">|</span>
              <span className="text-gray-500 flex gap-1 items-center font-normal text-sm">
                <img src={BookingTimeIcon} className="w-4" alt="" />
                Today
              </span>
            </p>
          </div>
        </div>
        <div className="border-4 mb-4"></div>
        <div className="mb-4 mx-4">
          <div className="flex items-center justify-between border-2 border-[#7a7a7a8e] rounded-lg px-2 py-2">
            <div className="flex items-start gap-3">
              <img src={ApplyCoupon} className="mt-1" alt="" />
              <div className="">
                <p className="font-medium bg-blue-40 mb-0.5">Apply Coupon</p>
                <p className="text-[#525252] text-sm bg-yelow-400 font-normal">
                  Unlock Offers & Discounts with coupon codes
                </p>
              </div>
            </div>
            <button className="text-[#00cccc] font-medium mr-3">APPLY</button>
          </div>
        </div>
        <div className="mb-4 mx-4">
          <h4 className="font-medium">Bill Details</h4>
          <div className=" pl-3 text-[#7a7a7a]">
            <div className="flex justify-between mt-2">
              <p>Consultation Fee</p>
              <p>{doctor.fees}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="flex items-center gap-2">
                Service Fee & Tax
                <img src={Info} alt="" />
              </p>
              <div className="flex items-center gap-2"> 
                <p className="line-through">₹ 49</p>
                <p className="text-green-500">FREE</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 mb-3 mt-3"></div>

          <div className="flex justify-between mt-2 font-medium pl-3">
            <p>Total Payable</p>
            <p>{doctor.fees}</p>
          </div>
          <div className="text-[#25d366] text-center mt-4 bg-[#f0fcf4] py-1 inline-flex ml-3 px-2 text-sm font-normal border border-dashed border-[#25d366] rounded-md">
            You have saved ₹ 49 on this appointment
          </div>
        </div>

        <div className="border-4 mb-4"></div>

        <div className="mb-4 mx-4 flex items-center text-black">
          <input type="checkbox" id="whatsapp" className="mr-2" />
          <label htmlFor="whatsapp" className="text-black flex gap-2 items-start">
            Get notification on Whatsapp
            <img src={Whatsapp} alt="" />
          </label>
        </div>
        <div className="mb-4 mx-4 text-[#7a7a7a] text-sm">
          <p className="mb-2">*Updates will be sent to +91 9876543210</p>
          <p>*By booking the appointment, you agree to Medico's <span className="underline text-[#00cccc] cursor-pointer">Terms and Conditions</span>. You can also pay for this appointment by selecting offline mode.</p>
        </div>
      </main>

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-2 pb-3 px-8 bg-[#fafafa]">
        <div className="flex justify-start items-center gap-3 font-medium mb-2">
          <p className="text-[#8f8f8f] text-sm">Total amount</p>
          <p className="text-lg text-[#3d3d3d]">{doctor.fees}</p>
        </div>
        <button
          className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
          onClick={handlePaymentClick}
        >
          Proceed To Pay
        </button>
      </footer>
    </div>
  );
};

export default BookingDetailsPage;
