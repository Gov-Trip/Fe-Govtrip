"use client";

import { useState } from "react";
import BendaharaHeader from "@/components/bendahara/BendaharaHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Button,
  Textarea,
} from "@/components/ui";

export default function BendaharaLPJPage() {
  const [selectedId, setSelectedId] = useState("PD-2026/079");
  const [auditNote, setAuditNote] = useState("");
  const [auditMessage, setAuditMessage] = useState<{
    type: "success" | "warning";
    text: string;
  } | null>(null);

  const [lpjList, setLpjList] = useState([
    {
      id: "PD-2026/079",
      employee: "Hendra P.",
      unit: "Inspektorat",
      destination: "Makassar",
      dates: "14–16 Sep 2026",
      advancePaid: 5100000,
      totalClaim: 5080000,
      difference: -20000,
      status: "Menunggu Verifikasi",
      receipts: [
        { name: "Tiket Pesawat PP (Garuda Indonesia)", claimed: 2400000, approved: 2400000, status: "Valid" },
        { name: "Penginapan Hotel Dalton (2 Malam)", claimed: 1680000, approved: 1680000, status: "Valid" },
        { name: "Uang Harian Standar (3 Hari)", claimed: 1000000, approved: 1000000, status: "Valid" },
      ],
      reportFile: "Laporan_Dinas_Makassar_Hendra.pdf",
    },
    {
      id: "PD-2026/081",
      employee: "Sari W.",
      unit: "Bidang Perencanaan",
      destination: "Solo",
      dates: "10–12 Sep 2026",
      advancePaid: 2850000,
      totalClaim: 2850000,
      difference: 0,
      status: "Menunggu Verifikasi",
      receipts: [
        { name: "Tiket Kereta Api PP (Argo Dwipangga)", claimed: 900000, approved: 900000, status: "Valid" },
        { name: "Hotel Novotel Solo (2 Malam)", claimed: 1200000, approved: 1200000, status: "Valid" },
        { name: "Uang Harian Standar (3 Hari)", claimed: 750000, approved: 750000, status: "Valid" },
      ],
      reportFile: "Laporan_Bimtek_Solo_Sari.pdf",
    },
    {
      id: "PD-2026/075",
      employee: "Rudi H.",
      unit: "Bidang Perencanaan",
      destination: "Semarang",
      dates: "28–30 Agu 2026",
      advancePaid: 3900000,
      totalClaim: 3920000,
      difference: 20000,
      status: "Menunggu Verifikasi",
      receipts: [
        { name: "Tiket Kereta Api Eksekutif", claimed: 920000, approved: 920000, status: "Valid" },
        { name: "Hotel Ciputra Semarang", claimed: 1800000, approved: 1800000, status: "Valid" },
        { name: "Uang Harian Standar (3 Hari)", claimed: 1200000, approved: 1200000, status: "Valid" },
      ],
      reportFile: "Laporan_Evaluasi_Semarang_Rudi.pdf",
    },
    {
      id: "PD-2026/070",
      employee: "Bagas P.",
      unit: "Bidang Keuangan",
      destination: "Surabaya",
      dates: "20–22 Agu 2026",
      advancePaid: 4200000,
      totalClaim: 4200000,
      difference: 0,
      status: "Selesai Diverifikasi",
      receipts: [
        { name: "Tiket Pesawat PP", claimed: 2000000, approved: 2000000, status: "Valid" },
        { name: "Hotel JW Marriott", claimed: 1400000, approved: 1400000, status: "Valid" },
        { name: "Uang Harian Standar", claimed: 800000, approved: 800000, status: "Valid" },
      ],
      reportFile: "Laporan_Rekonsiliasi_Surabaya.pdf",
    },
  ]);

  const currentItem = lpjList.find((l) => l.id === selectedId) || lpjList[0];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleApprove = () => {
    setLpjList((prev) =>
      prev.map((l) =>
        l.id === currentItem.id ? { ...l, status: "Selesai Diverifikasi" } : l
      )
    );
    setAuditMessage({
      type: "success",
      text: `LPJ ${currentItem.id} (${currentItem.employee}) berhasil diverifikasi dan dibukukan ke Laporan Pertanggungjawaban Resmi.`,
    });
    setAuditNote("");
  };

  const handleReject = () => {
    if (!auditNote.trim()) {
      alert("Mohon berikan catatan audit terkait revisi bukti kuitansi.");
      return;
    }
    setLpjList((prev) =>
      prev.map((l) =>
        l.id === currentItem.id ? { ...l, status: "Perlu Revisi" } : l
      )
    );
    setAuditMessage({
      type: "warning",
      text: `LPJ ${currentItem.id} dikembalikan ke ${currentItem.employee} untuk melengkapi kuitansi/bukti fisik. Catatan: "${auditNote}"`,
    });
    setAuditNote("");
  };

  return (
    <div className="flex-1 flex flex-col">
      <BendaharaHeader title="Verifikasi LPJ & Bukti Riil" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {auditMessage && (
          <div
            className={`p-4 rounded-[12px] text-[13px] border transition-all ${
              auditMessage.type === "success"
                ? "bg-[#DFF5F4] border-[#12A9A5] text-[#0B7A77]"
                : "bg-[#FFF1D1] border-[#F5A000] text-[#8A5A00]"
            }`}
          >
            {auditMessage.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Daftar LPJ Masuk (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader className="flex-col !items-start gap-1">
                <CardTitle>Berkas LPJ Masuk</CardTitle>
                <CardDescription>
                  Pemeriksaan bukti fisik tiket, invoice penginapan, dan kwitansi riil
                </CardDescription>
              </CardHeader>

              <div className="flex flex-col gap-3">
                {lpjList.map((item) => {
                  const isSelected = item.id === currentItem.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedId(item.id);
                        setAuditMessage(null);
                      }}
                      className={`p-4 rounded-[12px] border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#E3F0FA]/40 border-[#0066B3] shadow-xs"
                          : "bg-white border-[#E8EEF3] hover:border-[#C9D8EC]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[14px] text-[#1E293B]">
                          {item.employee} · {item.destination}
                        </span>
                        <Badge status={item.status} />
                      </div>

                      <div className="flex items-center justify-between text-[12px] text-[#64748B]">
                        <span>{item.id} · {item.dates}</span>
                        <span className="font-semibold text-[#123B72]">
                          {formatRupiah(item.totalClaim)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right Column: Panel Audit Rincian Biaya (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              {/* Header LPJ */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-2">
                <div>
                  <h3 className="text-[#123B72] text-[18px] font-bold leading-tight">
                    Audit LPJ {currentItem.id}
                  </h3>
                  <p className="text-[#64748B] text-[12.5px] mt-0.5">
                    {currentItem.employee} ({currentItem.unit}) · {currentItem.destination}
                  </p>
                </div>

                <Badge status={currentItem.status} />
              </div>

              {/* Rekapitulasi Perbandingan Kas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-b border-[#E8EEF3] text-[13px] bg-[#F1F7FB]/40 -mx-5 px-5 sm:-mx-6 sm:px-6">
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Uang Muka Diterima</span>
                  <span className="font-bold text-[#1E293B] text-[14px]">
                    {formatRupiah(currentItem.advancePaid)}
                  </span>
                </div>
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Total Klaim Kuitansi</span>
                  <span className="font-bold text-[#0066B3] text-[14px]">
                    {formatRupiah(currentItem.totalClaim)}
                  </span>
                </div>
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Selisih Pertanggungjawaban</span>
                  <span
                    className={`font-bold text-[14px] ${
                      currentItem.difference < 0
                        ? "text-[#0B7A77]"
                        : currentItem.difference > 0
                        ? "text-[#B02A2A]"
                        : "text-[#1E293B]"
                    }`}
                  >
                    {currentItem.difference < 0
                      ? `Sisa ${formatRupiah(Math.abs(currentItem.difference))} (Kembali ke Kas)`
                      : currentItem.difference > 0
                      ? `Kurang ${formatRupiah(currentItem.difference)} (Reimburse)`
                      : "Nihil (Sesuai Pagu)"}
                  </span>
                </div>
              </div>

              {/* Rincian Komponen Kuitansi */}
              <div className="py-4 border-b border-[#E8EEF3]">
                <h4 className="text-[#123B72] text-[13.5px] font-semibold mb-3">
                  Verifikasi Kuitansi & Bukti Pengeluaran
                </h4>

                <div className="space-y-3">
                  {currentItem.receipts.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-3 border border-[#E8EEF3] rounded-[10px] flex items-center justify-between text-[13px] bg-white hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#DFF5F4] text-[#0B7A77] flex items-center justify-center font-bold text-[11px]">
                          ✓
                        </span>
                        <div>
                          <span className="font-medium text-[#1E293B] block">
                            {r.name}
                          </span>
                          <span className="text-[11.5px] text-[#64748B]">
                            Nominal terlampir: {formatRupiah(r.claimed)}
                          </span>
                        </div>
                      </div>

                      <Badge variant="success">Lengkap</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Berkas Laporan Dinas */}
              <div className="py-4 border-b border-[#E8EEF3] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="text-[13px] font-medium text-[#1E293B]">
                    {currentItem.reportFile}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Membuka lampiran berkas ${currentItem.reportFile}...`)}
                >
                  Lihat Berkas
                </Button>
              </div>

              {/* Catatan Audit & Tombol Keputusan */}
              <div className="pt-4 space-y-4">
                <Textarea
                  label="Catatan Verifikasi Bendahara (opsional)"
                  rows={2}
                  value={auditNote}
                  onChange={(e) => setAuditNote(e.target.value)}
                  placeholder="Catatan bila ada kwitansi yang diragukan atau potongan selisih..."
                />

                <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
                  <Button
                    type="button"
                    variant="danger-outline"
                    size="md"
                    onClick={handleReject}
                  >
                    Minta Revisi
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={handleApprove}
                  >
                    Setujui & Bukukan SPJ
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

