import React from 'react'
import { Header } from '../Home'
import Footer from '../Layout/Footer'
import ContactUs from '../Home/Contactus'

const Contact = () => {
  return (
    <div>
        <Header />
        <div className=' min-h-screen w-full flex justify-center items-center'>
            <ContactUs/>
      
        </div>
        <Footer />
        </div>
  )
}

export default Contact