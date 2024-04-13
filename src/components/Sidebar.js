import React from "react";
// Icons are imported here
import { FaRegBell } from "react-icons/fa"; // Bell Icon
import { CiSearch } from "react-icons/ci"; // Search Icon
import { FaHandPaper } from "react-icons/fa"; // Hand Icon
import { CiClock2 } from "react-icons/ci"; // Clock Icon
import { IoMdChatboxes } from "react-icons/io"; // Chat
import { PiHandWaving } from "react-icons/pi"; //  Waving Hand Icon
import { FaLock } from "react-icons/fa"; // Lock Icon
import { LiaBookSolid } from "react-icons/lia"; // Book Icon
import { IoIosArrowDown } from "react-icons/io"; // Arrow Down
import { IoIosArrowForward } from "react-icons/io"; // Arrow forward
import { FaUserPlus } from "react-icons/fa6"; // User Plus Icon
import { VscColorMode } from "react-icons/vsc"; // Color Mode Icon
import { LuDownload } from "react-icons/lu"; // Download Icon
import { IoArchiveOutline } from "react-icons/io5"; // Archive Icon
import { FaUserCircle } from "react-icons/fa"; // User Icon

const Sidebar = () => {
  return (
    <div className=" bg-slate-200 p-4 text-sm">
      {/* First Div */}
      <div className="flex place-content-between items-center">
        <div className="flex items-center">
          <div>
            <FaUserCircle />
          </div>
          <div className="ml-2">refero team </div>
        </div>
        <div>
          {" "}
          <FaRegBell />{" "}
        </div>
      </div>
      <br />
      {/* Second Div */}
      <div className="flex place-content-between items-center my-2">
        <div className=" bg-white p-2 flex text-gray-500 items-center rounded">
          {" "}
          <div>
            <FaHandPaper />
          </div>
          <div className="ml-2">Ask your Assisant </div>
        </div>
        <div className=" bg-white p-2 rounded">
          {" "}
          <CiSearch />{" "}
        </div>
      </div>

      <div className=" bg-gray-300 ps-3 py-1 rounded">
        <div className=" font-bold">Your team used 8/50 free docs</div>
        <div className=" text-sm">Upgrade to create unlimited docs</div>
      </div>
      {/* Third Div */}
      <div className="mt-3">
        <div className="flex items-center pt-3">
          <div>
            <CiClock2 />
          </div>
          <div className=" ps-2">Catch Up</div>
        </div>
        <div className="flex items-center pt-3">
          <div>
            {" "}
            <IoMdChatboxes />
          </div>
          <div className=" ps-2">Discussions</div>
        </div>
      </div>
      {/* Fourth Div */}
      <div className="">
        <div className=" pt-3">Favourites</div>
        <div className="flex items-center pt-3">
          <div>
            <PiHandWaving />
          </div>
          <div className="ml-2">Getting Started</div>
        </div>
      </div>
      <br />
      {/* Fifth Div */}
      <div className="">
        <div className="flex items-start pt-3">
          <div>
            <IoIosArrowDown />
          </div>
          <div className=" ml-2">
            <FaLock />
          </div>
          <div >
            <div className=" ml-2">My Private Channel</div>
            <div className="flex items-center pt-2">
              <div>
                {" "}
                <PiHandWaving />{" "}
              </div>
              <div  className=" ml-1">Getting Starting</div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div>
            <IoIosArrowForward />
          </div>
          <div className="ml-2">
            <LiaBookSolid />
          </div>
          <div>
            <div className="ml-2">Engineering</div>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div>
            <IoIosArrowForward />
          </div>
          <div className="ml-2">
            <LiaBookSolid />
          </div>
          <div className="ml-2">Products</div>
        </div>
      </div>
      {/* Sixth Div */}
      <br /> <br />
      <div className="">
        <div className="flex items-center mt-2">
          <div>
            <FaUserPlus />
          </div>
          <div className=" ml-2">Add People</div>
        </div>
        <div className="flex items-center mt-2">
          <div>
            <VscColorMode />
          </div>
          <div className=" ml-2">Templates</div>
        </div>
        <div className="flex items-center mt-2">
          <div>
            <LuDownload />
          </div>
          <div className=" ml-2">Shared with me</div>
        </div>
        <div className="flex items-center mt-2">
          <div>
            <IoArchiveOutline />
          </div>
          <div className=" ml-2">Archive</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
