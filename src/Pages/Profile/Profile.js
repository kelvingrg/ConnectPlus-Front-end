import React from 'react'
import ConnectedUsers from '../../Components/ConnectedUsers/ConnectedUsers'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import OwnCasualPosts from '../../Components/OwnCasualPosts/OwnCasualPosts'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import ProfileComponent from '../../Components/ProfileComponent/ProfileComponent'


function Profile() {
  return (

<>
<div className='parent bg-ccLight h-fit'>
<HomeNavbar/>
<div className='flex pt-20  px-10 justify-around  '> {/* left box start  */}
    <div className=' w-1/5 h-auto hidden md:block '>
        <div className='w-1/5 fixed '>
            <ProfileBox/>
        </div>
    </div>
    {/* left box end  */}

    {/* center box start */}
    <div className='justify-self-center items-center w-full md:w-[45%] h-auto block '>
    <ProfileComponent/>
    <OwnCasualPosts/>

    </div>
    {/* center box end */}

    {/* right box start */}
    <div className=' w-1/5   hidden md:block '>
        <div className='w-1/5 h-[85%] fixed border border-zinc-400 shadow-lg rounded-lg bg-white px-2'>
     <ConnectedUsers/>
        </div>
    </div>
    {/* right box end */} </div>
</div>
  
  </>
  )
}

export default Profile