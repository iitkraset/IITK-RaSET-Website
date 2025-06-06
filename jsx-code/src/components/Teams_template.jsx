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
const Images_folder = '/JTM_Y24_Images'
// const images = import.meta.glob(Images_folder, { eager: true });//eager: true loads all images at once
const JTMimages = import.meta.glob('/src/assets/JTM_Y24_Images/*.{jpg,jpeg,png}', { eager: true });
// const STMimages = import.meta.glob('./assets/STM_Y24_Images/*.{jpg,jpeg,png}', { eager: true });
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
      <img src={MemberImage} alt="person.svg" className="member-image-JTM" />
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

// function TeamMemberSTM({ member}) {
//   // console.log(JTMimages);
//   // const username = member.email.split('@')[0]; 
//   // const username = member?.email?.split('@')[0] ?? '';

//   // const MemberImage = Object.entries(STMimages)
//   // .filter(([path]) => path.includes(username.toLowerCase())) // Filter images based on username
//   // .map(([, module]) => module.default);
//   // console.log(member.Name, username,MemberImage);
//   // const username = member?.email?.split('@')[0]?.toLowerCase() ?? '';
  
//   // // Find the member's image
//   // const MemberImage = Object.entries(STMimages)
//   // .filter(([path]) => path.includes(username.toLowerCase())) // Filter images based on username
//   // .map(([, module]) => module.default);

//   // console.log('Member:', member.Name, 'Username:', username, MemberImage)

// //   const username = (member?.email?.split('@')[0] ?? '').trim().toLowerCase();
// // console.log("username:", username);
// // console.log("All image paths in STMimages:");
// // Object.keys(STMimages).forEach(path => console.log(decodeURIComponent(path)));
// // const MemberImage = Object.entries(STMimages)
// //   .filter(([path]) => {
// //     const fileName = decodeURIComponent(path.split('/').pop().split('.')[0]).toLowerCase();
// //     return fileName.includes(username);
// //   })
// //   .map(([, module]) => module.default);

// // console.log(member.Name, username, MemberImage);
// function getCleanFileName(path) {
//   return path
//     .split('/')
//     .pop()
//     .replace(/\s+/g, '')        // remove all spaces in filename
//     .split('.')[0]
//     .toLowerCase();
// }

// const username = (member?.email?.split('@')[0] ?? '').toLowerCase();

// const MemberImage = Object.entries(STMimages)
//   .filter(([path]) => {
//     const cleanFileName = getCleanFileName(path);
//     console.log(`Comparing "${cleanFileName}" with "${username}"`);
//     return cleanFileName === username;
//   })
//   .map(([, module]) => module.default);

// console.log("MemberImage contents:", MemberImage);



  
 

//   return (
//     // Name,Roll No,GitHub,LinkedIn,email,Instagram,image
//     <div className="team-member-JTM">
//       <img src={MemberImage} alt="person.svg" className="member-image-JTM" />
//       <div className="member-overlay-JTM">
//         <div className="member-info-JTM">
//           <div className="member-name-JTM">{member.Name}</div>
//         </div>
//         <div className="social-links-JTM">
//           {member.GitHub && member.GitHub.trim() !== "" && (
//             <a
//               href={member.GitHub}
//               className="social-link-JTM github-JTM"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="GitHub"
//             >
//               <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
//             </a>
//           )}
//           {member.LinkedIn && member.LinkedIn.trim() !== "" && (
//             <a
//               href={member.LinkedIn}
//               className="social-link-JTM linkedin-JTM"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="LinkedIn"
//             >
//               <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
//             </a>
//           )}
//           {member.email && member.email.trim() !== "" && (
//             <a
//               href={`mailto:${member.Email}`}
//               className="social-link-JTM email-JTM"
//               title="Email"
//             >
//               <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
//             </a>
//           )}
//           {member.Instagram && member.Instagram.trim() !== "" && (
//             <a
//               href={member.Instagram}
//               className="social-link-JTM instagram-JTM"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="Instagram"
//             >
//               <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // function TeamMember({ member }) { //This function is for STMs and Heads
// //   return (
// //     <div className="team-member">
// //       <img src={member.image} alt="person.svg" className="member-image" />
// //       <div className="member-overlay">
// //         <div className="member-info">
// //           <div className="member-name">{member.name}</div>
// //           <div className="member-subsystem">{member.subsystem}</div>
// //         </div>
// //         <div className="social-links">
// //           {/* Name,Roll No,GitHub,LinkedIn,email,Instagram,image */}
// //           {member.GitHub && member.GitHub.trim() !== "" && (
// //             <a
// //               href={member.GitHub}
// //               className="social-link github"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               title="GitHub"
// //             >
// //               <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
// //             </a>
// //           )}
// //           {member.LinkedIn && member.LinkedIn.trim() !== "" && (
// //             <a
// //               href={member.LinkedIn}
// //               className="social-link linkedin"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               title="LinkedIn"
// //             >
// //               <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
// //             </a>
// //           )}
// //           {member.social.email && member.social.email.trim() !== "" && (
// //             <a
// //               href={`mailto:${member.social.email}`}
// //               className="social-link email"
// //               title="Email"
// //             >
// //               <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
// //             </a>
// //           )}
// //           {member.social.instagram && member.social.instagram.trim() !== "" && (
// //             <a
// //               href={member.social.instagram}
// //               className="social-link instagram"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               title="Instagram"
// //             >
// //               <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // Export the component directly so imports resolve to a function/component
export default TeamMemberJTM ;