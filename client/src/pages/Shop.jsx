import React from 'react'
import { Header } from '../Home'
import Footer from '../Layout/Footer'
import ShopNow from '../Home/Shopnow'
import {Link} from 'react-router-dom'
const Shop = () => {
  return (
    <div>
    <Header />
    
    <div className=' min-h-screen w-full flex justify-center items-center '>
       <ShopNow/>
      
    </div>
   
    <Footer />
</div>
  )
}

export default Shop