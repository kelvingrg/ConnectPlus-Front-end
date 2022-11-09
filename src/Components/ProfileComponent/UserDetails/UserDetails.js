import React from 'react'
import CompanyLogo from '../../CompanyLogo/CompanyLogo'
import CoverPhoto from '../../CoverPhoto/CoverPhoto'
import UserRoundDp from '../../PostBox/UserRoundDp.js/UserRoundDp'
import { AiOutlineEdit } from "react-icons/ai";
import CPIcon from '../../Icon/CPIcon';


function UserDetails() {
  return (
    <div className='border-b border-zinc-400 rounded-lg w-full pb-6 bg-white'>
<div className='relative w-full md:h-60 h-40   flex justify-center'>

   <CoverPhoto image={"https://images.unsplash.com/photo-1608408843539-9a2c43a5a60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"} />
    <div className='absolute  w-32 h-32 md:w-44 md:h-44 rounded-full top-24 md:top-36  left-4 md:left-16'>
        <UserRoundDp image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"} />
    </div>
</div>
<span className='float-right pr-10 pt-10'>
<CPIcon tippyPlacement="bottom" tippyContent="Update Basic Details ">
<span className='rounded-full'><AiOutlineEdit size={20}/></span>
</CPIcon>
  </span>
<div className='md:flex grid mt-20 md:mt-24 w-full'>
 
<div className='  pl-4 md:pl-16 md:w-1/2 w-ull  '>
<p className='text-lg font-bold'>Full Name</p>


  <div className='flex'>
  <p className='text-sm font-thin w-fit '>flutter devoloper ||flutter devoloper ||flutter devoloper ||flutter devoloper ||flutter devoloper ||flutter devoloper || </p>


   </div>


    </div>
{/* company logo section  */}
    <div className='w-full md:w-1/2 pl-4 pt-5 md:pl-10 flex items-center '>
      <CompanyLogo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9v6uG9g5AEonjfD_kYL_yoU_H78-w93Vl_SY3USsjtHVT3PXGkEB_oIVAAzb9JiP5A&usqp=CAU"} />
      <p className='pl-14 '>CompanyName</p>

    </div>
    </div>

    </div>
  )
}

export default UserDetails
