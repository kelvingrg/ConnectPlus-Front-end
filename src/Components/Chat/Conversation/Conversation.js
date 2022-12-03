

import axios from "../../../Config/Axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseURL from "../../../Constants/Constants";
// import { getUser } from "../../api/UserRequests";
const Conversation = ({ data, currentUser, online }) => {

  const [userData, setUserData] = useState(null) // to save whom to chat ryt nw 
  const dispatch = useDispatch()

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    const getUserData = async ()=> {
      try
      {
          const {data} =await axios.get(`/getUserData/${userId}`)
         setUserData(data)
         dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={`${baseURL}/images/dp/${userData?.dp}`}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.userName} </span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
