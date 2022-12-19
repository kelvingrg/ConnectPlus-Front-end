import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import axios from '../../Config/Axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobPostData, setSingleJobPostData } from '../../App/ReduxHandlers/TempDataReducer'
import { BiArrowToTop,BiArrowToBottom } from "react-icons/bi"
import ConnectionReqSingle from '../../Components/ConnectionReqSingle/ConnectionReqSingle'
import ConnectionSuggSingle from '../../Components/ConnectionSuggSingle/ConnectionSuggSingle'
import ConnectedUsers from '../../Components/ConnectedUsers/ConnectedUsers';
import AboutUser from '../../Components/ProfileComponent/About/AboutUser';
import Experience from '../../Components/ProfileComponent/Experience/Experience';
import SkillSession from '../../Components/ProfileComponent/SkillSession.js/SkillSession';
import EducationSession from '../../Components/ProfileComponent/EducationSession/EducationSession';
import UserDetails from '../../Components/ProfileComponent/UserDetails/UserDetails';
import OwnCasualPosts from '../../Components/OwnCasualPosts/OwnCasualPosts';



function UserProfileViewCommon({}) {
    const {userData}=useSelector(state=>state?.login)
    const [viewUserData,setViewUserData]=useState()

  const navigate=useNavigate()
    const dispatch=useDispatch()
    const location = useLocation()
    const userId  = location.state; 
    console.log((location.state,"user id at profile view "));

   
   
useEffect(()=>{
    axios.post('/getUserData',{userId:userId})
    .then((response)=>{
      if (response ?. data ?. loadError) {
          navigate('/page404')
      }
      if (response ?. data ?. dataFetched) {
      
        setViewUserData(response ?. data ?. response[0])
     }
  
     })
     .catch((error)=>{
       localStorage.clear()
               navigate('/')
     })
  
  },[])


            useEffect(()=>{
                axios.get(`/getConnectionRequestData?userId=${userData._id}`)
                .then((response)=>{
                //   console.log(response,"iresponse ofgetConnectionSuggestionData ")
                  if (response ?. data ?. loadError) {
                      navigate('/page404')
                  }
                  if (response ?. data ?. dataFetched) {
                      console.log(response,"iresponse after connection req data fetrected  ")
                
                      
                      console.log(response);
                  }
                
                 })
                 .catch((error)=>{
                   localStorage.clear()
                           navigate('/')
                 })
                

            },[])
           

    return (<>

        <div className='parent bg-ccLight h-fit min-h-screen '>
            <HomeNavbar/>
            <div className='flex pt-20  px-10 '>
                 {/* left box start  */}
                <div className=' w-1/5 h-auto hidden md:block '>
                    <div className='w-1/5 fixed '>
                        <ProfileBox/>
                    </div>
                </div>
                {/* left box end  */}

                {/* center box start */}
                <div className=' w-full h-auto   md:w-[50%] md:ml-10 space-y-3  '>
                    
                { <>  <UserDetails viewUserData={viewUserData} />
         <AboutUser viewUserData={viewUserData}/>
         <Experience viewUserData={viewUserData}/>
         <SkillSession viewUserData={viewUserData}/>
         <EducationSession viewUserData={viewUserData}/>
         </>}
              
         <OwnCasualPosts viewOnly={true}/>    

                </div>

                {/* center box end */}

                 {/* right box start */}
                 <div className=' w-1/5 h-1/2 ml-6 hidden md:block bg-white'>
                 <div className={`w-1/5 h-[85%] fixed border border-ccBlack  scrollbar-hidden shadow-lg rounded-lg px-2 bg-white overflow-y-scroll`}>
                 <ConnectedUsers/>
                    </div>
                    <div></div>
                </div>
                {/* right box end */}
             </div>
        </div>
 </>)
}

export default UserProfileViewCommon

