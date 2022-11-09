import React from 'react'
import {  AiOutlineEdit } from 'react-icons/ai'
import CompanyLogo from '../../CompanyLogo/CompanyLogo'
import CPIcon from '../../Icon/CPIcon'
function Experience() {
  return (
    <div className='mt-2 bg-white border border-zinc-400 rounded-lg shadow-lg px-5 py-5'>
    <div className=' flex justify-between '>
    <h3 className='font-bold text-xl '>Experience</h3>
    <span className=' float-right pr-5 '>
<CPIcon tippyPlacement="bottom" tippyContent="Edit ">
<span className='rounded-full'><AiOutlineEdit size={20}/></span>
</CPIcon>
</span>
</div>
{/* company details start */}
<div className='border-b border-t py-2 '>
<div className='mt-2 flex  '>
<CompanyLogo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9v6uG9g5AEonjfD_kYL_yoU_H78-w93Vl_SY3USsjtHVT3PXGkEB_oIVAAzb9JiP5A&usqp=CAU"}/>
<div className=' px-10'>
      <p className=' font-semibold'>   senior Devoloper</p>
  <p className='inline font-thin text-sm'>    22/march /2021</p> -  
 <p className='inline font-thin text-sm'>     22/march /2022</p><br />
 <p className='inline font-thin text-sm'> location</p>
</div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quisquam dolorem veniam earum ratione repellat incidunt consequatur aliquam, nostrum fugit ducimus! Mollitia quas iusto recusandae error praesentium natus in?</p>
</div>

{/* for delete */}
<div className='border-b border-t py-2 '>
<div className='mt-2 flex  '>
<CompanyLogo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9v6uG9g5AEonjfD_kYL_yoU_H78-w93Vl_SY3USsjtHVT3PXGkEB_oIVAAzb9JiP5A&usqp=CAU"}/>
<div className=' px-10'>
      <p className=' font-semibold'>   senior Devoloper</p>
  <p className='inline font-thin text-sm'>    22/march /2021</p> -  
 <p className='inline font-thin text-sm'>     22/march /2022</p><br />
 <p className='inline font-thin text-sm'> location</p>
</div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quisquam dolorem veniam earum ratione repellat incidunt consequatur aliquam, nostrum fugit ducimus! Mollitia quas iusto recusandae error praesentium natus in?</p>
</div>
<div className='border-b border-t py-2 '>
<div className='mt-2 flex  '>
<CompanyLogo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9v6uG9g5AEonjfD_kYL_yoU_H78-w93Vl_SY3USsjtHVT3PXGkEB_oIVAAzb9JiP5A&usqp=CAU"}/>
<div className=' px-10'>
      <p className=' font-semibold'>   senior Devoloper</p>
  <p className='inline font-thin text-sm'>    22/march /2021</p> -  
 <p className='inline font-thin text-sm'>     22/march /2022</p><br />
 <p className='inline font-thin text-sm'> location</p>
</div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quisquam dolorem veniam earum ratione repellat incidunt consequatur aliquam, nostrum fugit ducimus! Mollitia quas iusto recusandae error praesentium natus in?</p>
</div>
<div className='border-b border-t py-2 '>
<div className='mt-2 flex  '>
<CompanyLogo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9v6uG9g5AEonjfD_kYL_yoU_H78-w93Vl_SY3USsjtHVT3PXGkEB_oIVAAzb9JiP5A&usqp=CAU"}/>
<div className=' px-10'>
      <p className=' font-semibold'>   senior Devoloper</p>
  <p className='inline font-thin text-sm'>    22/march /2021</p> -  
 <p className='inline font-thin text-sm'>     22/march /2022</p><br />
 <p className='inline font-thin text-sm'> location</p>
</div>
</div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae quisquam dolorem veniam earum ratione repellat incidunt consequatur aliquam, nostrum fugit ducimus! Mollitia quas iusto recusandae error praesentium natus in?</p>
</div>
{/* for delete */}


{/* company details end*/}
</div>
  )
}

export default Experience