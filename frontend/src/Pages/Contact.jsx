import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";

function Contact() {
  const page = "Contact";

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Navbar page={page} />

        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl font-mono text-yellow-400 mb-4">
            Let’s Get in Touch
          </h2>
          <p className="text-gray-300 text-lg font-Roboto">
            Have a project in mind, a collaboration opportunity, or just want to
            chat? Feel free to reach out. I’m always open to discussing new
            ideas or helping with your vision.
          </p>
        </div>

        {/* Contact Form & Google Map */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Reason for contacting"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>

          {/* Google Maps */}
          <div className="w-full h-full">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749188182!2d77.30126302222186!3d12.954459536468722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1751300983563!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
