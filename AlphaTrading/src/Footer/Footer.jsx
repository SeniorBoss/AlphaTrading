import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export const Footer = () => {
    const nav = useNavigate()
  return (
    <div className='md:w-full md:h-[350px] ms:w-full ms:h-[650px] bg-black flex justify-center items-center '>
        <div className='md:w-[86%] h-[90%] md:flex md:gap-32 ms:gap-10 items-center'>
            <div className='md:w-[30%] md:h-full ms:w-[100%] ms:h-[45%] flex flex-col  ms:items-center md:items-start ms:gap-5'>
            <div className='md:w-40 md:h-full ms:w-[40%]  object-contain cursor-pointer'>
             <img src="./src/assets/Logo3.png" alt="Description" className="w-full h-full shadow-lg object-contain" />
            </div>
            <p className='text-white text-sm ms:text-center md:text-start md:w-[100%] ms:w-[90%]'>We empower traders by helping them pinpoint their strengths and weaknesses. Through personalized guidance, we assist in crafting a tailored trading strategy that aligns with their unique personality, risk tolerance, and financial objectives.</p>
            </div>

            <div  className='md:w-[30%] md:h-full md:flex flex-col gap-14 justify-center ms:hidden '>
                <h1 className='text-white text-normal font-bold'>Quick Link</h1>
                <p className='text-white text-sm cursor-pointer' onClick={() =>nav('/')}>Home</p>
                <p className='text-white text-sm cursor-pointer' onClick={() =>nav('/aboutus')}>About us</p>
                <p className='text-white text-sm cursor-pointer' onClick={() =>nav('/contactus')}>Contact us</p>
            </div>

            <div  className='md:w-[30%] md:h-full flex flex-col md:gap-6 ms:gap-10 justify-center ms:w-[100%] ms:h-[60%] items-center'>
                <div className='md:w-full'>
                <h1 className='text-white text-normal font-bold'>Contact us</h1>
                </div>
                <div className='md:w-full md:h-[10%] ms:w-[] ms:h-[10%]'>
                    <div className='w-full flex gap-5'>
                    <FaInstagram className='text-white text-2xl'/>
                    <LuFacebook  className='text-white text-2xl'/>
                    <FaXTwitter className='text-white text-2xl'/>
                    
                    </div>
                </div>

                <div className='md:w-full h-[20%] flex flex-col gap-2 ms:pl-10 md:pl-0'>
                    <div className='w-full flex gap-5'>
                    <MdOutlineMailOutline  className='text-white text-2xl'/>
                    <h1 className='text-white text-sm'>Email</h1>
                    </div>
                    <h1 className='text-white text-sm'>AlphaTrading@gmail.com</h1>

                </div>

                <div className='md:w-full h-[20%]'>
                    <div className='w-full flex gap-5 flex-col'>
                    <div className='flex gap-5'>
                    <MdCall  className='text-white text-2xl'/>
                    <h1 className='text-white text-sm'>Phone</h1>
                    </div>

                     <div>
                        <p className='text-white text-sm'>+23409029701022</p>
                        <p className='text-white text-sm'>+23408164555517</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
