import React from 'react'
import UserRoundDp from '../PostBox/UserRoundDp.js/UserRoundDp'
import FeedActionBar from './FeedActionBar/FeedActionBar'
import { AiOutlineLike ,AiOutlineComment} from "react-icons/ai";


function Feeds() {
  return (
    <div className='bg-white mt-3 border border-zinc-400 rounded-lg h-auto shadow-lg'>
        
        <div className='h-auto overflow-hidden'>
        
        <div className='flex border-b px-5 py-3 '>
                        <div className=' w-12 h-12 rounded-full mt-1 '>
                            <UserRoundDp/>
                        </div>
                        <div className='flex-col'>

                            <h1 className='pl-2'>FullName
                            </h1>
                            <p className='ml-2 font-thin'>flutter devoloper</p>

                        </div>

                    </div>

                    <div className='w-full h-24 px-3 font-light text-ellipsis'>
<p className=' text-ellipsis overflow-scroll'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum corporis repellat quas dolore possimus sequi veniam repellendus commodi esse assumenda distinctio animi, numquam laudantium ducimus similique ratione odit sapiente eum.


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.


</p>
     </div>
          </div>

          <img src="https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg"
           alt="" className='w-full h-fit mt-3' />
<div className='border-b px-4 flex justify-between'>
  <p className='font-light text-sm flex items-center'> <AiOutlineLike/> 700 Likes</p>
  <p className='font-light text-sm flex items-center'> <AiOutlineComment/> 300 comments</p>
</div>
  <FeedActionBar/>



          
        
        
        </div>
  )
}

export default Feeds