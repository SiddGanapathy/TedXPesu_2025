import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/tedx1.JPG";
import img2 from "../assets/tedx2.JPG";
import img3 from "../assets/tedx3.JPG";
import img4 from "../assets/tedx4.png";
import img5 from "../assets/tedx5.png";
import img6 from "../assets/tedx6.png";
import img7 from "../assets/tedx7.jpg";
import img8 from "../assets/tedx8.jpg";
import img9 from "../assets/tedx9.png";
import img10 from "../assets/tedx10.png";
import img11 from "../assets/tedx11.png";
import img12 from "../assets/tedx12.png";
import img13 from "../assets/tedx13.png";
import img14 from "../assets/tedx14.png";
import img15 from "../assets/tedx15.png";
import img16 from "../assets/tedx16.png";
import img17 from "../assets/tedx17.png";
import img18 from "../assets/tedx18.png";
import img19 from "../assets/tedx19.JPG";
import img20 from "../assets/tedx20.JPG";
import img21 from "../assets/tedx21.JPG";
import img22 from "../assets/tedx22.jpg";
import img23 from "../assets/tedx23.jpg";
import img24 from "../assets/tedx24.jpg";
import img25 from "../assets/tedx25.JPG";
import img26 from "../assets/tedx26.JPG";
import img27 from "../assets/tedx27.JPG";
import img28 from "../assets/tedx28.JPG";
import img29 from "../assets/tedx29.JPG";
import img30 from "../assets/tedx30.JPG";
import img31 from "../assets/tedx31.JPG";
import img32 from "../assets/tedx32.JPG";

import "../styles/Gallery.css";

const Gallery = () => {
  const images = [img1, img2, img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17, img18, img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32];
  const [activeIndex, setActiveIndex] = useState(null);
  const startX = useRef(null);

  // --- swipe detection ---
  const handleTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) prevImage();
    else if (delta < -50) nextImage();
    startX.current = null;
  };

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* ---- POPUP LIGHTBOX ---- */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.img
              src={images[activeIndex]}
              alt="Large"
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            <button
              className="nav-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#10094;
            </button>
            <button
              className="nav-btn next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#10095;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
