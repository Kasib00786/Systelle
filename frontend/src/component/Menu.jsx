import React from 'react'
import { Link } from 'react-router-dom'
const sty='flex p-2 bg-violet-50 shadow-md hover:scale-105 transition delay-50 duration-100 ease-in-out rounded-xl '
export const Menu = () => {
  return (
        <div className='fixed right-24 mt-28 w-60 rounded-xl bg-white/90 shadow-lg '>
        <div className='flex gap-3 flex-col p-4 text-xl font-bold'>
            <div className={sty}>
                <Link to='/profile'><button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black'>👤</button>
                <button className='pl-4 '>Krati Gupta</button></Link>
            </div>
            <div className={sty}>
                <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black font-semibold text-3xl'>i</button>
                <button className='pl-4'>Help</button>
            </div>
            <div className={sty}>
                <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black font-semibold text-3xl'>?</button>
                <button className='pl-4'>About Us</button>
            </div>
            <div className={sty}>
                <Link to='/'>
                <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black '>❌</button>
                <button className='pl-4'>Log Out</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default Menu;