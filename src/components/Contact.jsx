import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope,FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const phoneNumber="917899570079"
  const message="Hi Jeevan! I visited your portfolio and want to connect."
  const whatsappURL=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-200 mb-8"
      >
        Let’s connect! Reach me at:
      </motion.p>
      <div className=" flex justify-center  md:10">
        Contact Number - 7899570079
      </div>
      <div className=" flex justify-center gap-6">
      <motion.a
      href={whatsappURL}
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <FaWhatsapp size={24} />
        Whatsapp
      </motion.a>
      <motion.a
        href="mailto:jeevanjgfr@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <FaEnvelope /> jeevanjgfr@gmail.com
      </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex justify-center gap-8 text-3xl"
      >
        <a
          href="https://github.com/jeevanReddyP/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jeevan-reddy-253503316/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
