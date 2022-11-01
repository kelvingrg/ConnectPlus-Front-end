import React from 'react'
import { Button } from '../../Button/Button'
import './LoginModal.css'
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { setLoginModal } from '../../../App/ReduxHandlers/ModalSlice';

function ModalTest() {
  const dispatch=useDispatch()
  return (
    <div className='ModalTest absolute flex justify-center items-center h-screen w-screen z-30 overflow-visible border' 
    onClick={(e=>
     dispatch(setLoginModal(false)))} >

      <div className='md:w-1/4 w-full m-5 md:m-0 bg bg-white h-auto rounded-lg shadow-lg ' onClick={(e)=>{ e.stopPropagation()}}>
        <HiXMark className='float-right mt-3 mr-3 hover:text-ccOrange hover:stroke-2 hover:scale-150'/><br />
      <h1 className='text-center text-lg mt-5 font-bold'>Login</h1><br />
      <div className=' w-[90%] m-5  '>
      <label htmlFor="username" className=' '>User Name : </label><br />
      <input type="text" className='border border-black w-full my-3 h-10 rounded-lg' placeholder='Enter your Eamil ..' />
      <label htmlFor="username" className=' '>PassWord : </label><br />
      <input type="text" className='border  border-black w-full my-3 h-10 rounded-lg' placeholder='Enter your Password ..' />
     <p className=' font-thin italic text-blue-400 underline'><a href="">forgot Password ?</a></p>
      <div className='w-full flex  justify-center items-center mt-5 '>
     
<Button text={'Login'}/>
      </div >
      <p className='font-thin mt-4'>dont have an acoount ? <a href="" className='italic text-blue-400 underline'>signup here</a></p>

      </div>
      </div>
    </div>
  )
}

export default ModalTest