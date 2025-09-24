// Navbar.tsx
import React from "react";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
    return (
        <nav className="w-full relative z-20 flex items-center justify-between px-14 py-6 bg-transparent">
            {/* Left: Menu Icon */}
            <div className="w-[39px] h-[39px] flex items-center justify-center cursor-pointer">
                <FiMenu className="text-white w-7 h-7" />
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-6">
                <button className="w-[195px] h-[55px] border border-[#E0E0E0] rounded-[10px] text-black bg-white font-medium hover:bg-gray-100 transition">
                    Log in
                </button>
                <span className="text-white font-medium text-[18px]">Go Premium</span>
            </div>
        </nav>
    );
};
