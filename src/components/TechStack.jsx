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
  { name: "React.js", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-300" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} className="text-red-400" /> },
  { name: "VS Code", icon: <FaLaptopCode size={40} className="text-blue-500" /> }, // ✅ replaced icon
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Tech Stack & Tools
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            {tech.icon}
            <span className="text-sm sm:text-base">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
