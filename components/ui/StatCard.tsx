import React from "react";
import Link from "next/link";

export interface StatCardProps {
  title: string;
  value: string | number;
  sublabel?: string | null;
  icon: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function StatCard({
  title,
  value,
  sublabel,
  icon,
  iconBg = "bg-[#E3F0FA]",
  iconColor = "text-[#0066B3]",
  href,
  className = "",
  onClick,
}: StatCardProps) {
  const content = (
    <div
      onClick={onClick}
      className={`bg-white border border-[#E8EEF3] rounded-[14px] p-4 flex items-center gap-3.5 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)] transition-all hover:border-[#C9D8EC] ${
        href || onClick ? "cursor-pointer hover:shadow-md" : ""
      } ${className}`}
    >
      <div
        className={`w-[42px] h-[42px] rounded-[10px] ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>

      <div className="flex flex-col min-w-0">
        <span className="text-[#64748B] text-[12.5px] leading-tight font-medium truncate">
          {title}
        </span>
        <span className="text-[#123B72] text-[24px] font-semibold leading-tight mt-0.5">
          {value}
        </span>
        {sublabel && (
          <span className="text-[#64748B] text-[11.5px] leading-none mt-0.5 truncate">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}

export default StatCard;

