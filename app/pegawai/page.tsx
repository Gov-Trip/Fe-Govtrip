"use client";

import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import {
  HeroBanner,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  Button,
  Stepper,
  StepItem,
} from "@/components/ui";

export default function PegawaiDashboardPage() {
  const statCards = [
    {
      title: "Pengajuan Aktif",
      value: "2",
      sublabel: "dalam proses",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Menunggu Approval",
      value: "1",
      sublabel: "di Kepala Bidang",
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
      title: "Perjalanan Aktif",
      value: "1",
      sublabel: "Yogyakarta, sampai 23 Sep",
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
      title: "Riwayat Perjalanan",
      value: "14",
      sublabel: "tahun 2026",
      iconBg: "bg-[#EDF1F5]",
      iconColor: "text-[#123B72]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  const recentTrips = [
    {
      number: "PD-2026/087",
      destination: "Yogyakarta",
      dates: "21–23 Sep",
      status: "Berjalan",
    },
    {
      number: "PD-2026/091",
      destination: "Bandung",
      dates: "6–8 Okt",
      status: "Menunggu",
    },
    {
      number: "PD-2026/079",
      destination: "Makassar",
      dates: "14–16 Sep",
      status: "LPJ perlu diunggah",
    },
  ];

  const approvalSteps: StepItem[] = [
    { label: "Diajukan", status: "completed" },
    { label: "Atasan", status: "current" },
    { label: "Kepala Bidang", status: "upcoming" },
    { label: "SPPD Terbit", status: "upcoming" },
  ];

  const pendingActions = [
    {
      title: "Unggah LPJ Makassar",
      subtitle: "Batas 23 Sep, 2 hari lagi",
      btnText: "Unggah",
      btnHref: "/pegawai/lpj",
      btnVariant: "warning" as const,
    },
    {
      title: "Draft Medan belum diajukan",
      subtitle: "Lengkapi tanggal dan biaya",
      btnText: "Lanjutkan",
      btnHref: "/pegawai/draft",
      btnVariant: "outline" as const,
    },
    {
      title: "SPPD Yogyakarta siap",
      subtitle: "Unduh sebelum berangkat",
      btnText: "Buka",
      btnHref: "/pegawai/sppd",
      btnVariant: "outline" as const,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Selamat datang, Ocha 👋"
          subtitle="Kelola perjalanan dinas Anda dengan mudah dan terintegrasi"
          actionText="Ajukan perjalanan dinas"
          actionHref="/pegawai/pengajuan"
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
          {/* Left Column: Pengajuan Terbaru dengan Timeline (col-span-7) */}
          <div className="lg:col-span-7">
            <Card className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle>Pengajuan terbaru</CardTitle>
                  <CardAction>
                    <Link
                      href="/pegawai/perjalanan"
                      className="text-[#0066B3] hover:underline text-[12px] font-medium"
                    >
                      Lihat detail
                    </Link>
                  </CardAction>
                </CardHeader>

                <p className="text-[#64748B] text-[12.5px] -mt-2 mb-4">
                  Bandung · 6–8 Okt 2026 · Rapat koordinasi program regional
                </p>

                {/* Progress Stepper Flow */}
                <Stepper steps={approvalSteps} orientation="horizontal" />
              </div>

              <CardFooter className="justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  href="/pegawai/perjalanan"
                >
                  Lihat detail alur
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right Column: Perlu Tindakan (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Perlu tindakan</CardTitle>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {pendingActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-[#1E293B] text-[13.5px] font-medium leading-tight">
                        {action.title}
                      </span>
                      <span className="text-[#64748B] text-[12px] leading-relaxed mt-0.5 truncate">
                        {action.subtitle}
                      </span>
                    </div>

                    <Button
                      variant={action.btnVariant}
                      size="sm"
                      href={action.btnHref}
                    >
                      {action.btnText}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Tabel Perjalanan Terbaru */}
        <Card>
          <CardHeader>
            <CardTitle>Perjalanan terbaru</CardTitle>
            <CardAction>
              <Link
                href="/pegawai/perjalanan"
                className="text-[#0066B3] hover:underline text-[12px] font-medium"
              >
                Semua perjalanan
              </Link>
            </CardAction>
          </CardHeader>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nomor</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTrips.map((trip) => (
                <TableRow key={trip.number}>
                  <TableCell className="font-semibold">{trip.number}</TableCell>
                  <TableCell>{trip.destination}</TableCell>
                  <TableCell>{trip.dates}</TableCell>
                  <TableCell className="text-right">
                    <Badge status={trip.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}
