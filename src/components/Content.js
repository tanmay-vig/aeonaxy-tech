import React from "react";
// Importing image
import docs from "../assets/create-docs.png";
// importing icons
import { FaLock } from "react-icons/fa6"; // Lock icon
import { IoBulbOutline } from "react-icons/io5"; // Bulb icon
import { FaUserPen } from "react-icons/fa6"; // User Pen icon
import { IoMoonOutline } from "react-icons/io5"; // Moon icon
import { MdQuestionMark } from "react-icons/md"; // Question mark icon
import { MdArrowBackIos } from "react-icons/md"; // Arrow back icon
import { MdArrowForwardIos } from "react-icons/md"; // Arrow forward icon
import { PiHandWaving } from "react-icons/pi"; //  Waving Hand Icon
import { MdOutlineSpaceDashboard } from "react-icons/md"; // Space Dashboard icon
import { RiChat3Line } from "react-icons/ri"; // Chat icon
import { TiStarFullOutline } from "react-icons/ti"; // Star icon
import { SlOptionsVertical } from "react-icons/sl"; // Options icon


export default function Content() {
  return (
    <div>
      <div className="flex">
        <div className="flex">
          <div>
            <MdOutlineSpaceDashboard />
          </div>
          <div>
            <MdArrowBackIos />
          </div>
          <div>
            <MdArrowForwardIos />
          </div>
          <div>
            < FaLock />
          </div>
          <div>
            My Private Channel /
          </div>
          <div>
            <PiHandWaving />
          </div>
          <div>
            Getting Started
          </div>
        </div>
        <div className="flex">
          <div>Share </div>
          <div>
            <RiChat3Line />
          </div>
          <div>
            <TiStarFullOutline />
          </div>
          <div>
            <SlOptionsVertical />
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex">
        <div>
          <div>Getting Started</div>
          <div className="flex">
            <FaLock />
            <div>
              This doc in your private channel, where you can store your private
              work. You can share docs one by one from here, but to properly
              organise your team knowledge base, use workspace channels. <br />{" "}
              <br />
              You can make channels <b>public</b> to make all docs visible to
              everyone on the team, or <b>private</b> if you want the channel's
              docs to only be visible by a selection of teammates.
            </div>
          </div>
          <div>Collaborate with your team with these three features.</div>
          <div className="flex">
            <FaUserPen />

            <div>Docs</div>
          </div>
          <div>
            <img src={docs} alt="docs" />
          </div>
          <div className="flex">
            <IoBulbOutline />

            <div>Give it a go by typing / below</div>
          </div>
        </div>

        {/* Theme and FAQ  */}
        <div>
          <div>
            <IoMoonOutline />
          </div>
          <div>
            <MdQuestionMark />
          </div>
        </div>
      </div>
    </div>
  );
}
