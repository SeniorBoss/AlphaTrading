import React from 'react'
import { SiMentorcruise } from "react-icons/si";

export const Offers = () => {
  return (
    <div className='md:w-full md:h-[550px]  bg-white  md:flex md:justify-center md:items-center md:flex-col md:gap-10  w-full h-[350px] white flex justify-center items-center flex-col gap-8'>
           <h1 className='font-bold md:text-3xl ms:text-xl '>Alpha Trading Academy</h1>

        <div className='md:w-[100%] md:h-[320px] flex  items-center justify-between ms:w-[90%] ms:h-[70%] overflow-x-auto'>
        <div className='ms:w-full ms:h-full md:w-full md:h-full md:flex md:items-center md:justify-center'>
        <div className='md:w-[85%] md:h-[100%] flex  items-center justify-between ms:w-max ms:h-[100%] ms:gap-5'>
            <div className='md:w-[270px] md:h-[90%] bg-black shadow-lg border-white border-2 rounded-2xl flex justify-center items-center flex-col bg-center bg-contain  md:transition-transform md:duration-500 transform md:hover:scale-110 ms:w-[200px] ms:h-[100%] Offers1'>
            
                <h1 className='text-white font-bold md:text-2xl ms:text-xl'>Mentorship</h1>
            </div>

            <div className='md:w-[270px] md:h-[90%] bg-black shadow-lg border-white border-2 rounded-2xl flex justify-center items-center flex-col bg-center bg-cover  md:transition-transform md:duration-500 transform md:hover:scale-110  ms:w-[200px] ms:h-[100%] Offers2'>
                <h1 className='text-white font-bold text-2xl ms:text-xl'>Trade Signals</h1>
            </div>
            <div className='md:w-[270px] md:h-[90%] bg-black shadow-lg border-white border-2 rounded-2xl flex justify-center items-center flex-col gap-10  bg-center bg-contain bg-no-repeat  md:transition-transform md:duration-500 transform md:hover:scale-110 ms:w-[200px] ms:h-[100%] Offers3'>
                <h1  className='text-white font-bold md:text-2xl ms:text-xl'>Inspring Traders</h1>
            </div>

        </div>
        </div>
        </div>  
    </div>
  )
}
