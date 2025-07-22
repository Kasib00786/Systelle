import React from 'react';
import { Link } from 'react-router-dom';

const sty = 'flex p-2 bg-violet-50 shadow-md hover:scale-105 transition delay-50 duration-100 ease-in-out rounded-xl';

export const Menu = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });

            const res = await response.json();

            if (res.message === "Logged out successfully") {
                window.location.href = '/login'; // redirect after logout
            } else {
                alert("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className='fixed right-24 mt-28 w-60 rounded-xl bg-white/90 shadow-lg '>
            <div className='flex gap-3 flex-col p-4 text-xl font-bold'>
                <div className={sty}>
                    <Link to='/profile'>
                        <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black'>👤</button>
                        <button className='pl-4'>Krati Gupta</button>
                    </Link>
                </div>
                <div className={sty}>
                    <Link to='/help'>
                        <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black font-semibold text-3xl'>i</button>
                        <button className='pl-4'>Help</button>
                    </Link>
                </div>
                <div className={sty}>
                    <Link to='/aboutus'>
                        <button className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black font-semibold text-3xl'>?</button>
                        <button className='pl-4'>About Us</button>
                    </Link>
                </div>
                <div className={sty}>
                    <button
                        onClick={handleLogout}
                        className='w-full flex items-center gap-4'
                    >
                        <span className='w-10 h-10 rounded-full bg-slate-200 outline outline-1 outline-black flex items-center justify-center'>❌</span>
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
