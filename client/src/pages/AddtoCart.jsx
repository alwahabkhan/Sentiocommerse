import React from 'react'
import { Header } from '../Home'
import Footer from '../Layout/Footer'

import AddCart from './AddCart'
const AddtoCart = () => {
  return (
    <div>
    <Header />
    <div className=' min-h-screen w-full flex justify-center items-center'>
       <AddCart/>
    </div>
    <Footer />
</div>
  )
}

export default AddtoCart;