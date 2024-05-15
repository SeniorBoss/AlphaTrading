import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import User from "../assets/User.png"

export const SearchBar = () => {
  return (
    <div className='w-full h-[60px] bg-white rounded-2xl flex justify-center items-center '>
    <div className='w-[90%] h-[90%] flex justify-between items-center'>
        <div className='w-[40%] h-[80%] bg-gray-200 rounded-full relative'>
            <input type='text' className='w-full h-full rounded-full bg-slate-100 pl-5 outline-none' placeholder='Search'/>
            <CiSearch  className=' text-xl absolute right-4 top-3 cursor-pointer'/>
        </div>

        <div className='w-[40%] h-[90%] flex justify-end gap-7 items-center'>

        <CiLight className=' text-2xl cursor-pointer'/>

        <div className='h-full w-[7%] relative flex items-center cursor-pointer'>
        <div className='w-[20px] h-[20px] rounded-full bg-black text-white flex justify-center items-center text-xs font-bold absolute top-1'> <h1>2</h1></div>
        <IoIosNotifications className=' text-2xl cursor-pointer'/>
        </div>

            <div className='w-[50px] h-[50px] bg-black rounded-3xl bg-[url("./src/assets/User.png")]'>
            <img src={User} alt="Description" className="w-full h-full  object-contain"/>
            </div>
        </div>
    </div>
</div>
  )
}
