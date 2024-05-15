import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { Footer } from '../Footer/Footer';
import Header from '../HomePage/Header';
import Logo3b from '../assets/Logo3b.png'
export const AboutUs = () => {

    const[oneFaq, setOneFaq] =useState(false)
    const[twoFaq, settwoFaq] =useState(false)
    const[threeFaq, setthreeFaq] =useState(false)
    const[fourFaq, setFourFaq] =useState(false)

    const nav =useNavigate()

    const handleOnefaq = () =>{
        setOneFaq(!oneFaq)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleTwofaq = () =>{
        setOneFaq(false)
        settwoFaq(!twoFaq)
        setthreeFaq(false)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleThreefaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(!threeFaq)
        setFourFaq(false)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }

    const handleFourfaq = () =>{
        setOneFaq(false)
        settwoFaq(false)
        setthreeFaq(false)
        setFourFaq(!fourFaq)
        setFiveFaq(false)
        setSixFaq(false)
        setSevenFaq(false)
    }
  return (
    <div className='w-full h-max bg-black'>
       <Header/>

       <div className='md:w-full md:h-[500px] ms:w-full ms:h-[800px] bg-white flex justify-center items-center'>
            <div className='md:w-[80%] md:h-[70%] ms:w-[90%] ms:h-[90%] flex flex-col md:flex-row justify-between items-center ms:gap-8'>
                <div className='md:w-[400px] md:h-[400px] ms:w-[300px] ms:h-[400px] bg-white shadow-lg rounded-l-full rounded-br-full flex justify-center'>
                <img src={Logo3b} alt="Description" className="w-[300px] h-full  object-co bg-center"  />
                </div>

                <div className='md:w-[55%] md:h-[90%] ms:w-[100%] ms:h-[90%] flex flex-col gap-2'>
                    <h1 className='md:font-bold md:text-3xl ms:font-bold ms:text-2xl'>Hello! I'm Frank</h1>
                    <h1>CEO Alphatrading Academy</h1>
                    <p className='text-gray-400 text-sm'>"I am Frank, I have been actively involved in the world of cryptocurrency and forex trading since early 2020. Over the years, I have gained valuable experience and insights into the dynamic and ever-evolving markets. As a passionate and dedicated trader, I continuously strive to expand my knowledge and refine my trading strategies to navigate the complexities of the financial markets successfully. My journey in trading has been filled with challenges and learning opportunities, but it has also been incredibly rewarding. I am excited about the future of trading and the endless possibilities it holds for those who dare to venture into this fascinating world."</p>
                </div>
            </div>
       </div>

       <div className='w-full h-max bg-white flex justify-center'>
            <div className='md:w-[80%] md:h-max ms:w-[90%] ms:h-max md:gap-5 ms:gap-2 flex flex-col'>
                <h1 className='font-bold text-2xl'>FAQ's</h1>
                <div className='w-full h-max'>
                    <div className='w-full h-[80px] p-5 shadow-lg flex justify-between items-center'>
                        <h1 className='md:font-bold md:text-xl font-bold ms:text-sm'>what is Alphatrading</h1>
                        <FaCaretDown style={{fontSize: "30px"}} onClick={handleOnefaq}/>
                    </div>
                   
                    <div  className={`faq-answer bg-black text-white p-5 transition-opacity duration-500 ${oneFaq ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                        <p>AlphaTrading Academy is a reputable institution that offers comprehensive training and education in the field of trading</p>
                    </div>
                
                </div>

                <div className='w-full h-max'>
                    <div className='w-full h-[80px] p-5 shadow-lg flex justify-between items-center'>
                        <h1 className='md:font-bold md:text-xl font-bold ms:text-sm'>How long does the course last?</h1>
                        <FaCaretDown style={{fontSize: "30px"}} onClick={handleTwofaq}/>
                    </div>
                    <div className={`faq-answer bg-black text-white p-5 transition-opacity duration-500 ${twoFaq ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                        <p>At AlphaTrading Academy, the cost of enrollment covers a comprehensive two-month program. During these two months, you'll have access to a structured curriculum designed to provide in-depth education and training in trading. This duration allows for a thorough exploration of various trading strategies, market analysis techniques, risk management principles, and more. </p>
                    </div>
                </div>

                <div className='w-full h-max'>
                    <div className='w-full h-[80px] p-5 shadow-lg flex justify-between items-center'>
                        <h1 className='md:font-bold md:text-xl font-bold ms:text-sm'>What is the cost of the class? </h1>
                        <FaCaretDown style={{fontSize: "30px"}} onClick={handleThreefaq}/>
                    </div>
                    <div className={`faq-answer bg-black text-white p-5 transition-opacity duration-500 ${threeFaq ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                        <p>At AlphaTrading Academy, the course itself is offered to participants at no cost. However, there is a registration fee of 5000 Nigerian Naira, which covers administrative expenses and ensures your enrollment in the program. </p>
                    </div>
                </div>
                <div className='w-full h-max'>
                    <div className='w-full h-[80px] p-5 shadow-lg flex justify-between items-center'>
                        <h1 className='md:font-bold md:text-xl font-bold ms:text-sm'>What materials will be provided?</h1>
                        <span className='w-[20%] h-[100%] flex justify-end items-center' onClick={handleFourfaq}><FaCaretDown style={{fontSize: "30px"}} onClick={handleFourfaq}/></span>
                    </div>
                    <div className={`faq-answer bg-black text-white p-5 transition-opacity duration-500 ${fourFaq ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
                        <p>At AlphaTrading Academy, we understand the importance of psychological resilience and discipline in trading success. That's why we provide carefully curated resources, including books and materials specifically designed to help traders develop their psychological fortitude. These resources delve into various aspects of trader psychology, offering insights, techniques, and exercises to strengthen emotional control, decision-making skills, and risk management strategies.</p>
                    </div>
                </div>
            </div>
       </div>
       <Footer/>
    </div>
  )
}
