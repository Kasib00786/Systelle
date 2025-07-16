import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url(/base1.jpg)] bg-cover bg-center">
            <div className="bg-white/50 backdrop-blur-lg outline outline-2 outline-white rounded-2xl p-10 w-full max-w-md shadow-xl">
                <div className="flex mb-6">
                    <img src="/logo.png" alt="logo" className='w-15 h-10' />
                    <h1 className="text-2xl font-bold text-black">Systelle</h1>
                </div>

                <h1 className="text-center text-2xl font-bold text-black mb-6">
                    Login
                </h1>

                <form className="flex flex-col space-y-4" action='/home'>
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none"
                    />
                        <input 
                        type="submit"
                        value="Log in"
                        className="bg-violet-600 flex justify-center transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-violet-700 text-white font-bold py-3 rounded-3xl"
                    />
                    
                </form>

                <div className="text-center mt-4 text-sm">
                    <p className="text-black">Forgot password?</p>
                    <p className="mt-2 text-black">
                        Don’t have an account?{" "}
                        <Link to='signup'>
                        <a href="#" className="text-purple-600 font-medium hover:underline">
                            Sign up
                        </a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;