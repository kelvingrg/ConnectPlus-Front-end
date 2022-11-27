import React, { useEffect } from 'react'
    import UserRoundDp from '../../PostBox/UserRoundDp.js/UserRoundDp'
    import axios from '../../../Config/Axios'
import { useNavigate } from 'react-router-dom'
import { CButton } from '../../Button/CButton'
import DropDown from '../../DropDown/DropDown'
import { BsThreeDotsVertical } from "react-icons/bs";


function SingleAppliedCandidate({singleCandidateData}) {
    const navigate=useNavigate()

   
  return (
    <div className='border-b px-2 py-4 z-10'>
        <span className='float-right '> <DropDown OwnJobPost={true} > <BsThreeDotsVertical  />
</DropDown></span> 
    <div className=' flex items-center'>
<div className='w-12 h-12'><UserRoundDp image={`/images/dp/${singleCandidateData?.userId?.dp}`}/></div>

<div className='ml-5'>
    <p>{singleCandidateData.userId.userName}</p>
    <p>{singleCandidateData.userId.userName}</p>
    </div>
    </div>
   <div className='mt-2 w-full flex justify-center space-x-3'> <span><CButton text={"view"}/></span>
    <span><CButton text={'Resume'}/></span>
    </div>
    
    </div>
  )
}

export default SingleAppliedCandidate