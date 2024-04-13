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
    // Root div
    <div className=" text-xs">
      {/* Header of main content */}
      <div className="flex">
        <div className="flex basis-4/5 mt-3 items-center">
          <div className=" ml-3 mr-3">
            <MdOutlineSpaceDashboard />
          </div>
          <div className=" mr-3">
            <MdArrowBackIos />
          </div>
          <div className=" mr-3">
            <MdArrowForwardIos />
          </div>
          <div className=" mr-3">
            <FaLock />
          </div>
          <div className=" mr-3">My Private Channel /</div>
          <div>
            <PiHandWaving />
          </div>
          <div className=" mr-3">Getting Started</div>
        </div>
        <div className="flex basis-1/5 mt-3 items-center">
          <div className=" mr-5">Share </div>
          <div className=" mr-5">
            <RiChat3Line />
          </div>
          <div className=" mr-5">
            <TiStarFullOutline />
          </div>
          <div className=" mr-5">
            <SlOptionsVertical />
          </div>
        </div>
      </div>

      {/* Main content */}

      <div className="flex text-sm">
        <div className="basis-13/15 px-40">
          <div className=" text-3xl font-bold my-4"> Getting started </div>
          <div className="flex items-start  bg-gray-300 p-3 mb-6">
            <div className="mt-1">
              <FaLock />
            </div>
            <div className=" ml-4">
              This doc in your <b>private channel</b>, where you can store your private
              work. You can share docs one by one from here, but to properly
              organise your team knowledge base, use <b>workspace channels</b>. <br />{" "}
              <br />
              You can make channels <b>public</b> to make all docs visible to
              everyone on the team, or <b>private</b> if you want the channel's
              docs to only be visible by a selection of teammates.
            </div>
          </div>
          <div className=" text-xl font-bold">
            Collaborate with your team with these three <br /> features.
          </div> <br />
          <div className="flex items-center">
            <div>
              <FaUserPen />
            </div>

            <div className=" text-lg pr-8">Docs</div>
          </div>
          <div className=" mb-3">
            <img src={docs} alt="docs" />
          </div>
          <div className="flex items-center bg-gray-200 p-1">
            <IoBulbOutline />

            <div>Give it a go by typing / below</div>
          </div>
        </div>

        {/* Theme and FAQ  */}
        <div className=" basis-2/15 mr-5 content-end mb-5 ">
          <div>
            <IoMoonOutline />
          </div>
          <div className="mt-3">
            <MdQuestionMark />
          </div>
        </div>
      </div>
      {/* Root Div closed here  */}
    </div>
  );
}
