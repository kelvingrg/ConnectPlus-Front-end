import React from 'react'
import {  AiOutlineEdit } from 'react-icons/ai'
import CPIcon from '../../Icon/CPIcon'


function AboutUser() {
  return (
    <div className='mt-2 bg-white border border-zinc-400 rounded-lg shadow-lg px-5 py-5 '>
        <div className=' flex justify-between'>
        <h3 className='font-bold text-xl '>About</h3>
        <span className=' float-right pr-5 '>
<CPIcon tippyPlacement="bottom" tippyContent="Edit ">
<span className='rounded-full'><AiOutlineEdit size={20}/></span>
</CPIcon>
  </span>
  </div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit ab tempore, repellendus omnis delectus temporibus sapiente officiis reiciendis non doloribus, similique inventore ad animi. Fuga, eligendi eius. Iusto, illo.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cumque necessitatibus perferendis illum rerum saepe sit quisquam sapiente ipsam quaerat ratione, rem, sint laborum consectetur dolorum dolorem. Ullam, rerum nihil.

    </div>
  )
}

export default AboutUser