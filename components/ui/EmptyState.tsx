import React from "react";
import Button from "./Button";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  actionText,
  actionHref,
  actionOnClick,
  className = "",
}: EmptyStateProps) {
  const defaultIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94A3B8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-[14px] border border-[#E8EEF3] bg-white ${className}`}
    >
      <div className="w-14 h-14 rounded-full bg-[#F1F7FB] flex items-center justify-center mb-3">
        {icon || defaultIcon}
      </div>

      <h3 className="text-[#123B72] text-[16px] font-semibold tracking-tight">
        {title}
      </h3>

      {description && (
        <p className="text-[#64748B] text-[13px] mt-1 max-w-sm">
          {description}
        </p>
      )}

      {actionText && (
        <Button
          variant="primary"
          size="sm"
          href={actionHref}
          onClick={actionOnClick}
          className="mt-4"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;

