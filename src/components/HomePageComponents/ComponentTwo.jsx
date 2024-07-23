import React from "react";

const ComponentTwo = () => {
  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between">
        <p className="text-white text-sm font-semibold">Popular albums</p>
        <p className="text-[#B3B3B3] text-xs">show all</p>
      </div>
      <div className="flex flex-row">
        <div className="m-4">
          <img
            src=""
            alt=""
            className="bg-white w-[170px] h-[170px] rounded-lg"
          />
          <div className="flex flex-col my-2">
            <p className="text-white">Artist Name</p>
            <p className="text-[#B3B3B3]">Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;
