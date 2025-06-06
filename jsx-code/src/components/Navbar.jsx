import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.png'; // If logo.png is in src folder and Navbar.jsx is in src/components

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo-container">
          <a href="#home">
            <img src={logo} alt="IITK RaSET Logo" className="logo-img" />
          </a>
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#sponsors" className="nav-link">Sponsorships</a></li>
          <li><a href="#team" className="nav-link">Team</a></li>
          <li><a href="#contact" className="nav-link">Contact us</a></li>
        </ul>

        {/* Hamburger menu */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu toggle"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;