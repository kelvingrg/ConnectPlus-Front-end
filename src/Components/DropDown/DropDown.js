import React from "react";
import Popper from "popper.js";
import { CiPower } from "react-icons/ci"
import { useNavigate } from "react-router-dom";
import { AiOutlineForm ,AiOutlineEdit} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";


 const DropDown = ({ children ,account,jobPost,OwnJobPost}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const navigate =useNavigate()
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="">
          <div className="relative inline-flex align-middle w-full">
            <button
               
              style={{ transition: "all .15s ease" }}
              type="button"
              
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}

           
            >
         {children}
            </button>
           
           { account && <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
            
                "text-base z-50  float-right  list-none text-left rounded-lg shadow-lg mt-3 border border-zinc-400  "
              }
              style={{ minWidth: "8rem" }}
              onMouseLeave={closeDropdownPopover}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b  " 
                  
                }
                onClick={e => e.preventDefault()}
              >
          My Account 
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" 
                  
                }
                onClick={e =>{
                   e.preventDefault()
                    localStorage.clear()
                navigate('/')}
                }
              >
        <CiPower size={17} /> 
        Logout
              </a>
              
            </div>}
            { jobPost && <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
            
                "text-base z-50   list-none text-left rounded-lg shadow-lg mt-3 border border-zinc-400 "
              }
              style={{ minWidth: "8rem" }}
              onMouseLeave={closeDropdownPopover}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b  " 
                  
                }
                onClick={e =>{
                  e.preventDefault()
                  navigate('/job')
                 }}
              >
         View Jobs
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" 
                  
                }
                onClick={e =>{
                   e.preventDefault()
                   e.stopPropagation();
                   navigate('/jobPosts')
                  }}
              >
      <AiOutlineForm size={17}/> Post a Job
              </a>
              
            </div>}


            { OwnJobPost && <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
            
                "text-base z-50   list-none text-left rounded-lg shadow-lg mt-3 border border-zinc-400 "
              }
              style={{ minWidth: "8rem" }}
              onMouseLeave={closeDropdownPopover}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" 
                  
                }
                // onClick={e =>{
                //   e.preventDefault()
                //   navigate('/job')
                //  }}
              >
       <AiOutlineEdit size={17}/>  Edit post
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" 
                  
                }
                onClick={e =>{
                   e.preventDefault()
                   e.stopPropagation();
                   navigate('/jobPosts')
                  }}
              >
       <HiOutlineTrash size={17}/> Deleteb
              </a>
              
            </div>}











          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown

// export default function DropdownRender() {
//   return (
//     <>
//       <Dropdown color="orange" />
//     </>
//   );
// }
