import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import AddJobClickBox from '../../Components/AddJobClickBox/AddJobClickBox'
import OwnJobPost from '../../Components/OwnJobPost/OwnJobPost'

import axios from '../../Config/Axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import AppliedCandidates from '../../Components/AppliedCandidates/AppliedCandidates'
import { setAllJobPostData, setSingleJobPostData } from '../../App/ReduxHandlers/TempDataReducer'
import UserRoundDp from '../../Components/PostBox/UserRoundDp.js/UserRoundDp'
import { CButton } from '../../Components/Button/CButton'
import { BiArrowToTop,BiArrowToBottom } from "react-icons/bi";



function Connections() {
    const {singleJobPostData,allJobPostData}=useSelector((state)=>state.tempData)
    const {userData}=useSelector(state=>state?.login)
    const {overFlow}=useSelector(state=>state?.tempData)
  const navigate=useNavigate()
    const dispatch=useDispatch()

   
    useEffect(()=>{
        axios.get(`/ownJobPostData?userId=${userData._id}`)
        .then((response)=>{
          console.log(response,"iresponse of own jiob post data ")
          if (response ?. data ?. loadError) {
              navigate('/page404')
          }
          if (response ?. data ?. dataFetched) {
              console.log(response,"iresponse of own jiob post data ")
              dispatch(setAllJobPostData(response?.data?.data))
            //  dispatch(setSingleJobPostData(response?.data?.data[0]))
              
              console.log(response);
          }
        
         })
         .catch((error)=>{
           localStorage.clear()
                   navigate('/')
         })
        
            },[ ])
           

        
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
                    
              
                <div className=' bg-white   border border-t border-b rounded-b-lg rounded-t-lg shadow-lg border-zinc-400 '>
                    <p className=' font-semibold   p-3 broder border-b border-t rounded-t-lg '>Connection Requests</p>
                  
                

                {/* map start here  */}
                <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div>
              {/* map end  here  */}


              {/* for delete  */}
              <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div>
              
              {/* for delete  */}


              <div className='w-full bg-green flex items-center justify-center py-4'> <BiArrowToBottom size={20}/> <BiArrowToTop size={20}/></div>


                </div>
                
                

                <div className=' bg-white   border border-t border-b rounded-b-lg rounded-t-lg shadow-lg border-zinc-400'>
                    <p className=' font-semibold   p-3 broder border-b border-t rounded-t-lg '>Connection Requests</p>
                  
                

                {/* map start here  */}
                <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div>
              {/* map end  here  */}


              {/* for delete  */}
              <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div> <div className='w-full px-7 py-3 border border-b flex justify-between '>
                        <div className='w-14 h-14 flex'>
                        <UserRoundDp/>
                     
                        </div>
                        <div className=' grow pl-5 pt-1 '>

                            <p className=' font-semibold leading-3'>name </p>
                            <p className=' font-light '> designation </p>
                            <p className=' font-light italic leading-3'> date  </p>
                        </div>
                        <div className='px-5 space-x-3 flex items-center justify-around'><span> declibene </span>   <span> <CButton text={"Accept"}/></span> </div>

                    </div>
              
              {/* for delete  */}

<div className='w-full bg-green-500 flex items-center justify-center'>sdfgdsgdgf</div>

                </div>
                














                
                </div>

                {/* center box end */}

                 {/* right box start */}
                 <div className=' w-1/5 h-1/2 ml-6 hidden md:block bg-white'>
                 <div className={`w-1/5 h-[85%] fixed border border-ccBlack  scrollbar-hidden shadow-lg rounded-lg o m-2  ${overFlow?"overflow-x-scroll":"overflow-x-scroll"}`}>
                           
                    </div>
                    <div></div>
                </div>
                {/* right box end */}
             </div>
        </div>
 </>)
}

export default Connections

