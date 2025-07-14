import React,{useState} from 'react'
import Menu from './Menu';
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const btn='rounded-xl bg-white  hover:scale-105  w-32';
export const DailyUpdate = () => {
const [open,setOpen]=useState(false);
  return (
    <div className='bg-gradient-to-r from-pink-100 to-indigo-200 min-h-screen'>
        <div className='flex sticky top-10 max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-50'>
            <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
            <div className='text-balance font-bold text-2xl my-auto'>
                Systelle
            </div>
            <div className='text-lg font-bold pl-48 flex gap-10'>
                <button className={inactive}>Dashboard</button>
                <button className={isactive}>Calendar</button>
                <button className={inactive}>Health</button>
                <button className={inactive}>Exercise</button>
                <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-10 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={()=>setOpen(!open)}>👤</button>
                {open && (
                  <div className='fixed inset-0 bg-black/40 z-40 transition delay-150 duration-200 ease-in-out'>
                    <Menu />
                  </div>
                )}
            </div>
        </div>
        <div className='mt-16 max-w-[85%] bg-white/45 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>1.How was your flowing?</div>
            <div className='flex gap-2'>
              <button className={btn}>Light</button>
              <button className={btn}>Medium</button>
              <button className={btn}>Heavy</button>
              <button className={btn}>Super Heavy</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>2.Any Spotting or irregular spotting?</div>
            <div className='flex gap-2'>
              <button className='rounded-xl bg-white outline outline-1 hover:scale-105  w-64'>Yes</button>
              <button className='rounded-xl bg-white outline outline-1 hover:scale-105  w-64'>No</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>3.How are you felling?</div>
            <div className='flex gap-2'>
              <button className={btn}>Mood Swing</button>
              <button className={btn}>Not in control</button>
              <button className={btn}>Fine</button>
              <button className={btn}>Happy</button>
            </div>
        </div>
    </div>
  )
}
export default DailyUpdate;