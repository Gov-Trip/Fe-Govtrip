"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Badge,
  Button,
  Input,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

interface ActiveMonitor {
  id: string;
  name: string;
  nip: string;
  unit: string;
  location: string;
  hotel: string;
  dayProgress: string;
  lastCheckin: string;
  phone: string;
  status: "Berjalan Aktif" | "Perlu Konfirmasi";
}

interface UpcomingSchedule {
  code: string;
  employee: string;
  unit: string;
  destination: string;
  dates: string;
  transport: string;
}

const ACTIVE_MONITORS: ActiveMonitor[] = [
  {
    id: "mon-1",
    name: "Liyana Agustin, S.AP",
    nip: "19880412 201101 2 002",
    unit: "Bidang Perencanaan",
    location: "Yogyakarta",
    hotel: "Hotel Tentrem Yogyakarta",
    dayProgress: "Hari ke-1 dari 3",
    lastCheckin: "08.12 WIB (Lokasi: Kantor BPKAD DIY)",
    phone: "0812-3456-7890",
    status: "Berjalan Aktif",
  },
  {
    id: "mon-2",
    name: "Bagas Wicaksono, S.E.",
    nip: "19850615 200902 1 004",
    unit: "Bidang Keuangan",
    location: "Jakarta Pusat",
    hotel: "Hotel Borobudur Jakarta",
    dayProgress: "Hari ke-2 dari 3",
    lastCheckin: "07.45 WIB (Lokasi: Gedung Kemendagri RI)",
    phone: "0813-8899-1122",
    status: "Berjalan Aktif",
  },
  {
    id: "mon-3",
    name: "Nadia Rahmawati, S.Tr.IP",
    nip: "19920120 201403 2 001",
    unit: "Sekretariat Daerah",
    location: "Bogor",
    hotel: "Tanpa Penginapan (Perjalanan 1 Hari)",
    dayProgress: "Hari ke-1 dari 1",
    lastCheckin: "09.03 WIB (Lokasi: Balai Kota Bogor)",
    phone: "0819-2233-4455",
    status: "Berjalan Aktif",
  },
];

const UPCOMING_SCHEDULES: UpcomingSchedule[] = [
  {
    code: "PD-2026/091",
    employee: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    destination: "Bandung",
    dates: "6–8 Okt 2026",
    transport: "Kereta Cepat Whoosh",
  },
  {
    code: "PD-2026/093",
    employee: "Rudi Hartono, M.Si.",
    unit: "Bidang Perencanaan",
    destination: "Surabaya",
    dates: "12–14 Okt 2026",
    transport: "Pesawat Terbang",
  },
  {
    code: "PD-2026/094",
    employee: "Sari Wulandari, S.Pd.",
    unit: "Dinas Pendidikan",
    destination: "Yogyakarta",
    dates: "15–17 Okt 2026",
    transport: "Kereta Api",
  },
];

export default function AdminMonitoringPage() {
  const [monitors] = useState<ActiveMonitor[]>(ACTIVE_MONITORS);
  const [schedules] = useState<UpcomingSchedule[]>(UPCOMING_SCHEDULES);
  const [selectedMonitor, setSelectedMonitor] = useState<ActiveMonitor | null>(null);

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Monitoring Perjalanan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Realtime Active Travelers Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-[#123B72] text-[18px] font-bold tracking-tight">
                Pegawai Sedang Dinas Hari Ini
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-0.5">
                Pemantauan real-time status check-in, lokasi kedinasan, dan keselamatan ASN
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-semibold text-[#0B7A77]">
                Live Geolocation Tracking Aktif
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {monitors.map((item) => (
              <Card key={item.id} className="flex flex-col justify-between hover:border-[#C9D8EC] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[15px] font-bold text-[#123B72]">
                      {item.name}
                    </span>
                    <Badge variant="info">
                      {item.location}
                    </Badge>
                  </div>

                  <p className="text-[12px] text-[#64748B]">
                    {item.unit}
                  </p>
                  <p className="text-[12.5px] font-medium text-[#1E293B] mt-2">
                    {item.dayProgress}
                  </p>
                  <p className="text-[11.5px] text-[#64748B] mt-1">
                    🏨 {item.hotel}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8EEF3]">
                  <div className="text-[11.5px] mb-3">
                    <span className="text-[#64748B] block">Presensi Presisi Hari Ini:</span>
                    <span className="font-semibold text-[#0B7A77] block mt-0.5">
                      ✓ {item.lastCheckin}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-[12px]"
                    onClick={() => setSelectedMonitor(item)}
                  >
                    Detail Check-In & Kontak
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Jadwal Berikutnya Table */}
        <Card>
          <CardHeader className="flex-col !items-start gap-1">
            <CardTitle>Jadwal Perjalanan Berikutnya</CardTitle>
            <CardDescription>
              Daftar penugasan dinas yang telah disetujui dan siap diberangkatkan
            </CardDescription>
          </CardHeader>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Kode Perjalanan</TableHead>
                <TableHead>Pegawai</TableHead>
                <TableHead>Unit Kerja</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Moda Angkutan</TableHead>
                <TableHead className="text-right">Tanggal Berangkat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules.map((schedule) => (
                <TableRow key={schedule.code}>
                  <TableCell className="font-semibold">{schedule.code}</TableCell>
                  <TableCell className="font-medium text-[#1E293B]">{schedule.employee}</TableCell>
                  <TableCell className="text-[#64748B]">{schedule.unit}</TableCell>
                  <TableCell className="font-semibold text-[#0066B3]">{schedule.destination}</TableCell>
                  <TableCell className="text-[#64748B]">{schedule.transport}</TableCell>
                  <TableCell className="text-right font-medium">{schedule.dates}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>

      {/* Modal Detail Kontak & Lokasi */}
      {selectedMonitor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <div>
                <h3 className="text-[16px] font-bold text-[#123B72]">
                  Informasi Monitoring ASN
                </h3>
                <p className="text-[12px] text-[#64748B]">
                  Status keberadaan dan koordinasi darurat
                </p>
              </div>
              <button
                onClick={() => setSelectedMonitor(null)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-[13px]">
              <div className="p-3.5 bg-[#F1F7FB] rounded-xl border border-[#E8EEF3]">
                <div className="font-bold text-[#1E293B] text-[14px]">
                  {selectedMonitor.name}
                </div>
                <div className="text-[11.5px] text-[#64748B] font-mono mt-0.5">
                  NIP. {selectedMonitor.nip} • {selectedMonitor.unit}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[12.5px]">
                <div className="p-3 bg-white border border-[#E8EEF3] rounded-lg">
                  <span className="text-[11px] text-[#64748B] block">Kota & Progress</span>
                  <span className="font-semibold text-[#123B72] mt-0.5 block">{selectedMonitor.location}</span>
                  <span className="text-[11px] text-[#64748B]">{selectedMonitor.dayProgress}</span>
                </div>
                <div className="p-3 bg-white border border-[#E8EEF3] rounded-lg">
                  <span className="text-[11px] text-[#64748B] block">Tempat Menginap</span>
                  <span className="font-semibold text-[#123B72] mt-0.5 block line-clamp-1">{selectedMonitor.hotel}</span>
                  <span className="text-[11px] text-emerald-600">Terverifikasi SBM</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-[#E8EEF3] rounded-lg">
                <span className="text-[11px] text-[#64748B] block">Presensi Lokasi Terakhir</span>
                <span className="font-semibold text-[#0B7A77] block mt-0.5">
                  {selectedMonitor.lastCheckin}
                </span>
                <span className="text-[11px] text-[#64748B] block mt-1">
                  Koordinat GPS terenkripsi via aplikasi mobile Gov.Trip ASN
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedMonitor(null)}
              >
                Tutup
              </Button>
              <Button
                className="bg-[#0066B3] text-white flex items-center gap-1.5"
                onClick={() => {
                  alert(`Menghubungi ${selectedMonitor.name} via WhatsApp (${selectedMonitor.phone})...`);
                  setSelectedMonitor(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Hubungi Pegawai
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
