import React from "react";
import "../style/Projects.css";
import Project1 from "../assets/Ecomm.png";
import Project2 from "../assets/RealState.png";
import Project3 from "../assets/Fitness.png";

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="services-title">Our Projects</h2>{" "}
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-img-container">
            <img src={Project1} alt="E-commerce App" />

            <div className="project-overlay">
              <button className="view-project-btn">View Project</button>
            </div>
          </div>
          <div className="project-info">
            <h3>E-commerce Website</h3>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img-container">
            <img src={Project2} alt="Real Estate Web" />
            <div className="project-overlay">
              <button className="view-project-btn">View Project</button>
            </div>
          </div>
          <div className="project-info">
            <h3>Real Estate Dashboard</h3>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img-container">
            <img src={Project3} alt="Fitness App" />
            <div className="project-overlay">
              <button className="view-project-btn">View Project</button>
            </div>
          </div>
          <div className="project-info">
            <h3>Fitness Tracking App</h3>
          </div>
        </div>
      </div>
      <div className="view-all-container">
        <button className="view-all-btn">
          View All Projects
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </section>
  );
};

export default Project;
