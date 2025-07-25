import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    useEffect(() => {
        fetch('https://systelle.onrender.com/login', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 401) {
                alert("You are already logged in");
                navigate('/login');
            }
        });
    }, []);
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
    try {
        const response = fetch('https://systelle.onrender.com/login', {
        method: 'POST',
        credentials: 'include', // <-- this is critical
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
        });

        const res = await response.json();

        if (res.success) {
            // Redirect to the home page
            window.location.href = res.redirectUrl;
        } else {
            alert("Login failed");
        }
    } catch (error) {
        console.error("Error during login", error);
    }
};




    return (
        <div className="min-h-screen flex items-center justify-center bg-[url(/base1.jpg)] bg-cover bg-center">
            <div className="bg-white/50 backdrop-blur-lg outline outline-2 outline-white rounded-2xl p-10 w-full max-w-md shadow-xl">
                <div className="flex mb-6">
                    <img src="/logo.png" alt="logo" className='w-15 h-10' />
                    <h1 className="text-2xl font-bold text-black">Systelle</h1>
                </div>

                <h1 className="text-center text-2xl font-bold text-black mb-6">Login</h1>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none"
                    />
                    {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

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
                        <Link to="/signup" className="text-purple-600 font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
