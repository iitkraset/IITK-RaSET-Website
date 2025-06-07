import React from 'react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed
import { FaFireFlameCurved, FaPlaneDeparture, FaMicrochip, FaParachuteBox, FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa';
import './Contact.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar activeLink="contact" />
      
      <section className="ContactUS">
        <div className="Cbox2">
          <div className="contactS y24rect">
  <h3 id="rectres">Y24 RECRUITMENT RESULTS</h3>
  <div className="infoBox">
    <ul className="infou">
      {/* Propulsion */}
      <li>
        <span><FaFireFlameCurved style={{ color: '#f7941d' }} id="sublogo1" /></span>
        <span id="rispace1">Propulsion</span>
        <div className="name-roll-container">
          <div className="name">Ayush Dwivedi<br />Saket Pratap<br />Arunteja<br />Shivam Sah<br />Rucha Pimpalkar<br />Priyam<br />Preet Varu<br />Ravi Patar</div>
          <div className="roll">240238<br />240909<br />240199<br />240979<br />240887<br />240801<br />241144<br />240856</div>
        </div>
      </li>
      
      {/* Aerodynamics & Structures */}
      <li>
        <span><FaPlaneDeparture style={{ color: '#f7941d' }} id="sublogo2" /></span>
        <span id="rispace2">Aerodynamics & Structures</span>
        <div className="name-roll-container">
          <div className="name">Shlok Sharma<br />Anurag Patil<br />Ashwin Kumar singh<br />Hetal Sharad Patil<br />Mehta Aarav<br />Ritika Batra<br />Anshu Sharma<br />Abhijit Sandip Jagtap<br />Ria Agrawal<br />Arman Kumar Singh<br />Gunjan Soni<br />Rachna Sinha<br />Shubhanshu Sharma</div>
          <div className="roll">240988<br />240156<br />240219<br />240449<br />240649<br />240876<br />240147<br />240028<br />240861<br />240183<br />240418<br />240824<br />241010065</div>
        </div>
      </li>
      
      {/* Avionics, Payload & Control */}
      <li>
        <span><FaMicrochip style={{ color: '#f7941d' }} id="sublogo3" /></span>
        <span id="rispace3">Avionics, Payload & Control</span>
        <div className="name-roll-container">
          <div className="name">Bhavishya Lalwani<br />SR Ramya Rasika<br />Shourya Mathur<br />Ashwin Varma<br />H.Nideesh<br />Praket Goel<br />S Kiran<br />Aashutosh Kushwaha<br />Aradhya Goel<br />Chirag Gupta<br />Karan Kunal<br />Arnav Agarwal</div>
          <div className="roll">240270<br />240849<br />240991<br />240220<br />240690<br />240762<br />240895<br />240022<br />240168<br />240311<br />240520<br />240187</div>
        </div>
      </li>
      
      {/* Recovery */}
      <li>
        <span><FaParachuteBox style={{ color: '#f7941d' }} id="sublogo4" /></span>
        <span id="rispace4">Recovery</span>
        <div className="name-roll-container">
          <div className="name">Parth Wadhawe<br />Ronit Roy<br />Pradeep Bishnoi<br />Anshit Goyal<br />Aarichsun Batlish<br />Bhargavi Arun Borse<br />Aditya Kukreti</div>
          <div className="roll">240737<br />240884<br />240756<br />240146<br />240014<br />240284<br />240058</div>
        </div>
      </li>
    </ul>
  </div>
  <h3 id="cong">Congratulations to all the new members of the team.</h3>
  <h3 id="linn">Let's launch this tenure with full thrust <span id="smiley">:)</span></h3>
</div> </div>

        <div className="Cbox">
          <div className="contactS form">
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
          </div>

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