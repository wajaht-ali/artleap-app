"use client"

import React, { useState } from "react";
import Image from "next/image";
import { GradientButton } from "./GradientButton";

export const PromptBar = () => {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (value.trim() !== "") {
            console.log("Prompt:", value);
            setValue("");
        }
    };

    return (
        <div className="w-[1228px] h-[387px] rounded-[20px]  bg-[linear-gradient(96.88deg,rgba(255,255,255,0.4)_-7.33%,rgba(255,255,255,0)_107.06%)] 
                        backdrop-blur-[20px] shadow-[0px_4px_30px_rgba(0,0,0,0.1)] 
                        flex flex-col justify-center items-center">
            <h1 className="text-white mb-8 font-bold text-[38px] leading-[100%] tracking-normal font-[Poppins]">
                Art Leap generate to your hearts content
            </h1>
            <div
                className="w-[970px] h-[81px] flex items-center justify-between 
                           rounded-[20px] border border-[#595959]  bg-[#1A1A1A]  px-4"
            >
                {/* Left Icon + Input */}
                <div className="flex items-center gap-3 flex-1">
                    <Image src="/image.png" alt="icon" width={24} height={24} />
                    <input
                        type="text"
                        placeholder="Write a prompt to generate"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="flex-1 bg-transparent outline-none 
                                   text-[20px] font-medium text-[#CACACA] placeholder-[#CACACA]"
                    />
                </div>

                {/* Right: Gradient Button */}
                <GradientButton text="Lets Go" onClick={handleSubmit} />
            </div>
        </div>
    );
};
