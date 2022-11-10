// import React from 'react'
// import CloseButton from '../../CLoseButton/CloseButton'
// import UserBasicDetailsModal from './UserBasicDetailsModal/UserBasicDetailsModal'

// function UserProfileEditModal(props) {
//   return (    <div className='fixed'>

//     <div className='ModalTest absolute flex justify-center items-center h-full w-screen z-30  border  '>

//     <div className='md:w-1/2 w-full m-5 md:m-0 bg bg-white h-auto rounded-lg shadow-lg grid justify-items-center fixed' >

//         <div className='w-full  flex justify-between border-b pb-3'>
//             <h1 className=' text-lg mt-5 mx-5 font-bold'>{props.heading}</h1><br/>
//             <div className='float-right w-fit h-fit'
//            >
//                 <CloseButton/>
//                 <br/>
//             </div>
//         </div>
// <UserBasicDetailsModal/>


       

//     </div>
// </div>
// </div>

//   )
// }

// export default UserProfileEditModal


import React from "react";
import CloseButton from "../../CLoseButton/CloseButton";
import UserBasicDetailsModal from "./UserBasicDetailsModal/UserBasicDetailsModal";
// import './UserProfileEditModal.css';

export default function UserProfileEditModal(props) {

  return (
    <>
    
  
        <>
          <div
            className=" ModalTest justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-full my-6 mx-auto md:w-1/2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-between items-center p-5 border-b border-zinc-400 rounded-t">
                  <h3 className="text-xl font-semibold ">
                   {props.heading}
                  </h3>
                  <div className=' w-fit h-fit'>
                 <CloseButton/>
                
             </div>
               
                </div>


                {/*body starts*/}
                <UserBasicDetailsModal/>
                   {/*body ends */}
               
              </div>
            </div>
          </div>
          
        </>
    
    </>
  );
}