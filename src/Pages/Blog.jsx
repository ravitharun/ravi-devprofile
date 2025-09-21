import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import ScrollIndicator from "../Components/ScrollIndicator";
import { useEffect } from "react";
import { useState } from "react";

function Blog() {
  const page = "Blog";
  const blogPosts = [
    {
      title: "My Portfolio Journey",
      description:
        "Sharing how I designed and built my personal website using React.",
      content: "Full blog post goes here...",
      date: "2025-07-12",
      author: "Ravi Tharun",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.WyHNnNNg4sCNZ5LhoZ5DEAHaE8?pid=Api&P=0&h=180",
      slug: "my-portfolio-journey",
    },
    {
      title: "Learning AI Step-by-Step",
      description:
        "A beginner-friendly path I followed to get started with AI and ML.",
      content: "Full blog post content here...",
      date: "2025-06-30",
      author: "Ravi Tharun",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.WCqK6XavZC3o_vWbiDsfxQHaE8?pid=Api&P=0&h=180",
      slug: "learning-ai-step-by-step",
    },
  ];
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "System");
  console.log(theme, "themethemethemethemetheme");

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "Dark"
            ? "bg-black text-white"
            : "bg-white-100 text-orange-500 font-mono "
        } flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 relative`}
      >
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <Navbar page={page} />

          <div
            className={`min-h-screen ${
              theme === "Dark"
                ? "bg-black text-white"
                : "bg-white-100 text-orange-500 font-mono "
            } flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 relative`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
                Latest Blog Posts
              </h2>

              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-[#1c1c1e] rounded-xl overflow-hidden shadow-lg transition duration-300"
                    >
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6 flex flex-col h-full justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-4">
                            {post.date}
                          </p>
                          <p className="text-gray-300 text-sm line-clamp-3">
                            {post.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <button className="text-yellow-400 hover:text-yellow-500 text-sm font-medium hover:underline">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-yellow-400">
                  🚧 Blog section coming soon...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
