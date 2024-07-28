import React from "react";

const CustomRadioButton = ({ value, label, selected, onChange }) => (
  <div
    className={`flex items-center justify-between px-5 py-2 rounded-lg cursor-pointer outline outline-1 outline-gray-200 hover:outline-gray-300 ${
      selected === value ? "" : ""
    }`}
    onClick={() => onChange(value)}
  >
    <span className={`text-lg text-[#7a7a7a] ${selected === value ? "" : ""}`}>
      {label}
    </span>
    <div
      className={`border-2 rounded-full border-[#027fee] ${
        selected === value ? "" : "p-2"
      }`}
    >
      {selected === value && (
        <div className="p-1 m-1 bg-[#027fee] rounded-full"></div>
      )}
    </div>
  </div>
);

export default CustomRadioButton;
