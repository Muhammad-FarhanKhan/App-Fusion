import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Footer.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"; 

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container" id="contact-section">
      <div className="footer-overlay">
        {/* Top Section: Heading with lines */}
        <div className="heading-wrapper">
          <div className="line"></div>
          <h2 className="footer-heading">Ready to Build Your Project?</h2>
          <div className="line"></div>
        </div>
        <p className="footer-text">Let's bring your ideas to life!</p>

        <button
          className="contact-btn"
          onClick={() => navigate("/contact")} 
        >
          Contact Us
        </button>
        
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

export default Footer;
