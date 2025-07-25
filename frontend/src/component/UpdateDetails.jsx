import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import Menu from './Menu';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

const UpdateDetails = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    cycleStart: '',
    cycleDuration: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/update-details', {
      method: 'GET',
      credentials: 'include'
    }).then(res => {
      if (res.status === 401) {
        window.location.replace('/login');
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Details:', formData);
    alert('Details Updated!');
  };

  return (
    <div className="py-10 bg-[url(/base2.jpg)] bg-cover bg-center min-h-screen">
      {/* Navbar */}
      <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-30 flex-wrap'>
        <div className='flex'>
          <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
          <div className='text-balance font-bold text-2xl my-auto mr-16'>Systelle</div>
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
            <div className='fixed inset-0 bg-black/40 z-30 transition delay-150 duration-200 ease-in-out'>
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/* Update Form */}
      <div className="bg-white/70 max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Your Details</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="p-3 rounded-lg border focus:outline-none" required />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="p-3 rounded-lg border focus:outline-none" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="p-3 rounded-lg border focus:outline-none" required />
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-gray-600" />
            <input type="date" name="cycleStart" value={formData.cycleStart} onChange={handleChange}  placeholder="cycle start" className="p-3 rounded-lg border w-full focus:outline-none" required />
          </div>
          <input type="number" name="cycleDuration" value={formData.cycleDuration} onChange={handleChange} placeholder="Cycle Duration (in days)" className="p-3 rounded-lg border focus:outline-none" required />
          <button type="submit" className="bg-indigo-500 text-white rounded-lg p-3 hover:bg-indigo-600 transition">Update Details</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;