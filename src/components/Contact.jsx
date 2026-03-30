import React from "react";
import { motion } from "framer-motion";
import { Code, User, Mail, Heart } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative border-t border-slate-800 bg-slate-950 mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
            Let's Build Something Awesome
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question, a project idea, or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:abdalazizelbadawy11@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 pt-8 flex flex-col items-center"
        >
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/abdalazizelbadawy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
            >
              <Code size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdalaziz-elbadawy-b1a8063b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors p-2 hover:bg-slate-800 rounded-full"
            >
              <User size={24} />
            </a>
            <a
              href="mailto:abdalazizelbadawy11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800 rounded-lg"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-slate-500 font-mono">
            Designed & Built by Abdalaziz Elbadawy{" "}
            <Heart size={14} className="text-red-500 inline" />
          </p>
          <p className="text-xs text-slate-600 mt-2 font-mono">
            Crafted with React, Vite & Tailwind CSS v4
          </p>
        </motion.div>
      </div>
    </section>
  );
}
