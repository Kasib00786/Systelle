import React from 'react'
const isactive='bg-gradient-to-r from-pink-100 to-indigo-200 pl-5 pr-5 rounded-full hover:shadow-md'
const inactive='hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5'
export const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-pink-100 to-indigo-200 min-h-screen'>
        <div className='flex sticky top-10 max-w-[85%] bg-white/80 p-5 rounded-2xl mx-auto shadow-lg'>
            <img src="/logo.png" alt="logo" className='w-15 h-10' />
            <div className='text-balance font-bold text-2xl'>
                Systelle
            </div>
            <div className='text-lg font-bold pl-48 flex gap-10'>
                <button className={isactive}>Dashboard</button>
                <button className={inactive}>Calendar</button>
                <button className={inactive}>Health</button>
                <button className={inactive}>Exercise</button>
            </div>
        </div>
        <div className='max-w-[85%] mx-auto bg-white/80 rounded-2xl mt-16 shadow-lg flex flex-col md:flex-row justify-between items-center'>
           <div>
           <h1 className='text-6xl pb-8 pl-28 font-bold'>Hii Krati !!</h1>
           <button className='bg-violet-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 rounded-2xl w-96 h-8 ml-16 text-2xl text-white font-semibold'> How was you day? 😊 </button>
           </div>
           {/* Circular Progress */}
          <div className="relative w-80 h-60 mr-16 mb-8 mt-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5d4f9"
              strokeWidth="20"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#9333ea"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
            15 days<br />to go
          </div>
        </div>
        </div>
        <div className="max-w-[85%] mx-auto mt-8 bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div>
        <p className="text-4xl font-bold ml-16 mb-8 mt-8">You have no risk of PCOD/PCOS 🎉</p>
        </div>
        <div className="relative h-4 ml-8 mr-8 bg-gray-200 w-5/6 rounded-xl overflow-hidden">
          <div
            className="absolute h-2 m-1 bg-green-500 rounded-xl"
            style={{ width: "25%" }}
          />
        </div>
      </div>
    </div>
  )
}
export default Navbar;