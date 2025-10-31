import React, { useEffect, useState } from 'react';
import '../styles/Speakers.css';
import speaker1 from "../assets/Vivek.png";
import speaker2 from "../assets/Virupakshappa.png";
import speaker3 from "../assets/Nidhi.png";
import speaker4 from "../assets/Pooja.png";

const data = {
  speakers: [
    {
      name: 'VIVEK VIJAYAKUMARAN',
      image: speaker1,
      description: 'Vivek Vijayakumaran is a multifaceted theatre artist with over 15 years of experience in acting, directing, training, and creating innovative performances. He has trained under legends like Padma Bhushan Heisnam Kanhailal and Guru G. Venu, as well as Italy’s famed Workcenter of Jerzy Grotowski and Thomas Richards. He is the recipient of the INLAKS India Theatre Award (2012) and also featured among Forbes India’s “12 boundary-pushing theatre innovators” (2015).As a director, Vivek has helmed productions like Imagine a Room, Just Hiss (children’s theatre), and the non-verbal piece IT IS YOU. His work has been supported by organisations including Arts Universe, the India-Sri Lanka Foundation, and the Ratan Tata Travel Grant. His performances include BHIMA, Girish Karnad’s Yayati, Bali – The Sacrifice, and many more. He currently leads Our Theatre Collective and Our Theatre Studio, nurturing experimental performance and actor training.',
    },
    {
      name: 'VIRUPAKSHAPPA HOVALE',
      image: speaker2,
      description: 'Virupakshappa K. Hovale holds a Bachelor’s degree in Electrical and Electronics Engineering from Mysore University and has completed management and innovation programs from XIM Bhubaneswar, IIM Kashipur, and EMERITUS. He is currently pursuing his Doctorate at Golden Gate University, San Francisco.He has been in the industry navigating through various functions from Process Industry, Discrete Manufacturing. With over 30 years of experience in industrial automation, robotics, IoT, and energy systems, he has driven growth across India, South Asia, and the APAC region. Author of the bestseller Unboxing Creativity, he promotes the “RID Formula”, Reinvention, Innovation, and Design Thinking. He currently leads the Industrial Robotics & Automation segment at Larsen & Toubro.',
    },
    {
      name: 'NIDHI SRIVATSA',
      image: speaker3,
      description: 'Nidhi Srivatsa is an Assistant Professor of Law at PES University whose work elegantly bridges intellectual property, cultural heritage, and wellness practices. She holds a B.A. LL.B and an LL.M in Intellectual Property & Trade Law from Christ (Deemed to be University) and is pursuing her Ph.D. in Law. Recognized as Best Paper Presenter at IIT Kharagpur, HNLU Raipur, and MNLU Aurangabad, she actively speaks on IP rights, culture, and legal education reform.A certified yoga instructor from SVYASA Yoga University with over a decade of experience, Nidhi has led international workshops on mindfulness and breathwork. As a National Level Yoga Referee, she seamlessly blends law, wellness, and culture to foster innovation grounded in authenticity and inclusivity.',
    },
    {
      name: 'POOJA SALWAN',
      image: speaker4,
      description:'Pooja Maheshwari Salwan’s career is a story of transformation, spanning from the world of fashion to the world of education. At first glance they seem worlds apart, but for her, both are about the same thing: shaping personality and evoking confidence. In fashion, she helped people express themselves through what they wore.In education, she works for Executive Education, helping companies upskill, empower their teams, and lead with purpose.A lifelong learner, she has studied at SRCC, ISB, NYU, and Imperial, gathering experiences that sharpened her global outlook and strategic thinking. Today, she blends creativity with insight to inspire corporates to stand out with substance.',
    },
  ], 
  performers: [], 
};

const Speakers = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
 
  const [speakersAnnounced] = useState(true); 
  const [performersAnnounced] = useState(false); 

  const handleImageClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClosePopup = () => {
    setSelectedPerson(null);
  };

  const renderRevealingText = (text) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="word-wrapper">
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            className="char-reveal"
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
            <div className="popup-image-container">
              <img src={selectedPerson.image} alt={selectedPerson.name} className="popup-image" />
            </div>
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