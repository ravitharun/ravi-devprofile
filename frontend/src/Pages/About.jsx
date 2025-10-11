
import React, { useContext, useEffect } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";
// import Load from "../Components/Load";
import { ThemeContext } from "./ThemeContext";
const About = () => {
   const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    localStorage.setItem("theme", theme);
  }, [theme]);

  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      desc: "Modern and high-quality UI design.",
      anim: "fade-up-left",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Responsive full-stack web development.",
      anim: "fade-up-right",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Design",
      desc: "Interactive mobile-friendly websites.",
      anim: "fade-up-right",
    },
    {
      icon: <FaRobot />,
      title: "AI & ML",
      desc: "Smart web apps with AI & ML.",
      anim: "fade-up-right",
      status: "Learning",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "Dark" ? "bg-black text-white" : "bg-white text-gray-900"
      } flex flex-col md:flex-row gap-6 p-4 md:p-8`}
    >
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-10">
        <ScrollIndicator />
        <Navbar />

        {/* About Me */}
        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 pl-3">
            About Me
            
          </h1>
          <p className="text-gray-400">
            Hello! I’m Ravi Tharun, a Full Stack Developer from Bangalore. I
            build modern, scalable, and responsive web apps using React,
            Node.js, and MongoDB.
          </p>
          <p className="text-gray-400">
            Passionate about UI/UX, I craft clean and user-centric designs that
            enhance user experience.
          </p>
          <p className="text-gray-400">
            Continuously learning new technologies like AI integration and
            performance optimization to deliver high-quality digital solutions.
          </p>
        </section>

        {/* Timeline */}
        <section
          className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 shadow-md"
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
                at <b className="text-amber-500">Dayananda Sagar University</b>.
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
                <span className="font-semibold text-white">Now:</span> Delving
                into <span className="text-blue-400">AI</span> &{" "}
                <span className="text-blue-400">Machine Learning</span> for
                intelligent web apps.
              </p>
            </div>
          </div>
        </section>

        {/* Passions */}
        <section
          className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition duration-300 shadow-md"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4 border-l-4 pl-3 border-green-500">
            🌟 Passions & Interests
          </h2>
          <ul className="list-none space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex items-center gap-2">
              🎨 Designing clean and beautiful UIs
            </li>
            <li className="flex items-center gap-2">
              💡 Building creative and meaningful products
            </li>
            <li className="flex items-center gap-2">
              🧠 Exploring latest tech and innovations
            </li>
            <li className="flex items-center gap-2">
              🏏 Playing cricket and staying active
            </li>
          </ul>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-6">My Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1c1e] p-6 rounded-xl hover:border-yellow-400 border border-[#2a2a2a] transition duration-300 relative"
                data-aos={item.anim}
              >
                {item.status && (
                  <span className="absolute top-3 right-4 text-sm bg-red-400 text-black px-3 py-1 rounded-full font-semibold">
                    {item.status}
                  </span>
                )}
                <div className="text-yellow-400 text-2xl mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        <section
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-3">
            📊 GitHub Stats & Contributions
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-6">
            {/* GitHub Stats */}
            <div className="bg-gray-900 rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ravitharun&show_icons=true&theme=github-dark&hide_border=true"
                alt="GitHub Stats"
                className="w-64 md:w-72 h-40 object-contain rounded-lg"
              />
            </div>

            {/* Top Languages */}
            <div className="bg-gray-900 rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ravitharun&layout=compact&theme=github-dark&hide_border=true"
                alt="Top Languages"
                className="w-56 md:w-64 h-40 object-contain rounded-lg"
              />
            </div>

            {/* GitHub Streak */}
            <div className="bg-gray-900 rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ravitharun&theme=dark&hide_border=true"
                alt="GitHub Streak"
                className="w-64 md:w-72 h-40 object-contain rounded-lg"
              />
            </div>

            {/* GitHub Contributions Calendar */}
            <div className="bg-gray-900 rounded-2xl shadow-md p-4 flex flex-col items-center w-full md:w-full hover:scale-105 transition-transform duration-300">
              <h3 className="text-white font-semibold text-lg mb-3">
                Contributions
              </h3>
              <div className="w-full">
                <GitHubCalendar
                  username="ravitharun"
                  blockSize={13} // adjust for better responsiveness
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="dark"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
   
    </div>
  );
};

export default About;
