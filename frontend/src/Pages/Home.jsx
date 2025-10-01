// Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpotlightNewDemo } from "./SpotlightNewDemo";
import Load from "../Components/Load";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // show loader
    const timer = setTimeout(() => {
      setLoading(false); // hide loader
      navigate("/about");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return <Load />; // show your big loader here
  }

  return (
    <div className="w-full m-0 p-0 overflow-x-hidden">
      <SpotlightNewDemo />
    </div>
  );
}
