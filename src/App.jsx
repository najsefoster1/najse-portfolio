import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Graphs from "./components/Graphs";
import AboutMe from "./components/AboutMe"; 
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Projects />
      <Graphs />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

