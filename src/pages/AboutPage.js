
import React from 'react';
import './AboutPage.css';
import jagImage from '.././assets/images/jag.PNG'; 

const AboutPage = () => {
  return (
    <div 
      className="about-container"
      // style={{ backgroundImage: `url(${jagImage})` }} 
    >
      <div className="intro">
        <h1>          
          <span className="large-text">T</span>
          <span className="medium-text">O</span>
          <span className="medium-text">R</span>          
        </h1>
      </div>
      <div className="slogan-container">
        <h2>
          <span className="slogan">I am </span>
          <span className="slogan">exploring</span>
          <span className="slogan">learning</span>
          <span className="slogan">creating</span>
          <span className="slogan"> since 1979</span>
        </h2>
      </div>
    </div>
  );
};

export default AboutPage;