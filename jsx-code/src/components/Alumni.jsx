import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ScrollReveal from 'scrollreveal';
import { TeamMemberHistory } from './Teams_template';

async function fetchAndParseCsv(csvPath) {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();
    
    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data);
        }
      });
    });
  } catch (error) {
    console.error("Error loading CSV:", error);
    return [];
  }
}

const Alumni = () => {
  const [y22Heads, setY22Heads] = useState([]);
  const [y22STMs, setY22STMs] = useState([]);

  useEffect(() => {
    async function loadAlumniData() {
      const y22HeadsData = await fetchAndParseCsv('/Heads_Y22_Info.csv');
      setY22Heads(y22HeadsData);
      const y22STMsData = await fetchAndParseCsv('/STMs_Y22_Info.csv');
      setY22STMs(y22STMsData);
    }
    
    loadAlumniData();
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({ reset: false, distance: '60px', duration: 2000, delay: 200 });
    sr.reveal('.team-heading', { origin: 'top' });
    sr.reveal('.team-grid', { origin: 'bottom', interval: 150 });
    sr.reveal('.subsystem-heading', { origin: 'left', delay: 300 });
  }, []);

  return (
    <>
      <div className="team-container" style={{ paddingTop: '120px' }}>
        <section className="history-section" style={{marginTop: '60px', marginBottom: '40px', padding: '0'}}>
          <h1 className="team-heading" style={{color:'#fff', fontSize:'3.2rem', marginBottom:'28px', letterSpacing:'2px'}}>ALUMNI</h1>
          <h2 className="subsystem-heading" style={{color:'#fff', fontWeight:800, fontSize:'2.4rem', marginBottom:'18px'}}>Y22</h2>
          <div className="team-grid">
            {y22Heads.map((member, idx) => (
              <TeamMemberHistory key={`y22head-${idx}`} member={member} role="Head" />
            ))}
            {y22STMs.map((member, idx) => (
              <TeamMemberHistory key={`y22stm-${idx}`} member={member} role="STM" />
            ))}
          </div>
        </section>

        <section className="history-footer-section" style={{margin: '50px 0 15px', textAlign: 'center'}}>
          <h1 className="almline" style={{ fontSize: '2.2rem', marginBottom: '18px', color: '#f7941d', letterSpacing: '1px' }}>About IITK RaSET</h1>
          <div className="almline2" style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#fff',
            background: 'rgba(20,20,20,0.98)',
            borderRadius: '12px',
            padding: '22px 28px',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)'
          }}>
            <p style={{marginBottom: '12px'}}>
              <b>IITK RaSET</b> was initially established in <b>2022</b> as a Science and Technology Council project by Atharva Dehadraya, along with his junior team members Nandan and Shraman. Over time, Nandan and Shraman assumed leadership of the council project.
            </p>
            <p style={{marginBottom: '0'}}>
              In <b>2024</b>, the initiative was officially transformed into a recognized Science and Technology Council team at IIT Kanpur. The first leadership team of RaSET comprised <b>Prabhu Safi</b>, <b>Aniket Nandi</b>, <b>Rangan Pal</b>, and <b>Riya Gupta</b>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Alumni;
