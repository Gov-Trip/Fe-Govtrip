"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
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

interface SPPDItem {
  id: string;
  sppdNumber: string;
  tripCode: string;
  employee: string;
  nip: string;
  unit: string;
  destination: string;
  date: string;
  purpose: string;
  transport: string;
  signee: string;
  status: "Sudah terbit" | "Belum terbit";
}

const INITIAL_SPPD_LIST: SPPDItem[] = [
  {
    id: "1",
    sppdNumber: "090/087/SPPD/IX/2026",
    tripCode: "PD-2026/087",
    employee: "Liyana Agustin, S.AP",
    nip: "19880412 201101 2 002",
    unit: "Bidang Perencanaan",
    destination: "Yogyakarta",
    date: "21–23 September 2026",
    purpose: "Sosialisasi regulasi perjalanan dinas dan standar biaya masukan bersama Kemenkeu",
    transport: "Kereta api",
    signee: "Dr. H. Bambang Soeprapto, M.Si. (Kepala Dinas)",
    status: "Sudah terbit",
  },
  {
    id: "2",
    sppdNumber: "090/088/SPPD/IX/2026",
    tripCode: "PD-2026/088",
    employee: "Bagas Wicaksono, S.E.",
    nip: "19850615 200902 1 004",
    unit: "Bidang Keuangan & Aset",
    destination: "Jakarta",
    date: "20–22 September 2026",
    purpose: "Konsultasi integrasi SIPD-RI dengan Subdit Pelaksanaan Daerah Kemendagri",
    transport: "Pesawat terbang",
    signee: "Dr. H. Bambang Soeprapto, M.Si. (Kepala Dinas)",
    status: "Sudah terbit",
  },
  {
    id: "3",
    sppdNumber: "090/089/SPPD/IX/2026",
    tripCode: "PD-2026/089",
    employee: "Nadia Rahmawati, S.Tr.IP",
    nip: "19920120 201403 2 001",
    unit: "Sekretariat Daerah",
    destination: "Bogor",
    date: "21 September 2026",
    purpose: "Rapat koordinasi percepatan reformasi birokrasi tematik",
    transport: "Kendaraan dinas operasional",
    signee: "Sekretaris Daerah",
    status: "Sudah terbit",
  },
  {
    id: "4",
    sppdNumber: "-",
    tripCode: "PD-2026/091",
    employee: "Liyana Agustin, S.AP",
    nip: "19880412 201101 2 002",
    unit: "Bidang Perencanaan",
    destination: "Bandung",
    date: "6–8 Oktober 2026",
    purpose: "Rapat koordinasi program regional bersama dinas terkait",
    transport: "Kereta Cepat Whoosh",
    signee: "Kepala Dinas",
    status: "Belum terbit",
  },
  {
    id: "5",
    sppdNumber: "-",
    tripCode: "PD-2026/093",
    employee: "Rudi Hartono, M.Si.",
    nip: "19830911 200604 1 003",
    unit: "Bidang Perencanaan",
    destination: "Surabaya",
    date: "12–14 Oktober 2026",
    purpose: "Studi tiru penerapan Command Center dan Smart City",
    transport: "Pesawat terbang",
    signee: "Kepala Dinas",
    status: "Belum terbit",
  },
];

export default function AdminSPPDPage() {
  const [sppdList, setSppdList] = useState<SPPDItem[]>(INITIAL_SPPD_LIST);
  const [search, setSearch] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "Sudah terbit" | "Belum terbit">("all");
  const [previewSPPD, setPreviewSPPD] = useState<SPPDItem | null>(null);

  const handleIssueSPPD = (id: string, tripCode: string) => {
    const generatedNumber = `090/${tripCode.replace("PD-2026/", "")}/SPPD/X/2026`;
    setSppdList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              sppdNumber: generatedNumber,
              status: "Sudah terbit",
            }
          : item
      )
    );
    alert(`SPPD untuk perjalanan ${tripCode} berhasil diterbitkan dengan nomor resmi ${generatedNumber}!`);
  };

  const filteredList = sppdList.filter((item) => {
    const matchSearch =
      item.employee.toLowerCase().includes(search.toLowerCase()) ||
      item.tripCode.toLowerCase().includes(search.toLowerCase()) ||
      item.sppdNumber.toLowerCase().includes(search.toLowerCase()) ||
      item.destination.toLowerCase().includes(search.toLowerCase());

    const matchTab = filterTab === "all" || item.status === filterTab;

    return matchSearch && matchTab;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="SPPD Digital" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <CardTitle>Surat Perintah Perjalanan Dinas (SPPD)</CardTitle>
              <CardDescription>
                Penerbitan nomor resmi, penandatanganan elektronik, dan arsip dokumen SPPD
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[300px]">
              <Input
                placeholder="Cari pegawai, nomor, tujuan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CardAction>
          </CardHeader>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-4">
            <button
              onClick={() => setFilterTab("all")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterTab === "all"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Semua ({sppdList.length})
            </button>
            <button
              onClick={() => setFilterTab("Sudah terbit")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterTab === "Sudah terbit"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Sudah Terbit ({sppdList.filter((s) => s.status === "Sudah terbit").length})
            </button>
            <button
              onClick={() => setFilterTab("Belum terbit")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterTab === "Belum terbit"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Belum Terbit ({sppdList.filter((s) => s.status === "Belum terbit").length})
            </button>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nomor SPPD</TableHead>
                <TableHead>Pegawai</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal Pelaksanaan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className={`font-semibold ${row.sppdNumber === '-' ? 'text-[#757575]' : 'text-[#1E293B]'}`}>
                        {row.sppdNumber}
                      </span>
                      <span className="text-[11px] text-[#64748B]">
                        Kode: {row.tripCode}
                      </span>
                    </div>
                  </TableCell>
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
                  <TableCell className="text-[#64748B]">{row.date}</TableCell>
                  <TableCell>
                    <Badge status={row.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {row.status === "Sudah terbit" ? (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPreviewSPPD(row)}
                            className="text-[12px]"
                          >
                            Pratinjau
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => alert(`Mengunduh berkas resmi SPPD ${row.sppdNumber}...`)}
                            className="text-[#0066B3] hover:underline text-[12px]"
                          >
                            Unduh PDF
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleIssueSPPD(row.id, row.tripCode)}
                        >
                          Terbitkan SPPD
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredList.length === 0 && (
            <div className="p-8 text-center text-[#64748B] text-[13px]">
              Tidak ada data SPPD yang sesuai dengan filter.
            </div>
          )}
        </Card>
      </main>

      {/* Modal Preview Dokumen Resmi SPPD (Figma Screen 5 Implementation) */}
      {previewSPPD && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl border border-[#E8EEF3] max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#DFF5F4] text-[#0B7A77] uppercase">
                  Dokumen Resmi Sah
                </span>
                <span className="text-[12px] text-[#64748B]">TTE Tersertifikasi BSrE</span>
              </div>
              <button
                onClick={() => setPreviewSPPD(null)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Official SPPD Format Container */}
            <div className="mt-5 p-6 bg-[#FAFCFF] border-2 border-[#123B72] rounded-xl text-[#1E293B]">
              {/* Kop Surat Dokumen */}
              <div className="text-center pb-4 border-b-2 border-[#123B72] mb-5">
                <h2 className="text-[14px] font-bold tracking-wider text-[#123B72] uppercase">
                  Pemerintah Daerah Provinsi
                </h2>
                <h1 className="text-[18px] font-extrabold tracking-tight text-[#123B72] mt-0.5">
                  SURAT PERINTAH PERJALANAN DINAS (SPPD)
                </h1>
                <p className="text-[12.5px] font-semibold text-[#64748B] mt-1 font-mono">
                  Nomor: {previewSPPD.sppdNumber}
                </p>
              </div>

              {/* Tabel Butir SPPD */}
              <div className="divide-y divide-[#E8EEF3] text-[12.5px]">
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">1. Pejabat Berwenang</span>
                  <span className="col-span-2 font-medium">{previewSPPD.signee}</span>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">2. Nama Pegawai / NIP</span>
                  <div className="col-span-2">
                    <span className="font-bold text-[#123B72] block">{previewSPPD.employee}</span>
                    <span className="text-[#64748B] font-mono text-[11.5px]">NIP. {previewSPPD.nip}</span>
                  </div>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">3. Unit Kerja</span>
                  <span className="col-span-2 font-medium">{previewSPPD.unit}</span>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">4. Maksud Perjalanan</span>
                  <span className="col-span-2 font-medium text-[#334155] leading-relaxed">
                    {previewSPPD.purpose}
                  </span>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">5. Alat Angkutan</span>
                  <span className="col-span-2 font-medium">{previewSPPD.transport}</span>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">6. Tempat Tujuan</span>
                  <span className="col-span-2 font-bold text-[#0066B3]">{previewSPPD.destination}</span>
                </div>
                <div className="py-2 grid grid-cols-3">
                  <span className="text-[#64748B]">7. Tanggal Pelaksanaan</span>
                  <span className="col-span-2 font-medium">{previewSPPD.date}</span>
                </div>
              </div>

              {/* Tanda Tangan & QR Code */}
              <div className="mt-6 pt-5 border-t border-[#E8EEF3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Real SVG QR Code representation */}
                  <div className="w-16 h-16 border border-[#C9D8EC] p-1 rounded-lg bg-white shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#123B72]" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v3h-2v-3zm0-5h4v3h-4v-3zm-4 0h2v2h-2v-2zm2 4h2v4h-2v-4zm-2 2h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#123B72] block">
                      Verifikasi Keaslian Dokumen
                    </span>
                    <span className="text-[10px] text-[#64748B] block mt-0.5">
                      Pindai QR Code untuk validasi tanda tangan elektronik BSrE
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#64748B] block">Ditetapkan Secara Digital oleh</span>
                  <span className="text-[12.5px] font-bold text-[#123B72] block mt-0.5">
                    {previewSPPD.signee}
                  </span>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-[#DFF5F4] text-[#0B7A77] rounded">
                    TERTANDATANGANI SECARA ELEKTRONIK
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2.5">
              <Button
                variant="outline"
                onClick={() => setPreviewSPPD(null)}
              >
                Tutup
              </Button>
              <Button
                className="bg-[#0066B3] text-white flex items-center gap-1.5"
                onClick={() => {
                  alert(`Memulai proses pencetakan dokumen ${previewSPPD.sppdNumber}...`);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect width="12" height="8" x="6" y="14" />
                </svg>
                Cetak / Ekspor PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
