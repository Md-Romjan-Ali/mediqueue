"use client"
import { motion } from "motion/react"
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const email = form.get("email");
        const password = form.get("password");
        const { data: session, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });
        setError(error.message)
    };
    const googleHandle = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 1 }
                }}

                className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

                <div className="w-full max-w-md bg-gray-900 shadow-2xl rounded-3xl p-8">

                    {/* Heading */}
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-400">
                            WellCome Back
                        </h1>

                        <p className="text-gray-500 mt-2">
                            login to continue learning
                        </p>
                    </div>



                    {/* Form */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-3"
                    >
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Email
                                </span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input w-full"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Password
                                </span>
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className="input w-full"
                                required
                            />
                        </div>
                        <h1 className='text-red-600 font-semibold'>{error}</h1>
                        {/* Register Button */}
                        <button
                            type="submit"
                            className="
                                        btn
                                        w-full
                                        bg-green-600
                                        hover:bg-green-700
                                        text-white
                                        border-none
                                        rounded-xl
                                    "
                        >
                            login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-sm text-gray-400 my-6">
                        OR
                    </div>

                    {/* Google Button */}
                    <button
                        onClick={googleHandle}
                        className="
                                    btn
                                    w-full
                                    bg-white
                                    text-black
                                    border border-gray-300
                                    hover:bg-gray-100
                                    rounded-xl
                                "
                    >
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>
                </div>
            </motion.div>
        </div >
    );
};

export default LoginPage;