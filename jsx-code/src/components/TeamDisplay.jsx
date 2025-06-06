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
      const grouped2 = {};
      for (const member of stData) {
        const subsystem = member.subsystem?.trim() || "Unknown";
        if (!grouped2[subsystem]) grouped2[subsystem] = [];
        grouped2[subsystem].push(member);
      }
      setStMembers(grouped2);
      
      
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
      <h1 className = "team-heading">Junior Team Members</h1>
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

      
      {/* ST Members and Heads Section */}
      <h1 className = "team-heading">Senior Team Members & Heads</h1>
      {Object.keys(stMembers).map((subsystem) => (
        <div key={subsystem}>
          <h2 className = "subsystem-heading">{subsystem}</h2>
          <div className="team-grid">
            {stMembers[subsystem].map((member, index) => (
              <TeamMemberJTM key={`${subsystem}-${index}`} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;