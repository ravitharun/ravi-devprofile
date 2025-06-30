import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ⬅️ Import Router
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Resume from "./Pages/Resume.jsx";
import Contact from "./Pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
