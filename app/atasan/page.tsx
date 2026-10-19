"use client";

import Link from "next/link";
import AtasanHeader from "@/components/atasan/AtasanHeader";
import {
  HeroBanner,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Badge,
  Button,
} from "@/components/ui";

export default function AtasanDashboardPage() {
  const statCards = [
    {
      title: "Menunggu Persetujuan",
      value: "4",
      sublabel: "pengajuan hari ini",
      iconBg: "bg-[#FFF1D1]",
      iconColor: "text-[#8A5A00]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Disetujui",
      value: "12",
      sublabel: "bulan ini",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: "Dikembalikan",
      value: "1",
      sublabel: "perlu revisi pegawai",
      iconBg: "bg-[#FBE8E8]",
      iconColor: "text-[#B02A2A]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      ),
    },
    {
      title: "Tim Sedang Dinas",
      value: "3",
      sublabel: "hari ini aktif",
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
  ];

  const pendingApprovals = [
    {
      number: "PD-2026/093",
      employee: "Rudi",
      unit: "Bidang Perencanaan",
      destination: "Surabaya",
      dates: "12–14 Okt 2026",
      transport: "Pesawat",
      totalCost: "Rp 6.120.000",
      urgency: "Menunggu",
    },
    {
      number: "PD-2026/094",
      employee: "Sari",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      dates: "15–17 Okt 2026",
      transport: "Kereta api",
      totalCost: "Rp 3.500.000",
      urgency: "Menunggu",
    },
    {
      number: "PD-2026/095",
      employee: "Bagas",
      unit: "Bidang Keuangan",
      destination: "Makassar",
      dates: "20–23 Okt 2026",
      transport: "Pesawat",
      totalCost: "Rp 5.250.000",
      urgency: "Menunggu",
    },
  ];

  const teamTripsToday = [
    {
      name: "Bagas",
      destination: "Jakarta",
      dates: "20–22 Sep",
      status: "Berjalan",
    },
    {
      name: "Nadia",
      destination: "Bogor",
      dates: "21 Sep",
      status: "Berjalan",
    },
    {
      name: "Liyana",
      destination: "Yogyakarta",
      dates: "21–23 Sep",
      status: "Berjalan",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AtasanHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Selamat datang, Dias 👋"
          subtitle="4 pengajuan perjalanan dinas memerlukan verifikasi dan persetujuan Anda"
          actionText="Tinjau pengajuan"
          actionHref="/atasan/inbox"
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

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Pengajuan Masuk Perlu Persetujuan (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Pengajuan Masuk</CardTitle>
                  <CardDescription>Menunggu persetujuan atasan langsung</CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/atasan/inbox"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Buka Inbox ({pendingApprovals.length})
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {pendingApprovals.map((item) => (
                  <div
                    key={item.number}
                    className="py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1E293B] text-[14px]">
                          {item.employee}
                        </span>
                        <span className="text-[#64748B] text-[12px]">·</span>
                        <span className="text-[#123B72] font-semibold text-[13px]">
                          {item.destination}
                        </span>
                      </div>
                      <span className="text-[12px] text-[#64748B] mt-0.5">
                        {item.number} · {item.dates} · Estimasi {item.totalCost}
                      </span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      href="/atasan/inbox"
                      className="self-start sm:self-auto shadow-xs font-semibold"
                    >
                      Tinjau
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Perjalanan Tim Hari Ini (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Perjalanan Tim</CardTitle>
                  <CardDescription>Hari ini sedang bertugas</CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/atasan/tim"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Lihat semua
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {teamTripsToday.map((member, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B] text-[13.5px]">
                        {member.name} · {member.destination}
                      </span>
                      <span className="text-[#64748B] text-[12px]">
                        {member.dates}
                      </span>
                    </div>

                    <Badge status={member.status} />
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
