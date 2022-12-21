import React, {useState} from 'react'
import baseURL from '../../../../../Constants/Constants';
import UserRoundDp from '../../../../PostBox/UserRoundDp.js/UserRoundDp'
import moment from 'moment'
import axios from '../../../../../Config/adminAxios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsThreeDotsVertical,BsTrash } from "react-icons/bs";
import { CgUnblock } from "react-icons/cg";
import { BiBlock } from "react-icons/bi";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

function TableRow({tableRowData,jobPostList,userList,setPostDeleted,postList}) {
    console.log(tableRowData,"table row dta taainside rowe complonenet ");
    const navigate = useNavigate()
    const [isBlocked, setIsBlocked] = useState(tableRowData.isBlock);
 

    const blockUser = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } (${
                tableRowData.userName
            }) will be blocked from further operations`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block User!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(true)
                axios.post('/admin/blockUser', {userId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }
                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })
            }
        })
    }


    const unBlockUser = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } (${
                tableRowData.userName
            }) will be unblocked `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,  unblock user!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(false)
                axios.post('/admin/unBlockUser', {userId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }

                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })

            }
        })
    }

    const blockJobPost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } will restricted from the platform `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block post!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(true)
                axios.post('/admin/blockJobPost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }
                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })
            }
        })
    }


    const unBlockJobPost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } 
             all the rstriction will be removed `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,  unblock user!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(false)
                axios.post('/admin/unBlockJobPost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }

                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })

            }
        })
    }
    const deleteJobPost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } will be permanently romoved `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block post!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(true)
                axios.post('/admin/deleteJobPost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }
                    if (response ?. data ?. update) {
                        setPostDeleted(response)
                    }

                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })
            }
        })
    }

    const blockPost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } will restricted from the platform `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block post!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(true)
                axios.post('/admin/blockPost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }
                }).catch((error) => {
                    localStorage.clear()
                    navigate('/admin')
                })
            }
        })
    }


    const unBlockPost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } 
             all the rstriction will be removed `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,  unblock user!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(false)
                axios.post('/admin/unBlockPost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }

                }).catch((error) => {
                    localStorage.clear()
                    navigate('/')
                })

            }
        })
    }
    const deletePost = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: `${
                tableRowData._id
            } will be permanently romoved `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block post!'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsBlocked(true)
                axios.post('/admin/deletePost', {postId: tableRowData._id}).then(response => {
                    if (response ?. data ?. loadError) {
                        navigate('/page404')
                    }
                    if (response ?. data ?. update) {
                        setPostDeleted(response)
                    }

                }).catch((error) => {
                    localStorage.clear()
                    navigate('/')
                })
            }
        })
    }


    return (
        <>
       { userList &&
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex space-x-2">
                <div className='w-12 h-12'>
                    <UserRoundDp image={
                        `${baseURL}/images/dp/${
                            tableRowData.dp
                        }`
                    }/>
                </div>
                <div>
                    <h2>{
                        tableRowData.userName
                    }</h2>
                    <h2 className='text-sm italic font-light'>
                        {
                        tableRowData._id
                    }</h2>
                </div>

            </th>
            <td class="py-4 px-6">
                {
                    tableRowData.email
                } </td>
            <td class="py-4 px-6">

                {
                    moment(tableRowData.timeStamp).format("DD/MM/YYYY h:mm a")
                } </td>
            <td class="py-4 px-6">
                {
                    tableRowData ?. connections ?. length
                } </td>


            <td class="py-4 px-6">
                {
                    isBlocked ? <button className='px-1 rounded-lg bg-red-600 bg-opacity-50 text-black '
                    onClick={unBlockUser}>Blocked</button> : <button className='px-1 rounded-lg bg-green-600 bg-opacity-50 text-black '
                    onClick={blockUser}>active</button>
                } </td>


        </tr>}
        { jobPostList &&
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex space-x-2">
                <div className='w-12 h-12'>
                    <UserRoundDp image={
                        `${baseURL}/images/dp/${
                            tableRowData?.userId?.dp
                        }`
                    }/>
                </div>
                <div>
                    <h2>{
                        tableRowData?.userId?.userName
                    }</h2>
                    <h2 className='text-sm italic font-light'>
                        {
                        tableRowData?.userId?._id
                    }</h2>
                </div>

            </th>
            <td class="py-4 px-6">
                {
                     tableRowData?.userId?.email
                } </td>
                 <td class="py-4 px-6">
                {
                    tableRowData ?.companyName
                } </td>
                 <td class="py-4 px-6">
                {
                    tableRowData ?. _id
                } </td>
            <td class="py-4 px-6">

                {
                    moment(tableRowData.timeStamp).format("DD/MM/YYYY h:mm a")
                } </td>
            <td class="py-4 px-6">
                {
                    tableRowData ?. appliedCandidates ?. length
                } </td>
            <td class="py-4 px-6">
                {
                    isBlocked ? <button className='px-1 rounded-lg bg-red-600 bg-opacity-50 text-black ' 
                    >Blocked</button> : <button className='px-1 rounded-lg bg-green-600 bg-opacity-50 text-black ' 
                    >active</button>
                } </td>


            <td class="py-4 px-6">
            <span className='float-right  ' > 
        <Menu  placement="left-start">
      <MenuHandler>
        <Button variant="text" className="active:bg-none border-0 p-0 m-0">  <BsThreeDotsVertical size={17} /> </Button>
      </MenuHandler>
      <MenuList className='p-0 m-0'>
{    isBlocked?  <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={unBlockJobPost}> <CgUnblock size={15}/>Unblock</MenuItem>:
        <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={blockJobPost}> <BiBlock size={15}/>Block</MenuItem>}
        <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={deleteJobPost}><BsTrash size={15}/> Delete</MenuItem>

      </MenuList>
    </Menu>
</span> 
              </td>


        </tr>}

        { postList &&
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex space-x-2">
                <div className='w-12 h-12'>
                    <UserRoundDp image={
                        `${baseURL}/images/dp/${
                            tableRowData?.postedBy?.dp
                        }`
                    }/>
                </div>
                <div>
                    <h2>{
                        tableRowData?.postedBy?.userName
                    }</h2>
                    <h2 className='text-sm italic font-light'>
                        {
                        tableRowData?.postedBy?._id
                    }</h2>
                </div>

            </th>
            <td class="py-4 px-6">
                {
                     tableRowData?.postedBy?.email
                } </td>
                 <td class="py-4 px-6">
                {
                    tableRowData ?. _id
                } </td>
                 <td class="py-4 px-6">
                {
                    moment(tableRowData.timeStamp).format("DD/MM/YYYY h:mm a")
                } </td>
            <td class="py-4 px-6">

                {
                      tableRowData ?. like?.length
                } </td>
            <td class="py-4 px-6">
                {
                     tableRowData ?. comment?.length
                } </td>
                <td class="py-4 px-6">
                {
                     tableRowData ?. reports?.length
                } </td>
            <td class="py-4 px-6">
                {
                    isBlocked ? <button className='px-1 rounded-lg bg-red-600 bg-opacity-50 text-black '
                    >Blocked</button> : <button className='px-1 rounded-lg bg-green-600 bg-opacity-50 text-black '
                    >active</button>
                } </td>


            <td class="py-4 px-6">
            <span className='float-right  ' > 
        <Menu  placement="left-start">
      <MenuHandler>
        <Button variant="text" className="active:bg-none border-0 p-0 m-0">  <BsThreeDotsVertical size={17} /> </Button>
      </MenuHandler>
      <MenuList className='p-0 m-0'>
{    isBlocked?  <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={unBlockPost}> <CgUnblock size={15}/>Unblock</MenuItem>:
        <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={blockPost}> <BiBlock size={15}/>Block</MenuItem>}
        <MenuItem className="text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-white text-black hover:text-ccOrange  hover:bg-ccBlack border-b flex items-center gap-2" onClick={deletePost}><BsTrash size={15}/> Delete</MenuItem>

      </MenuList>
    </Menu>
</span> 
              </td>


        </tr>}
                
                </>
    )
}

export default TableRow
