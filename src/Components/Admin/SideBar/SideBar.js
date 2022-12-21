import React from 'react'
import Connect_plus from  "../../../Assets/Connect_plus__2.png"
import { AiOutlineHome,AiOutlineUser ,AiOutlinePoweroff} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate=useNavigate();
  return (
  <div className='flex flex-col  bg-ccBlack h-full'>
    <div className='flex items-center justify-center my-5 '>
    <img src={Connect_plus} alt="" className=' w-16 h-16' />  
   </div> 
   <div className='text-white flex items-center pl-10  h-12 w-full border-b border-white hover:border-2 hover:border-ccOrange hover:text-ccOrange hover:shadow-lg  active:bg-ccOrange active:text-ccBlack active:border-2  active:border-white' onClick={()=>navigate('/admin/adminHome')}> 
   <span className='flex items-center space-x-4'><AiOutlineHome size={17}/> <h2>Home</h2></span> </div>
   <div className='text-white flex items-center pl-10   h-12 w-full border-b border-white hover:border hover:border-ccOrange hover:text-ccOrange hover:shadow-lg  active:bg-ccOrange active:text-ccBlack active:border-2  active:border-white'>
     <span className='flex items-center space-x-4'><AiOutlineUser size={17}/> <h2>Users</h2></span>  </div>

   <div className='text-white flex items-center pl-10   h-12 w-full border-b border-white hover:border hover:border-ccOrange hover:text-ccOrange hover:shadow-lg  active:bg-ccOrange active:text-ccBlack active:border-2  active:border-white' onClick={()=>navigate('/admin/jobPosts')}>
    <span className='flex items-center space-x-4'><BsBriefcase size={17}/> <h2>Jobs</h2></span> </div>

   <div className='text-white flex items-center pl-10   h-12 w-full border-b border-white hover:border hover:border-ccOrange hover:text-ccOrange hover:shadow-lg  active:bg-ccOrange active:text-ccBlack active:border-2  active:border-white' onClick={()=>navigate('/admin/posts')}>
    <span className='flex items-center space-x-4'><BsPencilSquare size={17}/> <h2>Posts</h2></span> </div>


   <div className='text-white flex items-center pl-10   h-12 w-full border-b border-white hover:border hover:border-ccOrange hover:text-ccOrange hover:shadow-lg  active:bg-ccOrange active:text-ccBlack active:border-2  active:border-white'>
    <span className='flex items-center space-x-4'   onClick={
                                    e => {
                                        e.preventDefault()
                                        localStorage.clear()
                                        navigate('/admin')
                                    }}
                                    ><AiOutlinePoweroff size={17}/> <h2>Logout</h2></span> </div>



  </div>
  )
}

export default SideBar