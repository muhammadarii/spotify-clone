import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <div className="w-full h-auto bg-[#121212]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 m-4">
          <FaAngleLeft className="text-[#B3B3B3] text-xl cursor-pointer" />
          <FaAngleRight className="text-[#B3B3B3] text-xl cursor-pointer" />
        </div>
        <div className="flex flex-row gap-3 m-4">
          <button className="text-white text-xs font-bold">Sign up</button>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
