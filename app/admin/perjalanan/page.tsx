"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Input,
  Badge,
  Button,
  Stepper,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

interface TripData {
  number: string;
  employee: string;
  unit: string;
  destination: string;
  period: string;
  purpose: string;
  transport: string;
  costTransport: string;
  costAccommodation: string;
  costPerDiem: string;
  totalBudget: string;
  status: "Berjalan" | "Menunggu" | "Selesai";
  currentStep: number;
}

const TRIPS_DATA: TripData[] = [
  {
    number: "PD-2026/087",
    employee: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    destination: "Yogyakarta",
    period: "21–23 Sep 2026",
    purpose: "Sosialisasi regulasi perjalanan dinas dan standar biaya masukan bersama Kemenkeu",
    transport: "Kereta Api (Eksekutif)",
    costTransport: "Rp 900.000",
    costAccommodation: "Rp 1.600.000",
    costPerDiem: "Rp 1.350.000",
    totalBudget: "Rp 3.850.000",
    status: "Berjalan",
    currentStep: 4,
  },
  {
    number: "PD-2026/088",
    employee: "Bagas Wicaksono, S.E.",
    unit: "Bidang Keuangan & Aset",
    destination: "Jakarta",
    period: "20–22 Sep 2026",
    purpose: "Konsultasi sistem pelaporan SIPD RI di Kemendagri",
    transport: "Pesawat Terbang (Garuda Indonesia)",
    costTransport: "Rp 1.800.000",
    costAccommodation: "Rp 1.400.000",
    costPerDiem: "Rp 1.000.000",
    totalBudget: "Rp 4.200.000",
    status: "Berjalan",
    currentStep: 4,
  },
  {
    number: "PD-2026/089",
    employee: "Nadia Rahmawati, S.Tr.IP",
    unit: "Sekretariat Daerah",
    destination: "Bogor",
    period: "21 Sep 2026",
    purpose: "Rapat koordinasi percepatan reformasi birokrasi",
    transport: "Kendaraan Dinas Operasional",
    costTransport: "Rp 350.000",
    costAccommodation: "Rp 0",
    costPerDiem: "Rp 500.000",
    totalBudget: "Rp 850.000",
    status: "Berjalan",
    currentStep: 4,
  },
  {
    number: "PD-2026/091",
    employee: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    destination: "Bandung",
    period: "6–8 Okt 2026",
    purpose: "Rapat koordinasi program regional bersama dinas terkait",
    transport: "Kereta Cepat Whoosh",
    costTransport: "Rp 600.000",
    costAccommodation: "Rp 1.100.000",
    costPerDiem: "Rp 1.200.000",
    totalBudget: "Rp 2.900.000",
    status: "Menunggu",
    currentStep: 2,
  },
  {
    number: "PD-2026/093",
    employee: "Rudi Hartono, M.Si.",
    unit: "Bidang Perencanaan",
    destination: "Surabaya",
    period: "12–14 Okt 2026",
    purpose: "Studi tiru penerapan Command Center dan Smart City Jawa Timur",
    transport: "Pesawat Terbang",
    costTransport: "Rp 2.200.000",
    costAccommodation: "Rp 1.350.000",
    costPerDiem: "Rp 1.200.000",
    totalBudget: "Rp 4.750.000",
    status: "Menunggu",
    currentStep: 2,
  },
  {
    number: "PD-2026/079",
    employee: "Hendra Kurniawan, S.E.",
    unit: "Inspektorat",
    destination: "Makassar",
    period: "14–16 Sep 2026",
    purpose: "Audit investigatif pengelolaan DAK Fisik bidang pendidikan",
    transport: "Pesawat Terbang",
    costTransport: "Rp 2.400.000",
    costAccommodation: "Rp 1.500.000",
    costPerDiem: "Rp 1.200.000",
    totalBudget: "Rp 5.100.000",
    status: "Selesai",
    currentStep: 5,
  },
];

export default function AdminPerjalananPage() {
  const [trips] = useState<TripData[]>(TRIPS_DATA);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Semua");
  const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);

  const filteredTrips = trips.filter((t) => {
    const matchesSearch =
      t.number.toLowerCase().includes(search.toLowerCase()) ||
      t.employee.toLowerCase().includes(search.toLowerCase()) ||
      t.destination.toLowerCase().includes(search.toLowerCase());

    if (activeTab === "Semua") return matchesSearch;
    return matchesSearch && t.status === activeTab;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Data Perjalanan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          {/* Header & Search */}
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <CardTitle>Data Perjalanan Dinas</CardTitle>
              <CardDescription>
                Semua pengajuan dan penugasan dinas tahun anggaran 2026
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[300px]">
              <Input
                placeholder="Cari nomor, pegawai, tujuan..."
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
            {["Semua", "Berjalan", "Menunggu", "Selesai"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#123B72] text-white"
                    : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nomor Perjalanan</TableHead>
                <TableHead>Pegawai</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Periode</TableHead>
                <TableHead>Estimasi Biaya</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTrips.map((row) => (
                <TableRow key={row.number}>
                  <TableCell className="font-semibold">{row.number}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-[#1E293B] font-medium">
                        {row.employee}
                      </span>
                      <span className="text-[11.5px] text-[#64748B]">
                        {row.unit}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell className="text-[#64748B]">{row.period}</TableCell>
                  <TableCell className="font-medium">{row.totalBudget}</TableCell>
                  <TableCell>
                    <Badge status={row.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#0066B3] hover:underline"
                      onClick={() => setSelectedTrip(row)}
                    >
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredTrips.length === 0 && (
            <div className="p-8 text-center text-[#64748B] text-[13px]">
              Tidak ada data perjalanan yang sesuai dengan filter.
            </div>
          )}
        </Card>
      </main>

      {/* Modal Detail Perjalanan */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl border border-[#E8EEF3] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[16px] font-bold text-[#123B72]">
                    Detail Perjalanan Dinas {selectedTrip.number}
                  </span>
                  <Badge status={selectedTrip.status} />
                </div>
                <p className="text-[12px] text-[#64748B]">
                  Diajukan oleh {selectedTrip.employee} ({selectedTrip.unit})
                </p>
              </div>
              <button
                onClick={() => setSelectedTrip(null)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-5 text-[13px]">
              {/* Progress Tracker (Figma Stepper) */}
              <div>
                <span className="text-[12px] font-semibold text-[#123B72] block mb-2.5">
                  Alur Persetujuan & Status Dokumen:
                </span>
                <Stepper
                  steps={[
                    {
                      label: "Diajukan",
                      status: selectedTrip.currentStep > 1 ? "completed" : selectedTrip.currentStep === 1 ? "current" : "upcoming",
                    },
                    {
                      label: "Verifikasi Admin",
                      status: selectedTrip.currentStep > 2 ? "completed" : selectedTrip.currentStep === 2 ? "current" : "upcoming",
                    },
                    {
                      label: "Persetujuan Atasan",
                      status: selectedTrip.currentStep > 3 ? "completed" : selectedTrip.currentStep === 3 ? "current" : "upcoming",
                    },
                    {
                      label: "Kepala Dinas",
                      status: selectedTrip.currentStep > 4 ? "completed" : selectedTrip.currentStep === 4 ? "current" : "upcoming",
                    },
                    {
                      label: "SPPD Terbit",
                      status: selectedTrip.currentStep >= 5 ? "completed" : "upcoming",
                    },
                  ]}
                />
              </div>

              {/* Data Umum */}
              <div className="grid grid-cols-2 gap-3 bg-[#F1F7FB] p-3.5 rounded-xl border border-[#E8EEF3]">
                <div>
                  <span className="text-[11px] text-[#64748B] block">Kota Tujuan</span>
                  <span className="font-semibold text-[#1E293B]">{selectedTrip.destination}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Periode Tanggal</span>
                  <span className="font-semibold text-[#1E293B]">{selectedTrip.period}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Moda Transportasi</span>
                  <span className="font-semibold text-[#1E293B]">{selectedTrip.transport}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Total Anggaran SBM</span>
                  <span className="font-bold text-[#0066B3]">{selectedTrip.totalBudget}</span>
                </div>
              </div>

              {/* Maksud & Tujuan */}
              <div>
                <span className="text-[11.5px] font-semibold text-[#64748B] block mb-1">
                  Maksud & Tujuan Kedinasan:
                </span>
                <div className="p-3 bg-white border border-[#E8EEF3] rounded-lg text-[#334155] leading-relaxed">
                  {selectedTrip.purpose}
                </div>
              </div>

              {/* Breakdown Biaya */}
              <div>
                <span className="text-[11.5px] font-semibold text-[#64748B] block mb-2">
                  Rincian Estimasi Biaya (SBM):
                </span>
                <div className="border border-[#E8EEF3] rounded-xl overflow-hidden divide-y divide-[#E8EEF3]">
                  <div className="px-3.5 py-2 flex justify-between bg-slate-50 text-[12px] font-medium text-[#64748B]">
                    <span>Komponen Biaya</span>
                    <span>Nominal</span>
                  </div>
                  <div className="px-3.5 py-2 flex justify-between text-[#334155]">
                    <span>Tiket / Transportasi</span>
                    <span className="font-medium">{selectedTrip.costTransport}</span>
                  </div>
                  <div className="px-3.5 py-2 flex justify-between text-[#334155]">
                    <span>Akomodasi Hotel / Penginapan</span>
                    <span className="font-medium">{selectedTrip.costAccommodation}</span>
                  </div>
                  <div className="px-3.5 py-2 flex justify-between text-[#334155]">
                    <span>Uang Harian & Konsumsi</span>
                    <span className="font-medium">{selectedTrip.costPerDiem}</span>
                  </div>
                  <div className="px-3.5 py-2.5 flex justify-between bg-[#E3F0FA] font-bold text-[#123B72]">
                    <span>Total Estimasi Biaya</span>
                    <span>{selectedTrip.totalBudget}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2 pt-3 border-t border-[#E8EEF3]">
              <Button
                variant="outline"
                onClick={() => setSelectedTrip(null)}
              >
                Tutup
              </Button>
              <Button
                className="bg-[#0066B3] text-white"
                onClick={() => {
                  alert(`Membuka dokumen SPPD untuk perjalanan ${selectedTrip.number}`);
                  setSelectedTrip(null);
                }}
              >
                Buka Dokumen SPPD
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
