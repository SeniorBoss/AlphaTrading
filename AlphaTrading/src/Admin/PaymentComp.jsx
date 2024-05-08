import React from "react";
import { SearchBar } from "./SearchBar";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
export const PaymentComp = () => {
  return (
    <div
      className="w-[90%] h-[100vh] flex flex-col justify-between overflow-y-auto scrollbar-hidden transition-all duration-1000"
      style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
    <div className='h-full'>
        <div className='h-max w-full flex flex-col gap-5'>
      <SearchBar/>

      <div className='w-full h-max bg-white rounded-2xl flex flex-col items-center gap-3'>
            <div className='w-[90%] h-[22%]  flex  justify-between items-center'>
            <div className=' w-[30%] h-[100%] justify-center flex flex-col'>
                    <h1 className=' text-2xl font-bold'>Payment</h1>
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


            <div className='w-[90%] h-[11%] flex items-center border-t-2 border-b-2 justify-between'>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600'>Name</h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>Number</h1>
                <h1 className=' w-[19%] h-[70%] items-center flex text-sm text-gray-600 justify-center'>confirm</h1>
                
            </div>

            <div className='w-[90%] h-max flex flex-col gap-1 relative'>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
                <div className='w-full h-[40px] flex justify-between items-center'>
                    <div className='w-[27%] h-[70%] items-center flex  gap-2'>
                    
                    <div className='w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <img src="./src/assets/User.png" alt="Description" className="w-full h-[20px]  object-contain"/>
                    </div>
                    <h1 className=' text-sm'>James ikenna</h1>
                    </div>

                    <div className='w-[18%] h-[70%] items-center flex '>
                    <h1>0899956544</h1>
                    </div>

                    
                    <div className='w-[19%] h-[100%] items-center justify-center flex gap-5'>
                    <button className='w-[80px] h-[26px] bg-white text-blac rounded-xl font-bold text-xs cursor-pointer border-2 border-black'>Decline</button>
                    <button className='w-[80px] h-[26px] bg-black text-white rounded-xl font-bold text-xs cursor-pointer'>Approve</button>
                    </div>
                </div>
         
      
            </div>

        </div>
        </div>
        </div>
    </div>
  );
};
