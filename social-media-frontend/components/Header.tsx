import { NextPage } from "next";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { RiApps2Line } from "react-icons/ri";

const Header: NextPage = () => {
  return (
    <header className="p-4 px-[7%] bg-white flex items-center justify-between">
      <div>
        <h2 className="font-bold text-xl">PiqoSocial</h2>
      </div>
      <div className="w-2/5 relative">
        <FiSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type="text"
          placeholder="Search for creators, developers, friends...."
          className="w-full outline-none pl-8 text-[13px] rounded-xl placeholder:text-xs placeholder:text-secondary p-[7px] bg-primary"
        />
      </div>
      <div className="accesories flex items-center gap-4">
        <i className="w-8 h-8 rounded-full cursor-pointer text-primary bg-secondary/20 flex items-center justify-center">
          <BsPlusSquare />
        </i>
        <i className="w-8 h-8 rounded-full cursor-pointer text-primary bg-secondary/20 flex items-center justify-center">
          <RiApps2Line />
        </i>
        <div className="w-9 rounded-full cursor-pointer overflow-hidden h-9">
          <img
            className="w-full h-full object-center object-cover"
            src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
