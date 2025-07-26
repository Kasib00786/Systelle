import React from 'react'
import { useState,useEffect } from 'react'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out'
const YogaBasic = () => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
        fetch('https://systelle.onrender.com/exercise/YogaBasic', {
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
      {/* Duration */}
            <div className="text-right mr-6 mt-8 mb-6">
              <span className="text-purple-800 border-2 border-purple-500 px-4 py-1 rounded-full font-bold text-lg">
                Duration: 10 mins
              </span>
            </div>
      
            {/* Child Pose */}
            <section className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mb-10">
              <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
                Child Pose (Balasana)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ul className="text-lg space-y-4 ml-6 md:ml-12">
                  <li>Kneel on the floor, touch your big toes together, and sit on your heels.</li>
                  <li>Separate your knees about hip-width apart.</li>
                  <li>Exhale and bend forward, bringing your chest down between your thighs.</li>
                  <li>Extend your arms in front of you, palms facing down.</li>
                  <li>Rest your forehead on the mat.</li>
                  <li>Breathe deeply and stay for 1–3 minutes.</li>
                </ul>
                <img src="/child.jpg" alt="Child Pose" className="rounded-lg w-full max-w-sm mx-auto" />
              </div>
            </section>
      
            {/* Supine Twist */}
            <section className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mb-10">
              <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
                Supine Twist (Supta Matsyendrasana)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ul className="text-lg space-y-4 ml-6 md:ml-12">
                  <li>Lie flat on your back with legs extended.</li>
                  <li>Hug your right knee to your chest.</li>
                  <li>Cross your right knee over your body to the left side.</li>
                  <li>Extend your right arm to the side and look over your right shoulder.</li>
                  <li>Keep your shoulders grounded and both knees relaxed.</li>
                  <li>Hold for 30 seconds to 1 minute, then switch sides.</li>
                </ul>
                <img src="/supine twist.jpg" alt="Supine Twist" className="rounded-lg w-full max-w-sm mx-auto" />
              </div>
            </section>
      
            {/* Cat-Cow Pose */}
            <section className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mb-10">
              <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
                Cat-Cow Pose (Marjaryasana-Bitilasana)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ul className="text-lg space-y-4 ml-6 md:ml-12">
                  <li>Start on all fours in a tabletop position.</li>
                  <li>Inhale: Arch your back, drop your belly, and lift your head and tailbone (Cow).</li>
                  <li>Exhale: Round your spine, tuck your chin to chest, and draw belly in (Cat).</li>
                  <li>Repeat slowly with breath for 1–2 minutes.</li>
                </ul>
                <img src="/catcow.jpg" alt="catcowpose" className="rounded-lg w-full max-w-sm mx-auto" />
              </div>
            </section>
      
            {/* Cobra Pose */}
            <section className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold bg-zinc-300 rounded-3xl text-gray px-6 py-2 w-max mx-auto mb-8">
                Cobra Pose (Bhujangasana)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ul className="text-lg space-y-4 ml-6 md:ml-12">
                  <li>Lie on your belly with your legs extended and tops of the feet on the floor.</li>
                  <li>Place your hands under your shoulders.</li>
                  <li>Inhale and gently lift your head, chest, and upper belly using back strength.</li>
                  <li>Keep your elbows slightly bent and shoulders relaxed.</li>
                  <li>Hold for 15–30 seconds, breathing deeply, then release.</li>
                </ul>
                <img src="/cobra.jpg" alt="Cobra Pose" className="rounded-lg w-full max-w-sm mx-auto" />
              </div>
            </section>
      
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

export default YogaBasic;