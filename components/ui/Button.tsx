import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "warning"
  | "outline"
  | "danger"
  | "danger-outline"
  | "ghost"
  | "secondary";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0066B3] hover:bg-[#005596] active:bg-[#00447a] text-white shadow-sm border border-transparent",
  warning:
    "bg-[#F5A000] hover:bg-[#e09200] active:bg-[#c98300] text-[#1E293B] font-semibold shadow-sm border border-transparent",
  outline:
    "bg-white hover:bg-[#F1F7FB] active:bg-[#E3F0FA] text-[#1E293B] border border-[#E8EEF3]",
  secondary:
    "bg-[#E3F0FA] hover:bg-[#cde4f7] active:bg-[#b8d9f4] text-[#0066B3] font-medium border border-transparent",
  danger:
    "bg-[#B02A2A] hover:bg-[#992222] active:bg-[#7e1c1c] text-white shadow-sm border border-transparent",
  "danger-outline":
    "bg-white hover:bg-[#FBE8E8] active:bg-[#f6d0d0] text-[#B02A2A] border border-[#B02A2A]",
  ghost:
    "bg-transparent hover:bg-slate-100 active:bg-slate-200 text-[#64748B] hover:text-[#123B72]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-[12px] rounded-[8px] gap-1.5",
  md: "px-4 py-2 text-[13px] rounded-[10px] gap-2",
  lg: "px-5 py-2.5 text-[14px] rounded-[10px] gap-2.5",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      leftIcon,
      rightIcon,
      isLoading = false,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

