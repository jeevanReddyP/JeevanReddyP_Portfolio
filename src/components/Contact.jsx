import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const phoneNumber = "917899570079";
  const message = "Hi Jeevan! I visited your portfolio and want to connect.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Contact Me
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "6rem" }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-1 mx-auto mb-10 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-200 mb-8"
      >
        Let’s connect! Reach me at:
      </motion.p>

      {/* Contact Number */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center mb-10 text-lg sm:text-xl text-yellow-200 font-medium"
      >
        📞 Contact Number:
        <span className="ml-2 text-white hover:text-pink-300 transition-colors duration-300">
          7899570079
        </span>
      </motion.div>

      {/* Email and WhatsApp Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
        <motion.a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold px-6 py-3 
            bg-white/10 backdrop-blur-md rounded-full hover:bg-green-500/20 
            hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
        >
          <FaWhatsapp size={24} className="text-green-400" />
          WhatsApp
        </motion.a>

        <motion.a
          href="mailto:jeevanjgfr@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold px-6 py-3 
            bg-white/10 backdrop-blur-md rounded-full hover:bg-pink-500/20 
            hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
        >
          <FaEnvelope className="text-pink-400" />
          jeevanjgfr@gmail.com
        </motion.a>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 flex justify-center gap-8 text-3xl"
      >
        <a
          href="https://github.com/jeevanReddyP/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-colors duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jeevan-reddy-253503316/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-12 text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Jeevan Reddy P — All Rights Reserved
      </motion.p>
    </section>
  );
}
