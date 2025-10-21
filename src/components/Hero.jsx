import { motion } from "framer-motion";
import profilepic from "../assets/images/jeevanphoto.JPG";
import Resume from "../assets/PDF/Jeevan_Reddy_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white px-6 pt-24 overflow-hidden"
    >
      <motion.img
        src={profilepic}
        alt="Jeevan Reddy P"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] border-4 border-white/80 mb-8 object-cover"
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
          Jeevan Reddy P 👋
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl max-w-xl text-gray-200"
      >
        MERN Stack Developer passionate about{" "}
        <span className="text-yellow-200 font-semibold">
          building efficient and scalable web applications
        </span>{" "}
        using React.js, Node.js, and MongoDB.
      </motion.p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-7 mb-16">
        <motion.a
          href={Resume}
          download={"Jeevan_Reddy_Resume.PDF"}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300">
            Download Resume
          </button>
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/1UiJf-TIx4YQ98wt-cBIPMh4eHaHVdGOL/view?usp=sharing"
          target="_blank"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300">
            View Resume
          </button>
        </motion.a>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          View My Work 🚀
        </motion.a>
      </div>
    </section>
  );
}
