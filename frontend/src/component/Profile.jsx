import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const Profile = () => {
const [open,setOpen]=useState(false);
  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center min-h-screen'>    
        <div className='flex justify-between sticky top-10 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-50'>
            <div className='flex'>
                <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
                <div className='text-balance font-bold text-2xl my-auto mr-16'>
                    Systelle
                </div>
            </div>
            <div className='text-lg font-bold flex gap-5'>
                <Link to='/home' className={inactive}><button>Dashboard</button></Link>
                <Link to='/calendar' className={inactive}><button>Calendar</button></Link>
                <button className={inactive}>Health</button>
                <button className={inactive}>Exercise</button>
                    <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={()=>setOpen(!open)}>👤</button>
                    {open && (
                    <div className='fixed inset-0 bg-black/40 z-40 transition delay-150 duration-200 ease-in-out'>
                        <Menu />
                    </div>
                    )}
            </div>
        </div>
        <div className='bg-white/50 rounded-2xl max-w-[85%] mx-auto shadow-md mt-16 p-5'>
            <div className='bg-white flex rounded-full my-auto p-3 w-full '>
                <div className='w-10 h-10 rounded-full bg-slate-200 p-2'>👤</div>
                <div className='pl-5 text-xl font-bold my-auto'>Name:- Krati Gupta</div>
            </div>
            <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3 '>
                <div className='w-10 h-10 rounded-full bg-slate-200 p-2'>🗓</div>
                <div className='pl-5 text-xl font-bold my-auto'>DOB:- 10/06/2004</div>
            </div>
            <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3 '>
                <div className='w-10 h-10 rounded-full bg-slate-200 p-2'>✉</div>
                <div className='pl-5 text-xl font-bold my-auto'>Email:- krati123@gmail.com</div>
            </div>
            <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3 '>
                <div className='w-10 h-10 rounded-full bg-slate-200 p-2'>📆</div>
                <div className='pl-5 text-xl font-bold my-auto'>Cycle date:- 20th of everymonths</div>
            </div>
            <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3 '>
                <div className='w-10 h-10 rounded-full bg-slate-200 p-2'>🩸</div>
                <div className='pl-5 text-xl font-bold my-auto'>Cycle lasts upto:- 5 days</div>
            </div>
            <Link to='/home'>
                <button className='mt-3 w-full bg-violet-600 p-3 rounded-full mx-auto shadow-lg z-10 flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'>
                  Update
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Profile