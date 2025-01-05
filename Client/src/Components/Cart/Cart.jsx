import { useNavigate } from 'react-router-dom';
import './Cart.css';
import RatingCart from '../Rating Cart/RatingCart';
import Toggle from '../Toggle/Toggle';

import { FaRegHeart } from "react-icons/fa";

const Cart = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/Overview/${data.id}`);
    };

    return (
        <div className="cart" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <div className="image">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="cart-content">
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
            <button className='add-to-cart'>Add to Cart</button>
            <i className='fav-icon'><Toggle icon={<FaRegHeart />} position={{right: '10px'}} /></i>
        </div>
    );
};

export default Cart;
