import React from "react";
// Imported Icons here
// Bell Icon
import { FaRegBell } from "react-icons/fa";
// Close Icon
import { IoClose } from "react-icons/io5";


export default function Header() {
  return (
    <div className="flex bg-blue-500 text-white justify-end items-center p-1 text-sm">
      <div className=" basis-9/12 text-center">
        Enable browser Notifications to avoid missing out on important activity.
      </div>
      {/* Div 2 */}
      <div className="flex bg-blue-700 p-1 basis-2/12 items-center justify-center rounded-md ">
        <div > 
          <FaRegBell />
        </div>
        <div className= "ml-2" >Enable Notifications</div>
      </div>
      <div className=" basis-1/12">
        <IoClose className=" ml-11"/>
      </div>
    </div>
  );
}
