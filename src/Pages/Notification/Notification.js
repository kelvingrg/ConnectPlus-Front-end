import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import axios from '../../Config/Axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobPostData, setSingleJobPostData } from '../../App/ReduxHandlers/TempDataReducer'
import { BiArrowToTop,BiArrowToBottom } from "react-icons/bi"
import ConnectionReqSingle from '../../Components/ConnectionReqSingle/ConnectionReqSingle'
import ConnectionSuggSingle from '../../Components/ConnectionSuggSingle/ConnectionSuggSingle'



function Notification() {
    const {userData}=useSelector(state=>state?.login)
    const {overFlow}=useSelector(state=>state?.tempData)
    const [connectionSuggData, setConnectionSuggData]=useState([])
    const [connectionReqData, setConnectionReqData]=useState([])

  const navigate=useNavigate()
    const dispatch=useDispatch()

   
    useEffect(()=>{
        axios.get(`/getConnectionSuggestionData?userId=${userData._id}`)
        .then((response)=>{
        //   console.log(response,"iresponse ofgetConnectionSuggestionData ")
          if (response ?. data ?. loadError) {
              navigate('/page404')
          }
          if (response ?. data ?. dataFetched) {
            //   console.log(response,"iresponse of own jiob post data ")
              setConnectionSuggData(response?.data?.response)
              console.log(response);
          }
        
         })
         .catch((error)=>{
           localStorage.clear()
            navigate('/')
         })
        
            },[ ])


            useEffect(()=>{
                axios.get(`/getConnectionRequestData?userId=${userData._id}`)
                .then((response)=>{
                //   console.log(response,"iresponse ofgetConnectionSuggestionData ")
                  if (response ?. data ?. loadError) {
                      navigate('/page404')
                  }
                  if (response ?. data ?. dataFetched) {
                      console.log(response,"iresponse after connection req data fetrected  ")
                      setConnectionReqData(response?.data?.data)
                      
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
                    
        
                <div className=' bg-white   border border-t border-b rounded-b-lg rounded-t-lg shadow-lg border-zinc-400'>
                    <p className=' font-semibold   p-3 broder border-b border-t rounded-t-lg '>Notifications </p>
                  {/*map starts from here   */}
                   <div className='bg-green-400 h-12 w-full'>

                
                   </div>
            
                      {/*map ends  from here   */}
                </div> 
                </div>

                {/* center box end */}







                 {/* right box start */}
                 <div className=' w-1/5 h-1/2 ml-6 hidden md:block bg-white'>
                 <div className={`w-1/5 h-[85%] fixed border border-ccBlack  scrollbar-hidden shadow-lg rounded-lg o m-2  ${overFlow?"overflow-x-scroll":"overflow-x-scroll"}`}>
                           
                    </div>
                
                </div>
                {/* right box end */}
             </div>
        </div>
 </>)
}

export default Notification

