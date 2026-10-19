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

export default function BendaharaPencairanPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [successAlert, setSuccessAlert] = useState<string | null>(null);

  const [disbursementList, setDisbursementList] = useState([
    {
      id: "1",
      tripCode: "PD-2026/093",
      employee: "Rudi H.",
      nip: "198309112006041003",
      bank: "Bank BPD DIY - 00129847192",
      destination: "Surabaya",
      dates: "12–14 Okt 2026",
      transport: "Rp 2.400.000",
      accommodation: "Rp 2.100.000",
      allowance: "Rp 1.500.000",
      total: "Rp 6.120.000",
      status: "Menunggu Bayar",
      bkuNumber: "-",
    },
    {
      id: "2",
      tripCode: "PD-2026/094",
      employee: "Sari W.",
      nip: "198711182010012003",
      bank: "Bank Mandiri - 137001928374",
      destination: "Yogyakarta",
      dates: "15–17 Okt 2026",
      transport: "Rp 900.000",
      accommodation: "Rp 1.600.000",
      allowance: "Rp 1.000.000",
      total: "Rp 3.500.000",
      status: "Menunggu Bayar",
      bkuNumber: "-",
    },
    {
      id: "3",
      tripCode: "PD-2026/095",
      employee: "Bagas P.",
      nip: "198506152009021004",
      bank: "Bank BRI - 019283746192",
      destination: "Makassar",
      dates: "20–23 Okt 2026",
      transport: "Rp 2.200.000",
      accommodation: "Rp 1.800.000",
      allowance: "Rp 1.250.000",
      total: "Rp 5.250.000",
      status: "Menunggu Bayar",
      bkuNumber: "-",
    },
    {
      id: "4",
      tripCode: "PD-2026/087",
      employee: "Liyana S.",
      nip: "198804122011011002",
      bank: "Bank BPD DIY - 00391827461",
      destination: "Yogyakarta",
      dates: "21–23 Sep 2026",
      transport: "Rp 900.000",
      accommodation: "Rp 1.600.000",
      allowance: "Rp 1.350.000",
      total: "Rp 3.850.000",
      status: "Sudah Cair",
      bkuNumber: "BKU-2026/09/081",
    },
    {
      id: "5",
      tripCode: "PD-2026/088",
      employee: "Bagas P.",
      nip: "198506152009021004",
      bank: "Bank BRI - 019283746192",
      destination: "Jakarta",
      dates: "20–22 Sep 2026",
      transport: "Rp 1.400.000",
      accommodation: "Rp 1.800.000",
      allowance: "Rp 1.000.000",
      total: "Rp 4.200.000",
      status: "Sudah Cair",
      bkuNumber: "BKU-2026/09/078",
    },
  ]);

  const handleDisburse = (id: string, tripCode: string, employee: string, amount: string) => {
    const generatedBKU = `BKU-2026/10/0${Math.floor(Math.random() * 90) + 10}`;
    setDisbursementList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Sudah Cair",
              bkuNumber: generatedBKU,
            }
          : item
      )
    );
    setSuccessAlert(
      `Pencairan uang muka sebesar ${amount} untuk ${employee} (${tripCode}) berhasil dibukukan dengan nomor ${generatedBKU}. Bukti kuitansi siap dicetak.`
    );
  };

  const filteredList = disbursementList.filter((item) => {
    const matchesSearch =
      item.tripCode.toLowerCase().includes(search.toLowerCase()) ||
      item.employee.toLowerCase().includes(search.toLowerCase()) ||
      item.destination.toLowerCase().includes(search.toLowerCase());

    if (filter === "Semua") return matchesSearch;
    return matchesSearch && item.status === filter;
  });

  return (
    <div className="flex-1 flex flex-col">
      <BendaharaHeader title="Pencairan Dana Uang Muka" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {successAlert && (
          <div className="bg-[#DFF5F4] border border-[#12A9A5] text-[#0B7A77] p-4 rounded-[12px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">✓ Transaksi Sukses!</span>
              <span>{successAlert}</span>
            </div>
            <button
              onClick={() => setSuccessAlert(null)}
              className="text-[#0B7A77] font-semibold text-[13px] hover:underline"
            >
              Tutup
            </button>
          </div>
        )}

        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-5">
            <div>
              <CardTitle>Daftar Pencairan Uang Muka</CardTitle>
              <CardDescription>
                Penerbitan bukti bayar kuitansi uang saku, tiket, dan penginapan dinas
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[280px]">
              <Input
                placeholder="Cari pegawai atau kode..."
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
            {["Semua", "Menunggu Bayar", "Sudah Cair"].map((tab) => (
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
                <TableHead>Kode / Pegawai</TableHead>
                <TableHead>Tujuan & Tanggal</TableHead>
                <TableHead>Rekening Tujuan</TableHead>
                <TableHead>Rincian Biaya</TableHead>
                <TableHead>Total Uang Muka</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B]">
                        {row.tripCode}
                      </span>
                      <span className="text-[12px] text-[#1E293B]">
                        {row.employee}
                      </span>
                      <span className="text-[11px] text-[#64748B]">
                        NIP. {row.nip}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-[#1E293B]">
                        {row.destination}
                      </span>
                      <span className="text-[11.5px] text-[#64748B]">
                        {row.dates}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[12px] text-[#64748B]">
                    {row.bank}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col text-[11px] text-[#64748B] space-y-0.5">
                      <span>Transport: {row.transport}</span>
                      <span>Hotel: {row.accommodation}</span>
                      <span>U. Harian: {row.allowance}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-[#123B72] text-[14px]">
                    {row.total}
                  </TableCell>
                  <TableCell>
                    <Badge status={row.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    {row.status === "Menunggu Bayar" ? (
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() =>
                          handleDisburse(row.id, row.tripCode, row.employee, row.total)
                        }
                      >
                        Cairkan
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          alert(`Mencetak Bukti Kuitansi Pembayaran ${row.bkuNumber}...`)
                        }
                        className="text-[#0066B3] hover:underline"
                      >
                        Kuitansi BKU
                      </Button>
                    )}
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

