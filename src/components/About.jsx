import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="tedx-container neon-glow" id='about'>
        {/* First Section */}
        <div className="tedx-section" ref={(el) => sectionsRef.current[0] = el}>
          <h1 className="tedx-title-black" style={{ textAlign: "left" }}>What is a </h1>
          <h1 className="tedx-title neon-text">TEDx Event?</h1>
          <p className="tedx-text">
            TEDx, a grassroots initiative, embodies the core principles of TED - technology, entertainment, and design, which are the driving forces shaping our world today. 
            These highly curated talks feature expert speakers who passionately share their innovative ideas with the audience.
          </p>
          <p className="tedx-text">
            TEDx brings the spirit of TED to communities worldwide, fostering the discovery and dissemination of "ideas worth spreading." Organized by dedicated individuals, these local TEDx events showcase the latest research and insights from their respective areas, sparking meaningful conversations within their communities. These events feature live speakers as well as recorded TED Talks, all organized independently under a free license granted by TED.
          </p>
        </div>

        {/* Second Section */}
        <div className="tedx-section" ref={(el) => sectionsRef.current[1] = el}>
          <h1 className="tedx-title-black" style={{ textAlign: "left" }}>What is</h1>
          <h1 className="tedx-title neon-text">TEDxPESU 2024?</h1>

          <p className="tedx-text">
            TEDx is an independently organized TED event which exposes you to a multitude of ideas. Keeping in mind the TED slogan of 'Ideas worth Spreading ', TEDxPESU 2024 gives you an opportunity to witness live TEDx talks, this time centered around the theme of <b>Mosaics of Modernity</b> delivered by the greatest of Indian minds.          
          </p>

          <p className='tedx-text'>
            Join us on the <b>9th of November</b> for an evening filled with captivating talks on intriguing topics and much more !!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
