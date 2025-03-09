import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="bg-blue-500 text-white p-4 text-center text-lg">
        Tailwind is working!
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

