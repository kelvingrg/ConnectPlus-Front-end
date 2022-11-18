import React, { useEffect, useState } from 'react'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'
import FeedActionBar from './FeedActionBar/FeedActionBar'
import { AiOutlineLike ,AiOutlineComment} from "react-icons/ai";
import './Feeds.css'



function Feeds({data}) {
  
  return (
  
    <>     <div className='bg-white mt-3 border border-zinc-400 rounded-lg h-auto shadow-lg'>
        
        <div className='h-auto overflow-hidden'>
        
        <div className='flex border-b px-5 py-3 '>
                        <div className=' w-12 h-12 rounded-full mt-1 '>
                            <UserRoundDp image={`images/dp/${data?.postedBy?.dp}`}/>
                        </div>
                        <div className='flex-col'>

                            <h1 className='pl-2'>{data?.postedBy?.userName}
                            </h1>
                            <p className='ml-2 font-thin text-sm'>flutter devoloper </p>

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
    <source  src={`posts/files/${data?.file}` }/>
</video> } 

<div className='border-b px-4 flex justify-between'>
  <p className='font-light text-sm flex items-center'> <AiOutlineLike/> 700 Likes</p>
  <p className='font-light text-sm flex items-center'> <AiOutlineComment/> 300 comments</p>
</div>
  <FeedActionBar/>



          
        
        
        </div>
        </>

  )
}

export default Feeds