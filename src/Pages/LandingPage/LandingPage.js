import React from 'react'
import LoginNavbar from '../../Components/Navbar/LoginNavbar'
import ModalTest from '../../Components/Modal/LoginModal/ModalTest'
import {useSelector} from 'react-redux'
import SignUpModal from '../../Components/Modal/SignUpModal/SignUpModal'
export const LandingPage = () => {

    const {loginModal,signupModal}=useSelector((state)=>state?.modal)
    console.log(loginModal);

  return (

    <div>
       <>
       <LoginNavbar /> 
      { loginModal &&  <ModalTest/>}
    {  signupModal && <SignUpModal/>}
       </> 

    </div>
  )
}
