import React from 'react'

import UserRoundDp from '../../../PostBox/UserRoundDp.js/UserRoundDp'


function UserBasicDetailsModal() {
  return (


<>



<div className=" p-6 bg-green-400 ">
    <label htmlFor="">Full Name</label><br />
    <input type="text" className='border border-zinc-400 w-full rounded-lg ' placeholder="Enter Your full name"/>
    <input type="text" className='w-full' placeholder="Enter Your full name"/>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                    Save Changes
                  </button>
                </div>

        </>


    
  )
}

export default UserBasicDetailsModal

