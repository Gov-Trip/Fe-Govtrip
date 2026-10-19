import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      className = "",
      id,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[#64748B] text-[12.5px] font-medium mb-1.5"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full px-3.5 py-2.5 text-[13.5px] text-[#1E293B] bg-white border rounded-[10px] placeholder-[#94A3B8] transition-all focus:outline-none focus:ring-1 resize-y ${
            error
              ? "border-[#B02A2A] focus:border-[#B02A2A] focus:ring-[#B02A2A]"
              : "border-[#E8EEF3] focus:border-[#0066B3] focus:ring-[#0066B3]"
          } ${className}`}
          {...props}
        />

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

Textarea.displayName = "Textarea";

export default Textarea;

