import React, { useEffect, useState } from 'react'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'
import FeedActionBar from './FeedActionBar/FeedActionBar'
import { AiOutlineLike ,AiOutlineComment} from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import './Feeds.css'
import { BsThreeDotsVertical,BsTrash } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";



function Feeds({data}) {
  console.log(data,"data at feeda 10 ");
  
  return (
  
    <>     <div className='bg-white mt-3 border border-zinc-400 rounded-lg h-auto shadow-lg'>
        
        <div className='h-auto overflow-hidden'>
        
        <div className='flex justify-between  border-b px-5 py-3 '>
        <div className='flex'>
                        <div className=' w-12 h-12 rounded-full mt-1 '>
                            <UserRoundDp image={`images/dp/${data?.postedBy?.dp}`}/>
                 
                            </div>
                 
                      
                        <div className='flex-col'>

                            <h1 className='pl-2'>{data?.postedBy?.userName}
                            </h1>
                            <p className='ml-2 font-thin text-sm'>flutter devoloper</p>

                        </div>
                        
                    </div>
                    <div className='h-full flex justify-center items-center'>
                    <Menu  placement="left-start">
      <MenuHandler>
        <Button variant="text" className="active:bg-none border-0 p-0 m-0">  <BsThreeDotsVertical size={17} /> </Button>
      </MenuHandler>
      <MenuList className='p-0 m-0'>
  <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2"> <MdReportGmailerrorred size={15}/>Report</MenuItem>
         {/* <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={blockJobPost}> <BiBlock size={15}/>Delete</MenuItem>}  onClick={deleteJobPost}    onClick={unBlockJobPost} */}
        <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" ><BsTrash size={15}/> Delete</MenuItem>

      </MenuList>
    </Menu>
                    </div>

                    </div>

                    <div className='w-full max-h-24 px-3 font-light text-ellipsis'>
<p className=' text-ellipsis overflow-y-scroll scrollbar-hide '>{data?.postText}

</p>
     </div>
          </div>

         { (data?.mediaType=="image")&& <img src={`posts/files/${data?.file}`}
           alt="" className='w-full max-h-[35rem] mt-3' />}
       { (data?.mediaType=="video") && <video   className='w-full max-h-[35rem] mt-3' controls>
    <source  src={`posts/files/${data?.file}`}/>
</video> } 


  <FeedActionBar data={data}/>



          
        
        
        </div>
        </>

  )
}

export default Feeds