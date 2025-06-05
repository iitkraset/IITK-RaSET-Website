// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import logo from './assets/images/logo.png';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-header ${isScrolled ? 'header-active' : ''}`}>
//       <div className="logo">
//         <Link to="/" className="logo-link">
//           <img src={logo} alt="Site Logo" className="logo-img" />
//         </Link>
//       </div>
      
//       <nav className="navbar">
//         <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//           <li><Link className="nav-link" to="/"><span className="active">Home</span></Link></li>
//           <li><Link className="nav-link" to="/projects">Projects</Link></li>
//           <li><Link className="nav-link" to="/sponsors">Sponsorships</Link></li>
//           <li><Link className="nav-link" to="/team">Team</Link></li>
//           <li><Link className="nav-link" to="/contact">Contact us</Link></li>
//         </ul>
        
//         <div 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Menu toggle"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <a href="/">
//           {/* Temporary text logo until image works */}
//           <span className="logo-text">IITK RaSET</span>
//         </a>
//       </div>
      
//       <div 
//         className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//         <li><a href="/">Home</a></li>
//         <li><a href="/projects">Projects</a></li>
//         <li><a href="/sponsors">Sponsorships</a></li>
//         <li><a href="/team">Team</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar">
//         <div className="logo">
//           <a href="/" className="logo-link">
//             <span className="logo-text">IITK RaSET</span>
//           </a>
//         </div>

//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <a href="/" className="nav-link active">Home</a>
//           <a href="/projects" className="nav-link">Projects</a>
//           <a href="/sponsors" className="nav-link">Sponsorships</a>
//           <a href="/team" className="nav-link">Team</a>
//           <a href="/contact" className="nav-link">Contact</a>
//         </div>

//         <div 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Menu toggle"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar">
//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <a href="#home" className="nav-link">
//             <span className="link-text">Home</span>
//             <span className="link-underline"></span>
//           </a>
//           <a href="#projects" className="nav-link">
//             <span className="link-text">Projects</span>
//             <span className="link-underline"></span>
//           </a>
//           <a href="#sponsors" className="nav-link">
//             <span className="link-text">Sponsors</span>
//             <span className="link-underline"></span>
//           </a>
//           <a href="#team" className="nav-link">
//             <span className="link-text">Team</span>
//             <span className="link-underline"></span>
//           </a>
//           <a href="#contact" className="nav-link">
//             <span className="link-text">Contact</span>
//             <span className="link-underline"></span>
//           </a>
//         </div>

//         <div 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Menu toggle"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar">
//         {/* Empty div to push nav links to the right */}
//         <div className="navbar-left"></div>
        
//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <a href="#home" className="nav-link">
//             <span className="link-text">Home</span>
//           </a>
//           <a href="#projects" className="nav-link">
//             <span className="link-text">Projects</span>
//           </a>
//           <a href="#sponsors" className="nav-link">
//             <span className="link-text">Sponsors</span>
//           </a>
//           <a href="#team" className="nav-link">
//             <span className="link-text">Team</span>
//           </a>
//           <a href="#contact" className="nav-link">
//             <span className="link-text">Contact</span>
//           </a>
//         </div>

//         <div 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Menu toggle"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
//       <nav className="navbar">
//         <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//           <li><a href="#home" className="nav-link active">Home</a></li>
//           <li><a href="#projects" className="nav-link">Projects</a></li>
//           <li><a href="#sponsors" className="nav-link">Sponsorships</a></li>
//           <li><a href="#team" className="nav-link">Team</a></li>
//           <li><a href="#contact" className="nav-link">Contact us</a></li>
//         </ul>

//         <div 
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Menu toggle"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
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