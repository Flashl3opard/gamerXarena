import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="relative translate-y-32 translate-x-2 items-center justify-center shadow-2xl rounded-full flex flex-col list-none w-16 h-96 bg-gray-700">
      <li className="relative flex items-center justify-center w-full h-1/4 group">
        <div className="flex items-center">
          <IoMdHome className="text-3xl text-white hover:scale-110 hover:bg-gray-600 hover:rounded-xl" />
          <span className="absolute left-16 bg-gray-800 text-white text-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </div>
      </li>
      <li className="relative flex items-center justify-center w-full h-1/4 group">
        <div className="flex items-center">
          <IoMdTrendingUp className="text-3xl text-white hover:scale-110 hover:bg-gray-600 hover:rounded-xl" />
          <span className="absolute left-16 bg-gray-800 text-white text-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Trending
          </span>
        </div>
      </li>
      <li className="relative flex items-center justify-center w-full h-1/4 group ">
        <div className="flex items-center">
          <IoGameController className="text-3xl text-white hover:scale-110 hover:bg-gray-600 hover:rounded-xl" />
          <span className="absolute left-16 bg-gray-800 text-white text-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Games
          </span>
        </div>
      </li>
      <li className="relative flex items-center justify-center w-full h-1/4 group">
        <div className="flex items-center">
          <IoSettingsSharp className="text-3xl text-white hover:scale-110 hover:bg-gray-600 hover:rounded-xl" />
          <span className="absolute left-16 bg-gray-800 text-white text-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Settings
          </span>
        </div>
      </li>
    </div>
  );
};

export default Nav;
