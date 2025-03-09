import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <div className="social-icons">
        <a href="https://github.com/najsefoster1" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/najsefoster" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

