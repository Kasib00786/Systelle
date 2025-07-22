import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

export default function CrampRelief() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-[url("/base2.jpg")] bg-cover bg-center bg-fixed py-10 min-h-screen'>
      {/* Navbar */}
      <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-50 flex-wrap'>
        <div className='flex'>
          <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
          <div className='font-bold text-2xl my-auto mr-16'>Systelle</div>
        </div>
        <div className='text-lg font-bold flex flex-wrap gap-x-5'>
          <Link to='/home' className={inactive}>Dashboard</Link>
          <Link to='/calendar' className={inactive}>Calendar</Link>
          <Link to='/health' className={inactive}>Health</Link>
          <Link to='/exercise' className={inactive}>Exercise</Link>
          <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105' onClick={() => setOpen(!open)}>👤</button>
          {open && (
            <div className='fixed inset-0 bg-black/40 z-40'>
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="p-10 max-w-4xl mx-auto mt-10 bg-white/60 rounded-2xl shadow-md backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6">🩸 How to Reduce Period Cramps</h1>
        <ul className="list-disc text-lg space-y-4 ml-6 text-gray-800">
          <li><strong>Apply Heat</strong> – Use a heating pad or hot water bottle on your lower abdomen.</li>
          <li><strong>Light Exercise</strong> – Walking, stretching, or yoga improves blood flow and eases pain.</li>
          <li><strong>Hydrate</strong> – Drinking warm water helps reduce bloating and muscle tightness.</li>
          <li><strong>Pain Relievers</strong> – Ibuprofen or naproxen (NSAIDs) reduce prostaglandin levels.</li>
          <li><strong>Massage</strong> – Gently massaging the lower belly with essential oils can ease cramps.</li>
          <li><strong>Avoid Caffeine & Salt</strong> – These increase bloating and discomfort.</li>
          <li><strong>Warm Bath</strong> – Helps relax muscles and relieve stress.</li>
          <li><strong>Sleep Well</strong> – Rest and proper sleep help your body cope better with pain.</li>
          <li><strong>Herbal Teas</strong> – Chamomile, ginger, and peppermint teas have soothing effects.</li>
          <li><strong>Track Your Cycle</strong> – Apps help you prepare ahead for symptom management.</li>
        </ul>
        <div className="mt-8 text-center">
          <Link to="/Health" className="inline-block px-6 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium shadow-md">← Back to Health</Link>
        </div>
      </div>
    </div>
  );
}
