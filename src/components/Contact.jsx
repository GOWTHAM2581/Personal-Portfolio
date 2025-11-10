import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_kbv7hjx", // ✅ your actual EmailJS Service ID
        "template_kms2gkq", // ✅ your actual Template ID
        form.current,
        "PMsZr8OJ6VSWXvkFK" // ✅ your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000); // clear message after 4s
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-14 px-5 sm:px-8 md:px-20 bg-[#0F172A] text-gray-200 transition-colors duration-500 flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact <span className="text-[#F97316]">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Have a question, a project, or want to collaborate? Fill out the form
          below and I’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-[#1E293B]/80 p-6 sm:p-8 rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.15)]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full"
        >
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="flex-1 w-full bg-[#0F172A]/80 border border-[#F97316]/30 rounded-lg px-4 py-3 text-sm sm:text-base text-gray-200 focus:border-[#F97316] focus:outline-none transition-all duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="flex-1 w-full bg-[#0F172A]/80 border border-[#F97316]/30 rounded-lg px-4 py-3 text-sm sm:text-base text-gray-200 focus:border-[#F97316] focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full bg-[#0F172A]/80 border border-[#F97316]/30 rounded-lg px-4 py-3 text-sm sm:text-base text-gray-200 focus:border-[#F97316] focus:outline-none transition-all duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-[#0F172A]/80 border border-[#F97316]/30 rounded-lg px-4 py-3 text-sm sm:text-base text-gray-200 focus:border-[#F97316] focus:outline-none transition-all duration-300 resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`text-center mt-5 text-sm font-medium ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
