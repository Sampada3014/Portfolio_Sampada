import React, { useEffect } from "react";
import "./footer.css";
import $ from "jquery"; // Import jQuery

import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  useEffect(() => {
    // Dynamically load ripples.js from the public/js folder
    const script = document.createElement("script");
    script.src = "/js/jquery.ripples.js"; // Correct path to ripples.js in public/js
    script.async = true;

    script.onload = () => {
      if ($.fn.ripples) {
        console.log("Ripples.js loaded successfully");
        $("#footer").ripples({
          resolution: 512,
          dropRadius: 20, // Bigger means more water effect
          perturbance: 0.04, // Higher means more wave movement
        });
      } else {
        console.error("Ripples.js did not load correctly.");
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <footer id="footer">
      <a href="#" className="footer__logo">Sampada</a>

      <ul className="permaLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://wa.me/9067552771" target="_blank" rel="noopener noreferrer">
          <AiOutlineWhatsApp />
        </a>
        <a href="https://instagram.com/sampada757" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href="https://linkedin.com/in/sampada-kuveskar-07514525a" id="linkedin__logo" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
        <span className="mobile__socials">
          <a href="https://github.com/Sampada1476214762" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/sampada-kuveskar-07514525a" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </span>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sampada Creative Services 2024</small>
      </div>
    </footer>
  );
}

export default Footer;
