import React from "react";
import SideBar from "../../../Components/Admin/SideBar/SideBar";
import UsersLlist from "../../../Components/Admin/UsersLlist/UsersLlist";

export default function AdminHome() {
    return (
        <div className="flex">
            <div className="hidden md:flex flex-col h-screen shadow w-72 static  ">
                <SideBar/>
                
            </div>

            <div className="container h-screen w-full overflow-y-scroll overflow-x-hidden">
                <div className="bg-green-500 h-full">
                    <UsersLlist/>

                </div>
            </div>
        </div>
    );
}