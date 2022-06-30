import { NextComponentType } from "next";
import React from "react";

const MiddleHeader: NextComponentType = () => {
  return (
    <header className="py-3 border-b border-gray-300 px-4 flex backdrop-blur sticky top-0 w-full items-center justify-between">
      <h2 className="text-md font-semibold">Home</h2>
    </header>
  );
};

export default MiddleHeader;
