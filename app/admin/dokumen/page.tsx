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
  StatCard,
} from "@/components/ui";

interface DocumentItem {
  name: string;
  status: "Lengkap" | "Belum diunggah" | "Belum lengkap" | "Belum diterima" | "Menunggu SPPD";
  date: string;
}

interface TripDocument {
  id: string;
  code: string;
  employee: string;
  unit: string;
  items: DocumentItem[];
  isComplete: boolean;
}

const INITIAL_DOCUMENTS: TripDocument[] = [
  {
    id: "doc-1",
    code: "PD-2026/087 · Yogyakarta",
    employee: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    items: [
      { name: "Surat Tugas Resmi", status: "Lengkap", date: "18 Sep 2026" },
      { name: "Tiket Transportasi Kereta", status: "Lengkap", date: "19 Sep 2026" },
      { name: "Bukti Akomodasi Hotel", status: "Lengkap", date: "19 Sep 2026" },
      { name: "SPPD Digital Terbit", status: "Lengkap", date: "20 Sep 2026" },
    ],
    isComplete: true,
  },
  {
    id: "doc-2",
    code: "PD-2026/091 · Bandung",
    employee: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    items: [
      { name: "Surat Tugas Resmi", status: "Belum diunggah", date: "-" },
      { name: "Estimasi Biaya SBM", status: "Lengkap", date: "22 Sep 2026" },
      { name: "Tiket Whoosh", status: "Menunggu SPPD", date: "-" },
      { name: "Akomodasi Hotel", status: "Belum diunggah", date: "-" },
    ],
    isComplete: false,
  },
  {
    id: "doc-3",
    code: "PD-2026/093 · Surabaya",
    employee: "Rudi Hartono, M.Si.",
    unit: "Bidang Perencanaan",
    items: [
      { name: "Surat Tugas Resmi", status: "Lengkap", date: "23 Sep 2026" },
      { name: "Rincian Biaya", status: "Belum lengkap", date: "Catatan: lampiran hotel" },
      { name: "Persetujuan Atasan", status: "Lengkap", date: "24 Sep 2026" },
      { name: "Tiket Pesawat", status: "Belum diunggah", date: "-" },
    ],
    isComplete: false,
  },
  {
    id: "doc-4",
    code: "PD-2026/079 · Makassar",
    employee: "Hendra Kurniawan, S.E.",
    unit: "Inspektorat",
    items: [
      { name: "Surat Tugas Resmi", status: "Lengkap", date: "10 Sep 2026" },
      { name: "Bukti Tiket Pesawat", status: "Belum diterima", date: "-" },
      { name: "Laporan Pertanggungjawaban (LPJ)", status: "Belum diunggah", date: "Batas 23 Sep" },
      { name: "Kwitansi Riil Pengeluaran", status: "Belum lengkap", date: "-" },
    ],
    isComplete: false,
  },
];

export default function AdminDokumenPage() {
  const [docList, setDocList] = useState<TripDocument[]>(INITIAL_DOCUMENTS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "complete" | "pending">("all");

  const handleVerifyItem = (tripId: string, itemName: string) => {
    setDocList((prev) =>
      prev.map((doc) => {
        if (doc.id !== tripId) return doc;
        const updatedItems = doc.items.map((item) =>
          item.name === itemName ? { ...item, status: "Lengkap" as const, date: "Diverifikasi Hari Ini" } : item
        );
        const allDone = updatedItems.every((item) => item.status === "Lengkap");
        return {
          ...doc,
          items: updatedItems,
          isComplete: allDone,
        };
      })
    );
    alert(`Berkas "${itemName}" berhasil diverifikasi dan ditandai valid!`);
  };

  const filteredDocs = docList.filter((doc) => {
    const matchSearch =
      doc.code.toLowerCase().includes(search.toLowerCase()) ||
      doc.employee.toLowerCase().includes(search.toLowerCase()) ||
      doc.unit.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "all" ||
      (filterStatus === "complete" && doc.isComplete) ||
      (filterStatus === "pending" && !doc.isComplete);

    return matchSearch && matchStatus;
  });

  const totalComplete = docList.filter((d) => d.isComplete).length;
  const totalPending = docList.filter((d) => !d.isComplete).length;

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Dokumen" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Top Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Total Berkas Perjalanan"
            value={docList.length}
            sublabel="Tahun anggaran 2026"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0066B3]">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
            }
          />
          <StatCard
            title="Arsip Berkas Lengkap"
            value={totalComplete}
            sublabel="Siap untuk audit BPK"
            iconBg="bg-[#DFF5F4]"
            iconColor="text-[#0B7A77]"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B7A77]">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            }
          />
          <StatCard
            title="Perlu Tindak Lanjut"
            value={totalPending}
            sublabel="Lampiran belum lengkap"
            iconBg="bg-[#FFF1D1]"
            iconColor="text-[#8A5A00]"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F5A000]">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            }
          />
        </div>

        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <CardTitle>Arsip & Kelengkapan Dokumen Perjalanan</CardTitle>
              <CardDescription>
                Pemeriksaan validitas surat tugas, tiket transportasi, nota hotel, dan LPJ
              </CardDescription>
            </div>

            <CardAction className="w-full sm:w-[300px]">
              <Input
                placeholder="Cari kode atau pegawai..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CardAction>
          </CardHeader>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-5">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterStatus === "all"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Semua Berkas ({docList.length})
            </button>
            <button
              onClick={() => setFilterStatus("pending")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterStatus === "pending"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Perlu Tindak Lanjut ({totalPending})
            </button>
            <button
              onClick={() => setFilterStatus("complete")}
              className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors ${
                filterStatus === "complete"
                  ? "bg-[#123B72] text-white"
                  : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
              }`}
            >
              Lengkap ({totalComplete})
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="border border-[#E8EEF3] rounded-[14px] p-5 bg-[#F1F7FB]/40 hover:bg-[#F1F7FB]/80 transition-all shadow-[0px_2px_8px_0px_rgba(18,59,114,0.03)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E8EEF3] gap-2">
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#123B72]">
                      {doc.code}
                    </h3>
                    <p className="text-[12px] text-[#64748B] mt-0.5">
                      Pelaksana: <span className="font-semibold text-[#1E293B]">{doc.employee}</span> ({doc.unit})
                    </p>
                  </div>

                  <Badge variant={doc.isComplete ? "success" : "warning"}>
                    {doc.isComplete ? "Berkas Lengkap" : "Perlu Tindak Lanjut"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4">
                  {doc.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white border border-[#E8EEF3] rounded-[10px] p-3.5 flex flex-col justify-between shadow-xs hover:border-[#C9D8EC] transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[12.5px] font-semibold text-[#1E293B]">
                            {item.name}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              item.status === "Lengkap" ? "bg-[#0B7A77]" : "bg-[#F5A000]"
                            }`}
                          />
                        </div>

                        <div className="mt-2.5 flex items-center justify-between text-[11px]">
                          <span
                            className={`font-semibold ${
                              item.status === "Lengkap"
                                ? "text-[#0B7A77]"
                                : item.status === "Menunggu SPPD"
                                ? "text-[#0066B3]"
                                : "text-[#B02A2A]"
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className="text-[#757575] font-mono">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      {item.status !== "Lengkap" && (
                        <div className="mt-3 pt-2 border-t border-[#E8EEF3] flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleVerifyItem(doc.id, item.name)}
                            className="text-[11px] font-semibold text-[#0066B3] hover:underline"
                          >
                            Verifikasi Sah ✓
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredDocs.length === 0 && (
              <div className="p-8 text-center text-[#64748B] text-[13px]">
                Tidak ada dokumen yang sesuai dengan kriteria pencarian saat ini.
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
