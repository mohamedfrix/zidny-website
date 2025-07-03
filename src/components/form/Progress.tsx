import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Progress: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep;

        return (
          <React.Fragment key={index}>
            {/* Cercle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold font-outfit
                ${isActive || index + 1 < currentStep  ? "bg-[#2AA4E7] text-white" : "bg-[#C2C4C7] text-[#E8EBEF]"}
              `}
            >
              {step}
            </div>

            {/* Trait de liaison sauf après le dernier cercle */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-200">
                <div className={`h-full ${index + 1 < currentStep ? "bg-[#0A60AD] w-full" : ""}`}></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Progress;
