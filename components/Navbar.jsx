import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';
import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  text-light glass">
      <div className="container-fluid">
        {/* Branding Section */}
        <a className="navbar-brand" href="#">My Portfolio</a>
        
        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
