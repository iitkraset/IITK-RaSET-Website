import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
// import ScrollReveal from 'scrollreveal';
import TeamMemberJTM, { TeamMember, TeamMemberHistory } from './Teams_template';
import akushariImg from '../assets/akushari.jpg';
import RkiteyImg from '../assets/Rkitey.jpg';
import tsukoriyaImg from '../assets/tsukoriya.avif';

async function fetchAndParseCsv(csvPath) {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();
    
    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data); // Returns array of objects
        }
      });
    });
  } catch (error) {
    console.error("Error loading CSV:", error);
    return [];
  }
}

function TeamDisplay() {
  const [jtMembers, setJtMembers] = useState([]);
  const [stMembers, setStMembers] = useState([]);
  const [Heads, setHeads] = useState([]);
  const [y22Heads, setY22Heads] = useState([]);
  const [y22STMs, setY22STMs] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadTeamData() {
      // Load JT Members
      const jtData = await fetchAndParseCsv('/JTM Info.csv'); // The JTM Info.csv file path is in the public directory
      const grouped = {};
      for (const member of jtData) {
        const subsystem = member.subsystem?.trim() || "Unknown";
        if (!grouped[subsystem]) grouped[subsystem] = [];
        grouped[subsystem].push(member);
      }
      setJtMembers(grouped);
      
      // Load ST Members and Heads
      const stData = await fetchAndParseCsv('/STM Info.csv');

      // const grouped2 = {};
      // for (const member of stData) {
      //   const subsystem = member.subsystem?.trim() || "Unknown";
      //   if (!grouped2[subsystem]) grouped2[subsystem] = [];
      //   grouped2[subsystem].push(member);
      // }
      // setStMembers(grouped2);
      setStMembers(stData);

  const headsData = await fetchAndParseCsv('/Heads Info.csv')
  setHeads(headsData);

  // Load Y22 Heads and STMs for history
  const y22HeadsData = await fetchAndParseCsv('/Heads_Y22_Info.csv');
  setY22Heads(y22HeadsData);
  const y22STMsData = await fetchAndParseCsv('/STMs_Y22_Info.csv');
  setY22STMs(y22STMsData);
    }
    
    loadTeamData();
   
  }, []);
  console.log("ST Members:", stMembers);
  console.log("JT Members:", jtMembers);
  // if (loading) {
  //   return <div>Loading team members...</div>;
  // }

  // ScrollReveal for team sections
  useEffect(() => {
    const sr = ScrollReveal({ reset: false, distance: '60px', duration: 2000, delay: 200 });
    sr.reveal('.team-heading', { origin: 'top' });
    sr.reveal('.team-grid', { origin: 'bottom', interval: 150 });
    sr.reveal('.subsystem-heading', { origin: 'left', delay: 300 });
    sr.reveal('.team-member', { origin: 'bottom', delay: 100 });
    sr.reveal('.team-member-JTM', { origin: 'bottom', delay: 100 });
  }, []);


  function FacultyAdvisor({ member }) {
  return (
    <div className="team-member">
      <div className="member-image-container">
        <img src={member.image} alt={member.name} className="member-image" />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-subsystem">{member.department}, {member.institution}</p>
        <div className="social-links-JTM">
          {member.website && (
            <a href={member.website} className="social-link-JTM website-JTM" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
        </div>
      </div>
      <div className="member-overlay-social">
        <div className="member-info-JTM">
          <div className="member-name-JTM">{member.name}</div>
          <div className="member-subsystem-JTM">{member.department}</div>
        </div>
        <div className="social-links-JTM">
          {member.website && (
            <a href={member.website} className="social-link-JTM website-JTM" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Then use it with data:
const facultyData = [
  {
    name: "Dr. Abhijit Kushari",
    department: "Aerospace Engineering",
    institution: "IIT Kanpur",
    image: akushariImg,
    website: "https://home.iitk.ac.in/~akushari/"
  },
  {
    name: "Dr. Rajesh Kitey",
    department: "Aerospace Engineering",
    institution: "IIT Kanpur",
    image: RkiteyImg,
    website: "https://home.iitk.ac.in/~kitey/"
  },
  {
    name: "Dr. Tushar Sikroria",
    department: "Mechanical Engineering",
    institution: "IIT Kanpur",
    image: tsukoriyaImg,
    website: "https://tsikroria0.wixsite.com/trisep"
  },
];

  return (
    <>
    <div className="conbox">
			<h1 className="h1conbox">
        Meet Our <span className="Th1" style={{ color: '#f7941d' }}>Team</span>
      </h1>
      <div className="teamimg">
        <img src = "/Team.jpg" alt = "Team image" className='team-photo'/>
      </div>
		</div>
    
    <div className="team-container">
      { /* Heads*/ }
      <h1 className = "team-heading">FACULTY ADVISORS</h1>
      <div className="team-grid">
  {facultyData.map((member, index) => (
    <FacultyAdvisor key={index} member={member} />
  ))}
</div>

       <h1 className = "team-heading">TEAM HEADS</h1>
      <div className="team-grid">
        {Heads.map((member, index) => (
          <TeamMember key={`${member.Name}-${index}`} member={member} />
        ))}
      </div>

        { /* ST Members*/ }
      <h1 className = "team-heading">SENIOR TEAM MEMBERS</h1>
      <div className="team-grid">
        {stMembers.map((member, index) => (
          <TeamMember key={`${member.Name}-${index}`} member={member} />
        ))}
      </div>
      


      {/* JT Members Section */}
      <h1 className = "team-heading">JUNIOR TEAM MEMBERS</h1>
      {Object.keys(jtMembers).map((subsystem) => (
        <div key={subsystem}>
          <h2 className = "subsystem-heading">{subsystem}</h2>
          <div className="team-grid">
            {jtMembers[subsystem].map((member, index) => (
              <TeamMemberJTM key={`${subsystem}-${index}`} member={member} />
            ))}
          </div>
        </div>
      ))}

      {/* HISTORY SECTION */}
      <section className="history-section" style={{marginTop: '60px', marginBottom: '40px', padding: '0'}}>
  <h1 className="team-heading" style={{color:'#fff', fontSize:'3.2rem', marginBottom:'28px', letterSpacing:'2px'}}>HISTORY</h1>
  <h2 className="subsystem-heading" style={{color:'#fff', fontWeight:800, fontSize:'2.4rem', marginBottom:'18px'}}>Y22</h2>
  <h3 className="subsystem-heading" style={{color:'#fff', fontWeight:800, fontSize:'1.85rem', margin:'32px 0 16px'}}>HEADS</h3>
        <div className="team-grid">
          {y22Heads.length === 0 ? <div style={{color:'#222'}}>No Heads data available.</div> : y22Heads.map((member, idx) => (
            <TeamMemberHistory key={`y22head-${idx}`} member={member} />
          ))}
        </div>
  <h3 className="subsystem-heading" style={{color:'#fff', fontWeight:800, fontSize:'1.85rem', margin:'38px 0 16px'}}>STMs</h3>
        <div className="team-grid">
          {y22STMs.length === 0 ? <div style={{color:'#222'}}>No STMs data available.</div> : y22STMs.map((member, idx) => (
            <TeamMemberHistory key={`y22stm-${idx}`} member={member} />
          ))}
        </div>
      </section>

    </div>

    {/* HISTORY section above the footer, similar to team.html */}
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
    </>
  );
}

export default TeamDisplay;