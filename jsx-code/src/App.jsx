// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
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
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
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
