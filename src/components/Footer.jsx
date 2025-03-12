import React from "react";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import "./Footer.css"; // Importing the CSS file

const Footer = () => {
    console.log("Footer is successfully mounted")
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-section">
          <h2>Chef Claude</h2>
          <p>Delivering modern and scalable solutions for your needs.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/sagor.sutradhar.56"><Facebook size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="https://www.linkedin.com/in/sdsagor/"><Linkedin size={24} /></a>
            <a href="https://github.com/Sagor2050"><Github size = {24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Chef-Claude. All rights reserved by Sagor Sutra Dhor.
      </div>
    </footer>
  );
};

export default Footer;
