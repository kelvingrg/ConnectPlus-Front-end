import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {HiXMark} from "react-icons/hi2";
import {CButton} from '../../Button/CButton';
import {setPostModal} from '../../../App/ReduxHandlers/ModalSlice';
import {setVideoPost, setImagePost, setJobPost} from '../../../App/ReduxHandlers/PostTypeReducer';
import UserRoundDp from '../../PostBox/UserRoundDp.js/UserRoundDp'
import {FaRegImage} from "react-icons/fa";
import {BsCameraVideo} from "react-icons/bs";
import CPIcon from '../../Icon/CPIcon';
import {BsBriefcase} from "react-icons/bs";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CloseButton from '../../CLoseButton/CloseButton';
import "./CasualPostmodal.css"


function CasualPostModal() {
    const {videoPost, imagePost, jobPost} = useSelector((state) => state ?. postType)
    console.log(videoPost, "vidso");
    const dispatch = useDispatch()
    return (<div className='ModalTest absolute flex justify-center items-center h-screen w-screen z-30 overflow-visible border float'>

        <div className='md:w-1/2 w-full m-5 md:m-0 bg bg-white h-auto rounded-lg shadow-lg grid justify-items-center'
            onClick={
                (e) => {
                    e.stopPropagation()
                }
        }>

            <div className='w-full  flex justify-between border-b pb-3'>
                <h1 className=' text-lg mt-5 mx-5 font-bold'>Create Your Post</h1><br/>
                <div className='float-right w-fit h-fit pt-4 pr-3'
                    onClick={
                        () => dispatch(setPostModal(false))
                }>
                    <CloseButton/>
                    <br/>
                </div>
            </div>


            <div className=' w-[90%] mt-3'>
                <div className=''>
                    <div className='flex mb-3 '>
                        <div className=' w-12 h-12 rounded-full mt-1 '>
                            <UserRoundDp/>
                        </div>
                        <div className='flex-col'>

                            <h1 className='pl-2'>FullName
                            </h1>
                            <p className='ml-2 bg-gray-400 flex items-center justify-center rounded-full '>sample</p>

                        </div>

                    </div>
                    <textarea type="text-area"
                        className={
                            ` border border-zinc-400 w-full  rounded-lg px-6 py-2  placeholder-shown:italic placeholder:font-normal focus:border-zinc-600 focus:outline-none ${
                                (videoPost || imagePost) ? "h-auto" : "h-56 "
                            }`
                        }
                        placeholder='share your awesome experience...'/> {/* 
   {videoPost && <input type="file"   class="hidden"  />}
   {imagePost && <input type="image" className='bg-zinc-700 w-full'   />}
   {jobPost && <input type="file" className='bg-zinc-700 w-full'  class="hidden"  />} */}

                    {
                    (videoPost || imagePost) ? <div className="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span>
                                    or drag and drop</p>
                            </div>
                            <input id="dropzone-file" type="file" className='hidden'/>
                        </label>
                    </div> : null
                }


                    <div className='w-full  my-5  '>
                        <div className=' text-black font-thin  flex  space-x-4 '>

                            <CPIcon tippyPlacement="top" tippyContent="Upload video"
                                tooltip={true}>
                                <span onClick={
                                    () => dispatch(setVideoPost(true))
                                }>
                                    <BsCameraVideo size={20}/></span>
                            </CPIcon>

                            <CPIcon tippyPlacement="top" tippyContent="Upload Image">
                                <span onClick={
                                    () => dispatch(setImagePost(true))
                                }>
                                    <FaRegImage size={20}/></span>
                            </CPIcon>

                            <CPIcon tippyPlacement="top" tippyContent="Post Job">
                                <span onClick={
                                    () => dispatch(setJobPost(true))
                                }><BsBriefcase size={20}/></span>
                            </CPIcon>
                        </div>

                        <div className='flex  justify-end '>
                            <CButton text={'Post'}></CButton>
                        </div>


                    </div>


                </div>
            </div>
        </div>


    </div>)
}

export default CasualPostModal
