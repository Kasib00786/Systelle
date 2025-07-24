import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu';

const isactive = 'bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full max-h-14 my-auto';
const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';
const btn4 = 'rounded-xl bg-white hover:scale-105 w-32 text-sm';
const btn2 = 'rounded-xl bg-white hover:scale-105 w-64 text-sm';
const selectedBtn = 'bg-violet-700 text-white shadow-md'; // Add selected style

export const DailyUpdate = () => {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (questionKey, answer) => {
    setAnswers(prev => ({ ...prev, [questionKey]: answer }));
  };

  const ques4 = (key, ques, opt1, opt2, opt3, opt4) => (
    <div className='mt-2 max-w-[85%] bg-white/45 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
      <div className='font-semibold text-lg pl-5'>{ques}</div>
      <div className='flex gap-2'>
        {[opt1, opt2, opt3, opt4].map(opt => (
          <button
            key={opt}
            className={`${btn4} ${answers[key] === opt ? selectedBtn : ''}`}
            onClick={() => handleSelect(key, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  const ques2 = (key, ques, opt1, opt2) => (
    <div className='mt-2 max-w-[85%] bg-white/50 p-2 rounded-2xl mx-auto shadow-lg z-10 flex gap-2 justify-between'>
      <div className='font-semibold text-lg pl-5'>{ques}</div>
      <div className='flex gap-2'>
        {[opt1, opt2].map(opt => (
          <button
            key={opt}
            className={`${btn2} ${answers[key] === opt ? selectedBtn : ''}`}
            onClick={() => handleSelect(key, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
  useEffect(() => {
      fetch('https://systelle.onrender.com/calendar/updates', {
          method: 'GET',
          credentials: 'include'
      })
      .then(res => {
          if (res.status === 401) {
              window.location.replace('/login');
          }
      });
  }, []);
  const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/calendar/updates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // important for sending session cookie
      body: JSON.stringify({
        flowing: answers.q1,
        spotting: answers.q2,
        feelings: answers.q3,
        pain_level: answers.q4,
        sleep_quality: answers.q5,
        energy: answers.q6,
        mind: answers.q7,
        skin: answers.q8,
        hair: answers.q9
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Update saved successfully!');
      navigate('/calendar');
    } else {
      alert('Failed to save update.');
    }
  } catch (error) {
    console.error('Error sending update:', error);
    alert('Server error');
  }
};

  

  return (
    <div className='bg-[url(/base2.jpg)] bg-cover bg-center py-10 bg-fixed min-h-screen'>
      {/* Navigation Bar */}
      <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg z-50 flex-wrap'>
        <div className='flex'>
          <img src="/logo.png" alt="logo" className='w-20 h-12 my-auto' />
          <div className='text-balance font-bold text-2xl my-auto mr-16'>Systelle</div>
        </div>
        <div className='text-lg font-bold flex flex-wrap gap-x-5'>
          <Link to='/home' className={inactive}><button>Dashboard</button></Link>
          <button className={isactive}>Calendar</button>
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

      {/* Questions */}
      <div className='mt-6'>
        {ques4("q1", "1. How was your flowing?", "Light", "Medium", "Heavy", "Super Heavy")}
        {ques2("q2", "2. Any Spotting or irregular spotting?", "Yes", "No")}
        {ques4("q3", "3. How are you feeling?", "Mood Swing", "Not in control", "Fine", "Happy")}
        {ques4("q4", "4. What is your pain level?", "No pain", "Mild pain", "Moderate pain", "Severe pain")}
        {ques4("q5", "5. How was your sleep quality?", "Trouble falling asleep", "Woke up tired", "Restless", "Woke up refreshed")}
        {ques4("q6", "6. How Energetic are you today?", "Exhausted", "Tired", "Ok", "Energetic")}
        {ques4("q7", "7. How is your mind?", "Forgetful", "Brain fog", "Calm", "Stress")}
        {ques4("q8", "8. How you feel about your skin?", "Ok", "Good", "Acne", "Dry Skin")}
        {ques4("q9", "9. How you feel about your hair?", "Good hair day", "Oily hair day", "Dry hair day", "Hair loss")}
      </div>

      <button
        onClick={handleSubmit}
        className='mt-8 w-[15%] bg-violet-600 p-2 rounded-full mx-auto shadow-lg flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'
      >
        Update
      </button>
    </div>
  );
};

export default DailyUpdate;
