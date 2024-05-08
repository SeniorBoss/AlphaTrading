import React from 'react'

export const Join = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center font-sans'>
        <div className='md:w-[86%] md:h-[70%] ms:w-[95%] ms:h-[60%] bg-black rounded-2xl bg-[url("./src/assets/Image5.AVIF")] bg-contain md:bg-no-repeat bg-center  ms:bg-cover bg-no-repeat flex flex-col justify-center items-center md:gap-7 ms:gap-5'>
        <div className='w-[40%] h-[40%] object-contain  cursor-pointer'>
        <img src="./src/assets/Logo3.png" alt="Description" className="w-full h-full shadow-lg object-contain" />
        </div>

        <h1 className='md:font-bold md:text-4xl ms:font-bold ms:text-xl text-white md:w-[50%] text-center flex'>ONLINE CLASS WITH ALPHATRADING ACADEMY</h1>

        <button className='md:w-[220px] md:h-[50px] ms:w-[160px] ms:h-[35px] bg-white text-black md:text-base md:font-bold ms:text-sm ms:font-medium rounded-full hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer  transition duration-500 ease-in-out '>START NOW</button>
        </div>
    </div>
  )
}
