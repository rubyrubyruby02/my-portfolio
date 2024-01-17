import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Qualifications from "./components/Qualifications"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Qualifications />
      <Projects />
      <Jobs />
      <Skills />
    </main>
  );
}
