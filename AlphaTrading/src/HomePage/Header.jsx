import React, { useState, forwardRef } from 'react'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


 const Header = forwardRef ((props,ref) => {
  const nav =useNavigate()
  const [menu, setmenu] = useState(false)

  const handleMenu = () =>{
    setmenu(!menu)
  }
  return (
    <div className='w-full h-24 flex justify-center bg-black' ref={ref}  >
        <div  className=' h-full w-[90%] flex justify-between ms:w-full sm-w-ful lg:w-[90%]' >

        <div className='w-40 h-full object-contain pt-2 pr-8 cursor-pointer'>
        <img src="./src/assets/Logo3.png" alt="Description" className="w-full h-full shadow-lg object-contain" onClick={() =>nav('/')}/>
        </div>

        <div className='h-full md:w-[400px] md:h-full ms:absolute ms:bg-white md:bg-transparent md:static ms:top-20 ms:right-5 ms:h-[20%] ms:w-[40%] ms:hidden md:block'>
            <ul className='w-full h-full md:flex-row flex justify-between items-center md:text-lg md:font-bold md:text-gray-300 cursor-pointer ms:flex-col ms:h-[90%] ms:text-black ms:font-normal ms:text-sm'>
            <li className='hover:text-white' onClick={() =>nav('/')}>Home</li>
            <li className='hover:text-white' onClick={() =>nav('/aboutus')}>About us</li>
            <li className='hover:text-white' onClick={() => nav('/contactus')}>Contact us</li>
            </ul>
        </div>


       {menu &&
        <div className={`h-full :w-[30%] md:h-full ms:absolute ms:bg-white md:bg-transparent md:static ms:top-20 ms:right-5 ms:h-[150px] ms:w-[40%] md:hidden ms:block transition-opacity duration-300 ${menu ? 'opacity-100}': 'opacity-0'} `}>
            <ul className='w-full h-full md:flex-row flex justify-between items-center md:text-lg md:font-bold md:text-gray-300 cursor-pointer ms:flex-col ms:h-[90%] ms:text-black ms:font-normal ms:text-sm'>
            <li className='hover:text-white '  onClick={() =>nav('/')}>Home</li>
            <li className='hover:text-white' onClick={() =>nav('/aboutus')}>About us</li>
            <li className='hover:text-white' onClick={() => nav('/contactus')}>Contact us</li>
            </ul>
        </div>}
        
        <IoMenu className='text-white text-3xl md:hidden ms:absolute ms:right-4 ms:top-8' onClick={handleMenu}/>
        </div>
    </div>
  )
})

export default Header