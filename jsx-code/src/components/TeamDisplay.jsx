import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import  TeamMemberJTM  from './Teams_template'; // Adjust import path

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeamData() {
      // Load JT Members
      const jtData = await fetchAndParseCsv('raset_code\\jsx-code\\src\\components\\JTM Info.csv');
      setJtMembers(jtData);
      
      // Load ST Members and Heads
      const stData = await fetchAndParseCsv('/path/to/st-members.csv');
      setStMembers(stData);
      
      setLoading(false);
       console.log(jtData);
    }
    
    loadTeamData();
   
  }, []);

  if (loading) {
    return <div>Loading team members...</div>;
  }

  return (
    <div className="team-container">
      {/* JT Members Section */}
      <h2>JT Members</h2>
      <div className="team-grid">
        {jtMembers.map((member, index) => (
          <TeamMemberJTM key={`jt-${index}`} member={member} />
        ))}
      </div>
      
      {/* ST Members and Heads Section */}
      <h2>ST Members & Heads</h2>
      <div className="team-grid">
        {stMembers.map((member, index) => (
          <TeamMemberJTM key={`st-${index}`} member={{
            ...member,
            social: {
              github: member.Github,
              linkedin: member.Linkedin,
              email: member.Email,
              instagram: member.Instagram
            }
          }} />
        ))}
      </div>
    </div>
  );
}

export default TeamDisplay;