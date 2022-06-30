import { NextComponentType } from "next";
import React from "react";

const SuggestionProfile: NextComponentType = () => {
  return (
    <div className="p-2 pl-1 px hover:bg-gray-100 rounded-md flex items-center cursor-pointer gap-2">
      <div className="w-9 rounded-full cursor-pointer overflow-hidden h-9">
        <img
          className="w-full h-full object-center object-cover"
          src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-sm font-medium">Meerw saj</h2>
        <p className="text-[11px] text-secondary">lorejhdjksh....</p>
      </div>
    </div>
  );
};

export default SuggestionProfile;
