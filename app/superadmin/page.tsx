"use client";

import Link from "next/link";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import {
  HeroBanner,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Badge,
} from "@/components/ui";

export default function SuperAdminDashboardPage() {
  const statCards = [
    {
      title: "Pengguna Aktif",
      value: "142",
      sublabel: null,
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Peran",
      value: "7",
      sublabel: "hak akses terpasang",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#1684C4]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Login Gagal Hari Ini",
      value: "3",
      sublabel: null,
      iconBg: "bg-[#FBE8E8]",
      iconColor: "text-[#B02A2A]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      ),
    },
    {
      title: "Status Sistem",
      value: "Normal",
      sublabel: "semua layanan aktif",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const roleDistribution = [
    { role: "Pegawai", count: 82, percentage: 58 },
    { role: "Atasan", count: 38, percentage: 27 },
    { role: "Kepala Bidang", count: 12, percentage: 8 },
    { role: "Kepala Dinas", count: 4, percentage: 3 },
    { role: "Bendahara", count: 6, percentage: 4 },
    { role: "Admin", count: 8, percentage: 6 },
  ];

  const systemActivities = [
    {
      title: "Pengguna baru ditambahkan",
      subtitle: "Rudi · Pegawai",
      time: "Kemarin",
    },
    {
      title: "Peran diperbarui",
      subtitle: "Atasan · hak monitoring",
      time: "2 hari lalu",
    },
    {
      title: "Konfigurasi diubah",
      subtitle: "Batas LPJ 7 hari",
      time: "3 hari lalu",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Selamat datang, Super Admin 👋"
          subtitle="Semua layanan berjalan normal"
          actionText="Kelola peran & hak akses"
          actionHref="/superadmin/akses"
        />

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statCards.map((card, idx) => (
            <StatCard
              key={idx}
              title={card.title}
              value={card.value}
              sublabel={card.sublabel}
              icon={card.icon}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* 2-Column Content Grid: Pengguna per peran (kiri) & Aktivitas sistem (kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Pengguna per peran (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Pengguna per peran</CardTitle>
                  <CardDescription>
                    Distribusi alokasi akun terdaftar berdasarkan tingkat jabatan
                  </CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/superadmin/pengguna"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Kelola
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="space-y-4 pt-1">
                {roleDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="w-28 text-[13px] font-medium text-[#1E293B] shrink-0">
                      {item.role}
                    </span>

                    <div className="flex-1 h-2 bg-[#E8EEF3] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1684C4] rounded-full transition-all duration-300"
                        style={{ width: `${Math.max(item.percentage, 4)}%` }}
                      />
                    </div>

                    <span className="w-8 text-right text-[12.5px] font-semibold text-[#64748B]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Aktivitas sistem (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Aktivitas sistem</CardTitle>
                  <CardDescription>
                    Rekam jejak tindakan administrator terbaru
                  </CardDescription>
                </div>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {systemActivities.map((act, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-[#1E293B] text-[13.5px] font-semibold leading-tight">
                        {act.title}
                      </span>
                      <span className="text-[#64748B] text-[12px] leading-relaxed mt-0.5 truncate">
                        {act.subtitle}
                      </span>
                    </div>

                    <span className="text-[11.5px] text-[#A9BEDA] shrink-0 font-medium">
                      {act.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
