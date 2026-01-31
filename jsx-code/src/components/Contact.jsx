import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed
import { FaFireFlameCurved, FaPlaneDeparture, FaMicrochip, FaParachuteBox, FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa';
import './Contact.css'
import ScrollReveal from 'scrollreveal';

const ContactPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: false, distance: '60px', duration: 2500, delay: 400 });
    sr.reveal('.contact-page .y24rect', { origin: 'bottom', delay: 200 });
    sr.reveal('.contact-page .infou li', { origin: 'bottom', interval: 150 });
    sr.reveal('.contact-page .form', { origin: 'left', delay: 300 });
    sr.reveal('.contact-page .infu', { origin: 'right', delay: 300 });
    sr.reveal('.contact-page .map', { origin: 'bottom', delay: 400 });
  }, []);

  return (
    <div className="contact-page">
      <Navbar activeLink="contact" />
      
      <section className="sponsors-section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
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

      <section className="ContactUS">
        <div className="Cbox">
          {/* <div className="contactS form">
            <h3>Send us a Message . . .</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>Your Name</span>
                    <input type="text" placeholder="Write here . . ." />
                  </div>
                  <div className="inputBox">
                    <span>Your Email</span>
                    <input type="text" placeholder="abcd123@email.com" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Subject</span>
                    <input type="text" placeholder="Write here . . ." />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here . . ."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div> */}

          <div className="contactS infu">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <ul className="infou">
                <li>
                  <span><FaLocationDot style={{ color: 'white', fontSize: '2.25rem' }} /></span>
                  <span style={{ fontSize: '14px' }}>Ground Floor<br /> Advanced Propulsion Laboratory<br /> Indian Institute of Technology Kanpur<br /> Kanpur, Uttar Pradesh 208016 IN</span>
                </li>
                <li>
                  <span><FaEnvelope style={{ color: 'white', fontSize: '2.25rem' }} /></span>
                  <p style={{ fontSize: '14px', lineHeight: '1.4' ,color: 'white'}}>
                    <a href="mailto:raset@iitk.ac.in">raset@iitk.ac.in</a><br />
                    <a href="mailto:iitk.raset@gmail.com">iitk.raset@gmail.com</a><br />
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="contactS map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.4728896939043!2d80.23278414461225!3d26.515456970725698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3702117c1c2b%3A0xb6dae19193203afa!2sDepartment%20of%20Aerospace%20Engineering!5e0!3m2!1sen!2sin!4v1734605245970!5m2!1sen!2sin" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Kanpur Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;