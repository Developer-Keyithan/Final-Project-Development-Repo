import './ReviewCart.css';
import { BiLike, BiDislike, BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

import RatingCart from '../Rating Cart/RatingCart';

function ReviewCart({ name, time, review, image }) {
    return (
        <div className='reviewcart-container'>
            <div className="reviewcart-content">
                <div className="profile-info">
                    {image ? (
                        <img src={image} alt={`${name}'s profile`} className="profile-img" />
                    ) : (
                        <i className='profile-icon'><FaRegCircleUser /></i>
                    )}
                    <div className="name-and-time">
                        <h3>{name}</h3>
                        <p>{time} Ago</p>
                    </div>
                </div>

                <div className="middle-line"></div>

                <div className="review">
                    <p>{review}</p>
                    <div className="symbols">
                        <i><BiLike /> </i>
                        <i><BiDislike /></i>
                        <RatingCart />
                    </div>
                </div>

            </div>
            <div className='bottom-line'></div>
            <i className='more-option-icon'><BiDotsVerticalRounded /></i>
        </div>
    );
}

export default ReviewCart;