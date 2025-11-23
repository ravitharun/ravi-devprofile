// SkillBadge.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

export default function SkillBadge() {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      label: "UI / Frontend",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "HTML",
              icon: <FaHtml5 />,
              color: "bg-orange-500",
              shadow: "rgba(249,115,22,0.6)",
            },
            {
              name: "CSS",
              icon: <FaCss3Alt />,
              color: "bg-blue-500",
              shadow: "rgba(59,130,246,0.6)",
            },
            {
              name: "UI/UX",
              icon: "🎨",
              color: "bg-pink-500",
              shadow: "rgba(236,72,153,0.6)",
            },
            {
              name: "React.js",
              icon: <FaReact />,
              color: "bg-cyan-500",
              shadow: "rgba(34,211,238,0.6)",
            },
            {
              name: "JavaScript",
              icon: <FaJs />,
              color: "bg-yellow-400 text-black",
              shadow: "rgba(250,204,21,0.6)",
            },
            {
              name: "TypeScript",
              icon: <SiTypescript />,
              color: "bg-blue-600",
              shadow: "rgba(37,99,235,0.6)",
            },
            {
              name: "Bootstrap",
              icon: <SiBootstrap />,
              color: "bg-purple-600",
              shadow: "rgba(147,51,234,0.6)",
            },
            {
              name: "API",
              icon: "🔗",
              color: "bg-teal-500",
              shadow: "rgba(20,184,166,0.6)",
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss />,
              color: "bg-sky-500",
              shadow: "rgba(56,189,248,0.6)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} text-white rounded-full font-semibold text-sm cursor-pointer`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Backend / Server",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "Node.js",
              icon: <FaNodeJs />,
              color: "bg-green-600",
              shadow: "rgba(22,163,74,0.6)",
            },
            {
              name: "Express.js",
              icon: <SiExpress />,
              color: "bg-gray-800",
              shadow: "rgba(75,85,99,0.6)",
            },
            {
              name: "Authentication",
              icon: "🔑",
              color: "bg-indigo-500",
              shadow: "rgba(99,102,241,0.6)",
            },
            {
              name: "Authorization",
              icon: "🛡️",
              color: "bg-red-500",
              shadow: "rgba(239,68,68,0.6)",
            },
            {
              name: "2FA",
              icon: "📲",
              color: "bg-yellow-500",
              shadow: "rgba(234,179,8,0.6)",
            },
            {
              name: "Nodemailer",
              icon: "✉️",
              color: "bg-rose-500",
              shadow: "rgba(244,63,94,0.6)",
            },
            {
              name: "MongoDB",
              icon: <SiMongodb />,
              color: "bg-green-700",
              shadow: "rgba(21,128,61,0.6)",
            },
            {
              name: "MySQL",
              icon: "🐬",
              color: "bg-blue-700",
              shadow: "rgba(29,78,216,0.6)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} text-white rounded-full font-semibold text-sm`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "AI & ML",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "AI/ML",
              icon: "🤖",
              color: "bg-green-600",
              shadow: "rgba(22,163,74,0.6)",
            },
            {
              name: "Deep Learning",
              icon: "🧠",
              color: "bg-purple-500",
              shadow: "rgba(168,85,247,0.6)",
            },
            {
              name: "Machine Learning",
              icon: "📊",
              color: "bg-teal-500",
              shadow: "rgba(20,184,166,0.6)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} text-white rounded-full font-semibold text-sm`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Data Visualization",
      content: (
        <div className="flex flex-wrap gap-3">
          {
          [
            {
              name: "NumPy",
              icon: <SiNumpy />,
              color: "bg-blue-500",
              shadow: "rgba(59,130,246,0.6)",
            },
            {
              name: "Pandas",
              icon: <SiPandas />,
              color: "bg-indigo-600",
              shadow: "rgba(79,70,229,0.6)",
            },
            {
              name: "OpenCV",
              icon: <SiOpencv />,
              color: "bg-teal-600",
              shadow: "rgba(13,148,136,0.6)",
            },
            {
              name: "Matplotlib",
              icon: "📈",
              color: "bg-rose-500",
              shadow: "rgba(244,63,94,0.6)",
            },
            {
              name: "Seaborn",
              icon: (
                <img
                  src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
                  alt="Seaborn"
                  className="w-6 h-6"
                />
              ),
              color: "bg-cyan-500",
              shadow: "rgba(6,182,212,0.6)",
            },
            {
              name: "Plotly",
              icon: <SiPlotly />,
              color: "bg-pink-500",
              shadow: "rgba(236,72,153,0.6)",
            },
            {
              name: "Power Bi",
              icon: (
                <img
                  src="https://th.bing.com/th/id/OIP.S0GTuACXiCPQnB-LYT2vHgHaEc?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="power Bi"
                  className="w-6 h-6"
                />
              ),
              color: "bg-purple-500",
              shadow: "rgba(236,72,153,0.6)",
            },
            {
              name: "Ms Excel",     
             icon: (
                <img
                  src="https://static.vecteezy.com/system/resources/previews/038/600/540/non_2x/microsoft-excel-logo-microsoft-icon-art-free-vector.jpg"
                  alt="Ms Excel"
                  className="w-6 h-6"
                />
              ),
              color: "bg-indigo-500",
              shadow: "rgba(236,72,153,0.4)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} text-white rounded-full font-semibold text-sm`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Other Tech",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "Java",
              icon: <FaJava />,
              color: "bg-red-600",
              shadow: "rgba(220,38,38,0.6)",
            },
            {
              name: "Python",
              icon: <FaPython />,
              color: "bg-yellow-500 text-black",
              shadow: "rgba(234,179,8,0.6)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} rounded-full font-semibold text-sm`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Tools & Platforms",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "VS Code",
              icon: "💻",
              color: "bg-blue-500",
              shadow: "rgba(59,130,246,0.6)",
            },
            {
              name: "Postman",
              icon: <SiPostman />,
              color: "bg-orange-500",
              shadow: "rgba(249,115,22,0.6)",
            },
            {
              name: "Netlify",
              icon: <SiNetlify />,
              color: "bg-green-500",
              shadow: "rgba(34,197,94,0.6)",
            },
            {
              name: "Render",
              icon: "🚀",
              color: "bg-purple-500",
              shadow: "rgba(168,85,247,0.6)",
            },
            {
              name: "Vercel",
              icon: <SiVercel />,
              color: "bg-gray-900",
              shadow: "rgba(17,24,39,0.6)",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 8px 20px ${skill.shadow}`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${skill.color} text-white rounded-full font-semibold text-sm`}
            >
              <span className="text-lg">{skill.icon}</span> {skill.name}
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
              active === idx
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md"
      >
        {tabs[active].content}
      </motion.div>
    </div>
  );
}
