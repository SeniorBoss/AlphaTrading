import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { TotalCalculate } from './TotalCalculate';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { SearchBar } from './SearchBar';
export const StudentBar = () => {





  return (
    <div className='w-[90%] h-[100vh] flex flex-col justify-between overflow-y-auto scrollbar-hidden transition-all duration-1000'  style={{ overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className='h-full'>
        <div className='h-max w-full flex flex-col gap-5'>
         <SearchBar/>

        <div className='w-full h-[400px] bg-white rounded-2xl flex flex-col items-center gap-3'>
            <div className='w-[90%] h-[22%]  flex  justify-between items-center'>

                <div className=' w-[30%] h-[100%] justify-center flex flex-col'>
                    <h1 className=' text-2xl font-bold'>Todays Accessment</h1>
                    <h1 className=' text-sm  text-gray-500'>111 Total</h1>
                </div>

                <div className=' w-[20%] h-[80%] flex justify-between'>
                    <div className=' w-[50%] h-full items-center justify-center flex flex-col border-r-2'>
                        <h1 className=' text-3xl font-bold'>67</h1>
                        <p className=' text-sm  text-gray-500'>Done</p>
                    </div>

                    <div className=' w-[50%] h-full items-center justify-center flex flex-col'>
                        <h1 className=' text-3xl font-bold'>32</h1>
                        <p className=' text-sm  text-gray-500'>Remain</p>
                    </div>
                </div>
            </div>


            <div className='w-[90%] h-[11%] flex items-center border-t-2 border-b-2'>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600'>Name</h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>Attendant</h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>class defence </h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>Assignment</h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>Check</h1>
            </div>

            <div className='w-[90%] h-max flex flex-col gap-1 relative'>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[25%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                        <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>
                    
                    <div className='w-[19%] h-[100%] items-center flex'>
                    <button className='w-[70px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Save</button>
                    </div>
                </div>


                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[25%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[30px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                        <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>
                    
                    <div className='w-[19%] h-[100%] items-center flex'>
                    <button className='w-[70px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Save</button>
                    </div>
                </div>
                
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[25%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[30px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                        <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>
                    
                    <div className='w-[19%] h-[100%] items-center flex'>
                    <button className='w-[70px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Save</button>
                    </div>
                </div>


                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[25%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[30px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                        <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>
                    
                    <div className='w-[19%] h-[100%] items-center flex'>
                    <button className='w-[70px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Save</button>
                    </div>
                </div>


                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[25%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[30px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                        <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <input type='number' className='w-[30px] h-[20px] border-2'/>
                    </div>
                    
                    <div className='w-[19%] h-[100%] items-center flex'>
                    <button className='w-[70px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Save</button>
                    </div>
                </div>


                <div className=' absolute w-[10%] h-[23%] bottom-4 right-0 flex flex-col items-center'>
                <h1>See more</h1>
                <FaRegArrowAltCircleDown className=' text-4xl cursor-pointer'/>
                </div>
            </div>

        </div>
 
       <TotalCalculate/>

    </div>
    </div>
    </div>
  )
}
