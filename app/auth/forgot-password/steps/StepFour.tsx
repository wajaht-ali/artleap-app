"use client";

import { useRouter } from 'next/navigation';

export default function StepThree() {
    const router = useRouter();
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Reset Complete!</h2>
            <p className="text-sm text-gray-500">
                Congratulations! Your password has
                been changed. Click continue to login
            </p>
            <button
                onClick={() => router.push('/auth/login')}
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer font-medium py-2 rounded-md transition"
            >
                Continue to Login
            </button>
        </div>
    );
}
