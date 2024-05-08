import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './HeroSection';
import { Offers } from '../Offers/Offers';
import { History } from '../History.jsx/History';
import { Join } from '../Joinus/Join';
import { Footer } from '../Footer/Footer';


import Header from './Header';
import PriceTrade from '../Price/PriceTrade';

export const SetHero = () => {
  const startNowPriceRef = useRef (null)
  const [scrolled, setScrolled] = useState(false);




const handlePriceScroll = () =>{
  if(startNowPriceRef.current){
    startNowPriceRef.current.scrollIntoView({behavior: "smooth"})
  }
};


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className='w-full bg-[url("./src/assets/Image5.AVIF")] bg-cover relative '>
      <div className={`fixed w-full z-10 transition-all duration-300  top-0 ${scrolled ? 'bg-black' : 'bg-black'}`}>
        <Header/>
      </div>
      <div className='bg-white'>
        <HeroSection handlePriceScroll={handlePriceScroll}/>
        <Offers />
        <History />
        <Join />
        <PriceTrade ref={startNowPriceRef} />
        <Footer />
        <div className=' fixed top-[91%] right-7 bg-fixed shadow-lg z-0'>
          <a href='https://wa.me/2349046270535'> <img src='./src/assets/whatsapp.png'/> </a>
        </div>
      </div>
    </div>
  );
};
