import { motion } from "framer-motion";
import resumeImg from "../assets/images/resumeBuilder.png";
import taskImg from "../assets/images/taskManager.png";

const projects = [
  {
    title: "Resume Builder",
    description: "A responsive Resume Builder with MERN.",
    github: "https://github.com/jeevanReddyP/ResumeBuilder",
    demo: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: resumeImg,
  },
  {
    title: "Task Manager",
    description: "Full-stack MERN app for managing daily tasks.",
    github: "https://github.com/jeevanReddyP/task-manager",
    demo: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: taskImg,
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and TailwindCSS.",
    github: "#",
    demo: "#",
    tech: ["React", "TailwindCSS"],
    image: resumeImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white px-6"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Projects
      </motion.h2>

      {/* Projects Container */}
      <div className="flex justify-between items-stretch w-full max-w-6xl gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="flex-1 flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="h-40 w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mb-3">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-yellow-300 text-black rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-pink-300 text-black rounded-full font-semibold hover:bg-pink-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
