import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-backend-2kd6.onrender.com/send-mail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error connecting to server.");
    }
  };

  const phoneNumber = "917899570079";
  const message = "Hi Jeevan! I visited your portfolio and want to connect.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12 max-w-6xl mx-auto">
        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-[45%] bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold py-3 rounded-full hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-yellow-300 mt-2">{status}</p>
          )}
        </motion.form>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[35%] flex flex-col items-center space-y-6"
        >
          <h3 className="text-2xl text-yellow-300 font-semibold mb-4">
            Connect with Me
          </h3>

          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-80 gap-3 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-green-600/30 transition-all duration-300"
          >
            <FaWhatsapp size={22} className="text-green-400" />
            <span className="text-white text-lg font-medium">WhatsApp</span>
          </motion.a>

          <motion.a
            href="mailto:jeevanjgfr@gmail.com?subject=Let's Connect&body=Hi Jeevan, I visited your portfolio and wanted to reach out."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              window.location.href =
                "mailto:jeevanjgfr@gmail.com?subject=Let's Connect&body=Hi Jeevan, I visited your portfolio and wanted to reach out.";
            }}
            className="flex items-center justify-center w-full sm:w-80 gap-3 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-pink-600/30 transition-all duration-300 cursor-pointer"
          >
            <FaEnvelope size={22} className="text-pink-400" />
            <span className="text-white text-lg font-medium">Email</span>
          </motion.a>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/JeevanReddyP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeevan-reddy-253503316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="text-white hover:text-blue-400"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.p className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Jeevan Reddy P — All Rights Reserved
      </motion.p>
    </section>
  );
}
