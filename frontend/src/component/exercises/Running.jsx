import React from 'react'
import { useState,useEffect } from 'react'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
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
      image: "/WarmupJog.webp",
    },
    {
      title: "Interval Running",
      steps: [
        "Jog for 1 minute.",
        "Run at moderate speed for 30 seconds.",
        "Repeat this cycle 5 times.",
      ],
      image: "/intervalrun.jpg",
    },
    {
      title: "Steady Pace Run",
      steps: [
        "Maintain a comfortable running pace.",
        "Keep your breathing steady and deep.",
        "Run for 5 to 10 minutes depending on your stamina.",
      ],
      image: "/steadyrun.jpg",
    },
    {
      title: "Cool Down Walk",
      steps: [
        "Walk slowly after your run.",
        "Relax your arms and shoulders.",
        "Take deep breaths.",
        "Continue walking for 2–3 minutes.",
      ],
      image: "/CooldownWalk.webp",
    },
  ];
  useEffect(() => {
        fetch('https://systelle.onrender.com/exercise/Running', {
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
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 min-h-screen'>
      <div className='flex justify-between  max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg flex-wrap'>
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
          <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={() => setOpen(!open)}>👤</button>
          {open && (
            <div className='fixed inset-0 bg-black/40 z-30 transition delay-150 duration-200 ease-in-out'>
              <Menu />
            </div>
          )}
        </div>
      </div>
      <div className="text-right mr-6 mt-8 mb-6">
        <span className="text-purple-800 border-2 border-purple-500 px-4 py-1 rounded-full font-bold text-lg">
          Duration: 10 mins
        </span>
      </div>

      {/* Exercise Cards */}
      {exercises.map((exercise, index) => (
        <section key={index} className="mb-10">
          <div className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
            {exercise.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ul className="text-lg space-y-4 ml-6 md:ml-12">
              {exercise.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <img src={exercise.image} alt={exercise.title} className="rounded-lg  h-56 w-full max-w-sm mx-auto" />
          </div></div>
        </section>
      ))}

      <div className="text-center mt-10">
        <Link to='/exercise'>
        <button className="bg-violet-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 rounded-2xl text-white px-8 py-3 text-lg font-bold ">
          Complete
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Running;