import React from "react";
import Button from "./Button";

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  actionText?: string;
  actionHref?: string;
  actionIcon?: React.ReactNode;
  actionOnClick?: () => void;
  customAction?: React.ReactNode;
  className?: string;
}

export function HeroBanner({
  title,
  subtitle,
  actionText,
  actionHref,
  actionIcon,
  actionOnClick,
  customAction,
  className = "",
}: HeroBannerProps) {
  const defaultActionIcon = (
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  return (
    <div
      className={`bg-[#123B72] rounded-[16px] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm ${className}`}
    >
      <div className="flex flex-col">
        <h2 className="text-white text-[20px] sm:text-[22px] font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#C9D8EC] text-[13.5px] mt-1">{subtitle}</p>
      </div>

      {customAction ? (
        customAction
      ) : actionText ? (
        <Button
          variant="warning"
          size="md"
          href={actionHref}
          onClick={actionOnClick}
          rightIcon={actionIcon || defaultActionIcon}
          className="self-start md:self-auto shrink-0 shadow-sm"
        >
          {actionText}
        </Button>
      ) : null}
    </div>
  );
}

export default HeroBanner;

