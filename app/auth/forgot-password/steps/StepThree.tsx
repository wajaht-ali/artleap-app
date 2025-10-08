"use client";

import { useState } from "react";

interface StepThreeProps {
    onNext: () => void;
    onPrev: () => void;
}

export default function StepThree({ onNext, onPrev }: StepThreeProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!password || !confirmPassword) return alert("Please fill all fields");
        if (password !== confirmPassword) return alert("Passwords do not match");

        onNext();
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-1">Set a new password</h2>
                <p className="text-sm text-gray-500">
                    Create a new password. Ensure it differs from previous ones for security.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter password"
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md transition"
                >
                    Update Password
                </button>
            </form>

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
