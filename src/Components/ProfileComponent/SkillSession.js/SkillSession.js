import React from 'react'
import {  AiOutlineEdit } from 'react-icons/ai'
import CompanyLogo from '../../CompanyLogo/CompanyLogo'
import CPIcon from '../../Icon/CPIcon'
import { BiRightArrow } from "react-icons/bi";
import SkillProgressBar from '../SkillProgressBar/SkillProgressBar';

function SkillSession()  {
    return (
      <div className='mt-2 bg-white border border-zinc-400 rounded-lg shadow-lg px-5 py-5'>
      {/* skillset hrading box start */}
      <div className=' flex justify-between '>
      <h3 className='font-bold text-xl '>Skills</h3>
      <span className=' float-right pr-5 '>
  <CPIcon tippyPlacement="bottom" tippyContent="Edit ">
  <span className='rounded-full'><AiOutlineEdit size={20}/></span>
  </CPIcon>
  </span>
  </div>
   {/* skillset hrading box end  */}

  {/* skill set start */}
  
  <div className=' border-b border-t py-2'>
{/* map will write here */}
    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={60}/></div>
</div>
{/* map will end  here */}

<div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={75}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={93}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={30}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={40}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={30}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={70}/></div>
</div>    <div className='flex items-center w-full '>
<BiRightArrow size={15}/> &nbsp;<p>  Html</p> <div className='grow px-auto ml-10'><SkillProgressBar progress={80}/></div>
</div>
  </div>

  
  
  {/* skill set end*/}
  </div>
    )
  }

export default SkillSession