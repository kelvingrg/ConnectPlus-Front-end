import axios from '../../../Config/Axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserProfileModalClose } from '../../../App/ReduxHandlers/ModalSlice'
import CloseButton from '../../CLoseButton/CloseButton';
import { CButton } from '../../Button/CButton';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import SingleUser from './SingleUser';
import SingleJob from './SingleJob';


function SearchModal() {
    const dispatch=useDispatch();
    const [openTab, setOpenTab] = React.useState('people');
    const [searchInput,setSearchInput]=useState('')
    const [userSearchOutPut,setUserSearchOutPut]=useState([])
    const [jobSearchOutPut,setJobSearchOutPut]=useState([])
    const {userData}=useSelector(state=>state.login)
    const navigate=useNavigate();
    const fetchData=()=>{

if (searchInput!="") {
    axios.get(`/getSearchResult?searchInput=${searchInput}&searchFor=${openTab}&userId=${userData._id}`)
    .then((response)=>{
      console.log(response?.data?.data);

      if (response ?. data ?. loadError) {
        navigate('/page404')
        }
        if (response ?. data ?. dataFetched) {
        
          
       (openTab === "people") ? setUserSearchOutPut(response?.data?.data):setJobSearchOutPut(response?.data?.data)
   
       // setJobSearchOutPut(response?.data?.data)

         }
        
        }) .catch((error)=>{

          // localStorage.clear()
          //         navigate('/')
       })
  
}

      
    }
    
  return (
    
    <>
    <div
      className=" ModalTest  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  "
    >
      <div className="relative w-full my-6 mx-auto md:w-1/2">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  h-full ">
          {/*header*/}
          <div className="flex  justify-between p-5  rounded-t w-full">
          <div class=" pt-0 w-[80%] flex items-center ">
                 <input type="text" placeholder="Search" className="px-3 py-3 w-full bg-slate-50 focus:bg-slate-200 placeholder-slate-500 text-black rounded-lg  text-sm border-b  outline-none focus:border-b focus:border-black " 
                 onChange={ e =>{
                 
                    setSearchInput(e.target.value);
                   
                }} 
                value={searchInput}/>
                <span className='ml-4' onClick={fetchData}> <CButton text={'Search'}><BsSearch size={17}/></CButton></span>
        </div>
        <span className=' w-fit h-fit'
             onClick={()=>dispatch(setUserProfileModalClose())}
            >
           <CloseButton/>
      </span>
         
          </div>
          <>
      <div className="flex flex-wrap px-5 ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap  pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === "people"
                    ? "text-ccOrange bg-ccBlack"
                    : "text-black  bg-white" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("people");
                  fetchData()
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               People
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 'jobs'
                    ? "text-ccOrange bg-ccBlack"
                    : "text-black  bg-white" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('jobs');
                  fetchData()
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                 Jobs
              </a>
            </li>
           
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded overflow-y-scroll scrollbar-hidden ">
            <div className=" flex-auto">
              <div className="tab-content tab-space ">
              { (openTab === 'people') &&  <div  id="link1">
{
         userSearchOutPut?.map((element)=> 
         <SingleUser singleUserData={element}/>
                  )}
                </div>}

               {(openTab =='jobs') && <div  id="link2">
               
              {
                jobSearchOutPut?.map((element)=> 
          <SingleJob singleJobData={element}/>
               )}
      </div>
                  }

               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

         
        </div>
      </div>
    </div>
    
 

</>
  )
}

export default SearchModal



