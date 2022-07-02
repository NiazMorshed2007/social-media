import { NextComponentType } from "next";
import React from "react";

const AuthHeader: NextComponentType = () => {
  return (
    <header className="p-3 border-b px-[7%] flex items-center justify-between">
      <div>
        <img src="/twitter.png" alt="" />
      </div>
      <div className="flex items-center gap-6">
        <button className="p-2 px-5 text-[12px] outline-none bg-blue-500 text-white rounded-3xl">
          Login
        </button>
        <button className="p-2 px-5 text-[12px]  outline-none bg-blue-500 text-white rounded-3xl">
          Create an account
        </button>
      </div>
    </header>
  );
};

export default AuthHeader;
