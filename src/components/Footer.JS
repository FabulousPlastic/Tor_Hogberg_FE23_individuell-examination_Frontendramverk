import React from 'react';
import './Footer.css'; 
import instagramLogo from '../assets/images/instagram-logo.png';
import twitterLogo from '../assets/images/twitter-logo.png';
import linkedinLogo from '../assets/images/linkedin-logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="#" className="social-icon">
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;