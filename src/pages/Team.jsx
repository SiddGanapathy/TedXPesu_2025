import React, { useState } from "react";
import "../styles/Team.css";
import Footer from "../components/Footer";
import bgImage from "../assets/bg2.jpg";

// Lead images
import ch1 from "../assets/Diya.jpg";
import ch2 from "../assets/Mariam.jpg";
import ch3 from "../assets/Smruthi.png";

// Core/main member images
import cc1 from "../assets/Mahi.jpg";
import cc2 from "../assets/Sohini.jpg";
import cc3 from "../assets/Avani.jpg";
import m1 from "../assets/Rithvik.jpg";
import m2 from "../assets/Arnav.PNG";
import ev1 from "../assets/Rejith.jpg";
import ev2 from "../assets/Ansh.jpg";
import wd from "../assets/Siddanth.jpg";
import ve from "../assets/Madhav.jpg";
import sp from "../assets/pratyusha.jpg";
import d1 from "../assets/Saanvi.JPG";
import d2 from "../assets/Nirmita.jpg";

const teamData = [
  {
    title: "Leads",
    quote: "Guiding the vision, empowering the team.",
    supportingMembers: [
      { name: "Diya" },
      { name: "Mariam" },
      { name: "Smruthi" },
    ],
  },
  {
    title: "Design",
    mainMembers: ["Saanvi", "Nirmita"],
    role: "DESIGN CORES",
    quote: "Connecting Ideas, Creating Experiences.",
    supportingMembers: [
      { name: "Jia Arun" },
      { name: "Pragnya Bedathur" },
      { name: "Vashini" },
    ],
  },
  {
    title: "C&C",
    mainMembers: ["Mahi", "Sohini", "Avani"],
    role: "C&C CORES",
    quote: "Crafting the Visual Symphony.",
    supportingMembers: [
      { name: "Anushka" },
      { name: "Arya Rajwade" },
      { name: "Maanasi" },
      { name: "Malavika" },
      { name: "Parvathy" },
      { name: "Raina" },
      { name: "Rohini" },
      { name: "Samanyu" },
      { name: "Sathivik Rao" },
      { name: "Tanvi" },
      { name: "Tarunika" },
    ],
  },
  {
    title: "Web Development",
    mainMembers: ["Siddanth"],
    role: "TECH LEAD",
    quote: "Turning ideas into code.",
    supportingMembers: [
      { name: "Harsimran Kaur" },
      { name: "Suchetha" },
    ],
  },
  {
    title: "EVM",
    mainMembers: ["Rejith", "Ansh"],
    role: "EVM CORES",
    quote: "Orchestrating moments, shaping lasting memories.",
    supportingMembers: [
      { name: "Avantika Kishore" },
      { name: "Piyush Shiv" },
      { name: "Sharvani" },
      { name: "Shivangi" },
      { name: "Shriya M" },
      { name: "Syeda Fathima" },
      { name: "Terrance Chris" },
      { name: "Varsha" },
      { name: "Yatin Prabhakar" },
    ],
  },
  {
    title: "VE",
    mainMembers: ["Madhav"],
    role: "VE LEAD",
    quote: "Framing stories, bringing visions to life.",
    supportingMembers: [
      { name: "Vineeth" },
      { name: "Aryan" },
      { name: "Kushal" },
      { name: "Nandan" },
    ],
  },
  {
    title: "Sponsorship",
    mainMembers: ["Pratyusha"],
    role: "SPONSORSHIP LEAD",
    quote: "Building partnerships, fueling possibilities.",
    supportingMembers: [
      { name: "Arjun" },
      { name: "Devansh Tiwari" },
      { name: "Harsha Vardhana" },
      { name: "Manya Manjunatha" },
      { name: "Sidharth Rao" },
      { name: "Sriram" },
    ],
  },
  {
    title: "Marketing",
    mainMembers: ["Rithvik", "Arnav"],
    role: "MARKETING CORES",
    quote: "Inspiring minds, amplifying voices.",
    supportingMembers: [
      { name: "Anuva Kishore" },
      { name: "Kathi Sibi" },
      { name: "Meghana Sridhar" },
      { name: "Prajwal N" },
      { name: "Sai Sushantha" },
      { name: "Samhita Rao" },
      { name: "Saupriya S Y" },
      { name: "Sushma Raj" },
      { name: "Vaishnavi PM" },
      { name: "Vivek Mysore" },
    ],
  },
];

const imageMap = {
  Diya: ch1,
  Mariam: ch2,
  Smruthi: ch3,
  Siddanth: wd,
  Saanvi: d1,
  Nirmita: d2,
  Mahi: cc1,
  Sohini: cc2,
  Avani: cc3,
  Rejith: ev2,
  Ansh: ev1,
  Madhav: ve,
  Pratyusha: sp,
  Rithvik: m1,
  Arnav: m2,
};

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const getMemberImage = (memberName) => imageMap[memberName] || null;

  return (
    <div className="team-page" style={{backgroundImage: `url(${bgImage})`}}>
      <header className="team-header">
        <div className="header-glow"></div>
        <h1>Meet The Team</h1>
        <p className="header-subtitle">Visionaries & Doers</p>
        <div className="header-underline"></div>
      </header>

      <div className="team-content-wrapper">
        {teamData.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className={`team-section section-animation`}
            style={{ animationDelay: `${sectionIndex * 0.1}s` }}
          >
            <div className="domain-header">
              <div className="domain-accent-bar"></div>
              <h2 className="domain-title">{section.title}</h2>
            </div>

            {section.title === "Leads" ? (
              <div className="leads-grid">
                {section.supportingMembers.map((member, i) => (
                  <div
                    key={i}
                    className={`lead-card ${hoveredCard === `lead-${i}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCard(`lead-${i}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="lead-photo-wrapper">
                      <div className="lead-photo-glow"></div>
                      <img
                        src={getMemberImage(member.name)}
                        alt={member.name || "Team Member"}
                        className="lead-photo"
                      />
                    </div>
                    <p className="lead-name">{member.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="section-content-grid">
                {section.mainMembers && (
                  <div className="main-member-area">
                    <div className="core-members-grid">
                      {section.mainMembers.map((member, i) => (
                        <div
                          key={i}
                          className={`core-member-card ${hoveredCard === `core-${sectionIndex}-${i}` ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredCard(`core-${sectionIndex}-${i}`)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <img
                            src={getMemberImage(member)}
                            alt={member || "Team Member"}
                            className="core-member-photo"
                          />
                          <p className="core-member-name">{member}</p>
                        </div>
                      ))}
                    </div>
                    <div className="main-caption">
                      {section.role && (
                        <p className="role-label">{section.role}</p>
                      )}
                      {section.quote && (
                        <p className="quote">"{section.quote}"</p>
                      )}
                    </div>
                  </div>
                )}
                <div className="supporting-members-grid">
                  {section.supportingMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className={`small-member-card ${hoveredCard === `sup-${sectionIndex}-${idx}` ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredCard(`sup-${sectionIndex}-${idx}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <p className="small-member-name">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="team-page-footer-space"></div>
      <Footer />
    </div>
  );
};

export default Team;