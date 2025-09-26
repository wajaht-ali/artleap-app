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
        <div
            className="
        w-full max-w-[1228px] 
        h-auto md:h-[387px] 
        rounded-[20px]  
        bg-[linear-gradient(96.88deg,rgba(255,255,255,0.4)_-7.33%,rgba(255,255,255,0)_107.06%)] 
        backdrop-blur-[20px] 
        shadow-[0px_4px_30px_rgba(0,0,0,0.1)] 
        flex flex-col justify-center items-center 
        px-4 sm:px-6 md:px-8 py-8
      "
        >
            <h1
                className="
          text-white font-bold font-[Poppins] tracking-normal leading-[110%] 
          text-base  sm:text-2xl md:text-[38px] 
          mb-6 md:mb-8 text-center
        "
            >
                Art Leap generate to your hearts content
            </h1>

            <div
                className="
          w-full max-w-[970px] 
          h-[60px] sm:h-[70px] md:h-[81px] 
          flex items-center justify-between 
          rounded-[16px] md:rounded-[20px] 
          border border-[#595959] 
          bg-[#1A1A1A] 
          px-3 sm:px-4
        "
            >
                {/* Left Icon + Input */}
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <Image src="/image.png" alt="icon" width={24} height={24} />
                    <input
                        type="text"
                        placeholder="Write a prompt to generate"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="
              flex-1 bg-transparent outline-none 
              text-[12px] sm:text-base md:text-[20px] 
              font-medium text-[#CACACA] placeholder-[#CACACA]
            "
                    />
                </div>

                {/* Right: Gradient Button */}
                <div className="ml-2 sm:ml-4 flex-shrink-0">
                    <GradientButton text="Lets Go" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};
