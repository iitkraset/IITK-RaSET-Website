import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFireFlameCurved, 
  faPlaneDeparture, 
  faMicrochip, 
  faParachuteBox
} from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'
import './Footer.css'
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
       
    <div  className="projects-page">
      {/* Hero Section */}
      <section>
        <div id="animation-section">
          <canvas></canvas>
        </div>
        <div className="main-text">
          <h1 className="WEtext" style={{fontWeight: 650}}>IITK RaSET</h1>
          <p id="main1">IIT KANPUR ROCKETRY & SPACE EXPLORATION TEAM</p>
          <p id="main2" style={{color: "#f7941d"}}>Design. Build. Launch. Innovate. Reiterate.</p>
          <a href="#aboutus" className="abt">ABOUT US</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="abut" id="aboutus">
        <h1 id="main-title">About us</h1>
        <div className="row">
          <div className="image">
            <img src="images/imggg2.jpg" alt="Team working on rocket" />
          </div>
          <div className="content">
            <h3 style={{textAlign: "left", paddingBottom: "10px", fontFamily: "Share Tech Mono"}}>OUR AIM</h3>
            <p style={{color: "white", textAlign: "left", lineHeight: "1.45", fontWeight: 375}}>
              Our aim is to ignite the passion for space tech among the students by building next generation sounding rockets. 
              We are pioneering the students in rocket engineering with the goal of launching a student-built rocket into space.
            </p>
          </div>
        </div>
      </section>

      {/* Subsystems Section */}
      <section className="subsystems" id="subsystems">
        <div className="container">
          <h1 className="subsystem-heading" style={{fontWeight: 570}}>OUR SUBSYSTEMS</h1>
          <div className="card-container">
            <div className="card" id="item1">
              <FontAwesomeIcon icon={faFireFlameCurved} size="2xl" style={{color: "#ffffff"}} />
              <h3 style={{color: "white", fontSize: "18px", fontWeight: 650, marginBottom: "21px"}}>PROPULSION</h3>
              <p style={{color: "white", textAlign: "left", fontSize: "17px", lineHeight: "1.4"}}>
                At IITK RaSET, propulsion lies at the heart of our rocketry enthusiasts. We design and develop advanced solid and liquid rocket engines, 
                pushing the boundaries of performance and innovation. Our propulsion team combines theoretical knowledge with extensive hands-on experience 
                to power our rockets towards space.
              </p>
              <a href="https://drive.google.com/file/d/1IFZKqOCarH6pvy-6I6CcIEONcF9FSToy/view?usp=drivesdk" className="card-button">Learn more</a>
            </div>
            
            <div className="card" id="item2">
              <FontAwesomeIcon icon={faPlaneDeparture} size="2xl" style={{color: "#ffffff"}} />
              <h3 style={{color: "white", fontSize: "18px", fontWeight: 650}}>AERODYNAMICS & STRUCTURES</h3>
              <p style={{color: "white", textAlign: "left", fontSize: "17px", lineHeight: "1.4"}}>
                The Aerodynamics and Structures team at IITK RaSET ensures that our rockets achieve optimal flight performance and structural integrity. 
                We design, analyze, and test aerodynamic profiles for maximum stability and efficiency.By combining innovative materials and cutting-edge 
                simulation tools, we strive to build rockets that are both robust and high-performing.
              </p>
              <a href="https://drive.google.com/file/d/1S0mTjwDa7oSt_cBynET0sFR62Tz5FIKu/view?usp=drivesdk" className="card-button">Learn more</a>
            </div>
            
            <div className="card" id="item3">
              <FontAwesomeIcon icon={faMicrochip} size="2xl" style={{color: "#ffffff"}} />
              <h3 style={{color: "white", fontSize: "18px", fontWeight: 650}}>AVIONICS & <br/>PAYLOAD</h3>
              <p style={{color: "white", textAlign: "left", fontSize: "17px", lineHeight: "1.4"}}>
                The Avionics and Payload team at IITK RaSET focuses on equipping our rockets with advanced electronics. We develop reliable flight computers, 
                telemetry systems, and sensors to ensure precise navigation, data acquisition, and communication. We also design and integrate payload systems 
                tailored to scientific and experimental objectives.
              </p>
              <a href="https://drive.google.com/file/d/1nPs4nQZAK0p1hDS4q2Fv8dv6ysnZFz1c/view?usp=drivesdk" className="card-button">Learn more</a>
            </div>
            
            <div className="card" id="item4">
              <FontAwesomeIcon icon={faParachuteBox} size="2xl" style={{color: "#ffffff"}} />
              <h3 style={{color: "white", fontSize: "18px", fontWeight: 650, marginBottom: "21px"}}>RECOVERY</h3>
              <p style={{color: "white", textAlign: "left", fontSize: "17px", lineHeight: "1.4"}}>
                The Recovery team at IITK RaSET ensures the safe retrieval of our rockets after every mission. We design and implement reliable recovery systems, 
                including parachutes and deployment mechanisms, to protect critical components and enable reusable technology. we aim to make our launches both 
                sustainable and cost-effective.
              </p>
              <a href="https://drive.google.com/file/d/1cRV9z-osZqELUE4k4jkiz2k2u9rnFQE_/view?usp=drivesdk" className="card-button">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="Gallery">
        <div className="conbox2">
          <h1 className="h1conbox2">GALLERY</h1>
        </div>
        <div className="gall-container">
          <div className="gall">
            <article className="gall-article">
              <img src="images/imgg1.jpg" alt="K Class Solid Rocket Motor" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.2rem"}}>K Class Solid Rocket Motor</span>
              </div>
            </article>
            <article className="gall-article">
              <img src="images/imggg2.jpg" alt="Rocket Prometheus" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.3rem"}}>Rocket Prometheus</span>
              </div>
            </article>
            <article className="gall-article">
              <img src="images/imggg31.jpg" alt="Static Fire Test" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.3rem"}}>Static Fire Test</span>
              </div>
            </article>
            <article className="gall-article">
              <img src="images/imgg4.jpg" alt="Outreach Activities" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.3rem"}}>Outreach Activities</span>
              </div>
            </article>
            <article className="gall-article">
              <img src="images/imgg5.jpg" alt="Outreach Activities" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.3rem"}}>Outreach Activities</span>
              </div>
            </article>
            <article className="gall-article">
              <img src="images/imgg66.jpg" alt="Festival Celebration" className="gall-img" />
              <div className="gall-data">
                <span className="gall-description" style={{fontSize: "1.3rem"}}>Festival Celebration</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;