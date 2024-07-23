import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#AF2896] to-[#509BF5]">
      <div className="flex flex-row justify-between m-3">
        <div className="flex flex-col">
          <p className=" text-white text-xs">Preview of Spotify</p>
          <p className="text-white text-sm">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="text-black text-sm font-semibold bg-white px-3 py-1 rounded-full">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default Footer;
