"use client";
import React from "react";
import { Spotlight } from "./Spotlight";
import { Link } from "react-router-dom";

export function SpotlightNewDemo() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden rounded-none bg-black/[0.95] antialiased">
      {/* Spotlight effect */}
      <Spotlight />

      {/* Overlay content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span className="text-blue-500">Protifilo</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
          Empowering your digital journey with creativity, design, and code.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Link to='/about'>
          <a className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Explore
          </a>
            </Link>
            <Link to='/portfolio'>
            <a className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                View Portfolio
            </a>
            </Link>
        </div>
      </div>

      {/* Optional subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 pointer-events-none" />
    </div>
  );
}
