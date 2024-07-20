import React, { useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      onSearch(transcript);
      setIsListening(false);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setIsListening(false);
    };
  };

  return (
    <div className="flex justify-center sticky top-16 bg-white z-10 ">
      <div
        className={`flex items-center w-full max-w-sm p-1 my-4 mx-4 rounded-xl bg-white ${
          isFocused ? "border-black" : "border-gray-400"
        } border-2`}
      >
        <FiSearch className="w-6 h-6 text-gray-400 ml-2" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for doctors, medicines etc..."
          className="flex-grow px-4 py-2 outline-none"
        />
        <button
          onClick={startListening}
          className={`flex items-center justify-center w-10 h-10 rounded-md ${
            isListening ? "bg-blue-500" : "bg-transparent"
          }`}
        >
          <MdKeyboardVoice className={`w-6 h-6 text-[#0e3386] ${isListening && "text-white"}`} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
