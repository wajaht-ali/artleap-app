"use client"

import React from "react";
import { FiFilter } from "react-icons/fi";
import CommunityPhotos from "./subComponets/CommunityPhotos";

type Category = {
    name: string;
    link: string;
};

const categories: Category[] = [
    { name: "Realistic", link: "#" },
    { name: "Fantasy", link: "#" },
    { name: "Anime", link: "#" },
];

const CommunityCreations: React.FC = () => {
    return (
        <div className="w-11/12 mx-auto mt-18 z-50">
            {/* Top Row */}
            <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">Community Creations</h2>

                {/* Filter Icon */}
                <a href="#" className="text-white text-xl hover:text-purple-300">
                    <FiFilter />
                </a>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mt-4">
                {categories.map((cat, idx) => (
                    <a
                        key={idx}
                        href={cat.link}
                        className="text-white text-lg font-normal hover:text-purple-400 transition"
                    >
                        {cat.name}
                    </a>
                ))}
            </div>

            <CommunityPhotos />
        </div>
    );
};

export default CommunityCreations;
