import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import {
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
} from "react-icons/fa";
import pic from "../Pages/profile.jpg";
import ResumeButton from "./ResumeButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { Share } from "lucide-react";
import ShareBtn from "../Pages/Share"
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      {/* Mobile Header */}
      <div
        className="md:hidden flex justify-between items-center px-5 py-3 bg-[#1c1c1e] rounded-xl mb-4"
        title="Toggle sidebar menu"
        data-aos="zoom-out"
      >
        <h1 className="text-xl font-bold text-white">Ravi Tharun</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl"
          title="Toggle sidebar menu"
        >
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
        title="Navigation sidebar"
      >
        <div className="flex flex-col justify-between h-full overflow-y-auto p-6">
          {/* Profile Top Section */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src={pic}
                alt="Avatar"
                className="w-30 h-30 rounded-full mb-4"
                title="Ravi Tharun - Full Stack Developer"
              />
              <h2 className="text-2xl font-bold">Ravi Tharun</h2>
              <span
                className="mt-1 text-base bg-[#333] px-3 py-1 rounded-full text-red-300"
                title="Motivational taglines about collaboration"
              >
                <Typewriter
                  words={[
                    "Bring your ideas to life.",
                    "Let's bring your vision to life.",
                    "Have a project in mind?",
                    "Want to collaborate?",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <div >

              <center className="mt-9 bg-center">


                <ResumeButton />



              </center>

            </div>


            <hr className="my-6 border-gray-700" />

            {/* Contact Info */}
            <div
              className="space-y-6 text-base"
              title="Ways to get in touch with me"
            >
              <h3 className="text-lg text-yellow-400 font-semibold mb-2">
                Contact Info
              </h3>

              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                  <span>
                    <a
                      href="mailto:tharunravi672@gmail.com"
                      title="Send me an email"
                    >
                      tharunravi672@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400 text-xl" />
                  <a href="tel:7396994383" className="text-orange-500 hover:underline">7396994383</a>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-pink-400 text-xl" />
                  <span title="Based in Bengaluru, Karnataka, India">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-700" />

            {/* Social Links */}
            <div title="Find me on social platforms">
              <h3 className="text-lg text-blue-400 font-semibold mb-3">
                Social Profiles
              </h3>
              <div className="flex gap-5 justify-center">
                <a
                  href="https://www.linkedin.com/in/ravitharun07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 text-2xl"
                  title="Visit my LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ravitharun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-2xl"
                  title="Check out my GitHub projects"
                >
                  <FaGithub />
                </a>
                <ShareBtn></ShareBtn>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="text-xs text-center text-gray-500 mt-6"
            title="Portfolio of Ravi Tharun"
          >
            &copy; {new Date().getFullYear()} Ravi Tharun
          </div>
        </div>

        {/* Mobile Close Button */}
        {isOpen && (
          <button
            className="absolute top-4 right-4 text-white text-3xl md:hidden"
            onClick={() => setIsOpen(false)}
            title="Toggle sidebar menu"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </>
  );
};
export default LeftSidebar;
