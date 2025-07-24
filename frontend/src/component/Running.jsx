import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

const Running = () => {
  const [open, setOpen] = useState(false);

  const exercises = [
    {
      title: "Warm-Up Jog",
      steps: [
        "Start by walking briskly for 1 minute.",
        "Transition into a light jog.",
        "Continue for 2–3 minutes.",
      ],
      image: "/warmup-jog.jpg",
    },
    {
      title: "Interval Running",
      steps: [
        "Jog for 1 minute.",
        "Run at moderate speed for 30 seconds.",
        "Repeat this cycle 5 times.",
      ],
      image: "/interval-run.jpg",
    },
    {
      title: "Steady Pace Run",
      steps: [
        "Maintain a comfortable running pace.",
        "Keep your breathing steady and deep.",
        "Run for 5 to 10 minutes depending on your stamina.",
      ],
      image: "/steady-run.jpg",
    },
    {
      title: "Cool Down Walk",
      steps: [
        "Walk slowly after your run.",
        "Relax your arms and shoulders.",
        "Take deep breaths.",
        "Continue walking for 2–3 minutes.",
      ],
      image: "/cooldown-walk.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-200 min-h-screen py-10">
      {/* Navbar */}
      <div className='flex justify-between items-center max-w-[85%] bg-white p-2 rounded-full mx-auto shadow-lg'>
        <div className='flex items-center'>
          <img src="/logo.png" alt="logo" className='w-12 h-12' />
          <h1 className="text-2xl font-bold ml-2">Systelle</h1>
        </div>
        <div className='flex items-center gap-4 font-semibold text-lg'>
          <Link to='/home' className={inactive}><button>Dashboard</button></Link>
          <Link to='/calendar' className={inactive}><button>Calendar</button></Link>
          <Link to='/health' className={inactive}><button>Health</button></Link>
          <Link to='/exercise' className={inactive}><button>Exercise</button></Link>
          <button className="w-12 h-12 rounded-full bg-gray-300 ml-4 hover:scale-105 transition" onClick={() => setOpen(!open)}>👤</button>
          {open && (
            <div className='fixed inset-0 bg-black/40 z-30 transition'>
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="text-right mr-10 mt-6">
        <span className="text-xl font-bold px-4 py-1 rounded-full border-2 border-purple-800 text-black">
          Duration: 15–20 mins
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 text-white py-3 px-8 mt-10 w-max mx-auto rounded-full">
        Running Routine
      </h2>

      {/* Exercise Cards */}
      {exercises.map((exercise, index) => (
        <section key={index} className="max-w-6xl mx-auto mt-10 bg-white/70 p-6 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white w-max px-6 py-2 rounded-full mx-auto mb-6">
            {exercise.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ul className="text-lg leading-relaxed list-decimal pl-6">
              {exercise.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <img src={exercise.image} alt={exercise.title} className="rounded-xl w-full max-w-sm mx-auto" />
          </div>
        </section>
      ))}

      {/* Complete Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-xl py-3 px-10 rounded-full shadow-md hover:scale-105 transition">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Running;