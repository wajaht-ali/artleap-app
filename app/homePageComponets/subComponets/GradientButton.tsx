import React from "react";
import Image from "next/image";

type GradientButtonProps = {
    text: string;
    onClick?: () => void;
};

export const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
        w-[197px] h-[55px] 
        rounded-[15px] 
        flex items-center justify-center gap-2
        text-white font-semibold
        bg-[radial-gradient(circle,rgba(164,124,243,1)_0%,rgba(104,63,234,1)_100%)]
        transition-all duration-300
        hover:scale-105 
        active:scale-95
        relative
      "
            style={{
                boxShadow: `
          inset 0px 1.76px 0.88px rgba(255,255,255,0.25),
          inset 0px -3.5px 1.76px rgba(0,0,0,0.25)
        `,
            }}
        >
            <span>{text}</span>
            <Image src="/star.png" alt="start icon" width={18} height={18} />
        </button>
    );
};
