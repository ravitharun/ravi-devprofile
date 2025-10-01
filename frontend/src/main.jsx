
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ⬅️ Import Router
import { Routes, Route } from "react-router-dom";
// import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
// import Skills from "./Pages/Skills.jsx"
import Projects from "./Pages/Projects.jsx";
import Resume from "./Pages/Resume.jsx";
import Contact from "./Pages/Contact.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Home from "./Pages/Home.jsx";
import { ThemeProvider } from "./Pages/ThemeContext";
import Load from "./Components/Load";
const About = React.lazy(() => import("./Pages/About"));

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Load />}>
              <About />
            </Suspense>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
