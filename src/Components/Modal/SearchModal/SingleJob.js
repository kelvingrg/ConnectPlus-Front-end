import React from 'react'
import UserRoundDp from '../../PostBox/UserRoundDp.js/UserRoundDp'
import baseUrl from '../../../Constants/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchModalState } from '../../../App/ReduxHandlers/ModalSlice'
import { CButton } from '../../Button/CButton'

function SingleJob({singleJobData}) {
  const {userData}=useSelector(state=>state.login)
  const navigate =useNavigate();
  const dispatch =useDispatch();
  
  return (
    <div className='flex justify-between border-zinc-400 border  rounded-lg py-3 px-5 w-full '  onClick={()=>{
      dispatch(setSearchModalState(false))
      navigate(`/detailedJobPostView/${singleJobData._id}`)}}
       >
    <div className='flex'>
              <div className=' w-12 h-12 rounded-full mt-1 ' 
             onClick={()=>{
              dispatch(setSearchModalState(false))
              navigate(`/detailedJobPostView/${singleJobData._id}`)}}
              >
                 <img 
        src={`${baseUrl}/JobPosts/CompanyLogo/${singleJobData.companyLogo}`} 
        className='h-full w-full'
        alt="" />
       </div>
       
            
              <div className='flex-col'
              onClick={()=>{
                dispatch(setSearchModalState(false))
                navigate(`/detailedJobPostView/${singleJobData._id}`)}}>

                  <h1 className='pl-2'>{singleJobData?.designation}</h1>
                  <p className='ml-2 font-thin text-sm'>{singleJobData?.companyName}</p>

              </div>
             
              
          </div>
           <div className=' grow flex items-center  justify-end'>
         { singleJobData.appliedCandidates?.some(element=>element.userId==userData._id) ? <CButton text ='Applied'/>:<CButton text ='Apply'/>}

              </div>

        </div>
  )
}

export default SingleJob