import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="logo">
            {/* <img src="" alt="" /> */}
            <h1>F<span>shop</span></h1>
        </div>
        <div className="navlinks">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
