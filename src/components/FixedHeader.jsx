import React from "react";
import HomepageHeader from "./HomepageHeader";
import SearchBar from "./SearchBar";

const FixedHeader = ({ onSearch }) => {
  return (
    <div className="max-w-sm fixed top-0 left-1/2 transform -translate-x-1/2 shadow-sm border-b-2 border-b-gray-200 z-10 w-full">
      <HomepageHeader />
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default FixedHeader;
