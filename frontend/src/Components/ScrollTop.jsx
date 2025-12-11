import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [showButton, setShowButton] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const ScrollTopIndic = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div
        title="Scroll to Top"
          onClick={ScrollTopIndic}
          className="
            fixed 
            bottom-6 
            right-6 
            bg-yellow-400 
            text-black 
            p-3 
            rounded-full 
            shadow-lg 
            cursor-pointer 
            hover:bg-yellow-300 
            transition 
            duration-300
            z-50
          "
        >
          <FaArrowUp className="text-xl" />
        </div>
      )}
    </>
  );
}

export default ScrollTop;
