import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import { TimelineDemo } from "./TimelineDemo";
import ResumeButton from "../Components/ResumeButton";
import SkillBadge from "./SkillBadge";
import ScrollIndicator from "../Components/ScrollIndicator";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./ThemeContext";
import ScrollTop from "../Components/ScrollTop";
// import 
function Resume() {
  const page = "Resume";
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "System");
     const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      disable: () => window.innerWidth < 768,
    });
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
    <div
      className={`min-h-screen flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 ${
        theme === "Dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <LeftSidebar />
      <ScrollIndicator />

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-12 p-2 sm:p-6 md:p-8">
        <Navbar page={page} />

        {/* Resume Intro */}
        <section className="text-center md:text-left">
          <p className={`text-lg md:text-xl mb-6 font-medium  {${theme} === "Dark" ? "bg-black text-white" : "bg-gray-50 text-black-500"`}>
            👉 Want to know more about my experience and skills? Feel free to
            download my resume. Explore my technical expertise and experience in detail.
          </p>
          <div className="flex justify-center md:justify-start">
            <ResumeButton />
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
            Education
          </h2>
          <TimelineDemo />
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
            Skills & Technologies
          </h2>
          <SkillBadge />
        </section>

        {/* Explore Projects CTA */}
        <section className="mt-16 text-center md:text-left">
          <p className="text-gray-300 text-lg md:text-xl mb-6 font-medium">
            Want to explore what I’ve been building recently?
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-700 transition-transform duration-300"
          >
            🚀 Explore My Projects
          </Link>
        </section>
      </div>
    </div>
          <ScrollTop></ScrollTop>
          </>

  );
}

export default Resume;
