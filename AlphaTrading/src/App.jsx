import React, { useEffect, useState } from 'react';
import { SetHero } from './HomePage/Hero';
import { AboutUs } from './AboutUs/AboutUs';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Payment } from './Payment/Payment';
import { Contact } from './Contactus/Contact';
import { AdminDashboard } from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
import AppRapper from './AppRapper';






export default function App() {

  const [loggedIn, setLoggedIn] = useState(false); 

  const handleLogin = () => {
    setLoggedIn(true);
  };



  return (

    <div className="w-full h-max-content bg-white font-sans">


    <HashRouter>
                 <AppRapper/>
      <Routes>

        <Route path='/' element={<SetHero/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='contactus' element={<Contact/>}/>
        <Route path='adminDashboard' element={<AdminDashboard/>}/>
        <Route path='adminLoginLink' element={<AdminLogin />} />

      </Routes>
    </HashRouter>

    </div>
  );
}
