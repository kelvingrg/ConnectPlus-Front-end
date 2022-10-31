import React from 'react'

export const LoginModal = () => {
  return (
    <>
          <div className="z-40  flex justify-center items-center overflow-x-hidden overflow-y-auto  inset-0  outline-none focus:outline-none shadow-2xl w-full">
      <div className="relative w-4/12 my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    
          <div className="relative p-6 flex-auto">
            <form className=" shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                First Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Last Name
              </label>
           <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                 {/* <label className="block text-black text-sm font-bold mb-1">
                Address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                City
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" /> */}
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
            //   onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            //   onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
