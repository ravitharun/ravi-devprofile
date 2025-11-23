// Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpotlightNewDemo } from "./SpotlightNewDemo";
import Load from "../Components/Load";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // show loader
    const timer = setTimeout(() => {
      setLoading(false); // hide loader
      // navigate("/");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return <Load />; // show your big loader here
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-center px-4 overflow-x-hidden">
      <SpotlightNewDemo />


    </div>

  );
}
