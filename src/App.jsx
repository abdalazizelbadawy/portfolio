import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors"
          >
            A<span className="text-blue-500">.</span>B
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-white hover:scale-105 transition-all"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
