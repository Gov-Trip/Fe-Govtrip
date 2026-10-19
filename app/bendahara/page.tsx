"use client";

import Link from "next/link";
import BendaharaHeader from "@/components/bendahara/BendaharaHeader";
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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function BendaharaDashboardPage() {
  const statCards = [
    {
      title: "Realisasi Anggaran",
      value: "Rp 148,5 Jt",
      sublabel: "42.4% dari pagu Rp 350 Jt",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Menunggu Pencairan",
      value: "3",
      sublabel: "total Rp 14.870.000",
      iconBg: "bg-[#FFF1D1]",
      iconColor: "text-[#8A5A00]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="12" x="2" y="6" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      title: "Verifikasi LPJ",
      value: "4",
      sublabel: "berkas kuitansi riil",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Selesai Dibukukan",
      value: "42",
      sublabel: "transaksi tahun 2026",
      iconBg: "bg-[#EDF1F5]",
      iconColor: "text-[#123B72]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  const pendingDisbursements = [
    {
      number: "PD-2026/093",
      employee: "Rudi (NIP. 19830911...)",
      unit: "Bidang Perencanaan",
      destination: "Surabaya",
      amount: "Rp 6.120.000",
      status: "Siap Cair",
    },
    {
      number: "PD-2026/094",
      employee: "Sari (NIP. 19871118...)",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      amount: "Rp 3.500.000",
      status: "Siap Cair",
    },
    {
      number: "PD-2026/095",
      employee: "Bagas (NIP. 19850615...)",
      unit: "Bidang Keuangan",
      destination: "Makassar",
      amount: "Rp 5.250.000",
      status: "Siap Cair",
    },
  ];

  const pendingLPJ = [
    {
      code: "PD-2026/079",
      employee: "Hendra",
      destination: "Makassar",
      claimAmount: "Rp 5.080.000",
      advanceAmount: "Rp 5.100.000",
      diff: "-Rp 20.000 (Kembali ke Kas)",
    },
    {
      code: "PD-2026/081",
      employee: "Sari",
      destination: "Solo",
      claimAmount: "Rp 2.850.000",
      advanceAmount: "Rp 2.850.000",
      diff: "Sesuai Pagu",
    },
    {
      code: "PD-2026/075",
      employee: "Rudi",
      destination: "Semarang",
      claimAmount: "Rp 3.920.000",
      advanceAmount: "Rp 3.900.000",
      diff: "+Rp 20.000 (Reimburse)",
    },
  ];

  const budgetRealization = [
    {
      unit: "Bidang Perencanaan",
      used: 58200000,
      total: 120000000,
      percentage: "48.5%",
    },
    {
      unit: "Bidang Keuangan & Aset",
      used: 42100000,
      total: 90000000,
      percentage: "46.7%",
    },
    {
      unit: "Sekretariat Daerah",
      used: 32800000,
      total: 80000000,
      percentage: "41.0%",
    },
    {
      unit: "Inspektorat Daerah",
      used: 15400000,
      total: 60000000,
      percentage: "25.6%",
    },
  ];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="flex-1 flex flex-col">
      <BendaharaHeader title="Dashboard Bendahara" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Selamat datang, Ibu Ratna 👋"
          subtitle="3 pengajuan perjalanan dinas siap dicairkan & 4 berkas LPJ memerlukan verifikasi keuangan"
          actionText="Pencairan dana"
          actionHref="/bendahara/pencairan"
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
          {/* Left Column: Pencairan Dana Menunggu Proses (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Pencairan Uang Muka Dinas</CardTitle>
                  <CardDescription>
                    Perjalanan telah disetujui atasan dan siap diterbitkan kwitansi bayar
                  </CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/bendahara/pencairan"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Lihat semua ({pendingDisbursements.length})
                  </Link>
                </CardAction>
              </CardHeader>

              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Nomor / Pegawai</TableHead>
                    <TableHead>Tujuan</TableHead>
                    <TableHead>Nominal Uang Muka</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingDisbursements.map((row) => (
                    <TableRow key={row.number}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-semibold text-[#1E293B]">
                            {row.number}
                          </span>
                          <span className="text-[11.5px] text-[#64748B]">
                            {row.employee}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-[#1E293B]">
                        {row.destination}
                      </TableCell>
                      <TableCell className="font-bold text-[#123B72]">
                        {row.amount}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="primary"
                          size="sm"
                          href="/bendahara/pencairan"
                        >
                          Cairkan
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Right Column: Verifikasi LPJ & Bukti Pengeluaran (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>LPJ Menunggu Verifikasi</CardTitle>
                  <CardDescription>Pemeriksaan kuitansi riil & tiket</CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/bendahara/lpj"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Verifikasi
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {pendingLPJ.map((item) => (
                  <div
                    key={item.code}
                    className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                  >
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1E293B] text-[13.5px]">
                          {item.employee}
                        </span>
                        <span className="text-[#64748B] text-[12px]">·</span>
                        <span className="text-[#123B72] font-semibold text-[13px]">
                          {item.destination}
                        </span>
                      </div>
                      <span className="text-[12px] text-[#64748B] mt-0.5">
                        Klaim: {item.claimAmount} (UM: {item.advanceAmount})
                      </span>
                      <span className="text-[11px] font-medium text-[#0B7A77] mt-0.5">
                        {item.diff}
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      href="/bendahara/lpj"
                    >
                      Audit
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Realisasi Anggaran Per Bidang Card */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Realisasi Anggaran Perjalanan Dinas per Unit Kerja</CardTitle>
              <CardDescription>
                Tahun Anggaran 2026 · Total Pagu: Rp 350.000.000
              </CardDescription>
            </div>
            <CardAction>
              <Link
                href="/bendahara/anggaran"
                className="text-[#0066B3] hover:underline text-[12px] font-medium"
              >
                Laporan detail
              </Link>
            </CardAction>
          </CardHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {budgetRealization.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[12px] border border-[#E8EEF3] bg-[#F1F7FB]/40 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[13px] font-semibold text-[#123B72] block leading-tight">
                    {b.unit}
                  </span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-[16px] font-bold text-[#1E293B]">
                      {b.percentage}
                    </span>
                    <span className="text-[11.5px] text-[#64748B]">
                      {formatRupiah(b.used)}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="w-full h-2 bg-[#E8EEF3] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0066B3] rounded-full"
                      style={{ width: b.percentage }}
                    />
                  </div>
                  <span className="text-[10.5px] text-[#64748B] mt-1 block">
                    Pagu: {formatRupiah(b.total)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}

