import { motion } from "framer-motion";
import resumeImg from "../assets/images/resumeBuilder.png";
import Global from "../assets/images/Global.png";

const projects = [
  {
    title: "Resume Builder",
    description: "A responsive Resume Builder built with the MERN stack.",
    github: "https://github.com/jeevanReddyP/ResumeBuilder",
    demo: "https://resume-bui.netlify.app/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: resumeImg,
  },
  {
    title: "Global Explorer",
    description: "A React and Tailwind CSS-based dashboard for exploring global data.",
    github: "https://github.com/jeevanReddyP/Global-Explorer-Dashboard",
    demo: "https://globalexplorerdashboard.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    image: Global,
  },
  // You can add more projects here later
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
      >
        Projects
      </motion.h2>

      {/* Grid Layout */}
      <div
        className="
          grid 
          gap-8 
          w-full 
          max-w-7xl 
          grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 
          justify-items-center
        "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-sm"
          >
            {/* Image */}
            <div className="h-48 w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-yellow-300 mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mb-4 text-center">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 text-sm mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-300 text-black rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-300 text-black rounded-full font-semibold hover:bg-pink-400 transition"
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
