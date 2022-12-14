import React, { useEffect, useState } from 'react'
import { CButton } from '../Button/CButton'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import axios from '../../Config/Axios'
function ProfileBox() {
  const naviagte=useNavigate()
  const {userData}=useSelector(state=>state.login)
  const [jobPost , setJobPost]=useState('');
  const [postNo,setPostNo]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get(`/profileBoxData?userId=${userData._id}`).then((response)=>{
      
      if (response ?. data ?. loadError) {
        navigate('/page404')
        }
        if (response ?. data ?. dataFetched) {
          setJobPost(response?.data?.jobPost)
          setPostNo(response?.data?.postDetails)
        
        }
        
        }) .catch((error)=>{
          localStorage.clear()
                  navigate('/')
       })
  
  
   
          
      


  },[])
  
  return (
    <div className='bg-white h-auto w-full border border-zinc-400 rounded-lg grid justify-items-center'>

<div className='h-20 w-20 mt-5'><UserRoundDp image={`http://localhost:9000/images/dp/${userData?.dp}`}></UserRoundDp> </div>
<div className="font-semibold">{userData?.userName} </div>
<div className="font-thin">{userData?.keyroles}</div>

<div className=' w-4/5 flex-col pt-5 border-t px-5 mb-8'>
    <div className='flex justify-between'>

    <p >Connections</p> <p className=''>{userData?.connections?.length}</p>
    </div>
    <div className='flex justify-between'>

    <p className=''>Posts</p> <p>{postNo}</p>
    </div>
    <div className='flex justify-between'>

    <p className=''>Jobs</p><p>{jobPost}</p>
    </div>
    
    
</div>
<span className="mb-5" onClick={()=>{naviagte('/profile')}}><CButton text={"viewProfile"} /></span>

    </div>
  )
}

export default ProfileBox