"use client";

import { useState } from "react";
import BendaharaHeader from "@/components/bendahara/BendaharaHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Input,
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function BendaharaRiwayatPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");

  const transactions = [
    {
      bkuNumber: "BKU-2026/09/081",
      date: "20 Sep 2026",
      type: "Pencairan Uang Muka",
      tripCode: "PD-2026/087",
      employee: "Liyana S. (Bidang Perencanaan)",
      amount: "Rp 3.850.000",
      flow: "out",
      status: "Selesai",
    },
    {
      bkuNumber: "BKU-2026/09/078",
      date: "19 Sep 2026",
      type: "Pencairan Uang Muka",
      tripCode: "PD-2026/088",
      employee: "Bagas P. (Bidang Keuangan)",
      amount: "Rp 4.200.000",
      flow: "out",
      status: "Selesai",
    },
    {
      bkuNumber: "BKU-2026/09/072",
      date: "16 Sep 2026",
      type: "Penyelesaian SPJ (LPJ)",
      tripCode: "PD-2026/070",
      employee: "Bagas P. (Bidang Keuangan)",
      amount: "Rp 4.200.000",
      flow: "settled",
      status: "Selesai",
    },
    {
      bkuNumber: "BKU-2026/09/065",
      date: "12 Sep 2026",
      type: "Setoran Sisa Kas (STS)",
      tripCode: "PD-2026/065",
      employee: "Sari W. (Bidang Perencanaan)",
      amount: "Rp 45.000",
      flow: "in",
      status: "Selesai",
    },
    {
      bkuNumber: "BKU-2026/08/112",
      date: "25 Agu 2026",
      type: "Pencairan Uang Muka",
      tripCode: "PD-2026/065",
      employee: "Sari W. (Bidang Perencanaan)",
      amount: "Rp 3.200.000",
      flow: "out",
      status: "Selesai",
    },
  ];

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.bkuNumber.toLowerCase().includes(search.toLowerCase()) ||
      t.tripCode.toLowerCase().includes(search.toLowerCase()) ||
      t.employee.toLowerCase().includes(search.toLowerCase());

    if (filter === "Semua") return matchesSearch;
    return matchesSearch && t.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="flex-1 flex flex-col">
      <BendaharaHeader title="Riwayat Pembukuan & Transaksi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-5">
            <div>
              <CardTitle>Buku Kas Umum (BKU) Perjalanan Dinas</CardTitle>
              <CardDescription>
                Arsip pencairan dana, audit SPJ, dan penerimaan sisa kas daerah
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[280px]">
              <Input
                placeholder="Cari BKU atau nama..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#757575"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                }
              />
            </CardAction>
          </CardHeader>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-4">
            {["Semua", "Uang Muka", "SPJ", "Sisa Kas"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                  filter === tab
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
                <TableHead>Nomor BKU</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jenis Transaksi</TableHead>
                <TableHead>Kode / Pegawai</TableHead>
                <TableHead>Nominal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((row) => (
                <TableRow key={row.bkuNumber}>
                  <TableCell className="font-semibold font-mono text-[12.5px] text-[#123B72]">
                    {row.bkuNumber}
                  </TableCell>
                  <TableCell className="text-[#64748B]">
                    {row.date}
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-[#1E293B]">
                      {row.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B]">
                        {row.tripCode}
                      </span>
                      <span className="text-[11.5px] text-[#64748B]">
                        {row.employee}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`font-bold text-[13.5px] ${
                        row.flow === "in"
                          ? "text-[#0B7A77]"
                          : row.flow === "out"
                          ? "text-[#123B72]"
                          : "text-[#0066B3]"
                      }`}
                    >
                      {row.flow === "in" ? `+${row.amount}` : row.amount}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">Selesai</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => alert(`Mencetak Bukti Transaksi ${row.bkuNumber}...`)}
                      className="text-[#0066B3] hover:underline"
                    >
                      Kuitansi
                    </Button>
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

