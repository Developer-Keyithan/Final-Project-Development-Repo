import React from 'react';
import HeroImage from '../../Assets/Hero.jpg';
import './Hero.css';

import { Link } from 'react-router-dom'

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
          <Link to="/SignUp"><button className="btn-primary">Sign Up</button></Link>
          <Link to="/Login" ><button className="btn-secondary">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
