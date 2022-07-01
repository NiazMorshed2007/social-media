import { NextComponentType } from "next";
import React from "react";
import { FiSearch } from "react-icons/fi";
import SuggestionProfile from "./SuggestionProfile";

const Suggestions: NextComponentType = () => {
  return (
    <div className="w-3/12 sticky p-5 top-0 h-full">
      <header className="w-full relative">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          className="p-2 px-3 pl-9 outline-none placeholder:text-xs w-full rounded-3xl"
          type="text"
          placeholder="Search..."
        />
      </header>
      <div className="wrapper mt-4 flex flex-col">
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
        <SuggestionProfile />
      </div>
    </div>
  );
};

export default Suggestions;
