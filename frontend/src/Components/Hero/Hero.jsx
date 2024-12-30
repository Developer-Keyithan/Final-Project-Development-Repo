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
        <h1 className="hero-heading">Pure Agriculture <br /> Products</h1>
        <p className="hero-subheading">
          Welcome to <strong>Fshop</strong>. We believe in better agriculture for a better future.
        </p>
        <div className="hero-btn">
          <button className="btn-primary">Sign Up</button>
          <button className="btn-secondary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
