import React from "react";
import Navbar from "../Components/Navbar";
import LeftSidebar from "../Components/LeftSidebar";

function Skills() {
  return (
    <>
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row overflow-x-hidden">
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <Navbar />

          {/* Skills */}
          <h3>Resume page</h3>
        </div>
      </div>
    </>
  );
}

export default Skills;
