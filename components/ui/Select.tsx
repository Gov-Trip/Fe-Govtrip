import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options?: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      className = "",
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[#64748B] text-[12.5px] font-medium mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            className={`w-full px-3.5 py-2.5 text-[13.5px] text-[#1E293B] bg-white border rounded-[10px] appearance-none transition-all focus:outline-none focus:ring-1 cursor-pointer pr-10 ${
              error
                ? "border-[#B02A2A] focus:border-[#B02A2A] focus:ring-[#B02A2A]"
                : "border-[#E8EEF3] focus:border-[#0066B3] focus:ring-[#0066B3]"
            } ${className}`}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          <span className="absolute right-3.5 text-[#64748B] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
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

Select.displayName = "Select";

export default Select;

