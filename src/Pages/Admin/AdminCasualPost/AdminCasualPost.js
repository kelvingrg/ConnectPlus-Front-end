import React from 'react'
import CasualPostList from '../../../Components/Admin/CasualPostList/CasualPostList';
import SideBar from '../../../Components/Admin/SideBar/SideBar';
import UsersLlist from '../../../Components/Admin/UsersLlist/UsersLlist';

function AdminCasualPost() {
    return (
        <div className="flex">
            <div className="hidden md:flex flex-col h-screen shadow w-72 static  ">
                <SideBar/>
                
            </div>

            <div className="container h-screen w-full overflow-y-scroll overflow-x-hidden">
                <div className="bg-green-500 h-full">
                   <CasualPostList/>

                </div>
            </div>
        </div>
    );
}

export default AdminCasualPost