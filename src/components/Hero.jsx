import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 w-full max-w-7xl mx-auto pt-32 pb-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <img
            src={profileImg}
            alt="Abdalaziz Elbadawy"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-slate-700 shadow-lg shadow-sky-950/40"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-4 text-sm md:text-base">
            Abdalaziz Elbadawy
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Mobile Experiences
            </span>
            <br className="hidden md:block" /> That Matter.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl md:mx-0 mx-auto mb-10 leading-relaxed">
            I build high-performance, beautiful mobile applications with a focus
            on seamless user experiences and modern design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/abdalaziz-elbadawy-b1a8063b7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-full font-medium transition-colors ring-1 ring-slate-700 flex items-center gap-2"
            >
              Get In Touch
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-blue-400 border border-blue-500 hover:bg-blue-500/10 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a
          href="#about"
          className="p-3 bg-slate-800/50 rounded-full border border-slate-700 text-slate-400 hover:text-blue-400 transition-colors block backdrop-blur-sm"
        >
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
