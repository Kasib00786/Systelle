import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const inactive = 'hover:bg-indigo-50 hover:shadow-lg rounded-full pr-5 pl-5 max-h-10 my-auto hover:scale-105 transition delay-100 duration-200 ease-in-out';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://systelle.onrender.com/home/profile', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 401) {
                window.location.replace('/login');
            }
            return res.json();
        })
        .then(data => {
            setUserData(data);
        })
        .catch(err => {
            console.error('Error fetching user profile:', err);
        });
    }, []);
    return (
        <div className='bg-[url(/base2.jpg)] bg-cover bg-center bg-fixed py-10 min-h-screen'>    
            <div className='flex justify-between max-w-[85%] bg-white/80 p-2 rounded-2xl mx-auto shadow-lg flex-wrap'>
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

            <div className='bg-white/50 rounded-2xl max-w-[85%] mx-auto shadow-md mt-5 p-5'>
                <div className='bg-white flex rounded-full my-auto p-3 w-full'>
                    <div className='w-10 h-10 rounded-full bg-slate-200 p-2 my-auto'>👤</div>
                    <div className='pl-5 sm:text-xl font-bold my-auto'>
                        Name: {userData?.name || '...'}
                    </div>
                </div>

                <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3'>
                    <div className='w-10 h-10 rounded-full bg-slate-200 p-2 my-auto'>🗓</div>
                    <div className='pl-5 sm:text-xl font-bold my-auto'>
                        DOB: {userData?.dob || '...'}
                    </div>
                </div>

                <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3'>
                    <div className='w-10 h-10 rounded-full bg-slate-200 p-2 my-auto'>✉</div>
                    <div className='pl-5 sm:text-xl font-bold my-auto text-ellipsis'>
                        Email: {userData?.email || '...'}
                    </div>
                </div>

                <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3'>
                    <div className='w-10 h-10 rounded-full bg-slate-200 p-2 my-auto'>📆</div>
                    <div className='pl-5 sm:text-xl font-bold my-auto'>
                        Cycle date: {userData?.cycleStart || '...'}
                    </div>
                </div>

                <div className='bg-white flex rounded-full my-auto p-3 w-full mt-3'>
                    <div className='w-10 h-10 rounded-full bg-slate-200 p-2 my-auto'>🩸</div>
                    <div className='pl-5 sm:text-xl font-bold my-auto'>
                        Cycle lasts up to: {userData?.cycleDuration || '...'}
                    </div>
                </div>

                <Link to='/home'>
                    <button className='mt-3 w-full bg-violet-600 p-3 rounded-full mx-auto shadow-lg z-10 flex justify-center text-xl font-bold text-white hover:scale-105 hover:bg-violet-800 delay-150 ease-in-out duration-200'>
                        Update
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;