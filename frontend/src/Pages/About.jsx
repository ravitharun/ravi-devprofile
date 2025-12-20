
import React, { useContext, useEffect } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot, FaBriefcase, FaChartLine, FaGraduationCap, FaFileAlt, FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";
// import Load from "../Components/Load";
import { ThemeContext } from "./ThemeContext";
import ScrollTop from "../Components/ScrollTop";
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
    <>
      <div
        className={`min-h-screen w-full overflow-x-hidden ${theme === "Dark" ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row gap-8">
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
                Hello! I’m Ravi Tharun, a Full Stack Developer from Bangalore. I build
                modern, scalable, and responsive web apps using React, Node.js, and
                MongoDB.
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
            <section className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition shadow-md">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-l-4 pl-3 border-yellow-500 flex gap-2 items-center">
                <FaFileAlt></FaFileAlt> My Journey Timeline
              </h2>

              <div className="space-y-4 text-gray-300 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-xl"><FaGraduationCap></FaGraduationCap></span>
                  <p>
                    <span className="font-semibold text-white">2022:</span> Started at{" "}
                    <b className="text-amber-500">Dayananda Sagar University</b>.
                  </p>
                </div>


                <div className="flex items-start gap-3">
                  <span className="text-xl"><FaLaptopCode></FaLaptopCode></span>
                  <p>
                    <span className="font-semibold text-white">2022–2024:</span> Built
                    several MERN stack projects.
                  </p>
                </div>


                <div className="flex items-start gap-3">
                  <span className="text-xl text-indigo-400">
                    <FaBriefcase />
                  </span>

                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">2025:</span>{" "}
                    Started my <span className="font-semibold text-amber-400">First Internship</span> as a{" "}
                    <span className="font-semibold text-sky-400">Backend Developer</span> at{" "}
                    <a
                      href="https://www.linkedin.com/company/rebert-tech/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                    >
                      Rebert Technology Pvt. Ltd.
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl"><FaChartLine></FaChartLine></span>
                  <p>
                    <span className="font-semibold text-white">Now:</span> Learning{" "}
                    <span className="text-blue-400">Data Analysis</span> 
                  </p>
                </div>
              </div>
            </section>

            {/* Passions */}
            <section className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition shadow-md">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-l-4 pl-3 border-green-500">
                🌟 Passions & Interests
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">🎨 Designing beautiful UIs</li>
                <li className="flex items-center gap-2">💡 Creative products</li>
                <li className="flex items-center gap-2">🧠 Exploring tech</li>
                <li className="flex items-center gap-2">🏏 Cricket</li>
              </ul>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6">My Services</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1c1c1e] p-6 rounded-xl hover:border-yellow-400 border border-[#2a2a2a] transition relative"
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
            <section className="mt-10 p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-lg">
              <div className="max-w-5xl mx-auto">
                {/* Medium width container */}

                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-3">
                  📊 GitHub Stats & Contributions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=ravitharun&show_icons=true&theme=github-dark&hide_border=true"
                    className="w-full max-w-xs rounded-lg"
                  />

                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ravitharun&layout=compact&theme=github-dark&hide_border=true"
                    className="w-full max-w-xs rounded-lg"
                  />

                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=ravitharun&theme=dark&hide_border=true"
                    className="w-full max-w-xs rounded-lg"
                  />

                  <div className="bg-gray-800 rounded-xl p-4 w-full max-w-lg mx-auto">
                    <h3 className="text-white text-center font-semibold mb-3">
                      Contributions
                    </h3>
                    <GitHubCalendar
                      username="ravitharun"
                      blockSize={12}
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
      </div>
      <ScrollTop></ScrollTop>
    </>

  );
};

export default About;
