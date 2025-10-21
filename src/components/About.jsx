import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed mb-8"
      >
        I’m a <span className="text-yellow-200 font-semibold">MERN Stack Developer</span> 
        who loves turning ideas into real, working products.  
        I build <span className="text-pink-300 font-medium">responsive and scalable web applications</span> 
        using <span className="font-semibold text-yellow-200">React.js, Node.js, and MongoDB</span>.  
        I enjoy learning, experimenting with new tools, and solving real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm sm:text-base backdrop-blur-md hover:scale-105 hover:bg-white/20 transition-transform duration-300"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
