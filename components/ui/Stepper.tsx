import React from "react";

export interface StepItem {
  id?: string | number;
  label: string;
  sublabel?: string;
  status: "completed" | "current" | "upcoming";
}

export interface StepperProps {
  steps: StepItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  orientation = "horizontal",
  className = "",
}: StepperProps) {
  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {steps.map((step, idx) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "current";
          const isLast = idx === steps.length - 1;

          return (
            <div key={idx} className="flex items-start gap-3 relative">
              {/* Connector line */}
              {!isLast && (
                <div
                  className={`absolute left-[15px] top-[32px] bottom-[-16px] w-[2px] ${
                    isCompleted ? "bg-[#12A9A5]" : "bg-[#E8EEF3]"
                  }`}
                />
              )}

              {/* Step indicator circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0 z-10 ${
                  isCompleted
                    ? "bg-[#12A9A5] text-white"
                    : isCurrent
                    ? "bg-[#F5A000] text-[#1E293B] ring-4 ring-[#FFF1D1]"
                    : "bg-[#E8EEF3] text-[#64748B]"
                }`}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  idx + 1
                )}
              </div>

              {/* Labels */}
              <div className="flex flex-col pt-1">
                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    isCurrent
                      ? "text-[#123B72]"
                      : isCompleted
                      ? "text-[#1E293B]"
                      : "text-[#64748B]"
                  }`}
                >
                  {step.label}
                </span>
                {step.sublabel && (
                  <span className="text-[11.5px] text-[#64748B] mt-0.5">
                    {step.sublabel}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal Stepper
  return (
    <div className={`w-full overflow-x-auto py-2 ${className}`}>
      <div className="flex items-center justify-between min-w-[500px] relative">
        {steps.map((step, idx) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "current";
          const isLast = idx === steps.length - 1;

          return (
            <div
              key={idx}
              className={`flex-1 flex flex-col items-center relative ${
                isLast ? "flex-none" : ""
              }`}
            >
              {/* Connector line between steps */}
              {!isLast && (
                <div
                  className={`absolute top-[16px] left-[50%] right-[-50%] h-[2px] -z-0 ${
                    isCompleted ? "bg-[#12A9A5]" : "bg-[#E8EEF3]"
                  }`}
                />
              )}

              {/* Step indicator circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0 z-10 transition-all ${
                  isCompleted
                    ? "bg-[#12A9A5] text-white"
                    : isCurrent
                    ? "bg-[#F5A000] text-[#1E293B] ring-4 ring-[#FFF1D1]"
                    : "bg-[#E8EEF3] text-[#64748B]"
                }`}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  idx + 1
                )}
              </div>

              {/* Label */}
              <div className="flex flex-col items-center mt-2 text-center max-w-[120px]">
                <span
                  className={`text-[12px] font-semibold leading-tight ${
                    isCurrent
                      ? "text-[#123B72]"
                      : isCompleted
                      ? "text-[#1E293B]"
                      : "text-[#64748B]"
                  }`}
                >
                  {step.label}
                </span>
                {step.sublabel && (
                  <span className="text-[11px] text-[#64748B] mt-0.5">
                    {step.sublabel}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;

