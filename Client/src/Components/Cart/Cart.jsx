import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import RatingCart from '../Rating Cart/RatingCart';

const Cart = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Overview');
    };

    return (
        <div className="cart" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <div className="image">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="cart-name">
                <h3>{data.name}</h3>
                <p>{data.deliveryType}</p>
            </div>
            <p>
                <h3 className="new-price">Rs. {data.newPrice}</h3>
                <span className="old-price"> {data.oldPrice}</span>
            </p>
            <RatingCart />
        </div>
    );
};

export default Cart;
