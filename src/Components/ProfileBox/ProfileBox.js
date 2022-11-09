import React from 'react'
import { CButton } from '../Button/CButton'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'

function ProfileBox() {
  return (
    <div className='bg-white h-auto w-full border border-zinc-400 rounded-lg grid justify-items-center'>

<div className='h-20 w-20 mt-5'><UserRoundDp></UserRoundDp> </div>
<div className="font-semibold">Full name </div>
<div className="font-thin"> Basic skills </div>

<div className=' w-4/5 flex-col pt-5 border-t px-5 mb-8'>
    <div className='flex justify-between'>

    <p >Connections</p> <p className=''>1203</p>
    </div>
    <div className='flex justify-between'>

    <p className=''>Posts</p> <p>1200</p>
    </div>
    <div className='flex justify-between'>

    <p className=''>Jobs</p><p>1200</p>
    </div>
    
    
</div>
<span className="mb-5"><CButton text={"viewProfile"} /></span>

    </div>
  )
}

export default ProfileBox