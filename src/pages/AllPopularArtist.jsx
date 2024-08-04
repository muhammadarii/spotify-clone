import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularArtist from "../components/ShowAll/PopularArtist";

const AllPopularArtist = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col h-screen bg-gradient-to-t from-[#121212] to-[#181818]">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-hide">
            <Navbar />
            <div className="flex-1 overflow-y-auto scrollbar-hide mr-3">
              <PopularArtist />
            </div>
          </div>
        </div>
        <Footer className="w-full" />
      </div>
    </div>
  );
};

export default AllPopularArtist;
