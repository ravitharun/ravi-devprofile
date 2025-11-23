import React, { useState } from 'react';
import ReactDOM from "react-dom";
import MernResume from "../assets/Full Stack Development Updated1.pdf";
import DataAnalystResume from "../assets/Ravi_Tharun_Data_Analyst_Resume.pdf";
import { FaFilePdf, FaTimesCircle } from 'react-icons/fa';

function ResumeButton() {
  const [IsopenResumes, setopenResumes] = useState(false);

  const resume = [
    { filename: "MernStackDeveloper", fileurl: MernResume },
    { filename: "DataAnalyst", fileurl: DataAnalystResume }
  ];

  const DownloadResume = () => setopenResumes(prev => !prev);

  return (
    <div>
      {/* Resume Button */}
      <button
        className="inline-block px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow hover:scale-105 transition"
        onClick={DownloadResume}
      >
        <FaFilePdf className='inline mr-1 text-lg' /> 
        <span className='font-mono'>Resume</span>
      </button>

      {/* POPUP USING PORTAL */}
      {IsopenResumes &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
            <div className="bg-gray-900 text-white w-96 p-6 rounded-xl shadow-2xl relative">

              <button
                onClick={DownloadResume}
                className="absolute top-3 right-3 text-red-300 text-3xl"
              >
                <FaTimesCircle />
              </button>

              <h2 className="text-2xl font-semibold mb-5 text-center">
                My Resumes
              </h2>

              <div className="space-y-4 ">
                {resume.map((data, idx) => (
                  <div
                    key={idx}
                    className=" p-4 rounded flex justify-between bg-gray-900 border-white-500"
                  >
                    <p className=" ">{data.filename}</p>
                    <a href={data.fileurl} download>
                      <FaFilePdf className="text-red-400 text-3xl" />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>,
          document.getElementById("resume-portal")
        )
      }
    </div>
  );
}

export default ResumeButton;
