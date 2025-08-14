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
          <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
            Currently in my final year of Bachelor of Technology (B.Tech) in
            Computer Science and Engineering at Dayananda Sagar University,
            Bangalore.
          </p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt /> Bangalore, Karnataka
          </div>
        </div>
      ),
      icon: <FaGraduationCap />,
      animi: "fade-left",
    },
    {
      title: "Completed Class 12th",
      content: (
        <div>
          <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
            Graduated from Sri Chaitanya Junior College under the State Board
            with a strong academic focus on Mathematics and Physics (MPC).
          </p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt /> Tirupati, Andhra Pradesh
          </div>
        </div>
      ),
      icon: <MdSchool />,
      animi: "fade-right",
    },
    {
      title: "Completed Class 10th",
      content: (
        <div>
          <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
            Graduated from Sri Chaitanya School, Kadapa, under the State Board
            with a strong academic foundation across core subjects.
          </p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt /> Kadapa, Andhra Pradesh
          </div>
        </div>
      ),
      icon: <MdSchool />,
      animi: "fade-up",
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
