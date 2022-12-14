import axios from '../../../Config/Axios'
import React, { useEffect, useState } from 'react'
import TableHeading from '../TableComponents/TableHeading.js/TableHeading'
import { useNavigate } from 'react-router-dom'
import TableRow from '../TableComponents/TableHeading.js/TableRow/TableRow'

function CasualPostList() {
    const [postList,setPostList]=useState([])
    const navigate=useNavigate();
    const [postDeleted,setPostDeleted]=useState(null)
    useEffect(()=>{

        axios.get('/admin/casualPostData')
        .then(response => {
            console.log(response, "response at admin side jobPostData data ");
            if (response ?. data ?. dataFetched) {
                setPostList(response ?. data ?. response)
            }
            if (response ?. data ?. loadError) {
                navigate('/page404')
            }

        }).catch((error) => {
            localStorage.clear()
            navigate('/')
        })
    },[postDeleted])
    
    const userHeading = [
        'PostedBy',
        'Email',
        'postId',
        'Date of Post',
        "likes",
        "comments",
        'reports',
        'status',
        ""

      
    ]

    return (

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 capitalize">
                 
                 Casual Posts
                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">all Casual posts are given below 
                    </p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr> {
                        userHeading.map((element) => <TableHeading heading={element}/>)
                    } </tr>
                </thead>

                <tbody>
                     { postList ?. length > 0 && postList ?. reverse().map((element) => <TableRow tableRowData={element} postList={true} setPostDeleted={setPostDeleted}/>) }
                 </tbody>
            </table>
        </div>

    )
}

export default CasualPostList
