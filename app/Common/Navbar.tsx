// Navbar.tsx
"use client"
import React from "react";

export const Navbar = () => {
    return (
        <nav className="w-full relative z-20 px-6 sm:px-10 md:px-14 py-4 md:py-6 bg-transparent">
            <div className="flex items-center justify-between w-full">
                {/* Left: Menu Icon */}
                <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[39px] md:h-[39px] flex items-center justify-center cursor-pointer">
                    <svg
                        className="text-white w-6 h-6 sm:w-7 sm:h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                    <button className="w-[120px] h-[40px] sm:w-[160px] sm:h-[48px] md:w-[195px] md:h-[55px] border border-[#E0E0E0] rounded-[8px] md:rounded-[10px] text-black bg-white text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 transition">
                        Log in
                    </button>
                    <span className="text-white font-medium text-sm sm:text-base md:text-[18px]">
                        Go Premium
                    </span>
                </div>
            </div>
        </nav>
    );
};
