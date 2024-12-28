import React from 'react'
import './Filter.css'

import Cart from '../../Components/Cart/Cart';

import sampleData from '../../Data/ProductData'

import { RiArrowDropDownLine } from "react-icons/ri";
import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

const Filter = () => {
  return (
    <div className='filter-container'>
      <div className='filter-catogary'>
        <div className='search'>
          <label htmlFor="search-bar">Search Your Likes</label>
          <form action="">
            <input type="search" id="search-bar" placeholder='Enter Your Search Here...' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className='filters'>
          <label htmlFor="filters">Some Filters For You</label>
          <div className='filter-btn'>
            <button type='button'>District <i><RiArrowDropDownLine /></i></button>
            <button type='button'>Vegetables</button>
            <button type='button'>Fruits</button>
            <button type='button'>Grains</button>
            <button type='button'>Fresh</button>
            <button type='button'>Spices</button>
            <button type='button'>Organic</button>
            <button type='button'>Free Delivery</button>
            <button type='button'>In-Stock</button>
            <button type='button'>4 stars and above</button>
          </div>
        </div>
        <div className='price-range'>
          <label htmlFor="points">Choose Price Range</label>
          <div>
            <h3>Rs. 50</h3>
            <h3>Rs. 1800</h3>
          </div>
          <input type="range" className='range' />
        </div>
      </div>

      <div className='active-filters'>
        <button className='filter'><LuFilter /> Active Filters <i><RiArrowDropDownLine /></i></button>
        <div className='active-filter-btn'>
          <button>Jaffna <i><RxCross2/></i></button>
          <button>Spices <i><RxCross2/></i></button>
          <button>Chilli <i><RxCross2/></i></button>
          <button>Free Delivery <i><RxCross2/></i></button>
        </div>
      </div>

      <div className='carts'>
        {sampleData.map((item, index) => (
          <Cart key={index} data={item} />
        ))}
      </div>

      <div className="show-more">
        <button>Show More <FaArrowRightLong/></button>
      </div>
    </div>
  )
}

export default Filter
