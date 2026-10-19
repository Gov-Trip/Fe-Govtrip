"use client";

import { useState } from "react";
import BendaharaHeader from "@/components/bendahara/BendaharaHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  StatCard,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Button,
} from "@/components/ui";

export default function BendaharaAnggaranPage() {
  const [selectedQuarter, setSelectedQuarter] = useState("Semua");

  const statMetrics = [
    {
      title: "Total Pagu Anggaran DPA",
      value: "Rp 350,0 Jt",
      sublabel: "Tahun Anggaran 2026",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      title: "Realisasi SPJ Terverifikasi",
      value: "Rp 148,5 Jt",
      sublabel: "42.4% terserap",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      title: "Uang Muka Berjalan",
      value: "Rp 14,8 Jt",
      sublabel: "sedang berjalan dinas",
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
      title: "Sisa Pagu Kas Tersedia",
      value: "Rp 186,6 Jt",
      sublabel: "53.4% belum terpakai",
      iconBg: "bg-[#EDF1F5]",
      iconColor: "text-[#123B72]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  const budgetAccounts = [
    {
      code: "5.1.02.04.01.0001",
      name: "Belanja Perjalanan Dinas Biasa Dalam Daerah",
      pagu: 80000000,
      realization: 42500000,
      percentage: "53.1%",
      remaining: 37500000,
      status: "Aman",
    },
    {
      code: "5.1.02.04.01.0002",
      name: "Belanja Perjalanan Dinas Luar Daerah (Luar Kota)",
      pagu: 180000000,
      realization: 84200000,
      percentage: "46.8%",
      remaining: 95800000,
      status: "Aman",
    },
    {
      code: "5.1.02.04.01.0003",
      name: "Belanja Perjalanan Dinas Paket Meeting Dalam Kota",
      pagu: 60000000,
      realization: 21800000,
      percentage: "36.3%",
      remaining: 38200000,
      status: "Aman",
    },
    {
      code: "5.1.02.04.01.0004",
      name: "Belanja Perjalanan Dinas Luar Negeri",
      pagu: 30000000,
      realization: 0,
      percentage: "0.0%",
      remaining: 30000000,
      status: "Belum Terealisasi",
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
      <BendaharaHeader title="Realisasi Anggaran Perjalanan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statMetrics.map((card, idx) => (
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

        {/* Tabel Rekapitulasi Akun Belanja */}
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-5">
            <div>
              <CardTitle>Rincian Rekening Belanja Perjalanan Dinas</CardTitle>
              <CardDescription>
                Klasifikasi anggaran berdasarkan Kode Akun Standar (BAS) Keuangan Daerah
              </CardDescription>
            </div>

            <CardAction className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert("Mengekspor laporan realisasi anggaran ke format Excel...")}
              >
                Ekspor Laporan
              </Button>
            </CardAction>
          </CardHeader>

          {/* Filter Periode */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-4">
            {["Semua", "Triwulan I", "Triwulan II", "Triwulan III", "Triwulan IV"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedQuarter(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                  selectedQuarter === tab
                    ? "bg-[#123B72] text-white"
                    : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Kode Akun</TableHead>
                <TableHead>Uraian Belanja</TableHead>
                <TableHead>Pagu Anggaran</TableHead>
                <TableHead>Realisasi (SPJ)</TableHead>
                <TableHead>% Serapan</TableHead>
                <TableHead>Sisa Pagu</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetAccounts.map((row) => (
                <TableRow key={row.code}>
                  <TableCell className="font-semibold font-mono text-[12.5px]">
                    {row.code}
                  </TableCell>
                  <TableCell className="font-medium text-[#1E293B] max-w-[280px]">
                    {row.name}
                  </TableCell>
                  <TableCell className="text-[#1E293B]">
                    {formatRupiah(row.pagu)}
                  </TableCell>
                  <TableCell className="font-semibold text-[#0066B3]">
                    {formatRupiah(row.realization)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[12px]">{row.percentage}</span>
                      <div className="w-16 h-1.5 bg-[#E8EEF3] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0066B3] rounded-full"
                          style={{ width: row.percentage }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-[#0B7A77]">
                    {formatRupiah(row.remaining)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.status === "Aman" ? "success" : "neutral"}>
                      {row.status}
                    </Badge>
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

