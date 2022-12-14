import React from 'react'
import baseURL from '../../../../Constants/Constants';
import UserRoundDp from '../../../PostBox/UserRoundDp.js/UserRoundDp'

function TableRow({tableRowData}) {
  console.log(tableRowData,"element at table row ");
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex space-x-2" >
      <div className='w-12 h-12'>
      <UserRoundDp image={`${baseURL}/images/dp/${tableRowData.dp}`}/>
      </div>
      <div>
        <h2>{tableRowData.userName}</h2>
        <h2 className='text-sm italic font-light'>{tableRowData.userName}</h2>
      </div>

    </th>
    <td class="py-4 px-6">
    {tableRowData.email} 
    </td>
    <td class="py-4 px-6">
    {tableRowData.timeStamp} 
    </td>
    <td class="py-4 px-6">
        200
    </td>
    <td class="py-4 px-6">
        posts
    </td>
    <td class="py-4 px-6">
        jobPost
    </td>

    <td class="py-4 px-6">
  status
    </td>
 
    <td class="py-4 px-6 ">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
    </td>
</tr>
  )
}

export default TableRow