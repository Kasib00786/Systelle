import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
export const Navbar = () => {
const [open,setOpen]=useState(false);


  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 min-h-screen'>
      {/*Navigation Bar */}
        <div className='flex justify-between  max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-30 flex-wrap'>
          <div className='flex'>
                              <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
                            <div className='text-balance font-bold text-2xl my-auto mr-16'>
                                Systelle
                            </div>
          </div>
          <div className='text-lg font-bold flex flex-wrap gap-x-5'>
              <button className={isactive}>Dashboard</button>
              <Link to='/calendar' className={inactive}><button>Calendar</button></Link>
              <Link to='/health' className={inactive}><button>Health</button></Link>
              <Link to='/exercise' className={inactive}><button>Exercise</button></Link>
              <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={()=>setOpen(!open)}>👤</button>
              {open && (
               <div className='fixed inset-0 bg-black/40 z-40 transition delay-150 duration-200 ease-in-out'>
                  <Menu />
               </div>
              )}
          </div>
        </div>
        {/*Container with Daily update and progress */}
        <div className='max-w-[85%] mx-auto bg-white/50 rounded-2xl mt-6 shadow-lg flex justify-between contain-content flex-wrap'>
           <div className='mt-20'>
           <h1 className='text-6xl pb-8 ml-28 font-bold '>Hii Krati !!</h1>
           <Link to='/updates'>
           <button className='bg-violet-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 rounded-2xl w-96 h-8 ml-16 text-2xl text-white font-semibold'>
             How was your day? 😊 </button>
             </Link>
           </div>
           {/* Circular Progress */}
          <Link to='/calendar'>
                <div className="relative w-80 h-60 mr-16 mb-8 mt-8">
          <svg className="w-full h-full transform -rotate-90 " viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5d4f9"
              strokeWidth="15"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#9333ea"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
            15 days<br />to go
          </div>
        </div>
          </Link>
        </div>
        {/*Container with risk level*/}
        <div className="max-w-[85%] mx-auto mt-6 bg-white/50 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div>
        <p className="text-4xl font-bold ml-16 mb-8 mt-8">You have no risk of PCOD/PCOS 🎉</p>
        </div>
        <div className="relative h-4 ml-8 mr-8 bg-white w-5/6 rounded-xl overflow-hidden">
          <div
            className="absolute h-2 m-1 bg-green-500 rounded-xl"
            style={{ width: "25%" }}
          />
        </div>
      </div>
    </div>
  )
}
export default Navbar;