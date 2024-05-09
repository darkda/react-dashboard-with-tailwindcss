import React, { useState } from "react";
import profileDp from "../assets/images/profileDp.jpg";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";

function Dashboardview() {
  const [open, setopen] = useState(false);
  const showDropDown = () => {
    setopen(!open);
  };
  return (
    <div className="flex justify-between items-center h-[70px] shadow-lg px-[25px]">
      <div>
        <div className="flex items-center rounded-[5px] ">
          <input
            type="text"
            // hell
            placeholder="search for..."
            className="bg-[#f8f9fc] h-[40px]  outline-none pl-[13px] w-[350px] placeholder:text-[14px] leading-[20px] font-normal rounded-[5px]"
          />
          <div>
            <FaSearch
              color="white"
              className="bg-sky-400 h-[40px] w-[30px] px-[14x] py-[8px] cursor-pointer flex items-center rounded-r-md justify-center"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[20px] items-center relative">
        <div className="flex  gap-[20px] pr-[10px]  items-center border-r-[1px] border-gray-300">
          <FaRegBell />
          <FaEnvelope />
        </div>

        <div
          className="flex justify-center  gap-[10px]  items-center"
          onClick={showDropDown}
        >
          <p>Dante Kimathew</p>
          <div>
            <div className="w-[50px] h-[50px] px-[1px] py-[1px] rounded-full bg-sky-600">
              <img src={profileDp} alt="Profile" className="rounded-full " />
            </div>
            {open && (
              <div className="items-center justify-center mt-[10px] ">
                <div className="bg-white border  h-[120px] w-[150px] absolute  z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]  rounded-lg  ">
                  <p className="cursor-pointer hover:text-[blue] font-semibold ">
                    profiles
                  </p>
                  <p className="cursor-pointer hover:text-[blue] font-semibold ">
                    Log out
                  </p>
                  <p className="cursor-pointer hover:text-[blue] font-semibold ">
                    Settings
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardview;
