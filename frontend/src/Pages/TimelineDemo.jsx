import React from "react";
import { Timeline } from "./Timeline";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export function TimelineDemo() {
  const data = [
    {
      title: "B.Tech (CSE)",
      content: (
        <div>
          <p className="mb-3 text-black font-medium text-base">
            Currently in my final year of Bachelor of Technology (B.Tech) in
            Computer Science and Engineering at <span className="text-orange-500 font-semibold">Dayananda Sagar University</span>, Bangalore.
          </p>
          <p className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <FaGraduationCap className="text-orange-500 text-lg" />
            <span className="font-semibold text-black">Expected Graduation:</span>
            <span className="text-gray-700">2026</span>
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
      title: "Completed Class 12th",
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
      title: "Completed Class 10th",
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

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
