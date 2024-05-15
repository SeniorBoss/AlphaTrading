import React from 'react'
import Header from '../HomePage/Header'
import { Footer } from '../Footer/Footer'
import { MdOutlineMail } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { IoIosHome } from "react-icons/io";



export const Contact = () => {
  return (
    <div className='w-full h-max flex flex-col items-center'>
       <Header/>

    <div className='w-full h-[350px] bg-black ContactUs'></div>

    <div className='md:w-[80%] md:h-[400px] ms:w-[80%] ms:h-[1000px] flex flex-col justify-between items-center md:flex-row'>
        <div className='w-[250px] h-[80%] shadow-lg rounded-2xl flex flex-col items-center justify-center '>
        <MdOutlineMail className=' text-4xl'/>
        <h1 className='font-bold md:text-xl'>Contact us</h1>
        <p className=' text-sm w-[90%] h-[40%] flex items-center flex-col justify-center text-gray-600  text-center'>Welcome to AlphaTrading's "Contact Us" page! We value your feedback, inquiries, and suggestions.</p>
        <span className='text-blue-700 text-sm w-[90%] flex items-center justify-center'>AlphaTradingAcademy@gmail.com</span> 
        </div>
         
        <div className='w-[250px] h-[80%] shadow-lg rounded-2xl flex flex-col items-center justify-center '>
        <MdCallEnd className=' text-4xl'/>
        <h1 className='font-bold md:text-xl'>Call us</h1>
        <p className=' text-sm w-[90%] h-[40%] flex items-center flex-col justify-center text-gray-600  text-center'>Pick up the phone and dial our number below to speak directly with one of our knowledgeable representatives.</p>
        <span className='text-blue-700 text-sm w-[90%] flex items-center justify-center'>08164555517 -- 09029701022</span> 
        </div>

        <div className='w-[250px] h-[80%] shadow-lg rounded-2xl flex flex-col items-center justify-center '>
        <IoIosHome className=' text-4xl'/>
        <h1 className='font-bold md:text-xl'>Address</h1>
        <p className=' text-sm w-[90%] h-[40%] flex items-center flex-col justify-center text-gray-600  text-center'> While we primarily operate online, we're committed to providing a seamless experience for our customers.you can reach to us with the following address:</p>
        <span className='text-blue-700 text-sm w-[90%] flex items-center justify-center'>153 kirikiri road, olodi Apapa, lagos state</span> 
        </div>
    </div>

<Footer/>
    </div>
  )
}

