import React from "react";
import "../style/Navbar.css";
import logo from "../assets/CodeCraft.png";
import { Terminal } from "lucide-react";
import { NavHashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


const Navbar = () => {
   const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Terminal className="nav-icon-svg" size={32} color="#38bdf8" />
        <span className="site-name"
         onClick={() => navigate("/")} 
         >
          AppFusion <span className="site-sol">Company</span>
        </span>
      </div>

      <div className="nav-center">
        <NavHashLink smooth to="/#top" className="nav-btn">
          Home
        </NavHashLink>

        <NavHashLink smooth to="/#services-section" className="nav-btn">
          Services
        </NavHashLink>

        <NavHashLink smooth to="/#about-section" className="nav-btn">
          About
        </NavHashLink>

        <NavHashLink smooth to="/#contact-section" className="nav-btn">
          Contact
        </NavHashLink>
      </div>

      <div className="nav-right">
        <NavHashLink to="/contact">
          <button className="get-started-btn">Get Started!</button>
        </NavHashLink>
      </div>
    </nav>
  );
};

export default Navbar;
