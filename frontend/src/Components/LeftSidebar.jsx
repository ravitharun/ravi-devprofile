import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-[#1c1c1e] rounded-xl mb-4">
        <h1 className="text-xl font-bold text-white">Ravi Tharun</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 md:z-auto top-0 left-0 w-64 md:w-[270px] h-screen md:h-screen bg-[#1c1c1e] text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col justify-between h-full overflow-y-auto p-6">
          {/* Profile Top Section */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-28 h-28 rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold">Ravi Tharun</h2>
              <span className="mt-1 text-base bg-[#333] px-3 py-1 rounded-full text-gray-300">
                Web Developer
              </span>
            </div>

            <hr className="my-6 border-gray-700" />

            {/* Contact Info */}
            <div className="space-y-6 text-base">
              <h3 className="text-lg text-yellow-400 font-semibold mb-2">
                Contact Info
              </h3>

              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                  <span>tharunravi672@gmail.com</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400 text-xl" />
                  <span>+91 7396994383</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Date of Birth</p>
                <div className="flex items-center gap-3">
                  <FaBirthdayCake className="text-pink-400 text-xl" />
                  <span>June 23, 2003</span>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-700" />

            {/* Social Links */}
            <div>
              <h3 className="text-lg text-blue-400 font-semibold mb-3">
                Social Profiles
              </h3>
              <div className="flex gap-5 justify-center">
                <a
                  href="https://www.linkedin.com/in/ravitharun07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ravitharun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-center text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} Ravi Tharun
          </div>
        </div>

        {/* Mobile Close Button */}
        {isOpen && (
          <button
            className="absolute top-4 right-4 text-white text-3xl md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </>
  );
};

export default LeftSidebar;
