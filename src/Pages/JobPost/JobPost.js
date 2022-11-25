import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import AddJobClickBox from '../../Components/AddJobClickBox/AddJobClickBox'
import OwnJobPost from '../../Components/OwnJobPost/OwnJobPost'



function Job() {
  



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
                <div className=' w-full  h-auto bg-white border rounded-lg shadow-lg border-zinc-400 md:w-[50%] md:ml-10 p-3 min-h-screen '>
       
               <AddJobClickBox/>
              <OwnJobPost/>     
                </div>

                {/* center box end */}

                 {/* right box start */}
                 <div className=' w-1/5 h-1/2 ml-6 hidden md:block '>
                    <div className='w-1/5 fixed border border-ccBlack'>
                        right box
                    </div>
                </div>
                {/* right box end */}
             </div>
        </div>
 </>)
}

export default Job

