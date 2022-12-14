import axios from '../../Config/Axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Feeds from '../Feeds/Feeds'

function OwnCasualPosts() {
    const {userData} = useSelector((state) => state ?. login)
    const [postData,setPostData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`/getOwnCasualPostData?userId=${userData._id}`).then(response=>{
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
    postData.map((element)=><Feeds data={element}/>)
  )
}

export default OwnCasualPosts