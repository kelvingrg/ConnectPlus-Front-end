import Connect_plus from  '../../Assets/Connect_plus.png'
import React,{useState} from 'react';
 import  background from'../../Assets/landingPageImage.png'
import { useDispatch } from 'react-redux';
import { AiOutlineHome,AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";





export default function HomeNavbar() {

  
    const [navbar, setNavbar] = useState(false); 
    const dispatch =useDispatch();
    
           return(
        

              <nav className="w-full bg-ccBlack z-30 fixed">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-3 md:block">
                            <a href="javascript:void(0)">
                                <img src={Connect_plus} alt="" className='' />
                            </a>
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
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center text-blue-800">
                                <li className="text-white hover:bg-ccOrange hover:text-black px-2  rounded-lg flex flex-col items-center justify-center text-sm hover:scale-110">
                                <AiOutlineHome size={20} />
                                  
                                </li>
                                <li className="text-white hover:bg-ccOrange hover:text-black px-2  rounded-lg flex flex-col items-center justify-center text-sm hover:scale-110">
                               
               <AiOutlineUsergroupAdd size={20}/>
                                </li>
                                <li className="text-white hover:bg-ccOrange hover:text-black px-2  rounded-lg flex flex-col items-center justify-center text-sm hover:scale-110">
                               
                                <FontAwesomeIcon icon="fa-light fa-briefcase" />
                                                </li>
                               
                              
                            </ul>
                                     </div>
                    </div>
                </div>
            </nav>
    
          
          
            
        );
    }
