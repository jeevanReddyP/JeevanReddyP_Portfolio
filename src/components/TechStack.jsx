import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLaptopCode,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const techStack = [
  { name: "React.js", icon: <FaReact size={50} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={50} className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={50} className="text-yellow-300" /> },
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={50} className="text-red-400" /> },
  { name: "VS Code", icon: <FaLaptopCode size={50} className="text-blue-500" /> },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-gray-900 via-indigo-900 to-purple-800 text-white px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-400"
      >
        Tech Stack & Tools
      </motion.h2>

      {/* Grid of Tech Icons */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-6xl w-full place-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 text-center"
          >
            {tech.icon}
            <span className="text-sm sm:text-base">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
