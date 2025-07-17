import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Updateform() {
//   const [form, setForm] = useState({
//     name: '',
//     dob: '',
//     age: '',
//     cycleLength: '',
//     lastPeriod: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', form);
//     // Add navigation or API call here
//   };

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 to-indigo-200 flex items-center justify-center p-6">
      <form
        // onSubmit={handleSubmit}
        action="/home"
        className="w-[50%] bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Update Us
        </h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">• Name</label>
            <input
              type="text"
              name="name"
              // value={form.name}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
              required
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              • Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              // value={form.dob}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">• Age</label>
            <input
              type="number"
              name="age"
              // value={form.age}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your age"
              required
            />
          </div>

          {/* Cycle Length */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              • Number of days of menstrual cycle
            </label>
            <input
              type="number"
              name="cycleLength"
              // value={form.cycleLength}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g., 28"
              required
            />
          </div>

          {/* Last Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              • When did you have your last period
            </label>
            <input
              type="date"
              name="lastPeriod"
              // value={form.lastPeriod}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              • Your cycle last upto
            </label>
            <input
              type="number"
              name="cycleLength"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g., 5"
              required
            />
          </div>
          
        </div>

        <input
          type="submit"
          value='Submit Your Details'
          className="mt-6 w-full py-3 bg-violet-600 flex justify-center transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-violet-700 text-white font-bold rounded-3xl"
        />
          
        
      </form>
    </div>
  );
}
