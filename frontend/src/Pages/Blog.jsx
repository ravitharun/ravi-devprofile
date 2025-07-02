import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import { Watch } from "react-loader-spinner";

function Blog() {
  const page = "Blog";
  const blogPosts = [];
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row overflow-x-hidden">
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <Navbar page={page} />

          <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center"></h1>

            <div className="max-w-4xl mx-auto space-y-6">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-yellow-400 transition"
                  >
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                    <p className="text-gray-300">{post.summary}</p>
                    <button className="mt-4 text-yellow-400 hover:underline text-sm">
                      Read More →
                    </button>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-900 rounded-xl shadow-md p-6 space-y-6">
                  {/* Loader */}
                  <div className="animate-pulse">
                    <Watch
                      height="80"
                      width="80"
                      radius="48"
                      color="#facc15"
                      ariaLabel="watch-loading"
                      visible={true}
                    />
                    
                  </div>

                  {/* Message */}
                  <p className="text-yellow-400 text-center text-lg font-medium">
                    🚧 Blog section is currently under update.
                    <br />
                    Please check back later.
                  </p>
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
