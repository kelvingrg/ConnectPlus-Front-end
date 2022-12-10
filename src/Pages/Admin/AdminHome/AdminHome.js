import React from "react";
import SideBar from "../../../Components/Admin/SideBar/SideBar";

export default function AdminHome() {
    return (
        <div className="flex">
            <div className="hidden md:flex flex-col h-screen shadow w-72  ">
                <SideBar/>
                
            </div>

            <div className="container min-h-screen w-full">
                <div className="bg-green-500 h-full">fdghbfdhfg</div>
            </div>
        </div>
    );
}