import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Terminal } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto relative relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] flex-grow bg-slate-800 ml-4 max-w-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              Hi there! I'm{" "}
              <span className="text-blue-400 font-medium">
                Abdalaziz Elbadawy
              </span>
              , a Software Developer specialized in building mobile applications
              with React Native. I'm dedicated to delivering robust, performant
              software solutions.
            </p>
            <p>
              Currently, I'm working at{" "}
              <a
                href="https://codecrafteg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium border-b border-cyan-400/30 pb-0.5 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-300 cursor-pointer"
              >
                Code Craft
              </a>
              , where I focus on crafting seamless, cross-platform mobile
              experiences that solve real-world problems.
            </p>
            <p>
              Beyond coding, I am a dedicated Arch Linux user who loves system
              customization and deeply appreciates modern desktop environments
              like GNOME on Wayland. My philosophy to development is simple:
              write clean, maintainable code while keeping the end-user at the
              heart of the design process.
            </p>
          </div>

          <div className="md:col-span-5 relative group">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold text-xl mb-1">
                    Developer @ Code Craft
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Building next-gen mobile applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <Terminal size={28} />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold text-xl mb-1">
                    Clean Code Advocate
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Focused on scalable architectures and readable codebases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
