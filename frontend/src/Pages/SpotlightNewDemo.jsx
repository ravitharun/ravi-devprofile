import React from "react";
import { Spotlight } from "./Spotlight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";  // Rocket icon
import { FaBriefcase } from "react-icons/fa";      // Portfolio / Work
export function SpotlightNewDemo() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black antialiased">
      {/* Spotlight effect */}
      <Spotlight />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Protifilo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm"
        >
          Empowering your digital journey with{" "}
          <span className="text-blue-400 font-semibold">creativity</span>,{" "}
          <span className="text-purple-400 font-semibold">design</span>, And{" "}
          <span className="text-pink-400 font-semibold">code</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link to="/about">
            <button className="px-6 py-3 flex items-center gap-2 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-lg shadow-lg hover:bg-blue-600/80 transition duration-300 border border-white/20">
  <FaRocket className="text-blue-400" /> Explore
</button>
          </Link>
          <Link to="/portfolio">
          <button className="px-6 py-3 flex items-center gap-2 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-lg shadow-lg hover:bg-gray-800/80 transition duration-300 border border-white/20">
  <FaBriefcase className="text-yellow-400" /> View Portfolio
</button>

          </Link>
        </motion.div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
    </div>
  );
}

