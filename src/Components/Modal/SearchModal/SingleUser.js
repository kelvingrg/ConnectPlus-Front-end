import axios from '../../../Config/Axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton } from '../../Button/CButton'
import UserRoundDp from '../../PostBox/UserRoundDp.js/UserRoundDp'
import { useNavigate } from 'react-router-dom'
import { setUserData } from '../../../App/ReduxHandlers/LoginReducer'
import { setSearchModalState } from '../../../App/ReduxHandlers/ModalSlice'


function SingleUser({singleUserData}) {
    const {userData}=useSelector(state=>state.login)
    const[reqSend,setReqSend]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [accept, setAccept]=useState(false)
  const [decline,setDecline]=useState(false)

   

    const handleReq=()=>{
 
        setReqSend(true)
      axios.post('/sendConnectionReq',{userId:userData._id,reqUserId:singleUserData._id})
      .then((response)=>{
      if (response ?. data ?. loadError) {
      navigate('/page404')
      }
      if(response?.data?.update){
       dispatch(setUserData([response?.data?.data])) 
      }
      
      }) .catch((error)=>{
           localStorage.clear()
                   navigate('/')
        })
          }

          const handleAcceptReq=()=>{
            setAccept(true)
            // console.log(userData._id ,singleUserData?._id," axios passing data whiel aaccpting ")
            axios.post('/acceptConnectionReq',{userId:userData._id ,reqUser:singleUserData?._id})
            
            .then((response)=>{
              console.log(response,"iresponse acceptConnectionReqacceptConnectionReq acceptConnectionReq ")
                if (response ?. data ?. loadError) {
                    navigate('/page404')
                }
                if (response ?. data ?. update) {
                  dispatch(setUserData([response?.data?.data]))
                }
              
               })
               .catch((error)=>{
                 localStorage.clear()
                         navigate('/')
               })
          }
          const handleDeclineReq=()=>{
            setDecline(true)
            axios.post('/declineConnectionReq',{userId:userData._id ,reqUser:singleUserData?._id})
            .then((response)=>{
              console.log(response,"iresponse handleDeclineReq handleDeclineReq ")
              if (response ?. data ?. loadError) {
                  navigate('/page404')
              }
              if (response ?. data ?. update) {
        
              }
            
             })
             .catch((error)=>{
               localStorage.clear()
                       navigate('/')
             })
          }
        

  return (
    <div className='flex justify-between border-zinc-400 border  rounded-lg py-3 px-5 w-full '>
    <div className='flex'>
              <div className=' w-12 h-12 rounded-full mt-1 ' onClick={()=>navigate(`/userProfileViewByOthers`, { state: singleUserData?._id })}>
                  <UserRoundDp image={`images/dp/${singleUserData.dp}`}/>
       </div>
       
            
              <div className='flex-col' onClick={()=>{navigate(`/userProfileViewByOthers`, { state: singleUserData?._id }); dispatch(setSearchModalState(false))}}>

                  <h1 className='pl-2'>{singleUserData.userName}</h1>
                  <p className='ml-2 font-thin text-sm'>{singleUserData.currentDesignation}</p>

              </div>
             
              
          </div>
           <div className=' grow flex items-center  justify-end'>
{  userData.connections.some(element=>element.userId==singleUserData._id) && <span onClick={()=>{ navigate('/newchat'); dispatch(setSearchModalState(false))}}><CButton text={'Message'}/></span>}
{ ! userData.connections.some(element=>element.userId==singleUserData._id) &&  userData.connectionReq.some(element=>element.userId==singleUserData._id) && !accept && <span className='flex '> <span className='text-sm md:mr-2 cursor-pointer active:scale-110 active:bg-ccOrange rounded-full px-1' onClick={handleDeclineReq}> Decline </span>  <span onClick={ !accept && handleAcceptReq} > <CButton text={ accept ? "accepted ":"Accept"}/></span></span>}
{  userData.connectionReqSend.some(element=>element.userId==singleUserData._id) && <span><CButton text={'Request Sen'}/></span>}
{ ( ! userData.connections.some(element=>element.userId==singleUserData._id) && ! userData.connectionReq.some(element=>element.userId==singleUserData._id) && ! userData.connectionReqSend.some(element=>element.userId==singleUserData._id)) && (!reqSend? <span onClick={handleReq}><CButton text={'Connect'}/></span>:<span><CButton text={'Request Send '}/></span>)}
              </div>

        </div>
  )
}

export default SingleUser