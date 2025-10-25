import React, { useEffect } from 'react';
import '../styles/Tickets.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tickets = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);

  return (
    <div className="ticket-section" data-aos="fade-up" id='tickets'>
      <div className="ticket-1" data-aos="fade-right">
        <div className="ticket-text-1 neon-text">SECURE YOUR SEAT</div>
        <br />
        <div className="ticket-text-3">
          Embark on an electrifying journey filled with thought-provoking talks, inspiring performances, and engaging discussions at TEDxPESU 2025. 
          Don't miss the opportunity to secure your tickets now and reserve your place for this upcoming event. Limited seating is available, so early booking is highly recommended to guarantee your spot.
        </div>
      </div>
      <div className="ticket-registration-steps" data-aos="fade-left">
        <div className="steps-header">REGISTER NOW!</div>
        <ol className="steps-list">
          <li data-aos="zoom-in">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSepfimZy_wxpvRwbpwUWWCHdFIzuEaN77m2VaIgh5cE4PMVKg/viewform" 
              style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Fill the Google form for Registration <b>here!</b>
            </a>
          </li>
          <li data-aos="zoom-in">
            You'll be sent a verification link from TEDxPESU on your mail within 48 hours after filling the form regarding the payment process.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Tickets;