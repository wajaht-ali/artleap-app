"use client";

import { useState, useRef } from "react";

interface StepTwoProps {
    onNext: () => void;
    onPrev: () => void;
}

export default function StepTwo({ onNext, onPrev }: StepTwoProps) {
    const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length !== 5) return alert("Please enter full 5-digit code");
        onNext();
    };

    return (
        <div className="space-y-6">

            <div>
                <h2 className="text-lg font-semibold mb-1">Check your email</h2>
                <p className="text-sm text-gray-500">
                    We sent a reset link to <span className="font-medium text-gray-700">contact@dscode.com</span>.
                    Enter the 5-digit code mentioned in the email.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="flex justify-between max-w-xs mx-auto space-x-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={otp.some((digit) => !digit)}
                    className={`${otp.some((digit) => !digit) ? "bg-gray-400 hover:bg-gray-400" : "bg-[#5B2DAF]"} hover:bg-[#5B2DAF] text-white font-medium py-2 rounded-md cursor-pointer transition`}
                >
                    Verify Code
                </button>
            </form>

            <p className="text-sm text-gray-500 text-center">
                Haven’t got the email yet?{" "}
                <button
                    type="button"
                    className="text-purple-600 hover:underline font-medium"
                    onClick={() => alert("Resend email triggered")}
                >
                    Resend email
                </button>
            </p>

            <div className="text-center">
                <button
                    type="button"
                    onClick={onPrev}
                    className="text-xs text-gray-400 hover:text-gray-600 mt-2"
                >
                    ← Back
                </button>
            </div>
        </div>
    );
}
