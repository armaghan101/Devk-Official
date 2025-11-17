import React from "react";

export default function ContactForm() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      
      <div className="max-w-lg w-full bg-white shadow-xl rounded-3xl p-10">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Have questions or want to work with us? Send us a message!
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-400 
              outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-400 
              outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-400 
              outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-black text-white font-semibold 
            hover:bg-blue-700 active:scale-95 transition-all"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}
