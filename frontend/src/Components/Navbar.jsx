import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "/", active: true },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = ({page}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mb-6 border-b border-gray-700 pb-2">
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center">
        <h1 className="text-lg font-bold text-white">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex gap-6 text-sm md:text-base text-gray-300 mt-4 md:mt-0`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
        className={`hover:text-yellow-400 transition duration-200 
  ${link.active ? "text-yellow-400 font-semibold" : ""} 
  ${link.name === page ? "text-cyan-500 p-2 font-mono underline decoration-2 underline-offset-4" : ""}
`}

              onClick={() => setIsOpen(false)} // close menu on click (mobile)
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
