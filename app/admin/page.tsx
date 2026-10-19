"use client";

import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  HeroBanner,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from "@/components/ui";

export default function AdminDashboardPage() {
  const statCards = [
    {
      title: "Total Pegawai",
      value: "128",
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
      title: "Perjalanan Berjalan",
      value: "3",
      sublabel: "hari ini",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "SPPD Terbit",
      value: "34",
      sublabel: "bulan ini",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#1684C4]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Dokumen Belum Lengkap",
      value: "5",
      sublabel: "perlu tindak lanjut",
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
  ];

  const ongoingTrips = [
    {
      number: "PD-2026/087",
      employee: "Liyana",
      destination: "Yogyakarta",
      period: "21–23 Sep",
      status: "Berjalan",
    },
    {
      number: "PD-2026/088",
      employee: "Bagas",
      destination: "Jakarta",
      period: "20–22 Sep",
      status: "Berjalan",
    },
    {
      number: "PD-2026/089",
      employee: "Nadia",
      destination: "Bogor",
      period: "21 Sep",
      status: "Berjalan",
    },
  ];

  const pendingDocuments = [
    {
      code: "PD-2026/091",
      issue: "Surat tugas belum diunggah",
      status: "Belum lengkap",
    },
    {
      code: "PD-2026/093",
      issue: "Rincian biaya belum lengkap",
      status: "Belum lengkap",
    },
    {
      code: "PD-2026/079",
      issue: "Bukti tiket belum diterima",
      status: "Belum lengkap",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Selamat datang, Admin 👋"
          subtitle="3 perjalanan sedang berjalan hari ini"
          actionText="Buka monitoring"
          actionHref="/admin/monitoring"
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
          {/* Left Column: Perjalanan Berjalan (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <CardTitle>Perjalanan berjalan</CardTitle>
                <CardAction>
                  <Link
                    href="/admin/perjalanan"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Lihat semua
                  </Link>
                </CardAction>
              </CardHeader>

              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Nomor</TableHead>
                    <TableHead>Pegawai</TableHead>
                    <TableHead>Tujuan</TableHead>
                    <TableHead>Periode</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ongoingTrips.map((row) => (
                    <TableRow key={row.number}>
                      <TableCell className="font-semibold">{row.number}</TableCell>
                      <TableCell>{row.employee}</TableCell>
                      <TableCell>{row.destination}</TableCell>
                      <TableCell className="text-[#64748B]">{row.period}</TableCell>
                      <TableCell className="text-right">
                        <Badge status={row.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Right Column: Dokumen Perlu Tindak Lanjut (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Dokumen perlu tindak lanjut</CardTitle>
                <CardAction>
                  <Link
                    href="/admin/dokumen"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Kelola
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {pendingDocuments.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-[#1E293B] text-[14px] font-semibold leading-tight">
                        {item.code}
                      </span>
                      <span className="text-[#64748B] text-[12px] leading-relaxed mt-0.5 truncate">
                        {item.issue}
                      </span>
                    </div>

                    <Badge status={item.status} />
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
