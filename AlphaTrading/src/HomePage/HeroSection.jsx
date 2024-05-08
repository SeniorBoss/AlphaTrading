import React, { useState } from 'react';
import './Style.css'; // Import your CSS file with animation styles

export const HeroSection = ({ handlePriceScroll }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='w-full h-[80%] relative flex justify-between bg-[#000] pt-32 pb-10 bg-[url("./src/assets/Image5.avif")] bg-contain bg-no-repeat bg-center '>

      <div className='md:h-full w-[42%] flex justify-center items-center md:text-5xl md:pl-20 md:font-extrabold text-white flex-col gap-4 ms:font-bold ms:text-2xl'>
        <h1 className={isVisible ? 'fade-in' : 'fade-out'}>BECOME A PRO TRADER WITH <span className='animate-bounceInOut'>ALPHATRADING ACADEMY</span></h1>
        <div className='w-full ms:pl-5 md:pl-0'>
          <button className='md:w-[220px] md:h-[50px] ms:w-[160px] ms:h-[35px] bg-white text-black md:text-base md:font-bold ms:text-sm ms:font-medium rounded-full hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer  transition duration-500 ease-in-out ' onClick={handlePriceScroll}>START NOW</button>
        </div>
      </div>

      <div className='h-full md:w-[30%] ms:w-[50%] flex justify-center items-center'>
        <img src="./src/assets/BTC.png" alt="Description" className="shadow-lg object-contain md:h-[60%] ms:h-full ms:w-full" />
      </div>

    </div>
  );
};
