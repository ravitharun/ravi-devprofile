import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import { FaLinkedinIn, FaRegCalendarAlt } from "react-icons/fa";

function Certifications() {
  const page = "Certifications";

  const certifications = [
    {
      title: "Introduction to AI Concepts",
      issuer: "Microsoft Learn",
      date: "July 2, 2024",
      iconDate: <FaRegCalendarAlt />,
      iconSocial: <FaLinkedinIn />,
      link: "https://www.linkedin.com/posts/ravitharun07_introduction-to-ai-concepts-activity-7346356415898275840-AMJ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQUcDIBrHbzwsArrPDZkzoT0XUf0EdER0M",
      post_img: "/Certifications/Certifications_AI_01_(microsoft).jpg",
      skills: ["AI", "Basics of AI"],
    },
  ];
  console.log(certifications.length < 0);
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar page={page} />
       <div className="text-center mb-6">
  <h3 className="text-2xl font-bold text-yellow-400">My Certifications</h3>
  <p className="text-sm text-gray-400 mt-1">
    Explore the certifications I’ve earned by learning new technologies and sharpening my skills.
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {certifications.length > 0 ? (
            certifications.map((item, id) => (
              <div
                key={id}
                className="bg-[#1c1c1e] rounded-xl border border-gray-700 shadow-md w-full aspect-square flex flex-col overflow-hidden hover:shadow-lg transition duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={item.post_img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-yellow-400 mb-1">
                      {item.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-gray-400">
                      Issued by{" "}
                      <span className="text-white font-medium">
                        {item.issuer}
                      </span>
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                      <FaRegCalendarAlt className="text-blue-400" />
                      <span>{item.date}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-xs px-2 py-1 rounded-md text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Link */}
                  <div className="pt-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      <FaLinkedinIn /> View on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center p-6 bg-[#1c1c1e] border border-gray-700 rounded-lg shadow-md text-center text-gray-400">
              <svg
                className="w-12 h-12 text-yellow-400 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-200">
                No Certifications Found
              </p>
              <p className="text-sm mt-1">
                Certificates you earn will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
