import React, { useEffect } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import { PointerHighlightDemo } from "./PointerHighlightDemo";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const services = [
    { icon: <FaPaintBrush />, title: "Web Design", desc: "Modern and high-quality UI design at a professional level.", anim: "fade-up-left" },
    { icon: <FaCode />, title: "Web Development", desc: "High-quality and responsive web development.", anim: "fade-up-right" },
    { icon: <FaMobileAlt />, title: "Mobile Design", desc: "Building responsive and interactive mobile-friendly websites.", anim: "fade-up-right" },
    { icon: <FaRobot />, title: "AI & ML", desc: "Building smarter and more efficient web applications.", anim: "fade-up-right", status: "Learning" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 relative">
      {/* Left Sidebar */}
      <LeftSidebar />

      <div className="flex-1 flex flex-col z-10">
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 space-y-10">
          <ScrollIndicator />
          <Navbar />

          {/* About Me */}
          <section className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 pl-3">
              About Me
            </h1>
            <p className="text-gray-400">
              Hello! I’m Ravi Tharun, a dedicated Full Stack Web Developer based in Bangalore, India. I specialize in building modern, scalable, and responsive web applications using React, Node.js, and MongoDB.
            </p>
            <p className="text-gray-400">
              With a strong passion for UI/UX design, I create clean, intuitive, and user-centric interfaces that enhance user experience. My design approach combines functionality with aesthetics to deliver impactful digital solutions.
            </p>
            <p className="text-gray-400">
              I’m continuously learning new technologies including AI integration, performance optimization, and modern development practices. I’m enthusiastic about collaborating on meaningful projects and delivering high-quality products.
            </p>
          </section>

          {/* Timeline */}
          <section className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-md" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-l-4 pl-3 border-yellow-500">
              📜 My Journey Timeline
            </h2>
            <div className="space-y-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <span className="text-xl">🎓</span>
                <p><span className="font-semibold text-white">2022:</span> Started my Computer Science journey at <b className="text-amber-500">Dayananda Sagar University</b>.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <p><span className="font-semibold text-white">2022–2024:</span> Built several MERN stack projects, exploring full-stack development.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🚀</span>
                <p><span className="font-semibold text-white">Now:</span> Exploring AI & Machine Learning to integrate smarter solutions into web apps.</p>
              </div>
            </div>
          </section>

          {/* Passions */}
          <section className="bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition duration-300 shadow-md" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-green-400 mb-4 border-l-4 pl-3 border-green-500">🌟 Passions & Interests</h2>
            <ul className="list-none space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-center gap-2">🎨 Designing clean and beautiful UIs</li>
              <li className="flex items-center gap-2">💡 Building creative and meaningful products</li>
              <li className="flex items-center gap-2">🧠 Exploring latest tech and innovations</li>
              <li className="flex items-center gap-2">🏏 Playing cricket and staying active</li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-6">My Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <div key={index} className="bg-[#1c1c1e] p-6 rounded-xl hover:border-yellow-400 border border-[#2a2a2a] transition duration-300 relative" data-aos={item.anim}>
                  {item.status && <span className="absolute top-3 right-4 text-sm bg-red-400 text-black px-3 py-1 rounded-full font-semibold">{item.status}</span>}
                  <div className="text-yellow-400 text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GitHub Stats */}
          <section className="mt-10 bg-[#1c1c1e] p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition duration-300 shadow-md" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 pl-3 border-blue-500">📊 GitHub Stats & Contributions</h2>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
              <img src="https://github-readme-stats.vercel.app/api?username=ravitharun&show_icons=true&theme=github-dark&hide_border=true" alt="GitHub Stats" className="w-full max-w-md rounded-lg shadow-lg" />
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ravitharun&layout=compact&theme=github-dark&hide_border=true" alt="Top Languages" className="w-full max-w-sm rounded-lg shadow-lg" />
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=ravitharun&theme=dark&hide_border=true" alt="GitHub Streak" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
