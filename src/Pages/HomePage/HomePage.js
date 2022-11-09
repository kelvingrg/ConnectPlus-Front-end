import React from 'react'
import CasualPostModal from '../../Components/Modal/CasualPostModal/CasualPostModal'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import PostBox from '../../Components/PostBox/PostBox'
import './HomePage.css'
import {useSelector} from 'react-redux'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import Feeds from '../../Components/Feeds/Feeds'

function HomePage() {
    const {postModal} = useSelector((state) => state ?. modal)
    return (<>

        <div className='parent bg-ccLight h-fit'>
            <HomeNavbar/>
            <div className='flex pt-20 justify-around  '> {/* left box start  */}
                <div className=' w-1/5 h-1/ hidden md:block '>
                    <div className='w-1/5 fixed '>
                        <ProfileBox/>
                    </div>
                </div>
                {/* left box end  */}

                {/* center box start */}
                <div className='justify-self-center items-center w-full md:w-[50%] h-auto block '>
                    <PostBox/>
                    <Feeds/>
                    <Feeds/>
                    <Feeds/>
                    <Feeds/>
                    <Feeds/>
                </div>
                {/* center box end */}

                {/* right box start */}
                <div className=' w-1/5 h-1/2  hidden md:block '>
                    <div className='w-1/5 fixed border border-ccBlack'>
                        right box
                    </div>
                </div>
                {/* right box end */} </div>
        </div>
        {
        postModal && <CasualPostModal/>
    } </>)
}

export default HomePage
