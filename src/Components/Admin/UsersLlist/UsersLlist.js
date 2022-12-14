import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TableHeading from '../TableComponents/TableHeading.js/TableHeading';
import TableRow from '../TableComponents/TableRow/TableRow';

function UsersLlist() {
  const [userList,setUserList]=useState([]);
const navigate=useNavigate()
const userHeading=[
 'User',
 'Email',
 'Date Of Join',
 "Connections",
 'posts',
 'jobPosts',
 'status',
 'action',
]

  useEffect(()=>{
axios.get('/admin/getUsersData').then(response=>{
  console.log(response,"response at admin side user data ");
  if(response?.data?.dataFetched){
    setUserList(response?.data?.response)
  }
  if(response?.data?.loadError){
    navigate('/page404')
  }

})
.catch((error)=>{
  localStorage.clear()
          navigate('/')
})

  },[])
  console.log(userList,"userlist ****")
  return (
  
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 capitalize">
           available users
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">all users took member ship </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>

    {userHeading.map((element)=> <TableHeading heading={element}/>)}
    </tr>
</thead>
      
          <tbody>
   { userList?.length>0  &&   userList.map((element)=> <TableRow tableRowData={element} />)  }
         </tbody>
    </table>
</div>

  )
}

export default UsersLlist