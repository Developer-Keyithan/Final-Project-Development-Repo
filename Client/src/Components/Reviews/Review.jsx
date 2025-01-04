import './Review.css'

import sampleData from '../../Data/ReviewData';
import ReviewCart from '../Review Cart/ReviewCart';
import PageNumber from '../Page Number/PageNumber';

function Review() {
    return (
        <div className='review-container'>
            <h2>Reviews</h2>
            <div className='review-carts'>
                {sampleData.map((item) => (
                    <ReviewCart key={item.id} {...item} />
                ))}
            </div>
            <PageNumber />
        </div>
    );
}

export default Review;
