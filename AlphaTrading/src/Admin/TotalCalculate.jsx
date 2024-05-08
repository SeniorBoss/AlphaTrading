import React from 'react'
import { FcApprove } from "react-icons/fc";
import { PiStudentFill } from "react-icons/pi";
export const TotalCalculate = () => {
  return (
    <div className='w-full h-[350px] bg-white rounded-2xl flex justify-center items-center transition-all duration-1000'>

        <div className='w-[90%] h-[85%] flex justify-between'>

          <div className='w-[32%] h-full bg-black shadow-lg rounded-2xl flex justify-center items-center flex-col gap-2 bg-[url("./src/assets/Image5.avif")] bg-center'>
                  <div className='w-full flex pl-3 gap-5'>

                  <div className=' h-[50px] '>
                  <img src="./src/assets/Logo3.png" alt="Description" className="w-full h-full shadow-lg object-contain"/>
                 </div>

                  <h1 className=' text-sm font-bold text-white'>Top Student</h1>
                  </div>


                    <div className='w-[100px] h-[100px] bg-black rounded-3xl bg-[url("./src/assets/User.png")]'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-full  object-contain"/>
                    </div>

                    <h1 className=' text-sm  text-white'>janney Amaka</h1>
                    <div className='flex gap-8'>
                        <div className='flex flex-col items-center'>
                            <h1 className=' text-4xl font-bold text-white'>50</h1>
                            <p className=' text-sm text-white'>Total</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h1 className=' text-4xl font-bold text-white'>10</h1>
                            <p className=' text-sm text-white'>Point</p>
                        </div>

                    </div>
          </div>

          <div className='w-[30%] h-full bg-white shadow-lg rounded-2xl flex justify-center items-center flex-col gap-4'>
            <h1 className=' text-xl font-bold'>Total Student</h1>
            <div className='flex flex-col items-center'>
            <PiStudentFill  className=' text-5xl'/>
            <h1>200</h1>
            </div>

            <div className='flex  gap-7'>
                <div className=' flex flex-col items-center'>
                    <h1 className=' text-2xl font-bold'>150</h1>
                    <h1 className=' text-sm text-gray-600'>graduate</h1>
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className=' text-2xl font-bold'>50</h1>
                    <h1 className=' text-sm text-gray-600'>Dropout</h1>
                </div>
            </div>
          </div>

          <div className='w-[30%] h-full bg-white shadow-lg rounded-2xl flex justify-center items-center flex-col'>
            <h1 className=' text-xl font-bold'>Approved Payment</h1>
            <FcApprove className=' text-8xl'/>
            <h1 className=' text-xl'>200</h1>
          </div>
        </div>
    </div>
  )
}

