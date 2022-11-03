import React from 'react'
import PostBoxInput from './PostBoxInput'
import UserRoundDp from './UserRoundDp.js/UserRoundDp'

function PostBox() {
  return (
    
    <div className=" border border-zinc-400  rounded-lg bg-white  p-3 w-full flex items-center justify-center "> 
    <div className='h-14 w-14'>
        <UserRoundDp/>
    </div>

    <div className='grow ml-5 '> <PostBoxInput/> </div>
    </div>
  )
}

export default PostBox