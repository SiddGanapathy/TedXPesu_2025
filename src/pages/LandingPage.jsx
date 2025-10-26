import React from "react";
import "../styles/LandingPage.css"; 
import tedxHeroImg from "../assets/banner.png"; 
import bg2 from "../assets/bg2.jpg"; 

const LandingPage = () => {
  const event = {
    title: "TEDxPESU 2025",
    theme: "Tessellations Of Time",
    ctaText: "Register Now",
    eventTag: "Exclusive Annual Event",
  };

  const scrollToTickets = () => {
    const ticketsSection = document.getElementById("tickets");
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="events-section single-event-mode"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <div className="background-overlay"></div>

        <div className="events-content-wrapper">
          <h2 className="section-title">Upcoming Event</h2>

          <div className="tedx-hero-card single-card">
      
            <div className="hero-visual-area">
              <img src={tedxHeroImg} alt={event.title} className="hero-img" />
            </div>

       
            <div className="hero-content-area">
              <span className="event-tag">{event.eventTag}</span>
              <h1 className="hero-title">{event.title}</h1>
              <h3 className="hero-theme">{event.theme}</h3>

              <ul className="hero-benefits-list">
                <li><i className="fas fa-arrow-right"></i> Experience Trailblazing Talks</li>
                <li><i className="fas fa-arrow-right"></i> Connect with Visionary Minds</li>
                <li><i className="fas fa-arrow-right"></i> Unlock New Perspectives</li>
              </ul>

              
              <button
                className="hero-cta-button"
                onClick={scrollToTickets}
              >
                {event.ctaText}
              </button>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#EB0028" d="M0,0 C720,100 720,0 1440,100 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
