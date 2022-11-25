import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import PostBox from '../../Components/PostBox/PostBox'

import {useSelector} from 'react-redux'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import Feeds from '../../Components/Feeds/Feeds'
import axios from '../../Config/Axios'
import { useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { CButton } from '../../Components/Button/CButton'


function Job() {
    const {userData}=useSelector(state=>state?.login)
    const {postModal} = useSelector((state) => state ?. modal)
    const [postData,setPostData]=useState([])
  const navigate=useNavigate()
const [open, setOpen]=useState() 
const [companyLogo ,setCompanyLogo]=useState('')
let [formData,setformData]=useState({
    companyName:"",
    designation:"",
    workLocation:"",
    workType:"",
    workMode:"",
    minSalary:"",
    maxSalary:"",
    overView:"",
    jd:"",
    authorisation:"",
})

const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})

}
const hnadleMediaFileInput =(e)=>{
    console.log(e.target.files[0]);
 setCompanyLogo({file: e.target.files[0]})
  
}
const handleSubmit=()=>{

}

  function Icon({  open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
        open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
       // viewBox="0 0 24 24"
       // stroke="currentColor"
       // strokeWidth={2}
      >
       // <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const handleOpen=(boolean)=>{
    setOpen(boolean)
  }


  const t=[1]
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
       
                    {/*ppost job section start  */}
 <div className='py-2'>
<Accordion open={open} 
icon={<Icon  open={open} />}

>
   
        <AccordionHeader onClick={() => handleOpen(!open)}>
     <PostBox jobPost={true}/>
        </AccordionHeader>
        <AccordionBody>
       <div className='w-full overflow-y-visible mt- '> 
       <label htmlFor="" className=''>Company Name </label>
    <input type="text"
    className='border border-zinc-400 w-full rounded-lg pl-5 py-2 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value=  {formData.companyName}
    name="companyName"
    id=""
    placeholder='companyName'
    onChange={handleChange}
    />
      <label htmlFor="" className=''>Designation you are looking for : </label>
    <input type="text"
    className='border border-zinc-400 w-full rounded-lg pl-5 py-2  capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value=  {formData.designation}
    id=""
    name="designation"
    placeholder='designation'
    onChange={handleChange}
    />

    <div className=' flex-1 flex space-x-2 w-full'>
<div className='w-1/2'>
<label htmlFor="" className=''>   Work Location </label>
      <input type="text"
    className='border border-zinc-400 w-full rounded-lg pl-5 py-2  capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value=  {formData.workLocation}
   // id={index+1}
    name="workLocation"
    placeholder='workLocation'
    onChange={handleChange}
    />

</div>
<div className='w-1/2'>

<label htmlFor="" className=''> Upload Company Logo</label>
      <input type="file"
    className='border border-zinc-400 w-full rounded-lg pl-5 py-2  capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
  //  value=  {elements.workLocation}
   // id={index+1}
    name="logo"
    placeholder='workLocation'
    accept='image/*'
    onChange={hnadleMediaFileInput}
    />
</div>

    </div>

    <div className=' flex-1 flex space-x-2 w-full'>
<div className='w-1/2'>
<label htmlFor="" className=''>   Work Type </label>
<select 
    className='border border-zinc-400 w-full rounded-lg pl-5  py-2 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value={formData.workType}
   // id={index+1}
    name="workType"
   onChange={handleChange}
    >
        <option value="Work from Home">Work from Home</option>
        <option value="Office">Office</option>
        <option value="Hybrid">Hybrid</option>
     
    </select>
</div>

<div className='w-1/2'>
<label htmlFor="" className=''>   Mode of Operation  </label>
<select
    className='border border-zinc-400 w-full rounded-lg pl-5  py-2 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value={formData.workMode}
   // id={index+1}
    name="workMode"
    onChange={handleChange}
    >
          <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time </option>
        <option value="Contract">Contract</option>
        <option value="Temporary">Temporary</option>
        <option value="Permanent">Permanent</option>
    </select>
</div>

    </div>

    <div className=' flex-1 flex space-x-2 w-full'>
<div className='w-1/2'>
<label htmlFor="" className=''> Minimum Salary Package in LPA</label>
<input type="number"
    className='border border-zinc-400 w-full rounded-lg pl-5  py-2 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value={formData.minSalary}
   // id={index+1}
    name="minSalary"
    onChange={handleChange}
    />
     
     

</div>

<div className='w-1/2'>
<label htmlFor="" className=''>  Maximum Salary Package in LPA </label>
<input type="number"
    className='border border-zinc-400 w-full rounded-lg pl-5  py-2 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin'
    value={formData.maxSalary}
   // id={index+1}
    name="maxSalary"
    onChange={handleChange}
 />
</div>

    </div>

    <label htmlFor="" className=''>  OverView bout the job   </label>
    <textarea type="text"
                        className=
                            ' border border-zinc-400 w-full  rounded-lg px-6 py-2  placeholder-shown:italic  focus:border-zinc-600 focus:outline-none h-24 mt-3 font-semibold placeholder:font-thin '                        
                        placeholder='OverView about the job  (write in 130 characters)'
                        value={formData.overView}
                        name="overView"
                        maxLength={130}
                        //id={index+1}
                        onChange={handleChange}
                        />
    <label htmlFor="" className=''>  Job Description  </label>
    <textarea type="text"
                        className=
                            ' border border-zinc-400 w-full  rounded-lg px-6 py-2  placeholder-shown:italic  focus:border-zinc-600 focus:outline-none h-56 max-h-fit mt-3 font-semibold placeholder:font-thin'                        
                        placeholder='Job Description'
                       value={formData.jd}
                        name="jd"
                        //id={index+1}
                        onChange={handleChange}
                        />
                       <input type="checkbox"
    className=' border-zinc-400 mt-3 capitalize focus:border-zinc-600 focus:outline-none mt-1 mb-3 font-semibold placeholder:font-thin float-left'
    value={formData.authorisation}
   // id={index+1}
    name="authorisation"
   onChange={handleChange}
 />
  &nbsp; <label htmlFor="" className=''>  Apply for Authorisation   </label>
    </div>
   <div className=' w-full flex justify-center'><span onClick={handleSubmit}><CButton text={"Submit"}/></span> </div> 
        </AccordionBody>
      </Accordion>
      </div>
                     {/*ppost job section end   */}


                    
                </div>
             </div>
        </div>
 </>)
}

export default Job

