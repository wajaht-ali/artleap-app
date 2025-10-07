/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import AuthPageDesign from '@/app/Common/AuthPageDesign';
import Link from 'next/link';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className='hidden md:flex w-1/2 items-center justify-center h-screen relative overflow-hidden'>
                <AuthPageDesign />
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-screen px-6 py-12 bg-white text-gray-900">
                <h1 className="text-3xl font-semibold mb-8">Login Here</h1>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-[#EEEEEE] hover:cursor-pointer hover:bg-[#e3e3e3] rounded-full py-3 px-4 w-full focus-within:bg-[#FAFAFA] transition"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="text-sm font-medium">Log In with Google</span>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-[#EEEEEE] hover:cursor-pointer hover:bg-[#e3e3e3] rounded-full py-3 px-4 w-full focus-within:bg-[#FAFAFA] transition">
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">Log In with Github</span>
                    </button>
                </div>

                <div className="flex items-center w-full max-w-sm mb-6">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-4 text-sm text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                <form className="flex flex-col w-full max-w-md space-y-5">

                    <div className="flex flex-col">
                        <label className="text-sm mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="johndoe@email.com"
                            className="border-b border-gray-300 focus:border-blue-500 outline-none py-2 text-sm transition"
                        />
                    </div>

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

                    <div className='flex flex-row items-center justify-between'>
                        <label className="flex items-center space-x-2 text-sm text-gray-700 select-none hover:cursor-pointer">
                            <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                            <span>
                                Remember me
                            </span>
                        </label>
                        <button
                            type="submit"
                            className="bg-[#7B76F1] text-white font-medium py-2 px-4 rounded-full hover:opacity-90 text-[13px] hover:cursor-pointer"
                        >
                            LOG IN
                        </button>
                    </div>
                </form>

                <p className="text-sm text-gray-600 mt-8">
                    No Account Yet?{" "}
                    <Link href="/auth/signup" className="uppercase text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
