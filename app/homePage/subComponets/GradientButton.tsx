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
        w-[110px] h-[36px] text-xs
        sm:w-[140px] sm:h-[42px] sm:text-sm
        md:w-[180px] md:h-[50px] md:text-base
        rounded-[10px] sm:rounded-[12px] md:rounded-[14px]
        flex items-center justify-center gap-1.5
        text-white font-medium
        bg-[radial-gradient(circle,rgba(164,124,243,1)_0%,rgba(104,63,234,1)_100%)]
        transition-all duration-300
        hover:scale-105 
        active:scale-95
        relative
      "
      style={{
        boxShadow: `
          inset 0px 1.5px 0.8px rgba(255,255,255,0.25),
          inset 0px -3px 1.5px rgba(0,0,0,0.25)
        `,
      }}
    >
      <span>{text}</span>
      <Image
        src="/star.png"
        alt="star icon"
        width={14}
        height={14}
        className="sm:w-[15px] sm:h-[15px] md:w-[16px] md:h-[16px]"
      />
    </button>
  );
};
