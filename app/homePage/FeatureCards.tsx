"use client"
import React from "react";
import Image from "next/image";
import { featuresData } from "./Data";

const FeatureCards: React.FC = () => {
  return (
    <div
      className="
        w-11/12 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
        gap-6 mt-10 lg:mt-16 md:mt-24 mx-auto
      "
    >
      {featuresData.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Image box */}
          <div
            className="
              w-full max-w-[300px] 
              h-[180px] sm:h-[200px] md:h-[220px] 
              rounded-[12px] sm:rounded-[14px] md:rounded-[16px] 
              border border-[#E0E0E0] 
              overflow-hidden relative
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Title below image */}
          <p className="mt-3 text-sm sm:text-base font-semibold text-white text-center">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
