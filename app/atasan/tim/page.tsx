"use client";

import { useState } from "react";
import AtasanHeader from "@/components/atasan/AtasanHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function AtasanTimPage() {
  const [filter, setFilter] = useState("Semua");

  const teamMembers = [
    {
      name: "Bagas",
      nip: "198506152009021004",
      destination: "Jakarta",
      dates: "20–22 Sep 2026",
      transport: "Pesawat",
      purpose: "Rapat koordinasi anggaran",
      status: "Sedang dinas",
    },
    {
      name: "Nadia",
      nip: "199201202014032001",
      destination: "Bogor",
      dates: "21 Sep 2026",
      transport: "Kendaraan dinas",
      purpose: "Sinkronisasi tata kelola administrasi",
      status: "Sedang dinas",
    },
    {
      name: "Liyana",
      nip: "198804122011011002",
      destination: "Yogyakarta",
      dates: "21–23 Sep 2026",
      transport: "Kereta api",
      purpose: "Sosialisasi regulasi perjalanan dinas",
      status: "Sedang dinas",
    },
    {
      name: "Rudi",
      nip: "198309112006041003",
      destination: "Surabaya",
      dates: "12–14 Okt 2026",
      transport: "Pesawat",
      purpose: "Monitoring program regional",
      status: "Terjadwal",
    },
    {
      name: "Sari",
      nip: "198711182010012003",
      destination: "Yogyakarta",
      dates: "15–17 Okt 2026",
      transport: "Kereta api",
      purpose: "Bimbingan teknis pembangunan",
      status: "Terjadwal",
    },
    {
      name: "Hendra",
      nip: "199003052012121001",
      destination: "Makassar",
      dates: "14–16 Sep 2026",
      transport: "Pesawat",
      purpose: "Audit kepatuhan belanja daerah",
      status: "Selesai",
    },
  ];

  const filteredMembers = teamMembers.filter((m) => {
    if (filter === "Semua") return true;
    return m.status === filter;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AtasanHeader title="Perjalanan Tim" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-5">
            <div>
              <CardTitle>Perjalanan tim</CardTitle>
              <CardDescription>
                Jadwal penugasan dan status perjalanan dinas bawahan langsung
              </CardDescription>
            </div>

            {/* Filter Pills */}
            <CardAction className="flex items-center gap-1.5 self-start sm:self-auto">
              {["Semua", "Sedang dinas", "Terjadwal", "Selesai"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 rounded-[8px] text-[12px] font-medium transition-colors cursor-pointer ${
                    filter === tab
                      ? "bg-[#0066B3] text-white"
                      : "bg-[#F1F7FB] text-[#64748B] hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </CardAction>
          </CardHeader>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nama Pegawai</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal Pelaksanaan</TableHead>
                <TableHead>Transportasi</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((m, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B]">
                        {m.name}
                      </span>
                      <span className="text-[11.5px] text-[#64748B]">
                        NIP. {m.nip}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-[#1E293B]">{m.destination}</TableCell>
                  <TableCell className="text-[#64748B]">{m.dates}</TableCell>
                  <TableCell className="text-[#64748B]">{m.transport}</TableCell>
                  <TableCell className="text-right">
                    <Badge status={m.status} />
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
