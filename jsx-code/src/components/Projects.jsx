import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar activeLink="Projects" />
      
      <section>
        <div className="wrapper">
          <div className="profile">
            <img src="images/projects/K-class.jpg" alt="proj1" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>
              <a>Project June<i className="fa-solid fa-up-right-from-square fa-2xs" style={{marginLeft: '2rem'}}></i></a>
            </h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}>
              <span className="specify">Project Lead : Prabhu Safi</span> <br />
              <span className="specify">Motor Class : K95% </span><br />
              <span className="specify">Total Impulse : 2500 N·s</span> <br />
              <span className="specify">Maximum Thrust : 2700 N</span> <br />
              <span className="specify">Status : Successfully tested</span> <br />
              With a peak thrust of 2700 N and a total impulse of 2500 N·s, it stands as one of the most 
              powerful rocket motors built and successfully tested by a student team in India.
              Achieving this feat required advanced propellant optimization, precision manufacturing, and innovative design.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="profile">
            <img src="images/projects/Sagra.jpeg" alt="proj2" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>
              <a>Project Sagarmatha<i className="fa-solid fa-up-right-from-square fa-2xs" style={{marginLeft: '2rem'}}></i></a>
            </h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}>
              Student-Developed High-Power Bi-Propellant Liquid Rocket Engine <br />
              <span className="specify">Project Lead : Prabhu Safi</span> <br />
              <span className="specify">Propellant : N₂O(L) / C₂H₅OH(L)</span><br />
              <span className="specify">Thrust : 7000 N</span> <br />
              <span className="specify">Specific Impulse : 216 s</span> <br />
              <span className="specify">Burn time : 10 sec</span> <br />
              <span className="specify">Cooling System : Regenerative cooling</span> <br />
              <span className="specify">Status : Ongoing</span> <br />
              This engine will produce 7 kN of thrust with a burn time of 10 seconds, powered by Liquid Nitrous Oxide (N₂O) as the oxidizer and Ethanol as the fuel, using a pressure-fed system. 
              This initiative represents a pioneering effort in advancing liquid propulsion technology at the student level, a field known for its precision, efficiency, and potential for reusability. 
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="profile">
            <img src="images/imggg2.jpg" alt="proj3" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>
              <a>Project Prometheus<i className="fa-solid fa-up-right-from-square fa-2xs" style={{marginLeft: '2rem'}}></i></a>
            </h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}>
              <span className="specify">Project Lead : Prabhu Safi</span> <br />
              <span className="specify">Rocket : Prometheus</span><br />
              <span className="specify">Dimensions : Length - 130 cm; Diameter - 72 mm</span> <br />
              <span className="specify">Propulsion : K-Class Solid Rocket Motor (95% K-class) </span> <br />
              <span className="specify">Maximum Altitude reach : 4 km</span> <br />
              <span className="specify">Maximum Velocity : 1.5 Mach</span> <br />
              <span className="specify">Status : Ongoing</span> <br />
              Prometheus is a supersonic, high-power rocket entirely designed and built by students of IIT Kanpur in collaboration with Indian Rocketry association.
              This groundbreaking project aims to reach an altitude of 4 kilometers, demonstrating advanced system integration, avionics, and recovery mechanisms. 
              It's also first supersonic, high-power rocket entirely designed and built by students in India.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="profile">
            <img src="images/OR.png" alt="proj4" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>
              <a>IN-SPACe Model Rocketry & CANSAT Competition<i className="fa-solid fa-up-right-from-square fa-2xs" style={{marginLeft: '2rem'}}></i></a>
            </h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}></p>
          </div>
        </div>

        <div className="wrapper">
          <div className="profile">
            <img src="images/q-01.jpg" alt="proj5" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>Coming Soon</h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}></p>
          </div>
        </div>

        <div className="wrapper">
          <div className="profile">
            <img src="images/q-01.jpg" alt="proj6" />
          </div>
          <div className="intro">
            <h1 style={{fontWeight: 550, marginBottom: '12px'}}>Coming Soon</h1>
            <p style={{color: 'white', fontSize: '16px', fontWeight: 365}}></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;