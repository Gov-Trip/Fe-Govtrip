"use client";

import { useState } from "react";
import AtasanHeader from "@/components/atasan/AtasanHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Input,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function AtasanRiwayatPage() {
  const [search, setSearch] = useState("");

  const history = [
    {
      number: "PD-2026/088",
      employee: "Bagas",
      unit: "Bidang Keuangan",
      destination: "Jakarta",
      date: "17 Sep 2026",
      decision: "Disetujui",
      note: "Disetujui, diteruskan ke Kepala Bidang",
    },
    {
      number: "PD-2026/087",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      date: "14 Sep 2026",
      decision: "Disetujui",
      note: "Sesuai dengan agenda sosialisasi kementerian",
    },
    {
      number: "PD-2026/081",
      employee: "Sari",
      unit: "Bidang Perencanaan",
      destination: "Solo",
      date: "10 Sep 2026",
      decision: "Disetujui",
      note: "Disetujui penuh",
    },
    {
      number: "PD-2026/075",
      employee: "Rudi",
      unit: "Bidang Perencanaan",
      destination: "Semarang",
      date: "28 Agu 2026",
      decision: "Dikembalikan",
      note: "Mohon lengkapi lampiran estimasi hotel dan rute dinas",
    },
  ];

  const filteredHistory = history.filter(
    (h) =>
      h.number.toLowerCase().includes(search.toLowerCase()) ||
      h.employee.toLowerCase().includes(search.toLowerCase()) ||
      h.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col">
      <AtasanHeader title="Riwayat Approval" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-6">
            <div>
              <CardTitle>Riwayat approval</CardTitle>
              <CardDescription>
                Catatan keputusan pengajuan perjalanan dinas bawahan
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[280px]">
              <Input
                placeholder="Cari nomor atau nama"
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

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nomor Pengajuan</TableHead>
                <TableHead>Pegawai</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal Keputusan</TableHead>
                <TableHead>Keputusan</TableHead>
                <TableHead className="text-right">Catatan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((item) => (
                <TableRow key={item.number}>
                  <TableCell className="font-semibold">{item.number}</TableCell>
                  <TableCell className="font-medium">
                    {item.employee}
                    <span className="block text-[11px] text-[#64748B] font-normal">
                      {item.unit}
                    </span>
                  </TableCell>
                  <TableCell>{item.destination}</TableCell>
                  <TableCell className="text-[#64748B]">{item.date}</TableCell>
                  <TableCell>
                    <Badge status={item.decision} />
                  </TableCell>
                  <TableCell className="text-right text-[#64748B] max-w-[240px] truncate">
                    {item.note}
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
