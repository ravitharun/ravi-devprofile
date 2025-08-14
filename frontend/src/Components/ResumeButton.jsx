import React from 'react';
import MYResume from "../assets/Ravi_Tharun_FullStack_Developer_Resume.pdf";
import { FaAndroid, FaDocker, FaFilePdf } from 'react-icons/fa';

function ResumeButton() {
  return (
    <div className="mt-4 text-center">
      <a
        href={MYResume}
        download
        className="inline-block px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
      >
        <FaFilePdf className='inline mr-1 text-lg'>
          
          </FaFilePdf> <span className='font-mono '>Resume</span>
      </a>
    </div>
  );
}

export default ResumeButton;
