"use client";

import { useState } from "react";

interface StepOneProps {
    onNext: () => void;
}

export default function StepOne({ onNext }: StepOneProps) {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return alert("Please enter your email");
        onNext();
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Forgot password</h2>
            <p className="text-sm text-gray-500">
                Please enter your email to reset the password
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col">
                    <label className="text-sm mb-1 font-medium">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-lg py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#6D3CE6] hover:bg-[#5B2DAF] hover:cursor-pointer text-white font-medium py-2 rounded-md transition"
                >
                    Continue
                </button>
            </form>

            <p className="text-xs text-gray-400">
                We will send an email to the entered address containing a password
                recovery link.
            </p>
        </div>
    );
}
