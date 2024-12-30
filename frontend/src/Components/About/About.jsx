import React from 'react'
import './About.css'

import aboutImage from '../../Assets/About.png'

import { HiCheckBadge } from "react-icons/hi2";

const About = () => {
  return (
    <div className='about-container'>
      <div><h1 className='about-heading'>About Us</h1></div>
      <div className='about-content-container'>
        <div className="about-content">
          <p>We are a platform dedicated to <b>connecting farmers</b> directly with <b>consumers, eliminating</b> middleman like <b>wholesalers</b> and <b>retailers.</b> Our mission is to support farmers by offering them <b>fair prices</b> for their produce while providing <b>fresh, high-quality</b> agricultural products to consumers. </p>
          <div>
            <p>Why You Should Use Our Platform</p>
            <div>
              <div>
                <span>
                  <i><HiCheckBadge /></i>
                  <p> Get fresh agricultural products at competitive prices, with no middlemen involved.</p>
                </span>
                <span>
                  <i><HiCheckBadge /></i>
                  <p> Enjoy high-quality, farm-fresh produce delivered right to your door.</p>
                </span>
                <span>
                  <i><HiCheckBadge /></i>
                  <p> Your purchase directly helps farmers earn better profits, empowering the agricultural community.</p>
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="about-img">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
