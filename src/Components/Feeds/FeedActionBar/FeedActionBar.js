import React from 'react'
import { AiOutlineLike ,AiOutlineComment} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import './FeedActionBar.css'

function FeedActionBar() {
  return (
    <div className='h-14  w-full flex items-center  justify-around'>
    
<span className='flex text-sm font-thin '><AiOutlineLike size={20}/> &nbsp;Like</span>
<span className='flex text-sm font-thin '><AiOutlineComment size={20}/>  &nbsp;Commtents</span>
<span className='flex text-sm font-thin '><RiShareForwardLine size={20}/>  &nbsp;Share</span>
<span className='flex text-sm font-thin '><FiSend size={20} />  &nbsp; Send</span>


    </div>
  )
}

export default FeedActionBar