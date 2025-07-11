import React from 'react'
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full hover:shadow-md'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5'
export const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-pink-100 to-indigo-200 min-h-screen'>
        <div className='flex sticky top-10 max-w-[85%] bg-white/80 p-5 rounded-2xl mx-auto shadow-lg'>
            <img src="/logo.png" alt="logo" className='w-15 h-10' />
            <div className='text-balance font-bold text-2xl'>
                Systelle
            </div>
            <div className='text-lg font-bold pl-48 flex gap-10'>
                <button className={isactive}>Dashboard</button>
                <button className={inactive}>Calendar</button>
                <button className={inactive}>Health</button>
                <button className={inactive}>Exercise</button>
            </div>
        </div>
        <div className='max-w-[85%] h-60 mx-auto bg-white/80 rounded-2xl mt-16 shadow-lg'>
           <h1 className='text-3xl pt-16 pl-16 pr-16 font-bold'>Hii Krati</h1>
           <button className='bg-violet-600 rounded-full pl-6 pr-6 p-1 ml-14 mt-5 text-2xl text-white font-semibold hover:shadow-md hover:bg-violet-400'>How was you day?</button>
        </div>
        <div className='max-w-[85%] h-32 mx-auto bg-white/80 rounded-2xl mt-6 shadow-lg'>
           <h1 className='text-3xl font-bold pt-8 pl-16'>Congratulations</h1>
           <h1 className='text-lg font-seminold pl-16'>You have no risk of PCOD/PCOS</h1>
        </div>
    </div>
  )
}
export default Navbar;