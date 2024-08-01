import React from "react";
import Logo from "../img/homePage/Logo.png";

import { FaHouse, FaBuffer } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import SearchTrack from "./SearchTrack";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[250px] h-screen bg-[#000000]">
      <div className="flex flex-col">
        <div className=" h-auto bg-[#121212] m-2 py-4 px-2 rounded-md">
          <div className="flex flex-col gap-3">
            <div
              onClick={() => navigate("/")}
              className="flex flex-row justify-center mb-2"
            >
              <img src={Logo} alt="Logo" className="w-[90px] cursor-pointer" />
            </div>
            <div className="flex flex-row gap-1 cursor-pointer">
              <FaHouse className="text-white text-2xl" />
              <span className="text-white">Home</span>
            </div>
            <SearchTrack />
          </div>
        </div>
        <div className=" h-96 m-2 rounded-md">
          <div className="grid grid-cols-3">
            <div className="flex flex-row col-span-2 gap-1 m-2">
              <FaBuffer className="text-[#B3B3B3] text-2xl" />
              <p className="text-[#B3B3B3]">Your Library</p>
            </div>
            <div className="justify-self-end m-2 cursor-pointer">
              <FaPlus className="text-[#B3B3B3] font-bold text-xl" />
            </div>
          </div>
          <div className="h-auto bg-[#121212] m-2 py-4 px-2 rounded-md">
            <p className="text-white text-sm font-bold py-0.5">
              Create your first playlist
            </p>
            <p className="text-white text-xs font-thin pt-0.5 pb-1">
              It's easy, we'll help you
            </p>
            <button className="text-black text-xs font-bold bg-white px-3 py-1 rounded-full">
              Create playlist
            </button>
          </div>
          <div className="h-auto bg-[#121212] m-2 py-4 px-2 rounded-md">
            <p className="text-white text-sm font-bold py-0.5">
              Let's find some podcast to follow
            </p>
            <p className="text-white text-xs font-thin pt-0.5 pb-1">
              We'll keep you updated on new episodes
            </p>
            <button className="text-black text-xs font-bold bg-white px-3 py-1 rounded-full">
              Browse podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
