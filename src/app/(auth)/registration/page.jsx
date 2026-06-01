"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {

    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        setError("");

        const form = new FormData(e.target);

        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        // Password Validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!passwordRegex.test(password)) {
            return setError(
                "Password must be at least 8 characters and include one uppercase and one lowercase letter."
            );
        }

        const { data: session, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });
        console.log(session, error);
    };
    const googleHandle = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

            <div className="w-full max-w-md bg-gray-900 shadow-2xl rounded-3xl p-8">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-400">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Register to continue learning
                    </p>
                </div>

                {/* Error */}
                {error && (
                    <div className="alert alert-error mb-5 text-sm">
                        <span>{error}</span>
                    </div>
                )}

                {/* Form */}
                <form
                    onSubmit={handleRegister}
                    className="space-y-3"
                >

                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">
                                Name
                            </span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input w-full"
                            required
                        />
                    </div>

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

                        <p className="text-xs text-gray-500 mt-2">
                            Password must contain at least 8 characters,
                            one uppercase and one lowercase letter.
                        </p>
                    </div>

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
                        Register
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
        </div>
    );
};

export default RegisterForm;