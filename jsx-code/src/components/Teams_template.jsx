import React from 'react';

import Papa from 'papaparse';

const JTMimages = import.meta.glob('/src/assets/JTM_Y24_Images/*.{jpg,jpeg,png}', { eager: true });
const STMimages = import.meta.glob('/src/assets/STM_Y24_Images/*.{jpg,jpeg,png}', { eager: true });
const HistoryImages = import.meta.glob('/src/assets/heads/*.{jpg,jpeg,png}', { eager: true });
console.log("STMimages:", STMimages);
// if (Object.keys(STMimages).length === 0) {
//   console.error('NO IMAGES FOUND in STMimages! Check import path');
// }
// if (!(Object.keys(STMimages).length === 0)) {
//   window.alert('IMAGES FOUND in STMimages! Check import path');
// }

// console.log(images);
function TeamMemberJTM({ member}) {
  // console.log(JTMimages);
  // const username = member.email.split('@')[0]; 
  const username = member?.email?.split('@')[0] ?? '';
  console.log("Current member:", {
  name: member.Name,
  email: member.email,
  username: member?.email?.split('@')[0] ?? ''
});

  const MemberImage = Object.entries(JTMimages)
  .filter(([path]) => path.includes(username.toLowerCase())) // Filter images based on username
  .map(([, module]) => module.default);
  console.log(member.Name, username,MemberImage);
  return (
    // Name,Roll No,GitHub,LinkedIn,email,Instagram,image
    <div className="team-member-JTM">
      <div class="member-image-container">
      <img src={MemberImage} alt="person.svg" className="member-image-JTM" />
      </div>
      <div className="member-overlay-JTM">
        <div className="member-info-JTM">
          <div className="member-name-JTM">{member.Name}</div>
        </div>  
        <div className="social-links-JTM">
          {member.GitHub && member.GitHub.trim() !== "" && (
            <a
              href={member.GitHub}
              className="social-link-JTM github-JTM"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.LinkedIn && member.LinkedIn.trim() !== "" && (
            <a
              href={member.LinkedIn}
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
  const username = member?.email?.split('@')[0] ?? '';
  const MemberImage = Object.entries(STMimages)
  .filter(([path]) => path.includes(username.toLowerCase())) // Filter images based on username
  .map(([, module]) => module.default);
  console.log(STMimages)
  console.log("Current member:", {
  name: member.Name,
  email: member.email,
  username: member?.email?.split('@')[0] ?? ''
});
  return (
    <div className="team-member">
      <div class="member-image-container">
      <img src={MemberImage} alt="person.svg" className="member-image" />
      </div>
      <div class="member-info-visible">
                        <h3 class="member-name">{member.Name}</h3>
                        <p class="member-subsystem">{member.subsystem}</p>
                    </div>
      <div className="member-overlay-social">
        <div className="member-info">
          <div className="member-name">{member.Name}</div>
          <div className="member-subsystem">{member.subsystem}</div>
        </div>
        <div className="social-links">
          {member.GitHub && member.GitHub.trim() !== "" && (
            <a
              href={member.GitHub}
              className="social-link github"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.LinkedIn && member.LinkedIn.trim() !== "" && (
            <a
              href={member.LinkedIn}
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.email && member.email.trim() !== "" && (
            <a
              href={`mailto:${member.email}`}
              className="social-link email"
              title="Email"
            >
              <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.Instagram && member.Instagram.trim() !== "" && (
            <a
              // href='${https://www.instagram.com/member.Instagram}'
              href={`https://www.instagram.com/${member.Instagram.replace('@', '')}`}
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

// Component for displaying historical team members (Heads or STMs)
function TeamMemberHistory({ member, role }) {
  // Use the same logic as TeamMember for image, but fallback to a default if not found
  const username = member?.email?.split('@')[0] ?? '';
  console.log(username)
  const MemberImage = Object.entries(HistoryImages)
    .filter(([path]) => path.includes(username.toLowerCase()))
    .map(([, module]) => module.default);
  return (
    <div className="team-member">
      <div className="member-image-container">
        <img src={MemberImage && MemberImage.length > 0 ? MemberImage : '/images/Unknown_person.jpg'} alt="person.svg" className="member-image" />
      </div>
      <div className="member-info-visible">
        <h3 className="member-name">{member.Name}</h3>
        <p className="member-subsystem">{role}</p>
      </div>
      <div className="member-overlay-social">
        <div className="member-info">
          <div className="member-name">{member.Name}</div>
          <div className="member-subsystem">{member.subsystem}</div>
        </div>
        <div className="social-links">
          {member.GitHub && member.GitHub.trim() !== "" && (
            <a href={member.GitHub} className="social-link github" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.LinkedIn && member.LinkedIn.trim() !== "" && (
            <a href={member.LinkedIn} className="social-link linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.email && member.email.trim() !== "" && (
            <a href={`mailto:${member.email}`} className="social-link email" title="Email">
              <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
            </a>
          )}
          {member.Instagram && member.Instagram.trim() !== "" && (
            <a href={`https://www.instagram.com/${member.Instagram.replace('@', '')}`} className="social-link instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Export the Junior TeamMember component as default and Senior TeamMember as named export
export default TeamMemberJTM;
export { TeamMember, TeamMemberHistory };