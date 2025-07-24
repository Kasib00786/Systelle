import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from './Menu'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  format,
  isSameMonth,
  isSameDay
} from "date-fns";
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'

export default function Calendar() {
  const [open,setOpen]=useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDates, setSelectedDates] = useState([]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weeks = [];
  let day = startDate;
  while (day <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day = addDays(day, 1);
    }
    weeks.push(week);
  }

  const toggleDate = (d) => {
    setSelectedDates(prev => {
      const exists = prev.find(pd => isSameDay(pd, d));
      if (exists) return prev.filter(pd => !isSameDay(pd, d));
      return [...prev, d];
    });
  };

  const isSelected = d => selectedDates.some(pd => isSameDay(pd, d));
  useEffect(() => {
      fetch('https://systelle.onrender.com/calendar', {
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
      {/*Navigation Bar */}
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
      {/*Calendar */}
    <div className="max-w-[70%] mx-auto p-6 mt-12 bg-white/70 rounded-xl shadow-xl">
      {/* Month navigation */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, -1))} className="px-3 py-1 rounded hover:bg-purple-100">&lt;</button>
        <h2 className="text-lg font-semibold">{format(currentMonth, 'LLLL yyyy').toUpperCase()}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="px-3 py-1 rounded hover:bg-purple-100">&gt;</button>
      </div>

      {/* Weekday headings */}
      <div className="grid grid-cols-7 gap-6 text-center text-xs font-medium text-purple-700">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} className="py-1 bg-purple-100 rounded">{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-6 mt-6">
        {weeks.flat().map((d, i) => {
          const inMonth = isSameMonth(d, monthStart);
          const todayHere = isSameDay(d, today);
          const sel = isSelected(d);

          let style = "";
          if (sel) style = "bg-pink-300 text-white";
          else if (todayHere) style = "ring-2 ring-purple-500";

          return (
            <div
              key={i}
              className={`h-10 flex items-center justify-center rounded cursor-pointer ${!inMonth ? 'bg-gray-100' : ''}`}
              onClick={() => inMonth && toggleDate(d)}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-full transition ${style}`}>
                {format(d, 'd')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Link to='/calendar/updates'>
            <button className='mt-8 w-[15%] bg-violet-600 p-2 rounded-full mx-auto shadow-lg z-10 flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'>
              Update
            </button>
            </Link>
    </div>
  );
}
