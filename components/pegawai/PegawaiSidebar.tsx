"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PegawaiSidebarProps {
  onCloseMobile?: () => void;
}

export default function PegawaiSidebar({ onCloseMobile }: PegawaiSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      href: "/pegawai",
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
      label: "Pengajuan Perjalanan Dinas",
      href: "/pegawai/pengajuan",
      badge: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      ),
    },
    {
      label: "Draft Pengajuan",
      href: "/pegawai/draft",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      ),
    },
    {
      label: "Perjalanan Saya",
      href: "/pegawai/perjalanan",
      badge: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      label: "SPPD",
      href: "/pegawai/sppd",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      label: "Laporan Pertanggungjawaban",
      href: "/pegawai/lpj",
      badge: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
      ),
    },
    {
      label: "Profil",
      href: "/pegawai/profil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: "Notifikasi",
      href: "/pegawai/notifikasi",
      badge: 3,
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
      {/* Top Brand & Navigation */}
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
            Peran: Pegawai
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1 mt-1">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/pegawai"
                ? pathname === "/pegawai"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-3 py-2 rounded-[10px] text-[13px] transition-all font-medium leading-snug ${
                  isActive
                    ? "bg-white text-[#123B72] shadow-sm font-semibold"
                    : "text-[#C9D8EC] hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`shrink-0 ${isActive ? "text-[#123B72]" : "text-[#C9D8EC]"}`}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge && (
                  <span className="bg-[#F5A000] text-[#1E293B] text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-1">
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
            L
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-[13px] font-medium truncate">
              Ocha
            </span>
            <span className="text-[#A9BEDA] text-[11.5px] truncate">
              Pegawai
            </span>
          </div>
        </div>

        {/* Switch Role / Logout Shortcut */}
        <div className="flex items-center justify-between mt-3 px-2 text-[12px]">
          <Link
            href="/admin"
            className="text-[#C9D8EC] hover:text-white transition-colors"
          >
            Mode Admin
          </Link>
          <Link
            href="/login"
            className="text-[#C9D8EC] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Keluar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}

