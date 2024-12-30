import React from 'react';
import './Cart.css';
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Cart = ({ data }) => {
    return (
        <div className="cart">
            <div className="image">
                <img src={data.image} alt={data.name} />
            </div>
            <div className='cart-name'>
                <h3>{data.name}</h3>
                <p>{data.deliveryType}</p>
            </div>
            <p>
                <h3 className="new-price">Rs. {data.newPrice}</h3>
                <span className="old-price"> {data.oldPrice}</span>
            </p>
            <div className="rating">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
                <IoStarOutline />
            </div>
        </div>
    );
};

export default Cart;