import React, { StrictMode, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog.jsx";
import Projects from "./Pages/Projects.jsx";
import Resume from "./Pages/Resume.jsx";
import Contact from "./Pages/Contact.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Home from "./Pages/Home.jsx";
import { ThemeProvider } from "./Pages/ThemeContext";
import Load from "./Components/Load";

const About = React.lazy(() => import("./Pages/About.jsx"));

export function Main() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "System");
  console.log("theme",theme)

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Load />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
