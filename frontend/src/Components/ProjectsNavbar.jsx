import React from "react";

function ProjectsNavbar() {
  const navItems = [
    {
      content: "All",
      Active: true,
    },
    {
      content: "Web",
    },
    {
      content: "Ai & Ml",
    },
    {
      content: "Design",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="bg-[#1c1c1c] px-6 py-3 rounded-full shadow-md">
        <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-300">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`relative px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105  font-mono ${
                  item.Active
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.content}
                {/* Underline animation */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProjectsNavbar;
