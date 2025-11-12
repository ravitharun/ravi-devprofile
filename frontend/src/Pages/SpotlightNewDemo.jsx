import React from "react";
import { Spotlight } from "./Spotlight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaBriefcase } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export function SpotlightNewDemo() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black antialiased">
      {/* Spotlight background effect */}
      <Spotlight />

      {/* Content section */}
      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Title */}
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm"
        >
          Empowering your digital journey with{" "}
          <span className="text-blue-400 font-semibold">creativity</span>,{" "}
          <span className="text-purple-400 font-semibold">design</span>, and{" "}
          <span className="text-pink-400 font-semibold">code</span>.
        </motion.p>

        {/* Typewriter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <p className="text-lg md:text-2xl text-gray-200 font-medium">
            MERN Stack Developer & Data Analyst
          </p>

          <span
            className="inline-block mt-3 text-base md:text-lg bg-[#1a1a1a] px-5 py-2 rounded-full text-red-300 shadow-lg"
            title="Motivational taglines about collaboration"
          >
            <Typewriter
              words={[
                "Crafting seamless web experiences with the MERN Stack.",
                "Transforming complex data into powerful insightS.",
                "Building intelligent and scalable digital solutions.",
                "Turning ideas into impactful products with design and logic.",
                "Code, analyze, and create with purpose.",
                "Empowering businesses through data-driven development.",
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

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
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
