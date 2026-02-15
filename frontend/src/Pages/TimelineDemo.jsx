import React from "react";
import { Timeline } from "./Timeline";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export function TimelineDemo({ workExpPgae }) {
  const color = "text-black hover:text-gray-700 transition"
  const data = [
    {
      title: <p className={color}>B.Tech (CSE)</p>,
      content: (
        <div>
          <p className="mb-3 text-black font-medium text-base">
            Currently in my final year of Bachelor of Technology (B.Tech) in
            Computer Science and Engineering at <span className="text-orange-500 font-semibold">Dayananda Sagar University</span>, Bangalore.
          </p>
          <p className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <FaGraduationCap className="text-orange-500 text-lg" />
            <span className="font-semibold text-black">Expected Graduation:</span>
            <span className="text-gray-700 gap-5"><b>June</b> 2026</span>
            <span className="text-gray-500 text-xs">(2022 – 2026)</span>
          </p>
          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <FaMapMarkerAlt className="text-orange-500" /> <span className="text-black font-medium">Bangalore, Karnataka</span>
          </div>
        </div>
      ),
      icon: <FaGraduationCap className="text-orange-500" />,
      animi: "fade-left",
    },
    {
      title: <p className={color}>Completed Class 12th</p>,
      content: (
        <div>
          <p className="mb-3 text-black font-medium text-base">
            Graduated from <span className="text-orange-500 font-semibold">Sri Chaitanya Junior College</span> under the State Board with a strong academic focus on Mathematics and Physics (MPC).
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <FaGraduationCap className="text-orange-500 text-lg" />
            <span className="font-semibold text-black">Class 12th:</span>
            <span className="text-gray-700">2020 – 2022</span>
          </p>
          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <FaMapMarkerAlt className="text-orange-500" /> <span className="text-black font-medium">Tirupati, Andhra Pradesh</span>
          </div>
        </div>
      ),
      icon: <MdSchool className="text-orange-500" />,
      animi: "fade-right",
    },
    {
      title: <p className={color}>Completed Class 10th</p>,
      content: (
        <div>
          <p className="mb-3 text-black font-medium text-base">
            Graduated from <span className="text-orange-500 font-semibold">Sri Chaitanya School, Kadapa</span> under the State Board with a strong academic foundation across core subjects.
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <FaGraduationCap className="text-orange-500 text-lg" />
            <span className="font-semibold text-black">Class 10th:</span>
            <span className="text-gray-700">2019 – 2020</span>
          </p>
          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <FaMapMarkerAlt className="text-orange-500" /> <span className="text-black font-medium">Kadapa, Andhra Pradesh</span>
          </div>
        </div>
      ),
      icon: <MdSchool className="text-orange-500" />,
      animi: "fade-up",
    },
  ];
  const work = [
    {
      title: <p className={color}>Rebert Technology Pvt. Ltd – Remote (Internship)</p>,
      content: (
        <div>
          <p className="mb-3 text-black font-medium text-base">
            Currently working as a <span className="font-semibold">MERN Stack Developer</span> at
            <span className="text-orange-500 font-semibold"> <a href="https://www.linkedin.com/company/rebert-tech/posts/?feedView=all" target="_
          " title="Linkedin"> Rebert Technology Pvt. Ltd</a></span>, a Pune-based company, in a fully remote work environment.
          </p>

          <p className="text-sm text-gray-700 mb-2">
            Gaining hands-on experience in real-world projects, collaborating with cross-functional teams, and strengthening practical development skills while balancing my final year of B.Tech.
          </p>

          <p className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <FaBriefcase className="text-orange-500 text-lg" />
            <span className="font-semibold text-black">Duration:</span>
            <span>6 Months</span>
            <span className="text-gray-500 text-xs">(Nov 27, 2025 – Present)</span>
          </p>

          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <FaMapMarkerAlt className="text-orange-500" />
            <span className="text-black font-medium">Pune</span>
            <span className="text-gray-500 text-xs">(Remote)</span>
          </div>
        </div>
      ),
      icon: <FaBriefcase className="text-orange-500" />,
      animi: "fade-left",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} work={work} workExpPgae={workExpPgae} />
    </div>
  );
}
