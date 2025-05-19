import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          "BYTE & BREW is more than just a name—it’s a community of thinkers,
          creators, and innovators who believe in the power of connection.
          We bring people together through technology and coffee, fostering collaboration 
          and fresh ideas. Follow us and be part of something bigger!"
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Opening hours</h2>
          <ul>
            <li>Weekday : 11am to 10pm</li>
            <li>Weekend : 11am to 12pm</li>
           
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-1234567890</li>
            <li>contact@byteandbrew.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Byte & Brew - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
