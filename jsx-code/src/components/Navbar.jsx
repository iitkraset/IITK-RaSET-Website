import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
            <img src={logo} alt="IITK RaSET Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/sponsors" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Sponsorships</NavLink>
          </li>
          <li>
            <NavLink to="/team" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact us</NavLink>
          </li>
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