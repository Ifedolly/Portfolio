import React from 'react';
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left:Intro text */}
        <div className="hero-text">
          <p className="intro-greeting">Welcome,</p>
            <h1 className="hero-name">I'm Ifedolapo</h1>
            <h2 className="hero-title">FRONT-END DEVELOPER</h2>
            <p className="hero-summary">
              Building applications that effectively convey your brand’s message and encourage visitors to engage — that’s my thing.<br/> 
              I focus on creating intuitive, user-friendly experiences that look great and foster meaningful connections with your audience.
            </p>
            <a href="#contact" className="cta-link">
              WORK WITH ME <span className="arrow">→</span>
            </a>
        </div>
        {/* Right: Image */}
        <div className="hero-image">
          <img src="/images/hero1.jpg" alt="Hero Section Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
