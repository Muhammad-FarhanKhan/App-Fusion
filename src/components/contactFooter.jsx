import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Footer.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"; 

const ContactFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container" id="contact-section">
      <div className="footer-overlay">
        {/* Top Section: Heading with lines */}
        <div className="heading-wrapper">
          <div className="line"></div>
          <h2 className="footer-heading">Ready to Start? Connect Now</h2>
          <div className="line"></div>
        </div>
        <p className="footer-text">We respond within 24 business hours</p>

        {/* Middle Section: Separator Line and Button */}
        <hr className="divider-line" />

        {/* Bottom Section: Social Icons */}
        <div className="social-icons">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
