import React from 'react'
import AboutUser from './About/AboutUser'
import SkillSession from './SkillSession.js/SkillSession'
import Experience from './Experience/Experience'
import './ProfileComponent.css'
import UserDetails from './UserDetails/UserDetails'
import EducationSession from './EducationSession/EducationSession'
import UserBasicDetailsModal from '../Modal/UserProfileEditModal/UserBasicDetailsModal/UserBasicDetailsModal'
import UserProfileEditModal from '../Modal/UserProfileEditModal/UserProfileEditModal'
import { useSelector } from 'react-redux'


function ProfileComponent() {
  const{basicDetailsModal}=useSelector((state)=>state?.modal)
  return (
    <>    <div className=' parent pt-20 flex justify-center w-screen ' >
      <div className=' w-full md:w-[70%]  rounded-lg shadow-lg overflow-hidden   '>
 <UserDetails />
 <AboutUser/>
 <Experience/>
 <SkillSession/>
 <EducationSession/>

      </div>
   </div>
 { basicDetailsModal && <UserProfileEditModal heading={"Edit Your Profile"}/>}
   </>

  )
}

export default ProfileComponent