import React from "react";
import Navbar from "../components/Navbar";
import "../style/Header.css";
import contactHeaderImg from "../assets/contactHeader.png";

const ContactHeader = () => {
  return (
    <header className="main-header">
      <Navbar />

      <div className="header-content">
        <div className="text-section">
          <h1>Get in Touch with Our Smart Tech Experts.</h1>
          <p>
            Have a project in mind or need support?Our team of innovators is
            ready to listen and build solutions that matter.
          </p>
        </div>

        <div className="image-section">
          <img
            src={contactHeaderImg}
            alt="Header Visual"
            className="header-img"
          />
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
