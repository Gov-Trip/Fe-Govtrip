"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRole, NavItem, ROLE_CONFIGS } from "./navigation";

export interface AppSidebarProps {
  role?: UserRole;
  user?: {
    name: string;
    roleTitle: string;
    avatarLetter: string;
  };
  menuItems?: NavItem[];
  onCloseMobile?: () => void;
  className?: string;
}

export function AppSidebar({
  role = "Admin",
  user: customUser,
  menuItems: customMenuItems,
  onCloseMobile,
  className = "",
}: AppSidebarProps) {
  const pathname = usePathname();
  const config = ROLE_CONFIGS[role];

  const user = customUser || config.user;
  const menuItems = customMenuItems || config.menuItems;

  const basePath =
    role === "Admin"
      ? "/admin"
      : role === "Pegawai"
      ? "/pegawai"
      : role === "Atasan"
      ? "/atasan"
      : role === "Bendahara"
      ? "/bendahara"
      : "/superadmin";

  return (
    <aside
      className={`w-[252px] min-h-screen bg-[#123B72] flex flex-col justify-between p-[20px_14px] text-white select-none shrink-0 border-r border-[#123B72] ${className}`}
    >
      {/* Top Header & Navigation */}
      <div className="flex flex-col gap-4">
        {/* Brand & Role */}
        <div className="flex flex-col gap-2.5 px-2 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-[15px]">
              G
            </div>
            <span className="font-bold text-[18px] text-white tracking-tight">
              Gov.Trip
            </span>
          </div>

          {/* Role badge */}
          <div className="bg-white/10 rounded-lg px-2.5 py-1 text-[12px] text-white/90 font-normal">
            Peran: {role}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1 mt-1">
          {menuItems.map((item) => {
            const isActive =
              item.href === basePath
                ? pathname === basePath
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-3 py-2.5 rounded-[10px] text-[13.5px] transition-all font-medium ${
                  isActive
                    ? "bg-white text-[#123B72] shadow-sm font-semibold"
                    : "text-[#C9D8EC] hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? "text-[#123B72]" : "text-[#C9D8EC]"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span className="bg-[#F5A000] text-[#1E293B] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Card at Bottom */}
      <div className="mt-8 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2.5 p-2 bg-white/7 rounded-[12px]">
          <div className="w-[34px] h-[34px] rounded-full bg-[#1684C4] flex items-center justify-center text-white font-semibold text-[13px] shrink-0">
            {user.avatarLetter}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-[13px] font-medium truncate">
              {user.name}
            </span>
            <span className="text-[#A9BEDA] text-[11.5px] truncate">
              {user.roleTitle}
            </span>
          </div>
        </div>

        {/* Logout Link */}
        <Link
          href="/login"
          className="flex items-center gap-2 mt-3 px-2 py-1.5 text-[#C9D8EC] hover:text-white text-[12px] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          <span>Keluar ke Login</span>
        </Link>
      </div>
    </aside>
  );
}

export default AppSidebar;

