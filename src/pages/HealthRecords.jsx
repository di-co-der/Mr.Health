import React from "react";

// components
import Header from "../components/common/Header";

import { MdKeyboardArrowRight } from "react-icons/md";

// assets
import HRecord1 from "../assets/svgs/HRecord1.svg";
import HRecord2 from "../assets/svgs/HRecord2.svg";
import HRecord3 from "../assets/svgs/HRecord3.svg";
import HRecord4 from "../assets/svgs/HRecord4.svg";
import HRecord5 from "../assets/svgs/HRecord5.svg";
import HRecord6 from "../assets/svgs/HRecord6.svg";
import HRecord7 from "../assets/svgs/HRecord7.svg";
import RegularIcon from "../assets/svgs/RegularIcon.svg";
import ShareIcon from "../assets/svgs/ShareIcon.svg";
import DownloadIcon from "../assets/svgs/DownloadIcon.svg";
import Calendar from "../assets/svgs/Calendar.svg";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor_image_url.png";
import SearchBar from "../components/common/SearchBar";

const MyHealthRecords = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-sm mx-auto bg-white">
        <header className="pt-[56px]">
          <Header
            title="My Health Records"
            // onClick={handleAppointmentClick}
          />
        </header>

        <div className="">
          <SearchBar />
        </div>
        <div className="flex items-center justify-between bg-gray-50 border border-gray-100 hover:border-gray-200 p-4 mx-3 rounded-lg cursor-pointer">
          <div className="flex justify-center items-center gap-3">
            <img src={HRecord1} alt="" />
            <div className="">
              <p className="font-semibold">All Health Documents</p>
              <p className="text-xs text-gray-500">
                Access all your health records
              </p>
            </div>
          </div>
          <MdKeyboardArrowRight className="w-6 h-6 text-blue-600" />
        </div>
        {/* Health Records Categories */}
        <div className="grid grid-cols-2 gap-2 mx-3 mt-2 mb-4">
          {[
            { title: "Lab Reports", icon: HRecord2, tag: "lab reports" },
            { title: "Prescription", icon: HRecord3, tag: "medical records" },
            {
              title: "Vaccination",
              icon: HRecord4,
              tag: "vaccination reports",
            },
            { title: "Hospital Bills", icon: HRecord5, tag: "medical records" },
            { title: "Insurance", icon: HRecord6, tag: "lab reports" },
            { title: "Prescriptionn", icon: HRecord7, tag: "medical records" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center p-2 bg-gray-50 rounded-lg hover:border-gray-200 cursor-pointer border border-gray-100"
            >
              <span className="text-2xl">
                <img src={item.icon} alt="icon" className="w-6" />
              </span>
              <div className="ml-2 flex-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">
                  Access all your {item.tag}
                </p>
              </div>
              <div className="text-blue-600">
                <MdKeyboardArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Records */}
        <div className="space-y-4 pb-40">
          {[
            {
              doctor: "Dr. Raja Selvarajan",
              image: doctor1,
              date: "10 Nov, 2022",
              appointment: "Regular Checkup Now",
            },
            {
              doctor: "Dr. Neeraj Kumar",
              image: doctor2,
              date: "9 Nov, 2022",
              appointment: "General Consultation",
            },
          ].map((record, index) => (
            <div
              key={index}
              className="mx-4 p-4 border-2 border-gray-200 rounded-xl hover:border-gray-300"
            >
              <div className="flex pb-1 border-b-2 border-gray-200">
                <img
                  src={record.image}
                  alt={record.doctor}
                  className="w-14 rounded-full object-cover"
                />
                <div className="ml-4 flex-1">
                  <h4 className="">{record.doctor}</h4>
                  <div className="flex mt-1.5 gap-2">
                    <img src={Calendar} alt="" />
                    <p className="text-sm text-gray-500">{record.date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 pl-2 flex items-center justify-between text-blue-600 ">
                <div className="flex gap-2">
                  <img src={RegularIcon} alt="" />
                  {record.appointment}
                </div>
                <div className="flex gap-4 pr-2">
                  <img src={ShareIcon} alt="" />
                  <img src={DownloadIcon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-2 pb-3 px-8 bg-[#fafafa]">
          <button
            className="w-full bg-[#0086ff] text-white py-2 rounded-lg hover:bg-[#0080ee]"
            //   onClick={handleHealthRecord}
          >
            Upload Health Record{" "}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default MyHealthRecords;
