import '../CSS/ProductOverviewPage.css'
import Review from '../../Components/Reviews/Review'
import ProductCart from '../../Components/ProductCart/ProductCart'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import sampleData from '../../Data/ProductData'

function ProductOverviewPage() {
    const selectedProduct = sampleData[0];
    return (
        <div>
            <Sidebar />
            <div className='overview-main'>
                <div className='overview-carts'>
                    {selectedProduct && <ProductCart key={selectedProduct.id} {...selectedProduct} />}
                </div>
                <Review />
            </div>
            <Footer />
        </div>
    )
}

export default ProductOverviewPage
