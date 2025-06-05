import React from 'react';

import Papa from 'papaparse';
async function fetchAndParseCsv(csvPath) {
    const fs = await import('fs/promises');
    const csvText = await fs.readFile(csvPath, 'utf8');
    // const csvText = await response.text();

  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

//   return results.data; // returns array of objects (rows)
  const data = results.data.map(row => new Map(Object.entries(row)));
    return data; // returns array of Maps
}

function TeamMemberJTM({ member }) {
  return (
    <div className="team-member-JTM">
      <img src={member.image} alt="person.svg" className="member-image-JTM" />
      <div className="member-overlay-JTM">
        <div className="member-info-JTM">
          <div className="member-name-JTM">{member.Name}</div>
        </div>
        <div className="social-links-JTM">
          {member.Github && member.Github.trim() !== "" && (
            <a
              href={member.Github}
              className="social-link-JTM github-JTM"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.Linkedin && member.Linkedin.trim() !== "" && (
            <a
              href={member.Linkedin}
              className="social-link-JTM linkedin-JTM"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.email && member.email.trim() !== "" && (
            <a
              href={`mailto:${member.Email}`}
              className="social-link-JTM email-JTM"
              title="Email"
            >
              <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.Instagram && member.Instagram.trim() !== "" && (
            <a
              href={member.Instagram}
              className="social-link-JTM instagram-JTM"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


function TeamMember({ member }) { //This function is for STMs and Heads
  return (
    <div className="team-member">
      <img src={member.image} alt="person.svg" className="member-image" />
      <div className="member-overlay">
        <div className="member-info">
          <div className="member-name">{member.name}</div>
          <div className="member-subsystem">{member.subsystem}</div>
        </div>
        <div className="social-links">
          {member.social.github && member.social.github.trim() !== "" && (
            <a
              href={member.social.github}
              className="social-link github"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.social.linkedin && member.social.linkedin.trim() !== "" && (
            <a
              href={member.social.linkedin}
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.social.email && member.social.email.trim() !== "" && (
            <a
              href={`mailto:${member.social.email}`}
              className="social-link email"
              title="Email"
            >
              <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.social.instagram && member.social.instagram.trim() !== "" && (
            <a
              href={member.social.instagram}
              className="social-link instagram"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default {TeamMemberJTM};