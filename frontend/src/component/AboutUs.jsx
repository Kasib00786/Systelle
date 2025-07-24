import React from 'react'
import { useState,useEffect } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const AboutUs = () => {
const [open,setOpen]=useState(false);
useEffect(() => {
    fetch('https://systelle.onrender.com/home/aboutus', {
        method: 'GET',
        credentials: 'include'
    })
    .then(res => {
        if (res.status === 401) {
            window.location.replace('/login');
        }
    });
}, []);

  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center bg-fixed py-10 min-h-screen'>    
        <div className='flex justify-between  max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg flex-wrap'>
                <div className='flex'>
                  <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
                <div className='text-balance font-bold text-2xl my-auto mr-16'>
                    Systelle
                </div>
                </div>
                <div className='text-lg font-bold flex flex-wrap gap-x-5'>
                    <Link to='/home' className={inactive}><button>Dashboard</button></Link>
                    <Link to='/calendar' className={inactive}><button>Calendar</button></Link>
                    <Link to='/health' className={inactive}><button>Health</button></Link>
                    <Link to='/exercise' className={inactive}><button>Exercise</button></Link>
                    <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={()=>setOpen(!open)}>👤</button>
                    {open && (
                      <div className='fixed inset-0 bg-black/40 z-30 transition delay-150 duration-200 ease-in-out'>
                        <Menu />
                     </div>
                    )}
                </div>
              </div>
              <div className="bg-white/50 mt-16 rounded-2xl max-w-[70%] mx-auto p-8 shadow-xl text-center text-gray-800">
        <h2 className="text-4xl font-bold underline mb-6">About us</h2>
        <p className="text-2xl text-centre font-italic mt-8">
          We are <strong>Systelle</strong> — a passionate group of five individuals united by one goal: to make women’s health tracking smarter, simpler, and more empowering.
          Our diverse team brings together skills from tech, design, and healthcare awareness to build a platform focused on PCOD and PCOS management. We believe that the right tools, when created with empathy and purpose, can truly change lives.
          Every feature we design is thoughtfully created with real women’s needs in mind. Whether it's tracking symptoms, understanding cycles, or building healthy habits — we’re here to support the journey.
          Together, at Systelle, we’re not just creating a product — we’re building a movement for better awareness, care, and support.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 pt-16">We’re here to support you — every day, every symptom, every step.</h3>
        <p className="text-3xl font-bold">. . . . . .</p>
      </div>
    </div>
  )
}

export default AboutUs;