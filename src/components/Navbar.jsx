import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Portfolio</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('hero')}>
                <span className="nav-name">Home</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>
                <span className="nav-name">About</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')}>  {/* ← ADD THIS */}
                <span className="nav-name">Skills</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>
                <span className="nav-name">Projects</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>
                <span className="nav-name">Contact</span>
              </button>
            </li>
            <li>
              <button 
                className="hire-btn"
                onClick={() => scrollToSection('contact')}
              >
                <span className="nav-name">Hire Me</span>
              </button>
            </li>
          </ul>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;