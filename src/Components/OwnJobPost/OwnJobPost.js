import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import DropDown from '../DropDown/DropDown';
import { AiFillCaretRight } from "react-icons/ai";

function OwnJobPost() {
    const [viewFull,setViewFull]=useState(false)
  return (
     <div className={`bg-ccLight bg-transparent-[20%] rounded-lg border-zinc-400 px-5  ${viewFull?" h-fit":" overflow-y-hidden h-56 "}  `} > 
    <div className='w-full py-3 ' >
       <span className='float-right py-3'> <DropDown OwnJobPost={true}> <BsThreeDotsVertical  />
</DropDown></span> 
<div className='flex space-x-5 ' onClick={()=>setViewFull(!viewFull)}>
<img
className='w-20 h-20 ' 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI12eCBhM3pMFgCVeiEG3aGko1jTs2-hFCpg&usqp=CAU"
 alt="" />

 <div className='felx-1  '>
 <p className='bold text-black font-bold text-lg capitalize float'>designation </p>
<p className='bold text-black  font-semibold capitalize'> companyName </p>
 </div>
</div>
<p className='bold text-black  font-semibold capitalize'> create mode 100644 public/posts/files/1669023308859-Connect plus.jpg
 create mode 100644 public/posts/files/1669293299690-ellipsis.png </p>

 <ul>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>xfvxdfv</li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>sample </li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>xfgbcv </li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>xcbfxcv </li>
    


</ul>

</div>


    
    </div>
  )
}

export default OwnJobPost