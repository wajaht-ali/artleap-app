"use client";

import React, { useEffect, useState } from "react";
import call_method from "@/utilis/axiosInstance";
import { endPoints } from "@/utilis/apis";

interface ImageItem {
  _id: string;
  imageUrl: string;
  username: string;
}

const CommunityGrid: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await call_method<{ images: ImageItem[] }>({
          method: "GET",
          url: endPoints.allImages,
        });

        setImages(res.data.images.slice(20, 52));
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading images...</p>;
  }

  return (
    <div className="mt-8 p-6 rounded-xl bg-[#18171B]/60">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((item) => (
          <div
            key={item._id}
            className="relative w-full aspect-square rounded-md overflow-hidden bg-gray-300"
          >
            <img
              src={item.imageUrl}
              alt={item.username || "Grid Image"}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGrid;
