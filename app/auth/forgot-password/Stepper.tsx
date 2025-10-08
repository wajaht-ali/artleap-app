"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const steps = [
    { id: 1, label: "Forgot password", component: StepOne },
    { id: 2, label: "Verify email", component: StepTwo },
    { id: 3, label: "Reset password", component: StepThree },
    { id: 4, label: "Success", component: StepFour },
];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length));
    const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

    const StepComponent = steps.find((step) => step.id === currentStep)
        ?.component as ComponentType<{ onNext: () => void; onPrev?: () => void }>;

    return (
        <div className="w-full max-w-md">
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                        Step {currentStep}/{steps.length}
                    </span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                    <div
                        className="h-2 bg-[#6D3CE6] rounded transition-all duration-300"
                        style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    />
                </div>
            </div>

            <StepComponent onNext={nextStep} onPrev={prevStep} />
        </div>
    );
}
