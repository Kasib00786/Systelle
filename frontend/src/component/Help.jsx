import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const Help = () => {
const [open,setOpen]=useState(false);
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
    </div>
  )
}

export default Help;