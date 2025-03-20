import React from 'react'
import { Header } from '../Home'
import Footer from '../Layout/Footer'
import AboutUs from '../Home/Aboutus'

const About = () => {
  return (
    <div>
    <Header />
    <div className=' min-h-screen w-full flex justify-center items-center'>
       <AboutUs/>
    </div>
    <Footer />
</div>
  )
}

export default About