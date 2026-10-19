"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

export default function AdminSidebar({ onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      label: "Data Pegawai",
      href: "/admin/pegawai",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: "Data Perjalanan",
      href: "/admin/perjalanan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      label: "Dokumen",
      href: "/admin/dokumen",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
    },
    {
      label: "SPPD Digital",
      href: "/admin/sppd",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 11 3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      label: "Monitoring Perjalanan",
      href: "/admin/monitoring",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      label: "Notifikasi",
      href: "/admin/notifikasi",
      badge: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-[252px] min-h-screen bg-[#123B72] flex flex-col justify-between p-[20px_14px] text-white select-none shrink-0 border-r border-[#123B72]">
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
            Peran: Admin
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1 mt-1">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
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

                {item.badge && (
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
            A
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-[13px] font-medium truncate">
              Admin
            </span>
            <span className="text-[#A9BEDA] text-[11.5px] truncate">
              Administrator
            </span>
          </div>
        </div>

        {/* Logout Link */}
        <Link
          href="/login"
          className="flex items-center gap-2 mt-3 px-2 py-1.5 text-[#C9D8EC] hover:text-white text-[12px] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

