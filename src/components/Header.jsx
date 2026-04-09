import React from "react";
import Navbar from "../components/Navbar";
import "../style/Header.css";
import headerImg from "../assets/headerImg.png";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="main-header">
      <Navbar />

      <div className="header-content">
        <div className="text-section">
          <h1>Your Vision, Our Code.</h1>
          <p>
            From concept to deployment, AppFusion builds innovative digital
            products that drive real-world results.
          </p>
          <NavHashLink to="/contact">
            <button className="get-started-btn">Get Started!</button>
          </NavHashLink>
        </div>

        <div className="image-section">
          <img src={headerImg} alt="Header Visual" className="header-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
