import React from "react";
import "../styles/Speakers-2024.css"
import Sponsors from "../components/Sponsors";
import Gallery from "../components/Gallery";
import Speakers from "../components/Speakers-2024";
import WallpaperCarousel from "../components/WallpaperCarousel";
// Main App Component
const Appy_2024 = () => (
  <div>
    <header className="team-header">
        <div className="header-glow"></div>
        <h1>2024 FLAGSHIP</h1>
        <p className="header-subtitle">Mosaics of Modernity</p>
        <div className="header-underline"></div>
      </header>
  
    <WallpaperCarousel/>
    <Speakers />
    <Gallery />
    <Sponsors />
    
  </div>
);

export default Appy_2024;
