import React, { useEffect, useState } from 'react';
import '../styles/Speakers.css';
// NOTE: Image imports are implicitly used but not shown in your snippet.

// 🛑 IMPORTANT: Speaker data is cleared to force the 'REVEALING SOON' message
const data = {
  speakers: [], // Empty array to show 'REVEALING SOON'
  performers: [], // Empty array to show 'REVEALING SOON'
};

const Speakers = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  
  // These variables are now used in the conditional checks below.
  const [speakersAnnounced] = useState(false); 
  const [performersAnnounced] = useState(false); 

  const handleImageClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClosePopup = () => {
    setSelectedPerson(null);
  };

  // 💡 HELPER FUNCTION: To wrap each character for the sequential animation
  const renderRevealingText = (text) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="word-wrapper">
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            className="char-reveal"
            // Delay based on word and character index for sequence
            style={{ animationDelay: `${wordIndex * 0.15 + charIndex * 0.03}s` }}
          >
            {char}
          </span>
        ))}
        {/* Add a space after each word */}
        <span>&nbsp;</span>
      </span>
    ));
  };

  useEffect(() => {
    if (selectedPerson) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedPerson]);

  return (
    <div className="container" id='speakers'>
      
      {/* -------------------- SPEAKERS SECTION -------------------- */}
      <h1 className="title neon-text">Our Speakers</h1>
      
      {/* FIX: Re-adding the conditional check uses 'speakersAnnounced' and clears the warning */}
      {speakersAnnounced && data.speakers.length > 0 ? (
        <ul className="speaker">
          {data.speakers.map((speaker, index) => (
            <li key={index} onClick={() => handleImageClick(speaker)}>
              {/* Image source needs to be fixed here when you announce speakers */}
              <img className="box1" src={speaker.image} alt={speaker.name} /> 
              <p>{speaker.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        // Renders the sophisticated word-by-word reveal
        <p className='revealing-soon-text'>
          {renderRevealingText("SPEAKERS REVEALING SOON")} 
        </p>
      )}

      {/* -------------------- PERFORMERS SECTION -------------------- */}
      <h1 className="title neon-text">Our Performers</h1>
      
      {performersAnnounced && data.performers.length > 0 ? (
        <ul className="performer">
          {data.performers.map((performer, index) => (
            <li key={index} onClick={() => handleImageClick(performer)}>
              <img className="box" src={performer.image} alt={performer.name} />
              <p>{performer.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        // Renders the sophisticated word-by-word reveal
        <p className='revealing-soon-text'>
          {renderRevealingText("PERFORMERS REVEALING SOON")}
        </p>
      )}
      
      {/* -------------------- POPUP SECTION -------------------- */}
      {selectedPerson && (
        <div className="popup-fullscreen">
          <div className="popup-overlay" onClick={handleClosePopup}></div>
          <div className="popup-small">
            <button className="close-button" onClick={handleClosePopup}>
              &#x2190;
            </button>
            <img src={selectedPerson.image} alt={selectedPerson.name} className="popup-image" />
            <div className="popup-description">
              <h2 className="speaker-name">{selectedPerson.name}</h2>
              <p>{selectedPerson.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Speakers;