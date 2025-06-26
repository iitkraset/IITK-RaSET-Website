import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './components/styles.css';
import TeamDisplay from './components/TeamDisplay';
import { BrowserRouter , Routes, Route , useNavigate} from "react-router-dom";
import Sponsorships from './components/Sponsors';
import Projects from './components/Projects';
import Homepage from './components/Homepage';
import ContactPage from './components/Contact';

const Team = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div style={{ height: '200vh' }}> {/* Just to test scrolling */}
    //     <h1 style={{ marginTop: '100px' }}>Scroll down to see navbar effect</h1>
    //   </div>
    // </div>
    <div className='page-wrapper'> <Navbar />
    
    <TeamDisplay/>
    <Footer />
    </div>
    
  );
}

const Homeset = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div style={{ height: '200vh' }}> {/* Just to test scrolling */}
    //     <h1 style={{ marginTop: '100px' }}>Scroll down to see navbar effect</h1>
    //   </div>
    // </div>
    <div className='page-wrapper'> <Navbar />
    
    <Homepage/>
    <Footer />
    </div>
    
  );
}



const App = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
      <Route path="/" element={<Homeset />} />
       <Route path="/sponsors" element={<Sponsorships />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/team" element={<Team />} />
       <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
