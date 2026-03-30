import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React Native", level: 90, color: "bg-blue-500" },
  { name: "React", level: 85, color: "bg-cyan-500" },
  { name: "JavaScript", level: 95, color: "bg-yellow-400" },
  { name: "TypeScript", level: 80, color: "bg-blue-600" },
  { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-[1px] flex-grow bg-slate-800 ml-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 bg-slate-900/50 border border-slate-800/50 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          {skills.map((skill, index) => (
            <div key={skill.name} className="w-full">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-200 font-medium text-lg tracking-wide">
                  {skill.name}
                </span>
                <span className="text-slate-500 text-sm font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-full ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
