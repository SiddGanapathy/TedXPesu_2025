import React, { useState } from 'react';
import '../styles/Speakers-2024.css';
import speaker1 from "../assets/speaker-1.png";
import speaker2 from "../assets/speaker-2.png";
import speaker3 from "../assets/speaker-3.png";
import speaker4 from "../assets/speaker-4.png";
import speaker5 from "../assets/Speaker-5.png";
import speaker6 from "../assets/Speaker-6.jpeg";
import performer1 from "../assets/performer-1.JPG";
import performer2 from "../assets/performer-2.png";

const data = {
  speakers: [
    {
      name: 'SANCHIT BATRA',
      image: speaker1,
      description: 'Sanchit Batra, an award-winning entertainer, is renowned for his dynamic blend of comedy, psychology, and mentalism. Named the Funniest Comic Magician in Singapore in 2018, his versatile performances have garnered attention on major platforms like Hotstar, NDTV, and News24, enhancing his reputation beyond just live audiences. He has established himself in the industry with his engaging and captivating style, making a significant impact on audiences everywhere.Excelling in the fusion of digital technology and classic illusions, he crafts interactive shows that push the boundaries of traditional magic. This innovative approach captivates viewers and ensures that each performance is a memorable experience. With over a decade in the industry, he is a sought-after “Celebrity Choice” performer at corporate events and exclusive gatherings.Sanchit’s journey to becoming an acclaimed professional magician reflects his unwavering dedication to his craft. His shows, distinguished by interactivity, clever humour, and digital flair, continue to inspire both audiences and aspiring magicians, showcasing the exciting possibilities of modern magic while evolving the art itself.',
    },
    {
      name: 'ADITI ARYA',
      image: speaker2,
      description: 'Aditi Arya Kotak, crowned Miss India 2015, is a Yale alumnus and co-founder of Alum-n-i, a platform dedicated to helping students expand their perspectives through global education. She has worked as an analyst in one of the big four audit firms, Ernst & Young. She has also worked with non profit organisations such as Amitasha, Supported Decision Making, and Protsahan.Her journey reflects her persistence and commitment to growth and empowerment, as she strives to make international education more accessible for aspiring students. Her work spans across fields, from education to women empowerment. Her passion for personal development extends beyond all of her work as well; she also hosts her own self improvement called "Aryatic", where she shares strategies for self refinement and personal well being.Aditi’s varied career as a mentor, entrepreneur, and digital creator makes her an ideal role model for hopeful young professionals and students. Her work continues to inspire people to pursue their ambitions with confidence, embodying her core values of growth, determination, and positive impact.',
    },
    {
      name: 'PRADYUN P RAO',
      image: speaker3,
      description: 'Pradyun is a 21y/o 4th year student at PES University Electronic City where they teach Computer Science Engineering, but lots of his learning happens outside the classroom.He’s been entrepreneurial from his 1st sem of college, from writing content and “selling milk” to building web apps and fine tuning LLMs, he’s done it all. He participated and won his first hackathon in the 3rd sem, launched an ecommerce business in the 4th sem, and by the 5th sem led a team of 10 to build the Salaar Fan Army experience for Hombale Films, a movie promotional campaign that saw 2M+ site visitors and was featured by 200+ media publications.Now, he’s on a course committee for entrepreneurship at IIM Bangalore and has started hosting a podcast there. He continues to build projects, give ‘fundas’ and credits the people around him for everything he’s done. He loves cooking, ASKing questions and analyzing movie plots. Catch him talk about how ASKing questions can help you co-create the future!',
    },
    {
      name: 'SWATHI VELLAL',
      image: speaker4,
      description:'Swathi Vellal Raghunandan is the Founder Director of Ishanya India Foundation, a non-profit in Bangalore dedicated to empowering Persons with Disabilities through assistive technology and inclusive education. With a Master’s in Special Educational Needs from the University of Northampton and in Clinical Psychology from Christ University, she brings deep expertise to her work, focusing on autism inclusion and support for both individuals and families. Her journey reflects a commitment to empathy and empowerment, working closely with parents and caregivers on various aspects of disability care. Swathi has also supported workplace inclusion by collaborating with organisations to help transition individuals with autism into employment. Additionally, she has hosted several podcasts on mental health. Swathi’s contributions extend beyond direct service. She has published research, presented at international forums, and received numerous accolades, including the MTC Global Award and the 2024 Amarnath Rajanahally Inclusion Award - a testament to her dedication to building an inclusive society.',
    },
    {
      name: 'SUDIPTAA PAUL CHOUDHURY',
      image: speaker5,
      description:'Sudiptaa Paul Choudhury stands out as a dynamic force in marketing, growth, and innovation. As Chief Marketing & Growth Officer at Shorter Loop and an Independent Director (loD), she expertly navigates the intersection of marketing, growth, and corporate governance. She provides invaluable insights across multiple boards, guiding organisations through the intricacies of digital transformation. Her dedication to positive change extends beyond the corporate realm. As a staunch advocate of Diversity, Equity, and Inclusion (DEI), she masterfully blends these ideas in her career as a corporate and career mentor. She also brings her expertise in global brand leadership, marketing, and career mentorship to every endeavour. Her volunteer work includes contributions with The Akshaya Patra Foundation, where she donated books and supported health and education initiatives for underprivileged students. She also served as a Fundraising Coordinator for the Treeveni Foundation, advocating for human rights. Sudiptaa’s career is marked by numerous accolades, like her recognition as one of the Global Marketing Leaders of 2023 by the Global Marketing Leaders Report and as a Top 10 Marketer of 2022 by CEOInsights Global Magazine. She was also named "Women Executive of the Year" in 2021 by ET NOW and embodies leadership that drives both corporate and social spheres, inspiring mentees and peers alike.',
    },
    {
      name: 'NIKHIL NARENDRAN',
      image: speaker6,
      description:'Nikhil Narendran focuses on the interplay of technology, law, commerce and human lives. Nikhil Narendran is a Partner at Trilegal’s specializing in Al, technology, media, and telecom (TMT) law. With extensive experience, he guides both established companies and startups through India’s complex tech landscape, advising on market strategies and regulatory compliance. As an Al law expert, Nikhil addresses legal challenges related to ethics, data protection, and compliance frameworks while also assisting businesses in Fintech, e-commerce, and telecom with their digital transformations. Internationally, Nikhil has worked on technology policy in Nepal, Sri Lanka, and Bangladesh and contributed to commercial negotiations across South-East Asia, Europe, and America. He was recognized with the prestigious ITechLaw Travelling Fellowship Award in 2011. He is currently the President of Center for Internet and Society and treasurer of International Technology Law Association.',
    },
  ],
  performers: [
    {
      name: 'Team Athulya',
      image: performer1,
      description: 'Welcoming Athulya, a vibrant semi-classical and indo-contemporary dance team that brings the authentic flavors of Indian culture with a modern twist. Founded by passionate graduates from PES University, many of whom are former members of Team Sanskriti, Athulya has quickly made a name for itself in the Bangalore dance scene, achieving remarkable success in just a few months.With performances for corporate events and captivating choreographies for schools, the team is dedicated to leaving a lasting impression. Their performances beautifully capture the essence of Indian festivals and celebrate the joyful moments found throughout life’s journey. The audience is sure to enjoy this heartfelt tribute to culture and celebration',
    },
    {
      name: 'The Trio',
      image: performer2,
      description:'Meet Pranav, Manorath, and Satvik!Bound by a love for the unique and unexplored, this trio redefines musical boundaries with their Carnatic Jazz fusion, blending tradition with innovation to create a sound all their own',
    },
]
};

const Speakers = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleImageClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClosePopup = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="container">
      <h1 className="title">Our Speakers</h1>
      <ul className="speaker">
        {data.speakers.map((speaker, index) => (
          <li key={index} onClick={() => handleImageClick(speaker)}>
            <img className="box1" src={speaker.image} alt={speaker.name} />
            <p>{speaker.name}</p>
          </li>
        ))}
      </ul>

      <h1 className="title">Our Performers</h1>
      <ul className="performer">
        {data.performers.map((performer, index) => (
          <li key={index} onClick={() => handleImageClick(performer)}>
            <img className="box" src={performer.image} alt={performer.name} />
            <p>{performer.name}</p>
          </li>
        ))}
      </ul>

      {selectedPerson && (
        <div className="popup-fullscreen">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &#x2190;
            </button>
            <img src={selectedPerson.image} alt={selectedPerson.name} className="popup-image" />
            <div className="popup-description">
              <h2>{selectedPerson.name}</h2>
              <p>{selectedPerson.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
