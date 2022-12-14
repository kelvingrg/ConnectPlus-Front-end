import axios from '../../Config/Axios'
import React from 'react'
import { useState } from 'react'
import  background from'../../Assets/landingPageImage.jpg'
import { CButton } from '../Button/CButton'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [invalidCred,setInavlidCred]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email!=null && email!="" && password!=null && password!=""){
          
            console.log(password, email,"admin login ");
            axios.post('/admin/login',{email:email,password:password}).then((response)=>{
             if(response?.data?.login){
                localStorage.setItem("adminToken",response?.data?.adminToken)
                navigate('/adminHome')

             }
             else{
              setInavlidCred(true)
             }

                
       console.log(response,"response after login dine ");
            })
        }
    }

  return (
    <div className='bg-cover min-h-screen min-w-full flex justify-center items-center '  style={{ backgroundImage: `url(${background})`  }} >



<div className='md:w-1/4 w-full m-5 md:m-0 bg bg-white h-auto rounded-lg shadow-lg '>
<h1 className='text-center text-lg mt-5 font-bold'> Admin Login</h1><br />
<div className=' w-[90%] m-5  '>
<form onSubmit={handleSubmit}
>
<label htmlFor="username" className=' '>User Name : </label><br />
<input type="text" className='border border-black w-full my-3 h-10 rounded-lg pl-4' name="email" placeholder='Enter your Eamil ..'
 value={email} onChange={(e)=>setEmail(e.target.value)} 
 />
<label htmlFor="username" className=' '>PassWord : </label><br />
<input type="password" className='border  border-black w-full my-3 h-10 rounded-lg pl-4'  name="password" placeholder='Enter your Password ..'
 value={password} onChange={(e)=> setPassword(e.target.value)}
/>
{invalidCred &&<p className='text-red-600'> invalid credentials 
</p>}
<div className='w-full flex  justify-center items-center mt-5 '>

<CButton text={'Login'}/>
            

</div >
</form>

</div>
</div>
</div>
  
  )
}

export default AdminLogin