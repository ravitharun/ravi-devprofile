import React from "react";

function Load() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full dark:bg-gray-900 px-4 text-center bg-gray-300">
      {/* Big Spinning Gradient Circle */}
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-8 border-t-orange-500 border-b-orange-500 border-gray-300 rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
        Loading Protifilo...
      </p>
      {/* Additional Motivational Text */}
      <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
        Empowering your personal & professional growth, one step at a time.
      </p>
      <p className="mt-2 text-gray-400 dark:text-gray-500 italic md:text-base lg:text-lg">
        Thank you for your patience!
      </p>
    </div>
  );
}

export default Load;
