import { ThemeContext } from "../Pages/ThemeContext";
import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certifications", href: "/Certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const GetToggle = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-extrabold text-cyan-400 tracking-wide">
            Protifilo 
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`transition duration-300 hover:text-cyan-400 relative group ${
                  link.name === page ? "text-cyan-400" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                    link.name === page ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            </li>
          ))}

          {/* Theme Selector */}
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => GetToggle(e.target.value)} // ✅ fixed
              className="appearance-none bg-gray-800 text-gray-200 pl-9 pr-6 py-1 rounded-md text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="Dark">Dark</option>
              <option value="Light">Light</option>
              <option value="System">System</option>
            </select>

            {/* Icons inside select */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
              {theme === "Dark" && <FaMoon />}
              {theme === "Light" && <FaSun />}
              {theme === "System" && <FaDesktop />}
            </div>
          </div>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-300 hover:text-cyan-400 transition ${
                link.name === page ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Theme Selector */}
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => GetToggle(e.target.value)} // ✅ fixed
              className="w-full appearance-none bg-gray-900 text-gray-200 pl-9 pr-6 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="Dark">Dark</option>
              <option value="Light">Light</option>
              <option value="System">System</option>
            </select>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
              {theme === "Dark" && <FaMoon />}
              {theme === "Light" && <FaSun />}
              {theme === "System" && <FaDesktop />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
