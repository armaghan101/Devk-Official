import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// --- Access your environment variables (VITE SYNTAX) ---
// Note: We now use "import.meta.env" and the "VITE_" prefix
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  // --- ADD THIS CONSOLE LOG ---
  console.log("Loading EmailJS Keys:");
  console.log("Service ID:", SERVICE_ID);
  console.log("Template ID:", TEMPLATE_ID);
  console.log("Public Key:", PUBLIC_KEY);
  // ------------------------------

  const form = useRef();
  const [status, setStatus] = useState(""); // For success/error messages

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setStatus("Sending..."); // Show sending status

    // Check if keys are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS environment variables are not loaded!");
        setStatus("Error - Configuration missing.");
        return; // Stop if keys are missing
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message Sent!"); // Show success
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          setStatus("Error - Please try again."); // Show error
        }
      );
  };

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

        {/* --- ADD ref AND onSubmit TO FORM --- */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="from_name" // --- FIX: Must be a string ---
              placeholder="Enter Your Name"
              required
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
              name="from_email" // --- FIX: Must be a string ---
              placeholder="Enter Your Email"
              required
              className="w-full p-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-400 
              outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Your Message
            </label> {/* <-- FIX: Was </Dlabel> */}
            <textarea
              rows="4"
              name="message" // --- FIX: Must be a string ---
              placeholder="Write your message here..."
              required
              className="w-full p-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-400 
              outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-black text-white font-semibold 
            hover:bg-blue-700 active:scale-95 transition-all"
          > {/* <-- FIX: Was D> */}
            Send Message
          </button>

          {/* --- STATUS MESSAGE --- */}
          {status && (
            <p className={`text-center font-medium ${
              status.includes("Error") ? 'text-red-500' : 'text-green-500'
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}