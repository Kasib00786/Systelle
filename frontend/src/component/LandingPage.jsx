import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 text-gray-800 overflow-x-hidden">
      <div className="bg-[url(/base3.jpg)] bg-cover bg-center min-h-screen relative">

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-4 
                        bg-white/30 backdrop-blur-xl rounded-b-2xl shadow-lg border-b border-white/40">
          <div className='flex flex-wrap'><img src="/logo.png" alt="logo" className='w-15 h-10' />
          <h2 className="text-3xl font-extrabold tracking-wide text-violet-700 drop-shadow-sm">
            Systelle
          </h2></div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="px-5 py-2 font-semibold text-violet-700 border border-violet-600 
                                 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-5 py-2 font-semibold bg-violet-600 text-white rounded-full shadow 
                                 hover:bg-violet-700 hover:shadow-xl transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 text-center mt-28 px-4">
          <h1 className="text-6xl font-extrabold text-black drop-shadow-xl leading-snug">
            Your Health.  
            <span className="block text-violet-700">Your Power.</span>
          </h1>

          <p className="mt-6 text-xl text-black/80 max-w-3xl mx-auto">
            Understand your cycle, track your symptoms, and stay connected with your body's rhythm — beautifully and effortlessly.
          </p>

          <Link to="/signup">
            <button className="mt-10 bg-violet-600 hover:bg-violet-700 text-white font-semibold 
                               px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-110">
              Get Started
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="relative z-10 mt-28 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {[
            {
              title: 'Cycle Tracker',
              desc: 'Predict your period and ovulation with beautiful accuracy.',
              img: 'tracker.jpg',
            },
            {
              title: 'Health Insights',
              desc: 'Understand your patterns & get smart PCOS/PCOD alerts.',
              img: 'pcod.jpg',
            },
            {
              title: 'Mood & Symptom Logs',
              desc: 'Track your emotions and symptoms in a mindful flow.',
              img: 'mood.jpg',
            },
          ].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="group bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg border border-white/30 overflow-hidden
                         transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/60"
            >
              <div className="relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-60 object-cover rounded-t-3xl group-hover:opacity-90 transition duration-300"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="relative z-10 mt-24 p-6 text-center text-gray-700 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-violet-700">Systelle</span>. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
