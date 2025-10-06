/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleOnClick = (): void => {
        window.location.href = "/auth/login";
    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="hidden md:flex w-1/2 items-center justify-center h-screen relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/signup-bg-left.png')" }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-around text-center text-white font-inter">
                    <div className="flex flex-col items-center space-y-2">
                        <Image
                            src="/assets/icons/artleap-svg-logo.svg"
                            alt="ArtLeap.ai logo"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <h2 className="text-3xl font-bold">ArtLeap.ai</h2>
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                            Create and Connect with Artists <br />
                            from all over the world
                        </h1>

                        <p className="text-base text-gray-200">
                            Take the leap, and we'll turn it into art!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-screen px-6 py-12 bg-white text-gray-900">
                {/* Heading */}
                <h1 className="text-3xl font-semibold mb-8">Create Account</h1>

                {/* Social Sign Up */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-[#EEEEEE] hover:cursor-pointer hover:bg-[#e3e3e3] rounded-full py-3 px-4 w-full focus-within:bg-[#FAFAFA] transition"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="text-sm font-medium">Sign up with Google</span>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-[#EEEEEE] hover:cursor-pointer hover:bg-[#e3e3e3] rounded-full py-3 px-4 w-full focus-within:bg-[#FAFAFA] transition">
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">Sign up with Github</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center w-full max-w-sm mb-6">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-4 text-sm text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Form */}
                <form className="flex flex-col w-full max-w-md space-y-5">
                    {/* Username */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            placeholder="johndadev"
                            className="border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="johndoe@email.com"
                            className="border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="text-sm mb-1 font-medium">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="***********"
                            className="border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm pr-10 transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 bottom-2 text-gray-500 hover:text-gray-700 text-sm"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Terms and Conditions */}
                    <div className='flex flex-row items-center justify-between'>
                        <label className="flex items-center space-x-2 text-sm text-gray-700 select-none hover:cursor-pointer">
                            <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                            <span>
                                I accept the{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Terms & Conditions
                                </a>
                            </span>
                        </label>
                        <button
                            type="submit"
                            className="bg-[#7B76F1] text-white font-medium py-2 px-4 rounded-full hover:opacity-90 text-[13px] hover:cursor-pointer"
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>

                {/* Footer link */}
                <p className="text-sm text-gray-600 mt-8">
                    Own an Account?{" "}
                    <a href="/auth/login" className="text-blue-600 font-semibold hover:underline">
                        LOG IN
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
