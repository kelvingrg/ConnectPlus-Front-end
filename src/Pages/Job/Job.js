import React, { useEffect, useState } from 'react'
import CasualPostModal from '../../Components/Modal/CasualPostModal/CasualPostModal'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import PostBox from '../../Components/PostBox/PostBox'
import './Job.css'
import {useSelector} from 'react-redux'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import Feeds from '../../Components/Feeds/Feeds'
import axios from '../../Config/Axios'
import { useNavigate } from 'react-router-dom';

function Job() {
    const {postModal} = useSelector((state) => state ?. modal)
    const [postData,setPostData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
axios.get("/getCasualPostData").then(response=>{
  if(response?.data?.dataFetched){
    setPostData(response?.data?.data)
  }
  if(response?.data?.loadError){
    navigate('/page404')
  }

})
.catch((error)=>{
  localStorage.clear()
          navigate('/')
})
  },[])
    return (

        <div className='parent bg-ccLight h-fit'>
            <HomeNavbar/>
            <div className='flex pt-20  pl-10  '> {/* left box start  */}
                <div className=' w-1/5 h-auto hidden md:block '>
                    <div className='w-1/5 fixed '>
                        <ProfileBox/>
                    </div>
                </div>
                {/* left box end  */}

                {/* center box start */}
                <div className=' items-center w-full md:w-[65%] h-auto block pl-16'>
                  
                    {postData.map((element)=><Feeds data={element}/>)}
                    
                    
                </div>
                {/* center box end */}

                {/* right box start */}
                {/* <div className=' w-1/5 h-1/2  hidden md:block '>
                    <div className='w-1/5 fixed border border-ccBlack'>
                        right box
                    </div>
                </div> */}
                {/* right box end */} </div>
        </div>
     )
}

export default Job
