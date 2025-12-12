import { ThemeContext } from "../Pages/ThemeContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

function ResumeNavbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 shadow-md rounded-lg 
      ${theme === "Dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `px-5 py-2 text-sm sm:text-base font-medium transition-all duration-200 rounded-full
          ${isActive
            ? "bg-blue-600 text-white shadow-md"
            : theme === "Dark"
            ? "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
            : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
      >
        Education
      </NavLink>

      <NavLink
        to="/WorkExp"
        className={({ isActive }) =>
          `px-5 py-2 text-sm sm:text-base font-medium transition-all duration-200 rounded-full
          ${isActive
            ? "bg-blue-600 text-white shadow-md"
            : theme === "Dark"
            ? "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
            : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`
        }
      >
        Work Experience   
      </NavLink>
    </div>
  );
}

export default ResumeNavbar;
