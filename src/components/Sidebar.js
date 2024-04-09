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
import { IoIosArrowDown } from "react-icons/io"; // Arrow
import { IoIosArrowForward } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { LuDownload } from "react-icons/lu";
import { IoArchiveOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className=" bg-gray-500 ps-4">
      {/* First Div */}
      <div className="flex">
        <div>refero team </div>
        <div>
          {" "}
          <FaRegBell />{" "}
        </div>
      </div>
      {/* Second Div */}
      <div className="flex">
        <div className=" bg-white p-2 flex">
          {" "}
          <div>
            <FaHandPaper />
          </div>
          <div>Ask your Assisant </div>
        </div>
        <div className=" bg-white p-2">
          {" "}
          <CiSearch />{" "}
        </div>
      </div>
      {/* Third Div */}
      <div className="">
        <div className="flex">
          <div>
            <CiClock2 />
          </div>
          <div>Catch Up</div>
        </div>
        <div className="flex">
          <div>
            {" "}
            <IoMdChatboxes />
          </div>
          <div>Discussions</div>
        </div>
      </div>
      {/* Fourth Div */}
      <div className="">
        <div>Favourites</div>
        <div className="flex">
          <div>
            <PiHandWaving />
          </div>
          <div>Getting Started</div>
        </div>
      </div>
      {/* Fifth Div */}
      <div className="">
        <div></div>
        <div className="flex">
          <div>
            <IoIosArrowDown />
          </div>
          <div>
            <FaLock />
          </div>
          <div>
            <div>My Private Channel</div>
            <div className="flex">
              <div>
                {" "}
                <PiHandWaving />{" "}
              </div>
              <div>Getting Starting</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <IoIosArrowForward />
          </div>
          <div>
            <LiaBookSolid />
          </div>
          <div>
            <div>Engineering</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <IoIosArrowForward />
          </div>
          <div>
            <LiaBookSolid />
          </div>
          <div>Products</div>
        </div>
      </div>
      {/* Sixth Div */}
      <div className="">
        <div className="flex">
          <div>
            <FaUserPlus />
          </div>
          <div>Add People</div>
        </div>
        <div className="flex">
          <div>
            <VscColorMode />
          </div>
          <div>Templates</div>
        </div>
        <div className="flex">
          <div>
            <LuDownload />
          </div>
          <div>Shared with me</div>
        </div>
        <div className="flex">
          <div>
            <IoArchiveOutline />
          </div>
          <div>Archive</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
