import React from 'react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed
import './Sponsors.css';

const Sponsorships = () => {
  return (
    <div className="sponsors-page">
      {/* Head content moved to public/index.html or handled by your build system */}
      
      <Navbar activeLink="sponsors" />
      
      <main>
        <section>
          <h1 className="sponmain">Our Sponsors</h1>
          <div className="sponsors">
            <div className="spcard">
              <a href="https://www.ansys.com/en-in" target="_blank" rel="noopener noreferrer">
                <img src="/images/Sponsors/Ansys.png" alt="Ansys" />
              </a>
            </div>
            <div className="spcard">
              <a href="https://www.iitk.ac.in/aero/?view=featured" target="_blank" rel="noopener noreferrer">
                <img src="/images/Sponsors/IITK.png" alt="IITK AE" />
                <h3 className="txt">Department of Aerospace Engineering <br />IIT Kanpur</h3>
              </a>
            </div>
            <div className="spcard">
              <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/Sponsors/Altium.png" alt="Altium" />
              </a>
            </div>
          </div>

          <h1 className="sponmain" style={{ marginBottom: '3rem', marginTop: '8rem' }}>Our Marketing Proposal</h1>
          <div className="proposal">
            <iframe 
              src="/images/Sponsors/Marketing Proposal IITK RaSET.pdf" 
              className="plugin"
              title="Marketing Proposal"
              style={{ width: '100%', height: '600px', border: 'none' }}
            >
              This browser does not support PDFs. Please download the PDF to view it: 
              <a href="/images/Sponsors/Marketing Proposal IITK RaSET.pdf">Download PDF</a>
            </iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsorships;