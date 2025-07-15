import React, { useEffect, useState } from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import {
  FaArrowAltCircleRight,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import PROJECTS from "../Pages/projects.json";
import ProjectsNavbar from "../Components/ProjectsNavbar";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { Link } from "react-router-dom";
Modal.setAppElement("#root"); // Important for accessibility

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: function () {
        return window.innerWidth < 768; // disable if screen is below 768px
      },
      once: false,
    });
  }, []);

  const page = "Portfolio";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const projects_approach = [
    {
      title: "1. Requirement Gathering",
      description:
        "Understanding client needs, business goals, and target audience to outline clear project objectives and deliverables.",
      icon: <FaClipboardList className="text-4xl text-blue-500" />,
      ani: "fade-up",
    },
    {
      title: "2. Planning & Design",
      description:
        "Creating wireframes, user flows, and design mockups while defining the tech stack, timeline, and resource allocation.",
      icon: <FaPencilRuler className="text-4xl text-purple-500" />,
      ani: "fade-left",
    },
    {
      title: "3. Development & Testing",
      description:
        "Building the application using clean, scalable code and performing continuous testing to ensure functionality and performance.",
      icon: <FaCode className="text-4xl text-green-500" />,
      ani: "fade-left",
    },
    {
      title: "4. Deployment & Maintenance",
      description:
        "Launching the project to production, monitoring its performance, and providing ongoing updates, fixes, and improvements.",
      icon: <FaRocket className="text-4xl text-red-500" />,
      ani: "fade-up",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8">
      <LeftSidebar />
      <div className="flex-1 p-4 md:p-8">
        <Navbar page={page} />

        {/* Project Approach Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 flex items-center gap-2">
            <FaArrowAltCircleRight /> Project Approach
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects_approach.map((item, index) => (
              <div
                key={index}
                data-aos={item.ani}
                className="bg-[#1c1c1c] p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition-shadow duration-300 flex gap-4 items-start"
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Cards Section */}
        <h4 className="text-3xl font-bold mb-6 border-b border-gray-900 pb-2 flex items-center gap-2">
          <FaArrowAltCircleRight /> Project's
        </h4>
        <ScrollIndicator />
        <br />
        <ProjectsNavbar />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {PROJECTS.map((project, index) => (
            <div
              data-aos={project.ani}
              key={index}
              onClick={() => openModal(project)}
              className="cursor-pointer bg-[#1c1c1c] rounded-2xl shadow-md hover:shadow-blue-500/30 transition-shadow duration-300"
            >
              <img
                src={project.thumbnil}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  {project.description}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-500">Type:</span>{" "}
                  <span className="text-amber-400">{project.ProjectType}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Card UI */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              background: "#111827", // Tailwind gray-900
              borderRadius: "1rem",
              padding: "1.5rem",
              maxWidth: "700px",
              maxHeight: "90vh",
              width: "95%",
              overflowY: "auto",
              color: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            },
          }}
        >
          {" "}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 text-xl font-bold"
            title="Close"
          >
            ×
          </button>
          <br />
          {selectedProject && (
            <div className="space-y-4">
              <img
                src={selectedProject.screenshots[0]}
                alt={selectedProject.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm text-gray-300">
                {selectedProject.description}
              </p>

              {/* Features */}
              {selectedProject?.features?.length > 0 && (
                <div>
                  <p className="font-semibold text-lg mb-2">Features</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {selectedProject.features.map((data, id) => (
                      <li key={id}>{data}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mt-4">
                <h2 className="font-semibold text-lg mb-2">Tags</h2>
                {selectedProject?.tags?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((data, id) => (
                      <span
                        key={id}
                        className="bg-blue-700 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {data}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-red-500 font-mono">No Tags Found</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {/* Project Type */}
                <div className="text-sm">
                  <span className="font-semibold text-blue-500">
                    Project Type:
                  </span>{" "}
                  <span className="text-amber-400">
                    {selectedProject.ProjectType}
                  </span>
                </div>

                {/* Duration */}
                <div className="text-sm">
                  <span className="font-semibold text-blue-500">Duration:</span>{" "}
                  <span className="text-amber-400">
                    {selectedProject.duration}
                  </span>
                </div>

                {/* Role */}
                <div className="text-sm">
                  <span className="font-semibold text-blue-500">Role:</span>{" "}
                  <span className="text-amber-400">{selectedProject.role}</span>
                </div>

                {/* Type */}
                <div className="text-sm">
                  <span className="font-semibold text-blue-500">Type:</span>{" "}
                  <span className="text-amber-400">{selectedProject.type}</span>
                </div>

                {/* Status */}
                <div className="text-sm">
                  <span className="font-semibold text-blue-500">Status:</span>{" "}
                  <span
                    className={
                      selectedProject.status === "Completed"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {selectedProject.status}
                  </span>
                </div>
                <p className="text-sm flex flex-wrap gap-2 items-center">
                  <span className="font-semibold text-blue-500">
                    Start Date:
                  </span>
                  <span className="text-amber-400">
                    {selectedProject.startDate}
                  </span>
                  <span className="font-semibold text-blue-500">End Date:</span>
                  <span className="text-amber-400">
                    {selectedProject.endDate}
                  </span>
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  Video Demo
                </h3>
                <div className=" overflow-hidden shadow-lg border border-gray-800">
                  {selectedProject.videoDemo ===
                  "https://www.youtube.com/watch?v=gxHXPmePnvo" ? (
                    <div className="text-center font-mono text-gray-400 p-4 cursor-not-allowed">
                      <p>Video demo will be available within 2 days.</p>
                    </div>
                  ) : (
                    selectedProject.videoDemo
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Link to={selectedProject.githubLink}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                </Link>
                <Link to={selectedProject.liveLink}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-gray-700 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
