import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
// import ScrollReveal from 'scrollreveal';
import TeamMemberJTM, { TeamMember } from './Teams_template';
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
      console.log("Heads Data:", headsData);
      setHeads(headsData);
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

      
    </div>
    </>
  );
}

export default TeamDisplay;