import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { TfiLocationPin } from "react-icons/tfi";
  import { AiFillCaretRight } from "react-icons/ai";

function JobCards() {
  return (
    <Card className="w-80 h-80 rounded-lg shadow-lg border mb-3">
    
      <div className='flex p-3 pt-4'>
      <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="img-blur-shadow"
          className="w-16 h-16"
        />
        <div className='pl-2'>
<p className='bold text-black font-bold text-lg capitalize'>desigantion looking   </p>
<p className='bold text-black  font-semibold capitalize'> company name </p>
        </div>
        </div> 

      
   <div className='px-5 h-72 text-sm'>
   <p className='bold text-black  font-semibold capitalize'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio assumenda quam officiis repellat ipsa, aperiam aspernatur cupiditate rerum nobis itaque, dignissimos quisquam commodi </p>
<ul>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>wfh</li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>good package </li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/>wfh</li>
    <li className='flex items-center gap-2 capitalize'><AiFillCaretRight/></li>
    


</ul>

   </div>
     
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">date </Typography>
        <Typography variant="small" color="gray" className="flex items-center gap-1">
        <TfiLocationPin/> 
         location 
        </Typography>
      </CardFooter>
    </Card>
  )
}

export default JobCards