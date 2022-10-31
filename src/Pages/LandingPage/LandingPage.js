import React from 'react'
import LoginNavbar from '../../Components/Navbar/LoginNavbar'

import ModalTest from '../../Components/Modal/LoginModal/ModalTest'
import {useSelector} from 'react-redux'
export const LandingPage = () => {

    const modal=useSelector((state)=>state.loginModal)
    console.log(modal,"modal consol;e at pages ");
  return (

    <div>
       <>
       <LoginNavbar /> 
        <ModalTest/>
       </> 

    </div>
  )
}
