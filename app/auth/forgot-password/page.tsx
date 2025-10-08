/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import AuthPageDesign from '@/app/Common/AuthPageDesign';
import Stepper from './Stepper';

const ForgotPassword: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className='hidden md:flex w-1/2 items-center justify-center h-screen relative overflow-hidden'>
                <AuthPageDesign />
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-screen px-6 py-12 bg-white text-gray-900">
                <Stepper />
            </div>
        </div>
    );
};

export default ForgotPassword;
