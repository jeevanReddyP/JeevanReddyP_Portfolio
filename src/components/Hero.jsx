import { motion } from "framer-motion";
import profilepic from "../assets/images/jeevanphoto.JPG";
import Resume from "../assets/PDF/Jeevan_Reddy_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white px-6 pt-20 md:pt-24 overflow-hidden md:py-20 md:px-12"
    >
      {/* Left Side - Profile Image */}
      <div className="md:w-1/2 md:pr-8 flex justify-center items-center mb-8 md:mb-0">
        <motion.img
          src={profilepic}
          alt="Jeevan Reddy P"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] border-4 border-white/80 object-cover"
        />
      </div>

      {/* Right Side - Text and Buttons */}
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-center items-center md:items-start">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
            JeevanReddy P
          </span>
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl max-w-xl text-gray-200"
        >
          MERN Stack Developer passionate about{" "}
          <span className="text-yellow-200 font-semibold">
            building efficient and scalable web applications
          </span>{" "}
          using React.js, Node.js, and MongoDB.
        </motion.p>

        {/* Buttons Section */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-7 text-center">
          {[{
              text: "Download Resume",
              href: Resume,
              download: true,
            }, {
              text: "View Resume",
              href: `${Resume}`,
            }, {
              text: "View My Work 🚀",
              href: "#projects",
            }]
            .map((btn, index) => (
            <motion.a
              key={index}
              href={btn.href}
              download={btn.download ? "Jeevan_Reddy_Resume.pdf" : undefined}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-black font-bold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300">
                {btn.text}
              </button>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
