import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

export default function PeriodPain() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
              fetch('https://systelle.onrender.com/health/PeriodPain', {
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

      {/* Navigation Bar */}
      <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-50 flex-wrap'>
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
          <button 
            className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' 
            onClick={() => setOpen(!open)}
          >
            👤
          </button>
          {open && (
            <div className='fixed inset-0 bg-black/40 z-40 transition delay-150 duration-200 ease-in-out'>
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="p-10 max-w-4xl mx-auto mt-10 bg-white/60 rounded-2xl shadow-md backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6">Why does it pain during periods?</h1>
        <ul className="list-disc text-lg space-y-3 ml-6">
          <li><strong>Period pain</strong> (menstrual cramps) is caused by uterine contractions to shed the lining.</li>
          <li>These contractions are triggered by <strong>prostaglandins</strong>, hormone-like chemicals.</li>
          <li><strong>Strong contractions</strong> can reduce blood flow and oxygen, causing cramping pain.</li>
          <li>Pain is usually felt in the <strong>lower abdomen, back, or thighs</strong>.</li>
          <li>Can be worse in <strong>younger people</strong>, or if conditions like <strong>endometriosis</strong> are present.</li>
        </ul>

        {/* Styled Back Button */}
        <Link
          to="/health"
          className="mt-8 inline-block px-6 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium shadow-md transition duration-200"
        >
          ← Back to Health
        </Link>
      </div>
    </div>
  );
}

