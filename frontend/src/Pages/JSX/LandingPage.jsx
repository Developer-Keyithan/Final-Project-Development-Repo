import React from 'react';
import '../CSS/LandingPage.css'
import Hero from '../../Components/Hero/Hero';
import Product from '../../Components/Product/Product';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import FAQ from '../../Components/FAQ/FAQ';

import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from 'react-router-dom'

const LandingPage = () => {

  return (
    <div>
      <Sidebar />
      <Hero />
      <div className='Products-container'>
        <Product />
        <div className="show-more">
        <Link to="/Products"><button>Show More <FaArrowRightLong/></button></Link>
      </div>
      </div>
      <div className="About-container">
        <About />
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
