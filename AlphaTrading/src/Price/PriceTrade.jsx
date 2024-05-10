import React,{forwardRef} from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { IoConstructSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

 const PriceTrade = forwardRef ((props, ref) =>{

 
  const nav = useNavigate()

  
  return (
    <div className='w-full md:h-[700px]  bg-gray-200 flex justify-center items-center flex-col gap-8' ref={ref}>
     <div className='flex flex-col items-center gap-3'>
      <h1 className='font-bold text-[20px]'>Mentorship</h1>
      <h1 className=' text-sm'>Join our unique Lifetime Mentorship Program</h1>
     </div>

      <div className='w-[86%] md:h-[80%]  bg-gray-200 md:flex md:justify-between'>
      <div className='md:w-[30%] md:h-[80%] ms:w-[100%] ms:h-[450px] bg-black rounded-2xl bg-cover bg-center bg-no-repeat ms:mb-10 Price1'>
        <div className='w-full h-full bg-black opacity-80 rounded-2xl flex flex-col items-center justify-center gap-8'>
          <h1 className='font-bold text-xl text-white'>VIRTUAL ACADEMY</h1>

          <div className='w-[50%] flex flex-col items-center'>
            <div className='font-bold text-6xl text-white  flex'>$5</div>
            <p className=' text-white text-sm'>For registration</p>
          </div>

          <button className='w-[50%] h-[13%] bg-white font-bold rounded-full hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer  transition duration-500 ease-in-out'  onClick={() => nav('payment') }>JOIN THE TEAM</button>

          <div className='w-full h-[30%] border-t-2 border-white pt-5 pl-5 pr-4 '>
            <h1 className='font-bold text-xl text-white'>Include</h1>
            <p className=' text-white text-sm'>Lifetime Mentorship Physical or Online Mentorship One-time Fee</p>
          </div>
        </div>
     </div>

     <div className='md:w-[30%] md:h-[80%] ms:w-[100%] ms:h-[450px] bg-black rounded-2xl bg-cover bg-center bg-no-repeat ms:mb-10 price2'>
          <div className='w-full h-full bg-black opacity-80 rounded-2xl flex flex-col items-center justify-center gap-8'>
          <h1 className='font-bold text-xl text-white'>PRIVATE MENTORSHIP</h1>

          <div className='w-[50%] flex flex-col items-center'>

            <div className='font-bold text-6xl text-white  flex h-[70%]'>
            
            <h1>$50</h1>
            </div>

            <p className=' text-white text-sm'>One term fee</p>
          </div>

          <button  className='w-[50%] h-[13%] bg-white font-bold rounded-full hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer  transition duration-500 ease-in-out' onClick={() => nav('payment') } >JOIN THE TEAM</button>

          <div className='w-full h-[30%] border-t-2 border-white pt-5 pl-5 pr-4'>
            <h1 className='font-bold text-xl text-white'>Include</h1>
            <p className=' text-white text-sm'>Lifetime Mentorship Physical or Online Mentorship One-time Fee</p>
          </div>
        </div>
     </div>

     <div className='md:w-[30%] md:h-[80%] ms:w-[100%] ms:h-[450px] bg-black rounded-2xl bg-cover bg-center bg-no-repeat ms:mb-10 price3'>
        <div className='w-full h-full bg-black opacity-80 rounded-2xl flex flex-col items-center justify-evenly'>
        <h1 className='font-bold text-xl text-white'>PHYSICAL ACADEMY</h1>
        <IoConstructSharp className='text-9xl text-white'/>
        <h1 className='font-bold text-xl text-white'>UNDER CONSTRUCTION</h1>
        </div>
     </div>

      </div>
    </div>
  )
})

export default PriceTrade