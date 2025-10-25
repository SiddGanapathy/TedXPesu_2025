//npm install react-slick slick-carousel lucide-react

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/WallpaperCarousel.css";

// Import images
import tedx1 from "../assets/tedx1.JPG";
import tedx2 from "../assets/tedx2.JPG";
import tedx3 from "../assets/tedx3.JPG";
import tedx4 from "../assets/tedx4.png";
import tedx19 from "../assets/tedx19.JPG";
import tedx31 from "../assets/tedx31.JPG";
import tedx10 from "../assets/tedx10.png";
import tedx12 from "../assets/tedx12.png";
import tedx18 from "../assets/tedx18.png";

const images = [tedx2, tedx1, tedx3,tedx4, tedx19, tedx31,tedx10, tedx12, tedx18];

export default function WallpaperCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    fade: true,
    arrows: false,
  };

  return (
    <div className="wallpaper-carousel-container">
      <div className="carousel-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`slide-${i}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div
          className="carousel-arrow-zone carousel-arrow-left"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft size={40} className="carousel-arrow-icon" />
        </div>

        <div
          className="carousel-arrow-zone carousel-arrow-right"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight size={40} className="carousel-arrow-icon" />
        </div>
      </div>

      <h2 className="carousel-title">TEDx PESU</h2>
      <p className="carousel-subtitle">
        Ideas Worth Spreading — explore our gallery of innovation, stories, and vision.
      </p>
    </div>
  );
}
