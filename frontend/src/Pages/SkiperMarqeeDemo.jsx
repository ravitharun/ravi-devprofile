import React from "react";
import "../Pages/SkiperMarqeeDemo.css"; // For keyframes
import { useNavigate } from "react-router-dom";

const iconUrls = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968267.png", // Replace with your icon URLs
  "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968262.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
];

const SkiperMarqeeDemo = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 1200);
  return (
    <div className="overflow-hidden py-8 bg-white">
      {[...Array(4)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-4 items-center whitespace-nowrap animate-marquee ${
            rowIndex % 2 === 1 ? "animate-marquee-reverse" : ""
          }`}
        >
          {iconUrls.concat(iconUrls).map((url, index) => (
            <div
              key={index}
              className="min-w-[80px] min-h-[80px] rounded-xl shadow p-2 bg-white"
            >
              <img
                src={url}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkiperMarqeeDemo;
