import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTachometerAlt,
  FaWrench,
  FaBolt,
} from "react-icons/fa";

function SideBar() {
  return (
    <div className="bg-sky-600 h-screen px-[25px]">
      <div className="px-[6px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px]  font-extrabold cursor-pointer">
          Admin Panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          Dashboard
        </p>
      </div>

      <div className="pt-[15px]  border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrebold leading-[16px] text-white/[0.4]">
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="white" />
            <p className="text-[14px] leading-[20px] text-white font-normal">
              Components
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaWrench color="white" />
            <p className="text-[14px] leading-[20px] text-white font-normal">
              Utilities
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

      <div className="pt-[15px]  border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrebold leading-[16px] text-white/[0.4]">
          Add-Ons
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="white" />
            <p className="text-[14px] leading-[20px] text-white font-normal">
              Pages
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegChartBar color="white" />
            <p className="text-[14px] leading-[20px] text-white font-normal">
              Charts
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegCalendarAlt color="white" />
            <p className="text-[14px] leading-[20px] text-white font-normal">
              Tables
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center pt-[15px]">
          <div className="h-[40px] w-[40px]  bg-[#135175] rounded-full flex items-center justify-center cursor-pointer ">
            <FaChevronLeft color="white" />
          </div>
        </div>
      </div>
      <div className="bg-[#135175] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]">
        <FaBolt color="white" />
        <p className="text-[12px] leading-[18px] text-white/[0.4] font-normal text-center">
          VS Code extension made up of a few commands
        </p>
        <button className="text-white bg-[#2bbe2b] text-[12px] justify-center items-center h-[30px] w-[120px] rounded-md">
          Upgrade to Pro!
        </button>
      </div>
    </div>
  );
}

export default SideBar;
