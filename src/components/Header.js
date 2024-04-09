import React from "react";
// Imported Icons here
// Bell Icon
import { FaRegBell } from "react-icons/fa";
// Close Icon
import { IoIosClose } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex bg-blue-400 text-white p-3 justify-end align-middle">
      <div className="">
        Enable browser Notifications to avoid missing out on important activity
      </div>
      {/* Div 2 */}
      <div className="flex bg-blue-800 p-1">
        <div> 
          <FaRegBell />
        </div>
        <div>Enable Notifications</div>
      </div>
      <div className=" mt-2">
        <IoIosClose/>
      </div>
    </div>
  );
}
