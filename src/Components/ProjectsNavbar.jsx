import React, { useState } from "react";
import Data from "../Pages/projects.json";
import { useNavigate } from "react-router-dom";

function ProjectsNavbar() {
  const navigate = useNavigate();
  const [ProjectsType, setProjects] = useState([]);

  const handleProjectFilter = (type) => {
    try {
      const filtered = type === "All"
        ? Data
        : Data.filter((project) => project.ProjectType === type);
      setProjects(filtered);
      navigate("/portfolio", { state: filtered });
    } catch (error) {
      console.error("Error filtering projects:", error.message);
    }
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="bg-[#1c1c1c] px-6 py-3 rounded-full shadow-md">
        <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-300 font-mono">
          <li>
            <button
              onClick={() => handleProjectFilter("All")}
              className="relative px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 bg-gray-800 text-white"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProjectFilter("Web")}
              className="relative px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Web
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProjectFilter("Ai & Ml")}
              className="relative px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Ai & Ml
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProjectFilter("Design")}
              className="relative px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Design
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProjectsNavbar;
