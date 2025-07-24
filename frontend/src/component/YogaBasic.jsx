import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

const YogaBasics = () => {
  const [open, setOpen] = useState(false);

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
          <Link to='/health' className={inactive} > <button>Health</button></Link>
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
          Duration: 10 mins
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 text-white py-3 px-8 mt-10 w-max mx-auto rounded-full">
        Yoga Basics
      </h2>

      {/* Child Pose */}
      <section className="max-w-6xl mx-auto mt-10 bg-white/70 p-6 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white w-max px-6 py-2 rounded-full mx-auto mb-6">
          Child Pose (Balasana)
        </h3>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="text-lg leading-relaxed list-decimal pl-6">
            <li>Kneel on the floor, touch your big toes together, and sit on your heels.</li>
            <li>Separate your knees about hip-width apart.</li>
            <li>Exhale and bend forward, bringing your chest down between your thighs.</li>
            <li>Extend your arms in front of you, palms facing down.</li>
            <li>Rest your forehead on the mat.</li>
            <li>Breathe deeply and stay for 1–3 minutes.</li>
          </ul>
          <img src="/child.jpg" alt="Child Pose" className="rounded-xl w-full max-w-sm mx-auto" />
        </div>
      </section>

      {/* Supine Twist */}
      <section className="max-w-6xl mx-auto mt-10 bg-white/70 p-6 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white w-max px-6 py-2 rounded-full mx-auto mb-6">
          Supine Twist (Supta Matsyendrasana)
        </h3>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="text-lg leading-relaxed list-disc pl-6">
            <li>Lie flat on your back with legs extended.</li>
            <li>Hug your right knee to your chest.</li>
            <li>Cross your right knee over your body to the left side.</li>
            <li>Extend your right arm to the side and look over your right shoulder.</li>
            <li>Keep your shoulders grounded and both knees relaxed.</li>
            <li>Hold for 30 seconds to 1 minute, then switch sides.</li>
          </ul>
          <img src="/supinetwist.jpg" alt="Supine Twist" className="rounded-xl w-full max-w-sm mx-auto" />
        </div>
      </section>

      {/* Cat-Cow Pose */}
      <section className="max-w-6xl mx-auto mt-10 bg-white/70 p-6 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white w-max px-6 py-2 rounded-full mx-auto mb-6">
          Cat-Cow Pose (Marjaryasana-Bitilasana)
        </h3>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="text-lg leading-relaxed list-disc pl-6">
            <li>Start on all fours in a tabletop position.</li>
            <li>Inhale: Arch your back, drop your belly, and lift your head and tailbone (Cow).</li>
            <li>Exhale: Round your spine, tuck your chin to chest, and draw belly in (Cat).</li>
            <li>Repeat slowly with breath for 1–2 minutes.</li>
          </ul>
          <div className="space-y-4">
            <img src="/catcow1.jpg" alt="Cat Pose" className="rounded-xl" />
            <img src="/catcow2.jpg" alt="Cow Pose" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Cobra Pose */}
      <section className="max-w-6xl mx-auto mt-10 bg-white/70 p-6 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white w-max px-6 py-2 rounded-full mx-auto mb-6">
          Cobra Pose (Bhujangasana)
        </h3>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <ul className="text-lg leading-relaxed list-decimal pl-6">
            <li>Lie on your belly with your legs extended and tops of the feet on the floor.</li>
            <li>Place your hands under your shoulders.</li>
            <li>Inhale and gently lift your head, chest, and upper belly using back strength.</li>
            <li>Keep your elbows slightly bent and shoulders relaxed.</li>
            <li>Hold for 15–30 seconds, breathing deeply, then release.</li>
          </ul>
          <img src="/cobra.jpg" alt="Cobra Pose" className="rounded-xl w-full max-w-sm mx-auto" />
        </div>
      </section>

      {/* Complete Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-xl py-3 px-10 rounded-full shadow-md hover:scale-105 transition">
          Complete
        </button>
      </div>
    </div>
  );
};

export default YogaBasics;