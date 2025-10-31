import React from "react";
import { FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/tedxpesu-logo-white.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div>
      <img src={Logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer">
        <ul className="footer-section">
          <li className="footer-heading">PES University</li>
          <li className="footer-text">100 Feet Ring Road</li>
          <li className="footer-text">BSK III Stage</li>
          <li className="footer-text">Bangalore - 560085</li>
        </ul>

        <ul className="footer-section">
          <li className="footer-heading">Links</li>
          <li className="footer-text-link"><a href="/#about">About</a></li>
          <li className="footer-text-link"><a href="/team">Team</a></li>
        </ul>

        <ul className="footer-section">
          <li className="footer-heading">Contact</li>
          <li className="footer-text"><b>Smruthi:</b> 90192 63571</li>
          <li className="footer-text"><b>Mariam:</b> 63605 82746</li>
          <li className="footer-text"><b>Diya:</b> 83680 75875</li>
          </ul>
          <div className="footer-social-icons">
          <a href="https://www.instagram.com/tedxpesu/" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-social-icon" /></a>
          <a href="/"><FaGlobe className="footer-social-icon" /></a>
          <a href="mailto:tedxpesu.rr@pes.edu"><FaEnvelope className="footer-social-icon" /></a>
          </div>
        </div>
        <p className="made-by"><i><b>Website Made By:</b> Hemashree, Disha, Divya, Namritha, Siddanth, Shravani, Sucheta, Harsimran </i></p>
        <p className="copyright">© {new Date().getFullYear()} TED Conferences, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
