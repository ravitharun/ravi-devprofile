import React from "react";
import { FiShare2 } from "react-icons/fi"; // share icon

function ShareBtn() {
  const shareData = {
    title: "Protifilo",
    text: "Check out my portfolio!",
    url: "https://raviprotifilo.netlify.app/",
  };

  const Handelshare = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Share failed:", err);
    }
  };
  return (
    <>
      <button
        className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        onClick={Handelshare}
      >
        <FiShare2 size={18} />
        Share Me
      </button>
    </>
  );
}

export default ShareBtn;
