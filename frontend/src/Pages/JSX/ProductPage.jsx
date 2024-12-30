import React from 'react'
import '../CSS/ProductPage.css'

import Product from '../../Components/Product/Product'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import PageNumber from '../../Components/Page Number/PageNumber'

const ProductPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg'></div>
            <Product />
            <PageNumber />
            <Footer />
        </div>
    )
}

export default ProductPage
