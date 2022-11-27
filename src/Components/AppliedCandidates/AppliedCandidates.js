import React, { useEffect, useState } from 'react'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'
import SingleAppliedCandidate from './SingleAppliedCandidate/SingleAppliedCandidate'

import axios from '../../Config/Axios'
import { useNavigate } from 'react-router-dom'

function AppliedCandidates({data}) {
    const navigate=useNavigate()
 { data.appliedCandidates.map((element)=><SingleAppliedCandidate singleCandidateData={element}/> )    }
    const [singleCandidateData,setSingleCandidateData]=useState()
    useEffect(()=>{
        console.log("inside use effet of single applied candiadte ")
        axios.get(`/getCandidateDataOfJobApplied?postId=${data._id}`)
        .then((response)=>{
            if (response ?. data ?. loadError) {
                navigate('/page404')
            }
            if (response ?. data ?. dataFetched) {
                 console.log(response.data?.response?.appliedCandidates,"iresponse of userAboutSessionUpdate ")
                 setSingleCandidateData(response?.data?.response.appliedCandidates)
              
            }
        
           })
           .catch((error)=>{
             localStorage.clear()
                     navigate('/')
           })
    },[])
  return (
    <div className='bg-white'>
 { singleCandidateData && singleCandidateData?.map((element)=><SingleAppliedCandidate singleCandidateData={element}/> )    }


    </div>
  )
}

export default AppliedCandidates