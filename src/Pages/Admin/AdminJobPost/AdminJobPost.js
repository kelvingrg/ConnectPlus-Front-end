import React from 'react'
import JobPostList from '../../../Components/Admin/JobPostList/JobPostList';
import SideBar from '../../../Components/Admin/SideBar/SideBar';
import UsersLlist from '../../../Components/Admin/UsersLlist/UsersLlist';

function AdminJobPost() {

    return (
        <div className="flex">
            <div className="hidden md:flex flex-col h-screen shadow w-72 static  ">
                <SideBar/>
                
            </div>

            <div className="container h-screen w-full overflow-y-scroll overflow-x-hidden">
                <div className=" h-full">
            <JobPostList/>

                </div>
            </div>
        </div>
    );
  
}

export default AdminJobPost