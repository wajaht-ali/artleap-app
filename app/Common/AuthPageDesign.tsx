/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const AuthPageDesign: React.FC = () => {
    return (
        <div className="h-full">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/signup-bg-left.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent"></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-around text-center text-white font-inter">
                <div className="flex flex-col items-center space-y-2">
                    <Image
                        src="/assets/icons/artleap-svg-logo.svg"
                        alt="ArtLeap.ai logo"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    <h2 className="text-3xl font-bold">ArtLeap.ai</h2>
                </div>

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        Create and Connect with Artists <br />
                        from all over the world
                    </h1>

                    <p className="text-base text-gray-200">
                        Take the leap, and we'll turn it into art!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPageDesign