import React from 'react';
import MYResume from "../assets/Ravi_Tharun_FullStack_Developer_Resume.pdf";

function ResumeButton() {
  return (
    <div className="mt-4 text-center">
      <a
        href={MYResume}
        download
        className="inline-block px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
      >
        📄 Resume
      </a>
    </div>
  );
}

export default ResumeButton;
