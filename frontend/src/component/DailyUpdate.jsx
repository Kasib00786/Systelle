import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const btn4='rounded-xl bg-white  hover:scale-105  w-32 text-sm';
const btn2='rounded-xl bg-white hover:scale-105  w-64 text-sm'

{/*made a function to add questions with 4 options to answer*/}
function ques4(ques,opt1,opt2,opt3,opt4){
  return(
    <div className='mt-2 max-w-[85%] bg-white/45 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
          <div className='font-semibold text-lg pl-5'>{ques}</div>
            <div className='flex gap-2'>
              <button className={btn4}>{opt1}</button>
              <button className={btn4}>{opt2}</button>
              <button className={btn4}>{opt3}</button>
              <button className={btn4}>{opt4}</button>
            </div>
      </div>
  )
}
{/*function to add question with 2 options to answer*/}
function ques2(ques,opt1,opt2){
  <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
      <div className='font-semibold text-lg pl-5'>{ques}</div>
        <div className='flex gap-2'>
          <button className={btn2}>{opt1}</button>
          <button className={btn2}>{opt2}</button>
        </div>
  </div>
}
export const DailyUpdate = () => {
const [open,setOpen]=useState(false);
  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 bg-fixed min-h-screen'>
        {/*Navigation bar */}
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

        {/*Quetions */}
        <div className='mt-6'>
          {ques4("1. How was your flowing?","Light","Medium","Heavy","Super Heavy")}
        </div>
        {ques2("2. Any Spotting or irregular spotting?","Yes","No")}
        {ques4("3. How are you feeling?","Mood Swing","Not in control","Fine","Happy")}
        {ques4("4. What is your pain level?","No pain","Mild pain","Moderate pain","Severe pain")}
        {ques4("5. How was your sleep quality?","Trouble falling asleep","Woke up tired","Restless","Woke up refreshed")}
        {ques4("6. How Energetic are you today?","Exhausted","Tired","Ok","Energetic")}
        {ques4("7. How is your mind?",'Forgetful','Brain fog','Calm','Stress')}
        {ques4('8. How you feel about your skin?','Ok','Good','Acne','Dry Skin')}
        {ques4('9. How you feel about your hair?','Good hair day','Oily hair day','Dry hair day','Hair loss')}
        <Link to='/calendar'>
        <button className='mt-2 w-[85%] bg-violet-600 p-2 rounded-full mx-auto shadow-lg z-10 flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'>
          Update
        </button>
        </Link>
    </div>
  );
}
export default DailyUpdate;