import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

export default function PeriodColor() {
  const [open, setOpen] = useState(false);
useEffect(() => {
            fetch('http://localhost:5000/health/PeriodColor', {
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
    <div className="bg-[url(/base2.jpg)] bg-cover bg-center bg-fixed py-10 min-h-screen">

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
        <h1 className="text-3xl font-bold mb-6">What Does My Period Color Mean?</h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-indigo-100 text-indigo-800">
              <tr>
                <th className="p-3 font-semibold border-r border-gray-300">Color</th>
                <th className="p-3 font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-red-600">Bright red</td>
                <td className="p-3">Fresh, steady flow – common at start of period</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-red-800">Dark red</td>
                <td className="p-3">Older blood, slower flow – often seen during sleep or later in cycle</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-brown-700">Brown/Black</td>
                <td className="p-3">Very old blood – leftover from previous days</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-pink-500">Pink</td>
                <td className="p-3">Lighter flow or mixed with cervical fluid – may happen at the beginning or end</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-orange-500">Orange</td>
                <td className="p-3">Mixed with discharge – could be a sign of infection if odor or itching is present</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-3 font-medium text-gray-600">Gray</td>
                <td className="p-3">Unusual – may indicate infection or miscarriage (see a doctor)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Back Button */}
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

