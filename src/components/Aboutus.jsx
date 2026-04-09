import React from "react";
import "../style/Aboutus.css";

import { CheckCircle2 } from "lucide-react";
import OfficeWork from "../assets/OfficeWork.png";

const Aboutus = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <img
            src={OfficeWork}
            alt="About CodeCraft"
            className="about-main-img"
          />
        </div>

        {/* Right Side */}
        <div className="about-right">
         {/* <div className="section-tag">
            <span>About Us</span>
          </div>
*/}
          <h3>Innovating Digital Solutions for Your Future Success</h3>

          <div className="about-points">
            <div className="point">
              <CheckCircle2 color="#22c55e" size={20} />
              <p>Expert Team of Dedicated Senior Developers </p>
            </div>
            <div className="point">
              <CheckCircle2 color="#22c55e" size={20} />
              <p>Modern Tech Stack for Scalable Solutions</p>
            </div>

            <div className="point">
              <CheckCircle2 color="#22c55e" size={20} />
              <p>24/7 Dedicated Customer Support</p>
            </div>
          </div>

          <button className="read-more-btn">Read More!</button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
