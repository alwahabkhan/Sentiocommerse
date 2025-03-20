import React from 'react'
import Footer from '../Layout/Footer'
import LoginPage from '../Home/Login'
import { Header } from '../Home'
const LogIn = () => {
  return (
    <div>
<Header/>
    <div className='relative bg-cover bg-center py-10 px-6 flex justify-center item-center bg-gray-100'

      >
      <LoginPage/>
      
    </div>
   
    <Footer />
</div>
  )
}

export default LogIn