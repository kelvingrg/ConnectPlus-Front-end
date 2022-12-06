import Connect_plus from  '../../Assets/Connect_plus.png'
import React,{useState} from 'react';

import { useDispatch } from 'react-redux';
import { AiOutlineHome,AiOutlineUsergroupAdd,AiOutlineMessage } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { TfiBell } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import DropDown from '../DropDown/DropDown';
import { Link } from 'react-router-dom';






export default function HomeNavbar() {
    

  
    const [navbar, setNavbar] = useState(false); 
    const dispatch =useDispatch();
    
           return(
        

              <nav className="w-full bg-ccBlack z-30 fixed">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-3 ">
                            <a href="javascript:void(0)">
                                <img src={Connect_plus} alt="" className='' />
                            </a>
<div className='flex items-center justify-center ' ><input type="text" className='bg-white border rounded-md md:ml-20 pl-2' placeholder='Search..' /><div className={`text-white pl-2 hover:scale-110 hover:text-ccOrange bold `}><CiSearch size={20}/></div> </div>

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`} >
                            <ul className="items-center justify-center space-y-8 lg:space-x-3 md:space-x-2 md:flex  md:space-y-0 text-center text-blue-800">
                                <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange md:px-2   flex  md:flex-col items-center justify-center  text-xs hover:scale-110">
                          <Link to='/home'>   <div className='hidden  md:flex md:flex-col items-center justify-center '>   <AiOutlineHome size={17} /></div>Home</Link>
                                  
                                </li>
                                <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange px-2   flex  md:flex-col items-center justify-center text-xs hover:scale-110">
                               
                                <Link to='/connectionDetails'>   <div className='hidden  md:flex md:flex-col items-center justify-center '> <AiOutlineUsergroupAdd size={17}/></div> Connections</Link>
                                </li>
                                <DropDown jobPost={true}>
                                   <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange px-2   flex  md:flex-col items-center justify-center text-xs hover:scale-110">
                               
                                <div className='hidden md:contents'> <BsBriefcase size={17}/> </div> Jobs
                                                </li></DropDown>
   
                                                <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange px-2   flex  md:flex-col items-center justify-center text-xs hover:scale-110">
                                                
                                                
                                                <Link to='/notification'>   <div className='hidden  md:flex md:flex-col items-center justify-center '> <TfiBell size={17}/></div>Notifications</Link>
                                                     </li>
                                                     <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange px-2   flex  md:flex-col items-center justify-center text-xs hover:scale-110">
                               
                                                     <Link to='/newchat'>   <div className='hidden  md:flex md:flex-col items-center justify-center '> <AiOutlineMessage size={17}/></div>Messages</Link>
                                                
                                                     </li>
                                                    
                                                 
                                              
                                                     <li className="text-white hover:text-ccOrange  rounded-none hover:border-b-2 hover:border-b-ccOrange px-2   flex  md:flex-col items-center justify-center text-xs hover:scale-110">
                                                     <DropDown account={true}>
                                                     <div className='hidden md:flex  md:flex-col items-center justify-center'> <FaRegUserCircle size={17}/></div>Account
                                                     </DropDown>
                                                     </li>
                                                    
      

                               
                              
                            </ul>
                                     </div>
                    </div>
                </div>
            </nav>
    
          
          
            
        );
    }
