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
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-4 h-48 w-full rounded-lg overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 text-lg">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-300 text-black font-semibold rounded-full hover:bg-pink-400 transition-colors duration-300"
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
