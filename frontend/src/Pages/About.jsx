import React, { useEffect } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCamera } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar (mobile toggle handled inside LeftSidebar component) */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Navbar />

        {/* About Me */}
        <div className="space-y-4 mb-10">
          <h1 className="text-2xl font-bold border-l-4 border-yellow-400 pl-2">
            About Me
          </h1>
          <p className="text-gray-400">
            Hello! I'm Ravi Tharun, a passionate Full Stack Web Developer based
            in Bangalore, India. I specialize in building modern, responsive web
            applications using technologies like React, Node.js, and MongoDB.
          </p>
          <p className="text-gray-400">
            I have a strong interest in UI/UX design and strive to create
            visually appealing, user-friendly interfaces. My goal is to craft
            experiences that are not just functional, but also delightful to
            interact with.
          </p>
          <p className="text-gray-400">
            I'm constantly learning and exploring new tools in web development,
            including AI integrations and performance optimization. Let’s build
            something amazing together!
          </p>
        </div>

        {/* Timeline Section */}
        <div
          className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-md"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-l-4 pl-3 border-yellow-500">
            📜 My Journey Timeline
          </h2>
          <div className="space-y-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <span className="text-xl">🎓</span>
              <p>
                <span className="font-semibold text-white">2022:</span> Started
                my Computer Science journey at Dayananda Sagar University.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">💻</span>
              <p>
                <span className="font-semibold text-white">2022–2024:</span>{" "}
                Built several MERN stack projects, exploring full-stack
                development.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🚀</span>
              <p>
                <span className="font-semibold text-white">Now:</span> Exploring
                AI & Machine Learning to integrate smarter solutions into my web
                apps.
              </p>
            </div>
          </div>
        </div>

        {/* Passions Section */}
        <div
          className="mt-8 bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition duration-300 shadow-md"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4 border-l-4 pl-3 border-green-500">
            🌟 Passions & Interests
          </h2>
          <ul className="list-none space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex items-center gap-2">
              🎨 <span>Designing clean and beautiful UIs</span>
            </li>
            <li className="flex items-center gap-2">
              💡 <span>Building creative and meaningful products</span>
            </li>
            <li className="flex items-center gap-2">
              🧠 <span>Exploring the latest tech and innovations</span>
            </li>
            <li className="flex items-center gap-2">
              🏏 <span>Playing cricket and staying active</span>
            </li>
          </ul>
        </div>

        {/* What I'm Doing Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6">What I'm Doing</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <FaPaintBrush />,
                title: "Web Design",
                desc: "Modern and high-quality UI design at a professional level.",
                anim: "fade-up-left",
              },
              {
                icon: <FaCode />,
                title: "Web Development",
                desc: "High-quality and responsive web development.",
                anim: "fade-up-right",
              },
              {
                icon: <FaMobileAlt />,
                title: "Mobile Apps",
                desc: "Building responsive and interactive mobile-friendly websites.",
                anim: "fade-up-right",
              },
              {
                icon: <FaCamera />,
                title: "Photography",
                desc: "Creating aesthetic and vivid product visuals.",
                anim: "fade-up-left",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1c1e] p-6 rounded-xl hover:border-yellow-400 border border-[#2a2a2a] transition duration-300"
                data-aos={item.anim}
              >
                <div className="text-yellow-400 text-2xl mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Learning Badge */}
          <div
            className="relative bg-[#1c1c1e] p-6 mt-6 rounded-xl hover:border-yellow-400 border border-[#2a2a2a] transition duration-300"
            data-aos="zoom-in"
          >
            <span className="absolute top-3 right-4 text-sm bg-red-400 text-black px-3 py-1 rounded-full font-semibold">
              Present I am Learning
            </span>
            <h2 className="text-gray-400 text-xl mt-8">
              I'm currently expanding my skills in Artificial Intelligence and
              Machine Learning to build smarter and more efficient web
              applications.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
