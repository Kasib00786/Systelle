import React from 'react'
import { useState,useEffect } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const Workout = () => {
  const [open, setOpen] = useState(false);
  const stretches = [
    {
      title: "Shoulder Stretch",
      steps: [
        "Raise right arm overhead.",
        "Lean your body gently.",
        "Hold for 15-20 seconds, change side.",
        "Repeat this for 2 mins.",
      ],
      image: "/shoulder.jpg",
    },
    {
      title: "Side Stretch",
      steps: [
        "Stand tall with feet shoulder-width apart.",
        "Raise your right arm overhead.",
        "Slowly bend to the left, keeping your core engaged.",
        "Hold for 15-20 seconds.",
        "Return to center and repeat on the other side.",
      ],
      image: "/stretch.jpg",
    },
    {
      title: "Neck Stretch",
      steps: [
        "Sit or stand tall.",
        "Gently tilt your head to the right (ear towards shoulder).",
        "Place your right hand on the left side of your head for a deeper stretch.",
        "Hold. Repeat on the other side.",
      ],
      image: "/neck.jpg",
    },
    {
      title: "Triceps Stretch",
      steps: [
        "Raise your right arm overhead.",
        "Bend the elbow so your hand touches the upper back.",
        "Use your left hand to gently push the elbow back.",
        "Hold. Switch arms.",
      ],
      image: "/tricep.jpg",
    },
  ];
  useEffect(() => {
        fetch('https://systelle.onrender.com/exercise/Workout', {
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

      {stretches.map((stretch, index) => (
        <section key={index} className="mb-10">
          <div className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
              {stretch.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <ul className="text-lg space-y-4 ml-6 md:ml-12">
                {stretch.steps.map((step, i) => (
                  <li key={i}>Step {i + 1}: {step}</li>
                ))}
              </ul>

              <img src={stretch.image} alt={stretch.title} className="rounded-lg w-full max-w-sm mx-auto" />
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

export default Workout;