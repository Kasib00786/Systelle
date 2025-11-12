import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function BloodAmount() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
            fetch('https://systelle.onrender.com/health/BloodAmount', {
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
      <Navbar />

      {/* Page Content */}
      <div className="p-10 max-w-4xl mx-auto mt-10 bg-white/60 rounded-2xl shadow-md backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6">How Much Period Blood Is Normal?</h1>

        <ul className="list-disc text-lg space-y-4 ml-6 text-gray-800">
          <li><strong>On average</strong>, people lose 30–80 ml of blood per cycle (about 2–6 tablespoons).</li>
          <li>It may feel like more due to <strong>fluid, mucus, and tissue</strong> mixed in.</li>
          <li>A <strong>heavy flow</strong> is typically over 80 ml or soaking through pads/tampons every 1–2 hours.</li>
          <li>If you're changing protection <strong>very frequently</strong> or bleeding for more than 7 days, it’s best to consult a doctor.</li>
        </ul>

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
