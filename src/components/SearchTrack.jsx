import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SearchTrack = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div>
      <div
        className="flex flex-row gap-1 ml-0.5 cursor-pointer"
        onClick={handleSearchClick}
      >
        <FaSearch className="text-white text-xl" />
        <span className="text-white">Search</span>
      </div>
    </div>
  );
};

export default SearchTrack;
