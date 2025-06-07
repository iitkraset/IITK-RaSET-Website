import React, { useRef, useEffect } from 'react';
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
import ScrollReveal from 'scrollreveal';

const HomePage = () => {
  // ref for the canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    let scale = 1;
    let width, height;
    let stars = [];
    let animationActive = false;
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.008 };
    let pointerY = window.scrollY;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // generate stars
    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({ x: 0, y: 0, z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE) });
      }
    }
    // place star randomly
    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }
    // recycle star when out of bounds
    function recycleStar(star) {
      // ...simplified reuse of placeStar to reset
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      placeStar(star);
    }
    // resize handler
    function resize() {
      scale = window.devicePixelRatio || 1;
      const section = document.getElementById('animation-section');
      width = section.clientWidth * scale;
      height = section.clientHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    }
    // update star positions
    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;
      stars.forEach(s => {
        s.x += velocity.x * s.z;
        s.y += velocity.y * s.z;
        s.x += (s.x - width/2) * velocity.z * s.z;
        s.y += (s.y - height/2) * velocity.z * s.z;
        s.z += velocity.z;
        if (s.x < -OVERFLOW_THRESHOLD || s.x > width + OVERFLOW_THRESHOLD || s.y < -OVERFLOW_THRESHOLD || s.y > height + OVERFLOW_THRESHOLD) {
          recycleStar(s);
        }
      });
    }
    // render stars
    function render() {
      stars.forEach(s => {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = STAR_SIZE * s.z * scale;
        ctx.globalAlpha = 0.5 + 0.5 * Math.random();
        ctx.strokeStyle = STAR_COLOR;
        ctx.moveTo(s.x, s.y);
        let tailX = Math.abs(velocity.x) < 0.1 ? 0.5 : velocity.x * 2;
        let tailY = Math.abs(velocity.y) < 0.1 ? 0.5 : velocity.y * 2;
        ctx.lineTo(s.x + tailX, s.y + tailY);
        ctx.stroke();
      });
    }
    // main animation loop
    function step() {
      if (!animationActive) return;
      ctx.clearRect(0, 0, width, height);
      update();
      render();
      requestAnimationFrame(step);
    }
    // scroll handler
    function onScroll() {
      if (!animationActive) return;
      const scrollY = window.scrollY;
      velocity.ty = (scrollY - pointerY) * 0.1;
      pointerY = scrollY;
    }
    // IntersectionObserver to start/stop
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        animationActive = entry.isIntersecting;
        if (animationActive) step();
      });
    });
    observer.observe(document.getElementById('animation-section'));
    // wire up events
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll);
    // kick off
    generate();
    resize();
    
    // ScrollReveal animations for homepage sections
    const sr = ScrollReveal({ reset: false, distance: '60px', duration: 2500, delay: 400 });
    sr.reveal('.abt', { delay: 400, origin: 'bottom' });
    sr.reveal('.subsystems .card-container', { delay: 300, origin: 'bottom' });
    sr.reveal('.Gallery .gall-article', { delay: 200, origin: 'bottom', interval: 100 });
    
    // cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
       
    <div  className="projects-page">
      {/* Hero Section */}
      <section>
        <div id="animation-section">
          <canvas ref={canvasRef}></canvas>
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