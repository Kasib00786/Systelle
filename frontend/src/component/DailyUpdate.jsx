import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const btn4='rounded-xl bg-white  hover:scale-105  w-32 text-sm';
const btn2='rounded-xl bg-white hover:scale-105  w-64 text-sm'
export const DailyUpdate = () => {
const [open,setOpen]=useState(false);
  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 bg-fixed min-h-screen'>
        <div className='flex justify-between  max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-50 flex-wrap'>
                    <div className='flex'>
                      <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
                    <div className='text-balance font-bold text-2xl my-auto mr-16'>
                        Systelle
                    </div>
                    </div>
                    <div className='text-lg font-bold flex flex-wrap gap-x-5'>
                        <Link to='/home' className={inactive}><button>Dashboard</button></Link>
                        <button className={isactive}>Calendar</button>
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
        <div className='mt-8 max-w-[85%] bg-white/45 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>1. How was your flowing?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Light</button>
              <button className={btn4}>Medium</button>
              <button className={btn4}>Heavy</button>
              <button className={btn4}>Super Heavy</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>2. Any Spotting or irregular spotting?</div>
            <div className='flex gap-2'>
              <button className={btn2}>Yes</button>
              <button className={btn2}>No</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>3. How are you feeling?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Mood Swing</button>
              <button className={btn4}>Not in control</button>
              <button className={btn4}>Fine</button>
              <button className={btn4}>Happy</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>4. What is your pain level?</div>
            <div className='flex gap-2'>
              <button className={btn4}>No pain</button>
              <button className={btn4}>Mild pain</button>
              <button className={btn4}>Moderate pain</button>
              <button className={btn4}>Severe pain</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5 my-auto'>5. How was your sleep quality?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Trouble falling asleep</button>
              <button className={btn4}>Woke up tired</button>
              <button className={btn4}>Restless</button>
              <button className={btn4}>Woke up refreshed</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5 my-auto'>6. How Energetic are you today?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Exhausted</button>
              <button className={btn4}>Tired</button>
              <button className={btn4}>Ok</button>
              <button className={btn4}>Energetic</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5 my-auto'>7. How is your mind?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Forgetful</button>
              <button className={btn4}>Brain fog</button>
              <button className={btn4}>Calm</button>
              <button className={btn4}>Stress</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5 my-auto'>8. How you feel about your skin?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Ok</button>
              <button className={btn4}>Good</button>
              <button className={btn4}>Acne</button>
              <button className={btn4}>Dry skin</button>
            </div>
        </div>
        <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5 my-auto'>9. How you feel about your hair?</div>
            <div className='flex gap-2'>
              <button className={btn4}>Good hair day</button>
              <button className={btn4}>dry hair day</button>
              <button className={btn4}>Oily hair day</button>
              <button className={btn4}>hair loss</button>
            </div>
        </div>
        <Link to='/calendar'>
        <button className='mt-2 w-[85%] bg-violet-600 p-2 rounded-full mx-auto shadow-lg z-10 flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'>
          Update
        </button>
        </Link>
    </div>
  )
}
export default DailyUpdate;