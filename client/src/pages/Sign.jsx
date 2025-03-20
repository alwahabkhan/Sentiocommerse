import React from 'react'
import Footer from '../Layout/Footer'
import RegisterPage from '../Home/Register'
import { Header } from '../Home'
const SignIn = () => {
  return (
    <div>
      <Header/>
    <div className='relative bg-cover bg-center py-10 px-6 flex justify-center item-center bg-gray-100'
     >
       <RegisterPage/>
    </div>
   
    <Footer />
</div>
  )
}

export default SignIn