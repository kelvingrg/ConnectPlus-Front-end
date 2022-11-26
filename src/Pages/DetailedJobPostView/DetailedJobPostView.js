import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import AddJobClickBox from '../../Components/AddJobClickBox/AddJobClickBox'
import OwnJobPost from '../../Components/OwnJobPost/OwnJobPost'

import axios from '../../Config/Axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { CButton } from '../../Components/Button/CButton'



function DetailedJobPostView() {
    const {singleJobPostData}=useSelector((state)=>state.tempData)
    const {userData}=useSelector(state=>state?.login)
  const navigate=useNavigate()
    const [viewFull,setViewFull]=useState(false)
    const [jobPostData, setJobPostData]=useState([])
    useEffect(()=>{
        axios.get(`/ownJobPostData?userId=${userData._id}`)
        .then((response)=>{
          console.log(response,"iresponse of own jiob post data ")
          if (response ?. data ?. loadError) {
              navigate('/page404')
          }
          if (response ?. data ?. dataFetched) {
              console.log(response,"iresponse of own jiob post data ")
         
              setJobPostData(response?.data?.data)
          }
        
         })
         .catch((error)=>{
           localStorage.clear()
                   navigate('/')
         })
        
            },[  singleJobPostData])


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
                <div className=' w-full  h-auto bg-white border rounded-lg shadow-lg border-zinc-400 md:w-[50%] md:ml-10 pt-7 min-h-screen px-5'>
       
                <div className='flex p-3 pt-4'>
      <img
          src="data:image/jpeg;base64,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"
        //{`jobPosts/CompanyLogo/${data.companyLogo}`}
          alt="img-blur-shadow"
          className="w-16 h-16"
        />
        <div className='pl-4'>
<p className='bold text-black font-bold text-lg capitalize'>fdbvdxfgbdfgb</p>
<p className='bold text-black  font-semibold capitalize'> dfgbdbfbfcgb </p>
        </div>
        <div className='flex justify-end grow'>
           <span className='pr-10' ><CButton text={"Apply"}/></span>
        </div> 
        </div> 
        <ul className=' mt-5 pl-3'>
    <li className='flex items-center gap-2 capitalize'>Annual package :</li>
    <li className='flex items-center gap-2 capitalize'>sample : </li>
    <li className='flex items-center gap-2 capitalize'>Job Type :</li>
    <li className='flex items-center gap-2 capitalize'>Job Mode :</li>
    </ul>
    <p className='bold text-black  font-semibold capitalize mt-8'> Job Over View  </p>
    <p className=' text-black  font-normal capitalize'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque molestias quibusdam alias voluptas sint ab minus vero eaque dolor. Iure, tempore facilis voluptas repudiandae pariatur illum hic qui alias? </p>
    <p className='bold text-black  font-semibold capitalize mt-8'> dfgbdbfbfcgb </p>
    <p className=' text-black  font-normal capitalize '> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sit animi odio harum esse veniam error nihil voluptate enim, dicta natus et magni vero nostrum rem ratione explicabo, modi placeat.
    Quidem, praesentium recusandae maxime nihil enim eos unde ipsam sunt eveniet quisquam saepe temporibus deserunt aut minima iste neque tenetur animi dolore? Veritatis adipisci quaerat, omnis quam animi minus deleniti?
    Fugiat quibusdam a libero asperiores suscipit odio ipsam quam! Iusto sapiente repellat commodi ullam corrupti praesentium ex repudiandae ducimus, earum temporibus unde asperiores quae ipsam, quam tempore, itaque esse. Repellat!
    Aliquid consectetur quaerat, praesentium beatae laboriosam sit dolore atque deserunt tempore ullam vitae vero voluptas. Amet aperiam eius unde deserunt voluptatum eos aut necessitatibus praesentium esse quas, dignissimos neque sunt?
    Soluta tenetur ad non cum nisi? Quas sed iusto suscipit. Nesciunt sed est eius accusantium aut doloribus ipsam dolorem repellat qui quia, quidem tempore soluta suscipit odit adipisci officia placeat.</p>

          
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

export default DetailedJobPostView

