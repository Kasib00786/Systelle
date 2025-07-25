import React from 'react';
import { Link } from 'react-router-dom';

const inactive =
  'hover:bg-indigo-50 hover:shadow-lg rounded-full px-5 py-2 hover:scale-105 transition delay-100 duration-200 ease-in-out';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-indigo-200 text-gray-800 overflow-x-hidden">
      <div className="bg-[url(/base3.jpg)] bg-cover bg-center min-h-screen">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* Left: Logo + Name */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 mr-2 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <span className="font-bold text-xl">Systelle</span>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6 font-medium">
          <button className={inactive}>Help</button>
          <Link to="/LandingAboutUs" className={inactive}>About</Link>
          <Link
            to="/login"
            className="bg-violet-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center mt-20 px-4">
        <h1 className="text-5xl font-extrabold text-black drop-shadow-md">
          Your Health, Your Power.
        </h1>
        <p className="mt-4 text-xl text-black/80">
          Track your cycle, understand your body, and stay in control with Systelle.
        </p>
        <Link to="/signup">
          <button className="mt-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition hover:scale-110">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-24 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {[
          {
            title: 'Cycle Tracker',
            desc: 'Predict your period and ovulation with precision.',
            img: 'tracker.jpg',
          },
          {
            title: 'Health Insights',
            desc: 'Stay informed with PCOS/PCOD risk alerts.',
            img: 'pcod.jpg',
          },
          {
            title: 'Mood & Symptom Logs',
            desc: 'Track how you feel daily and log symptoms easily.',
            img: 'mood.jpg',
          },
        ].map(({ title, desc, img }, i) => (
          <div
            key={i}
            className="bg-white/50 rounded-2xl shadow-md hover:scale-105 transition overflow-hidden"
          >
            <img src={img} alt={title} className="w-full h-56 p-2 rounded-2xl object-cover" />
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 p-6 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Systelle. All rights reserved.
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;