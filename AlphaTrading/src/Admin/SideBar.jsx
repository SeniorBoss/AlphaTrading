import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdMenuBook } from "react-icons/md";
import AlphaTrading from "../assets/AlphaTrading.png"

export const SideBar = ({handleDash, handleStudent, handleRecord, handlePayment, handleNotification, student, studentComp, recordComp, paymentComp, notificationComp}) => {

  const [activeMenuItem, setActiveMenuItem] = useState(null);
 const nav = useNavigate()

  const handleClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className='w-[250px] h-[100%] bg-white rounded-2xl border-2 border-gray-300 flex justify-center'>
      <div className='w-[80%] h-max flex items-center justify-center flex-col'>
        <div className='w-full h-[100px] border-b-2'>
          <img src={AlphaTrading} alt="Description" className="w-full h-[90%]  object-contain"  onClick={() =>nav('/')}/>
        </div>

        <div className='w-full h-max flex flex-col gap-4 pt-10 justify-center items-center'>
          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-300 ${student ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={ handleDash}
          >
            <MdDashboard />
            <h1>Dashboard</h1>
          </div>

          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-300 ${studentComp ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={handleStudent}
          >
            <PiStudentFill />
            <h1>Student</h1>
          </div>

          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-300 ${recordComp ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={handleRecord}
          >
            <MdMenuBook />
            <h1>Records</h1>
          </div>

  
          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-300 ${paymentComp ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={handlePayment}
          >
            <MdPayments />
            <h1>Payment</h1>
          </div>


          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-300 ${notificationComp ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={handleNotification}
          >
            <IoIosNotifications />
            <h1>Notification</h1>
          </div>

       
          <div 
            className={`flex items-center w-[100%] gap-3 h-[40px] rounded-full pl-4 text-sm cursor-pointer transition-all duration-500 ${activeMenuItem === 'logout' ? 'bg-white text-black' : 'bg-white text-black'}`}
            onClick={() => handleClick('logout')}
          >
            <MdLogout />
            <h1>Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
