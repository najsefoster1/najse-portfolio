import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm <span className="highlight">Najse Foster</span></h1>
      <p>Cloud Engineer | SharePoint Developer | Business Analyst</p>
      <a href="#projects" className="cta">View My Work</a>
    </motion.section>
  );
};

export default Hero;

