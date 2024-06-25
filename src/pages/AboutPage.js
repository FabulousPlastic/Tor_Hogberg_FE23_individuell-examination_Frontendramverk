import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <svg width="0" height="0">
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="120" fontWeight="bold" fill="black">TOR</text>
          </mask>
        </defs>
      </svg>
      <div className="intro">
        <span className="masked-text">I am</span>
        <span className="large-text">TOR</span>
        <span className="masked-text">since 1979</span>
      </div>
      <p className="description">exploring</p>
      <p className="description">learning</p>
      <p className="description">creating</p>
    </div>
  );
};

export default AboutPage;