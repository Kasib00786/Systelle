import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from './CircularProgress';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

export const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [riskPercent, setRiskPercent] = useState(null);
  const [dailyUpdateAvailable, setDailyUpdateAvailable] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('https://systelle.onrender.com/home', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 401) {
          navigate('/login');
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data && data.success) {
          setUserData(data);
          
        } else if (data) {
          console.log('Could not fetch user data');
        }
      })
      .catch(err => {
        console.error("Error fetching user data:", err);
      });
  }, []);


  // Fetch latest daily update and send to model
  useEffect(() => {
    if (!userData) return;

    fetch("http://localhost:5000/pcos/latest-data", {
      method: "GET",
      credentials: "include"
    })
      .then(res => {
        if (res.status === 404) {
          setDailyUpdateAvailable(false);
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (!data) return;
        axios.post('http://127.0.0.1:5000/predict', {
          How_was_your_flowing: data.flowing,
          Any_Spotting_or_irregular_spotting: data.spotting,
          What_is_your_pain_level: data.pain_level,
          How_was_your_sleep_quality: data.sleep_quality,
          How_you_feel_about_your_skin: data.skin,
          How_you_feel_about_your_hair: data.hair,
          Your_cycle_last_upto: data.lastsUpto || 5,
          Number_of_days_of_menstrual_cycle: userData.totalDays || 28
        }, { withCredentials: true })
          .then(res => {
            setRiskPercent(Math.round(res.data.pcod_pcos_chance_percent));
          })
          .catch(err => {
            console.error("Prediction failed:", err);
          });
      })
      .catch(err => {
        console.error("Failed to fetch daily update:", err);
        setDailyUpdateAvailable(false);
      });
  }, [userData]);


 if (!userData || !userData.totalDays || !userData.lastDate) {
  return (
    <div className="text-center mt-10 text-xl font-semibold text-red-600">
      Missing cycle data. Please update profile.
    </div>
  );
}

const totalDays = userData.totalDays;
const lastDate = userData.lastDate;

function getDaysLeftInCycle(lastDate, totalDays) {
  const last = new Date(lastDate);
  if (isNaN(last.getTime())) {
    console.error("Invalid lastDate:", lastDate);
    return 0;
  }
  const today = new Date();
  const diffTime = today - last;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysLeft = totalDays - diffDays;
  return daysLeft;
}


  const daysLeft = getDaysLeftInCycle(lastDate, totalDays);
  const percent = Math.min(100, Math.max(0, ((totalDays - daysLeft) / totalDays) * 100));

  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 min-h-screen'>
      {/* Navigation Bar */}
      <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-30 flex-wrap'>
        <div className='flex'>
          <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
          <div className='text-balance font-bold text-2xl my-auto mr-16'>
            Systelle
          </div>
        </div>
        <div className='text-lg font-bold flex flex-wrap gap-x-5'>
          <button className={isactive}>Dashboard</button>
          <Link to='/calendar' className={inactive}><button>Calendar</button></Link>
          <Link to='/health' className={inactive}><button>Health</button></Link>
          <Link to='/exercise' className={inactive}><button>Exercise</button></Link>
          <button className='w-14 h-14 rounded-full bg-gray-300 shadow-sm ml-7 hover:scale-105 transition delay-100 duration-200 ease-in-out z-50' onClick={() => setOpen(!open)}>👤</button>
          {open && (
            <div className='fixed inset-0 bg-black/40 z-40 transition delay-150 duration-200 ease-in-out'>
              <Menu />
            </div>
          )}
        </div>
      </div>

      {/* Container with Daily update and progress */}
      <div className='max-w-[85%] mx-auto bg-white/50 rounded-2xl mt-6 shadow-lg flex justify-between contain-content flex-wrap'>
        <div className='mt-20'>
          <h1 className='text-6xl pb-8 ml-16 font-bold'>Hii {userData?.name || '...'} !!</h1>
          <Link to='/calendar/updates'>
            <button className='bg-violet-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 rounded-2xl w-96 h-8 ml-16 text-2xl text-white font-semibold'>
              How was your day? 😊
            </button>
          </Link>
        </div>

        {/* Circular Progress */}
        <Link to='/calendar'>
          <div className="relative w-80 h-60 mr-16 mb-8 mt-8 flex items-center justify-center">
            <CircularProgress value={percent} size={230} strokeWidth={25} />
            <div className="absolute text-2xl font-bold text-gray-800 hover:scale-110 ease-in-out duration-200">
              {daysLeft} days to go
            </div>
          </div>
        </Link>
      </div>

      {/* Risk Result */}
      <div className="max-w-[85%] mx-auto mt-6 bg-white/50 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
        {!dailyUpdateAvailable ? (
          <p className="text-2xl font-bold text-red-600">Please submit today's update to view your PCOD/PCOS risk</p>
        ) : riskPercent !== null ? (
          <>
            <p className="text-4xl font-bold ml-16 mb-8 mt-8">Your PCOD/PCOS risk is {riskPercent}%</p>
            <div className="relative h-4 ml-8 mr-8 bg-white w-5/6 rounded-xl overflow-hidden">
              <div
                className={`absolute h-2 m-1 ${riskPercent < 35 ? 'bg-green-500' : riskPercent < 70 ? 'bg-yellow-500' : 'bg-red-500'} rounded-xl`}
                style={{ width: `${riskPercent}%` }}
              />
            </div>
          </>
        ) : (
          <p className="text-2xl font-bold text-gray-600">Loading risk score...</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;