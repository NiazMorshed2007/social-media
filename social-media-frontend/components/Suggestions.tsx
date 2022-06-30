import { NextComponentType } from "next";
import React from "react";
import SuggestionProfile from "./SuggestionProfile";

const Suggestions: NextComponentType = () => {
  return (
    <div className="w-3/12 sticky top-0 h-full">
      <div className="bg-white rounded-xl p-4">
        <header className="flex items-center justify-between">
          <h2 className="font-semibold">Suggested for you</h2>
          <img src="/expand.png" className="w-4 h-4 cursor-pointer" alt="" />
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
    </div>
  );
};

export default Suggestions;
