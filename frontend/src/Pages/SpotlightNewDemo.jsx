import React from "react";
import { Spotlight } from "./Spotlight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaBriefcase } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export function SpotlightNewDemo() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black antialiased">
      {/* Spotlight background */}
      <Spotlight />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Intro */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          👋 Hi, I’m
        </motion.h2>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Ravi Tharun
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 text-lg md:text-2xl text-gray-200 font-medium"
        >
          MERN Stack Developer & Data Analyst
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-5"
        >
          <span className="inline-block text-base md:text-lg bg-white/5 px-6 py-2 rounded-full text-pink-300 shadow-md backdrop-blur-lg">
            <Typewriter
              words={[
                "Crafting seamless web experiences.",
                "Transforming data into insights.",
                "Building scalable and creative solutions.",
                "Designing with logic and purpose.",
                "Turning vision into digital reality.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        {/* Modern Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          {/* Explore Button */}
          <Link to="/about">
            <button className="relative px-8 py-3 flex items-center gap-2 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></span>
              <span className="relative flex items-center gap-2 z-10">
                <FaRocket className="text-cyan-300 group-hover:scale-110 transition" />
                Explore
              </span>
            </button>
          </Link>

          {/* Portfolio Button */}
          <Link to="/portfolio">
            <button className="relative px-8 py-3 flex items-center gap-2 rounded-2xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-pink-500 shadow-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></span>
              <span className="relative flex items-center gap-2 z-10">
                <FaBriefcase className="text-yellow-300 group-hover:scale-110 transition" />
                View Portfolio
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
