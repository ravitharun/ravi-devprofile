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

  const items = [
    {
      title: "B.Tech (CSE)",
      description:
        "Currently in my final year of Bachelor of Technology (B.Tech) in Computer Science and Engineering at Dayananda Sagar University, Bangalore.",
      timeframe: "2026",
      icon: <FaGraduationCap />,
      location: "Bangalore, Karnataka",
      location_icon: <FaMapMarkerAlt />,
      animi: "fade-left",
    },
    {
      title: "Completed Class 12th",
      description:
        "Graduated from Sri Chaitanya Junior College under the State Board with a strong academic focus on Mathematics and Physics (MPC).",
      timeframe: "2022",
      location: "Tirupati, Andhra Pradesh",
      location_icon: <FaMapMarkerAlt />,
      icon: <MdSchool />,
      animi: "fade-right",
    },
    {
      title: "Completed Class 10th",
      description:
        "Graduated from Sri Chaitanya School, Kadapa, under the State Board with a strong academic foundation across core subjects.",
      timeframe: "2020",
      location: "Kadapa, Andhra Pradesh",
      location_icon: <FaMapMarkerAlt />,
      icon: <MdSchool />,
      animi: "fade-up",
    },
  ];

  const Ui = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "React Router",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Figma",
    "Responsive Design",
    "UI/UX",
  ];
  const Server_Script = [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Authentication",
  ];
  const Database = ["MongoDB", "MySQL"];
  const Tools = ["VS Code", "Postman", "Netlify", "Vercel", "Render", "Heroku"];
  const Other = ["Java", "Python"];
  const AI_ML = ["Artificial Intelligence", "Machine Learning"];
  const Data_Visualization = [
    "NumPy",
    "Pandas",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
    "Plotly",
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8">
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
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Education
        </h2>
        <VerticalTimeline>
          {items.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.timeframe}
              data-aos={item.animi}
              iconStyle={{ background: "#1a1a1a", color: "#fff" }}
              icon={item.icon}
              contentStyle={{ background: "#1a1a1a", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
            >
              <div className="hover:font-mono text-blue-500">
                <h3 className="text-xl font-semibold hover:text-green-500">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-gray-300">{item.description}</p>
                <p
                  className="flex items-center gap-1 hover:text-red-400 font-serif"
                  title="Location"
                >
                  {item.location_icon} {item.location}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "UI / Frontend", data: Ui },
              { title: "Server / Backend", data: Server_Script },
              { title: "Database", data: Database },
              { title: "AI & ML", data: AI_ML },
              { title: "Data Visualization", data: Data_Visualization },
              { title: "Other Technologies", data: Other },
              { title: "Tools & Platforms", data: Tools },
            ].map((section, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  {section.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {section.data.map((skill, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 border border-gray-500 rounded-full text-sm hover:bg-white hover:text-black transition duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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
