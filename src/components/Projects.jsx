import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Smartphone } from "lucide-react";

const projects = [
  {
    title: "XO Game",
    description:
      "A pure JavaScript and HTML implementation of the classic Tic Tac Toe game with core game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://abdalazizelbadawy.github.io/xo-project/",
    github: "https://github.com/abdalazizelbadawy/xo-project.git",
    icon: <Code className="text-blue-400" size={32} />,
  },
  {
    title: "Smart Calculator",
    description:
      "A functional web-based calculator that supports basic arithmetic operations with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://abdalazizelbadawy.github.io/calculator-project/",
    github: "https://github.com/abdalazizelbadawy/calculator-project.git",
    icon: <Code className="text-cyan-400" size={32} />,
  },
  {
    title: "Legacy Portfolio",
    description:
      "My first personal website project, showcasing my early journey and growth in web development.",
    tech: ["HTML", "CSS", "Portfolio"],
    demo: "https://abdalazizelbadawy.github.io/website-project/",
    github: "https://github.com/abdalazizelbadawy/website-project.git",
    icon: <Code className="text-indigo-400" size={32} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px grow bg-slate-800 mr-4 max-w-sm hidden md:block"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight text-center md:text-left">
            Featured Projects
          </h2>
          <div className="h-px grow bg-slate-800 ml-4 max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-800/80 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    title="Live Demo"
                  >
                    <Code size={22} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    title="GitHub Repository"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/abdalazizelbadawy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full transition-all"
          >
            <span>View detailed GitHub Archive</span>
            <Code size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
