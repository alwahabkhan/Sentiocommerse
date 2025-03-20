import React from 'react'
import { Header } from '../Home'
import Footer from '../Layout/Footer'
import ProductDetailPage from './ProductDetailPage'

const ProductDetail= () => {
  return (
    <div>
    <Header />
    <div >
       <ProductDetailPage/>
    </div>
    <Footer />
</div>
  )
}

export default ProductDetail;