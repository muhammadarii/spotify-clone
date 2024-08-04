import React from "react";
import ComponentOne from "../components/HomePageComponents/ComponentOne";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ComponentTwo from "../components/HomePageComponents/ComponentTwo";
import ComponentThree from "../components/HomePageComponents/ComponentThree";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col h-screen bg-gradient-to-t from-[#121212] to-[#181818]">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-hide">
            <Navbar />
            <div className="flex-1 overflow-y-auto scrollbar-hide mr-3">
              <ComponentOne />
              <ComponentTwo />
              <ComponentThree />
            </div>
          </div>
        </div>
        <Footer className="w-full" />
      </div>
    </div>
  );
};

export default HomePage;
