import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[#64748B] text-[12.5px] font-medium mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3.5 text-[#64748B] pointer-events-none flex items-center justify-center">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`w-full px-3.5 py-2.5 text-[13.5px] text-[#1E293B] bg-white border rounded-[10px] placeholder-[#94A3B8] transition-all focus:outline-none focus:ring-1 ${
              error
                ? "border-[#B02A2A] focus:border-[#B02A2A] focus:ring-[#B02A2A]"
                : "border-[#E8EEF3] focus:border-[#0066B3] focus:ring-[#0066B3]"
            } ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} ${className}`}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3.5 text-[#64748B] flex items-center justify-center">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <span className="text-[#B02A2A] text-[11.5px] mt-1 font-medium">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-[#64748B] text-[11.5px] mt-1">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

