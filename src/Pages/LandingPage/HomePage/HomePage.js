import React from 'react'
import HomeNavbar from '../../../Components/Navbar/HomeNavbar'
import PostBox from '../../../Components/PostBox/PostBox'
import './HomePage.css'

function HomePage() {
  return (<> 

    <div className='parent bg-ccLight h-fit'>
<HomeNavbar/> 
<div className='flex pt-20 justify-around  '>
{/* left box start  */}
<div className=' w-1/5 h-1/2 bg-blue-700 hidden md:block ' >
<div className='w-1/5 fixed border border-ccBlack '>
left box 
</div>
</div>
{/* left box end  */}

{/* center box start */}
<div className='justify-self-center items-center w-full md:w-[50%] h-auto block '>
<PostBox/>
</div>
{/* center box end */}

{/* right box start */}
<div className=' w-1/5 h-1/2 bg-blue-700 hidden md:block ' >
<div className='w-1/5 fixed border border-ccBlack'>
right box 
</div>
</div>
{/* right box end */}
</div>
    </div>
  
    </>

  )
}

export default HomePage