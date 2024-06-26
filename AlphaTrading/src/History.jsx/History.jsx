import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { FaFistRaised } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdMenuBook } from "react-icons/md";
export const History = () => {
  return (
    <div className='md:w-full md:h-max flex items-center flex-col mt-20 ms:gap-8 md:gap-0  bg-white'>
        <h1 className='font-bold md:text-2xl ms:text-xl'>Your Expectation</h1>
        <div className='md:w-[85%] md:h-max'>
            <div className='md-w-[full] md:h-[400px] md:flex md:static ms-w-[full] ms:h-[600px]  '>

                <div className='md:w-[50%] md:h-full flex justify-center'>
                    <div className='md:w-full md:h-[90%] rounded-2xl bg-white  shadow-2xl pl-6 pt-5 gap-5 flex flex-col ms:w-[100%] ms:h-[350px] ms:p-5 '>
                     <h1 className='font-bold ms:text-[15px] md:text-xl'>Introduction to Crypto Trading</h1>
                     <div className='w-full h-[12%] flex items-center md:gap-5 ms:gap-2'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>What is cryptocurrency?</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center md:gap-5 ms:gap-2'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>History and evolution of cryptocurrencies</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center  md:gap-5 ms:gap-2'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Basics of blockchain technology</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center  md:gap-5 ms:gap-2'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Overview of the crypto market</p>
                     </div>

                     
                    </div>
                </div>

                <div className='md:w-[10%] md:h-full md:flex md:flex-col md:items-center md:justify-center ms:hidden '>
                    <div className='md:w-[80px] md:h-[20%] rounded-full bg-white border-4 border-black shodow-lg flex justify-center items-center'>
                    <GiTeacher className='text-5xl'/>
                    </div>
                    <div className='md:w-[4px] md:h-[80%] bg-black'></div>
                </div>

                <div className='md:w-[40%] md:h-[90%] ms:w-[100%] ms:h-[50%] bg-contain bg-no-repeat bg-center TradingImage'></div>
            </div>
        </div>



        <div className='md:w-[85%] md:h-max'>
            <div className='md-w-[full] md:h-[400px] flex md:flex-row-reverse ms-w-[full] ms:h-[600px] ms:flex-col'>
                <div className='md:w-[40%] md:h-full ms:w-[100%] ms:h-[80%] flex justify-center'>

                <div className='md:w-full md:h-[90%] rounded-2xl bg-white  shadow-2xl pl-6 pt-5 gap-5 flex flex-col ms:w-[85%] ms:h-[350px] ms:p-5 '>
                     <h1 className='font-bold  ms:text-[15px] md:text-xl'>Fundamental Analysis</h1>
                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Introduction to fundamental analysis</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-3xl' />
                     <p className=' text-sm'>Evaluating the value and potential of cryptocurrencies</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Analyzing market trends and news</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-3xl' />
                     <p className=' text-sm'>Identifying investment opportunities based on fundamentals</p>
                     </div>             
                     
                    </div>
                </div>

                <div className='md:w-[10%] md:h-full md:flex md:flex-col md:items-center md:justify-center ms:hidden '>
                    <div className='md:w-[80px] md:h-[20%] rounded-full bg-white border-4 border-black shodow-lg flex justify-center items-center'>
                    <TbDeviceAnalytics className='text-5xl'/>
                    </div>
                    <div className='md:w-[4px] md:h-[80%] bg-black'></div>
                </div>

                <div className='md:w-[40%] md:h-[90%] ms:w-[100%] ms:h-[50%]  bg-contain bg-no-repeat bg-center TradingImage2'></div>
            </div>
        </div>

        <div className='md:w-[85%] md:h-max'>
            <div className='md-w-[full] md:h-[400px] md:flex md:static ms-w-[full] ms:h-[600px] '>

                <div className='md:w-[50%] md:h-full ms:flex ms:justify-center'>
                <div className='md:w-full md:h-[90%] rounded-2xl bg-white  shadow-2xl pl-6 pt-5 gap-5 flex flex-col ms:w-[95%] ms:h-[350px] ms:p-5  '>
                     <h1 className='font-bold  ms:text-[15px] md:text-xl'>Trading Strategies</h1>
                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-3xl' />
                     <p className=' text-sm'>Day trading strategies</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-3xl' />
                     <p className=' text-sm'>Risk management and trading psychology</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-3xl' />
                     <p className=' text-sm'>SMC strategy</p>
                     </div>
                     
                    </div>
                </div>
                <div className='md:w-[10%] md:h-full md:flex md:flex-col md:items-center md:justify-center ms:hidden '>
                    <div className='md:w-[80px] md:h-[20%] rounded-full bg-white border-4 border-black shodow-lg flex justify-center items-center'>
                    <FaFistRaised className='text-5xl'/>
                    </div>
                    <div className='md:w-[4px] md:h-[80%] bg-black'></div>
                </div>
                <div className='md:w-[40%] md:h-[90%] ms:w-[100%] ms:h-[50%]  bg-contain bg-no-repeat bg-center ms:mt-10 md:mt-0 TradingImage3'></div>
            </div>
        </div>

        <div className='md:w-[86%] md:h-max md:mt-0 ms:mt-20'>
            <div className='md-w-[full] md:h-[400px] flex md:flex-row-reverse ms-w-[full] ms:h-[600px] ms:flex-col'>
                <div className='md:w-[40%] md:h-full flex justify-center'>
                <div className='md:w-full md:h-[90%] rounded-2xl bg-white  shadow-2xl pl-6 pt-5 gap-5 flex flex-col ms:w-[100%] ms:h-[350px] ms:p-5'>
                     <h1 className='font-bold ms:text-[15px] md:text-xl'>Live Lessons And Trading</h1>
                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Live lessons covering strategy and setups</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Daily Market overviews</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Market updates/insights</p>
                     </div>

                     <div className='w-full h-[12%] flex items-center gap-5'>
                     <GiCheckMark className='text-green-500 text-2xl' />
                     <p className=' text-sm'>Zoom calls with all members</p>
                     </div>
                  
                    </div>
                </div>
                
                <div className='md:w-[10%] md:h-full md:flex md:flex-col md:items-center md:justify-center ms:hidden'>
                    <div className='md:w-[80px] md:h-[20%] rounded-full bg-white border-4 border-black shodow-lg flex justify-center items-center'>
                    <MdMenuBook className='text-5xl'/>
                    </div>
                    <div className='md:w-[4px] md:h-[80%] bg-black'></div>
                </div>
                <div className='md:w-[40%] md:h-[90%] ms:w-[100%] ms:h-[50%] bg-contain bg-no-repeat bg-center TradingImage4'></div>
            </div>
        </div>
    </div>
  )
}
