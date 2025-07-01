import React from "react";

function ProjectsNavbar() {
  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="bg-[#1c1c1c] px-6 py-3 rounded-full shadow-md">
        <ul className="flex gap-6 text-sm sm:text-base font-medium text-gray-300">
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Web
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              AI
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProjectsNavbar;
