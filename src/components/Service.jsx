import React from "react";
import "../style/Service.css";
import AppDevIcon from "../assets/AppDevIcon.png";
import UIUX from "../assets/UIUX.png";
import WebDev from "../assets/WebDev.png";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section" id="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-container">
        <div className="service-box">
          <div className="img-wrapper">
            <img src={WebDev} alt="Web Development" className="service-img" />
            <div className="img-overlay">
              <button
                className="overlay-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <h3>FullStack Development</h3>
          <p>We build modern, responsive, and high-performance websites.</p>
        </div>

        <div className="service-box">
          <div className="img-wrapper">
            <img src={UIUX} alt="UI/UX Design" className="service-img" />
            <div className="img-overlay">
              <button
                className="overlay-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Creating intuitive and beautiful user interfaces for better
            experience.
          </p>
        </div>

        <div className="service-box">
          <div className="img-wrapper">
            <img
              src={AppDevIcon}
              alt="App Development"
              className="service-img"
            />
            <div className="img-overlay">
              <button
                className="overlay-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <h3>App Development</h3>
          <p>High-quality mobile applications for Android and iOS platforms.</p>
        </div>
      </div>

      <button className="explore-btn">
        View All Services
        <span className="arrow">→</span>
      </button>
    </section>
  );
};

export default Service;
