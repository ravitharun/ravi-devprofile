import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ResumeButton from "../Components/ResumeButton";
import ScrollIndicator from "../Components/ScrollIndicator";
import { TimelineDemo } from "./TimelineDemo";
import SkillBadge from "./SkillBadge";
import { useState } from "react";
function Resume() {
  const page = "Resume";

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      disable: function () {
        return window.innerWidth < 768; // disable if screen is below 768px
      },
    });
  }, []);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "System");
  console.log(theme,'themethemethemethemetheme')

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div    className={`min-h-screen ${
        theme === "Dark" ? "bg-black text-white" : "bg-white-100 text-orange-500 font-mono "
      } flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 relative`}>
      {/* Sidebar */}
      <LeftSidebar />
      <ScrollIndicator />
      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <Navbar page={page} />
        <div className="mt-8 text-center">
          <p className="text-lg mb-4 text-gray-300 font-medium">
            👉 Want to know more about my experience and skills? Feel free to
            download my resume."Interested in my background and technical
            expertise? Download my resume to explore my skills and experience in
            detail."
          </p>

          <ResumeButton />
        </div>
        {/* Education Section */}
      
        
        <TimelineDemo /> {/* Assuming you have a TimelineDemo component */}
        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Skills & Technologies
          </h2>

          <SkillBadge></SkillBadge>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-4 font-medium">
              Want to explore what I’ve been building recently?
            </p>
            <Link to="/portfolio">
              <a
                // Replace with your route if needed
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-700 transition-transform duration-300"
              >
                🚀 Explore My Projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
