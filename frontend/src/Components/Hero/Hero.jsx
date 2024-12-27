import React from 'react';
import HeroImage from '../../Assets/Hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={HeroImage} alt="Agriculture background" />
        <div className="image-gradient"></div>
      </div>
        <div className="hero-content">
        <h1 className="hero-heading">Pure Agriculture Products</h1>
        <p></p>
        </div>
    </div>
  );
};

export default Hero;
