import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../Button/Button'
import { HiXMark } from "react-icons/hi2";
import { setsignupModal } from '../../../App/ReduxHandlers/ModalSlice';
import axios from '../../../Config/AxiosInstance'
import './SignUpModal.css'

function SignUpModal() {
    const dispatch=useDispatch()

    // states for local componentt usage start
    const [emailexist, setEmailErr]=useState(false)
    const [mobexist,setMobErr]=useState(false)
    const [invalidEntry,setInavlidEntry]=useState(false)
    const [passMisMatch,setpassMisMatch]=useState(false)
    const [signupData,setSignupData]=useState({
        userName:'',
        email:'',
        mobileNummber:'',
        password:'',
        repeatPassword:''
    });

    
    // states for local componentt usage endf 

    const handleFormImput=(e)=>{
        setSignupData({...signupData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(vallidateEmail() && vallidateNumber() && vallidateName() && validatePassword()){
        axios(
          {
            method:'post',
            url:'/signup',
            data:signupData
        }).then((response)=>{})
    }
    else{
  console.log(validatePassword())
  console.log(passMisMatch,"passMisMatch");
  setInavlidEntry(true)
  setTimeout(()=>{setInavlidEntry(false)},6000)
    }
  }


    // valiadtion functions start

    const vallidateName=()=>{
      var regx=/^[a-zA-Z ]+$/;
      if(regx.test(signupData.userName))
      return(true)
    else
    return false
   }
   const vallidateNumber=()=>{
      var regx=/^([0-9]{10})+$/;
      if(regx.test(signupData.mobileNummber))
      return(true)
      else
      return false
   }
   const vallidateEmail=()=>{
      var regx=/^([a-zA-Z0-9\.-_ ]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,20})(.[a-zA-Z]{2,5})$/;
       if(regx.test(signupData.email))
       return true
       else 
       return false
   }
   const validatePassword=()=>{
    var regx=/^([0-9a-zA-Z\.<>,!@#$%&*]{6,20})+$/
    if(regx.test(signupData.password))
    { if(signupData.password===signupData.repeatPassword)
     return true
     else{
      setpassMisMatch(true)
      setTimeout(()=>{setpassMisMatch(false)},5000)
     }

    }else{
      return false
    }


     // imput validtion functions ends 


   }
    return (
      <div className='ModalTest absolute flex justify-center items-center h-screen w-screen z-30 overflow-visible border' 
      >
  
        <div className='md:w-1/4 w-full m-5 md:m-0 bg bg-white h-auto rounded-lg shadow-lg ' onClick={(e)=>{ e.stopPropagation()}}>
          <HiXMark className='float-right mt-3 mr-3 hover:text-ccOrange hover:stroke-2 hover:scale-150'
           onClick={(e)=>{
             e.stopPropagation()
            return dispatch(setsignupModal(false))
             }}/><br />
        <h1 className='text-center text-lg mt-5 font-bold'>Sign Up..</h1><br />
        <form className=' w-[90%] m-5  ' onClick={handleSubmit}>
        <label htmlFor="username" className=' '>Full Name : </label><br />
        <input type="text" 
        name='userName'
         className='border border-black w-full my-3 h-10 rounded-lg'
          placeholder='Enter your full name ..'
           onChange={handleFormImput}
           value={signupData.userName}
           />
        <label htmlFor="email" className=' '> email: </label><br />
        <input type="text"
          name='email'
           className='border  border-black w-full my-3 h-10 rounded-lg' 
           placeholder='Enter your Eamil ..'
           value={signupData.email} 
           onChange={handleFormImput}
          />
        <label htmlFor="username" className=' '>Mobile Number : </label><br />
        <input type="text"
         name='mobileNummber' 
         className='border border-black w-full my-3 h-10 rounded-lg' 
         placeholder='Enter Your Mobile Number ' 
         onChange={handleFormImput}
         value={signupData.mobileNummber}
         />
        <label htmlFor="username" className=' '>Password : </label><br />
        <input type="text"
         name='password' className='border 
          border-black w-full my-3 h-10 rounded-lg'
           placeholder='Enter your Password ..'
           onChange={handleFormImput}
           value={signupData.password}
           /> <br />
        <input type="text"
         name='repeatPassword'
          className='border  border-black w-full my-3 h-10 rounded-lg'
           placeholder='Repeat your Password ..' 
           onChange={handleFormImput}
           value={signupData.repeatPassword}
           /> <br />
    {passMisMatch &&   <label htmlFor="username" className='text-red-700 font-normal '>password mismatch </label>}
    { invalidEntry &&<label htmlFor="username" className='text-red-700 font-normal '>Invalid entries check your inputs </label> }
        <div className='w-full flex  justify-center items-center mt-5 '>
   
  <Button text={'Signup'}   />
        </div >
      
  
        </form>
        </div>
      </div>
    )
  }
export default SignUpModal