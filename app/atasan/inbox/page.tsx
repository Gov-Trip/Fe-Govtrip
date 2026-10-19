"use client";

import { useState } from "react";
import AtasanHeader from "@/components/atasan/AtasanHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Button,
  Textarea,
} from "@/components/ui";

export default function AtasanInboxPage() {
  const [selectedId, setSelectedId] = useState("PD-2026/093");
  const [note, setNote] = useState("");
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "warning" | "error";
    text: string;
  } | null>(null);

  const [submissions, setSubmissions] = useState([
    {
      id: "PD-2026/093",
      employee: "Rudi",
      unit: "Bidang Perencanaan",
      destination: "Surabaya",
      dates: "12–14 Okt 2026",
      transport: "Pesawat",
      purpose: "Monitoring implementasi program daerah bersama perwakilan dinas provinsi Jawa Timur.",
      costs: [
        { item: "Transportasi", amount: "Rp 2.400.000" },
        { item: "Akomodasi", amount: "Rp 2.100.000" },
        { item: "Uang harian", amount: "Rp 1.500.000" },
        { item: "Lain-lain", amount: "Rp 120.000" },
      ],
      totalCost: "Rp 6.120.000",
      status: "Menunggu",
    },
    {
      id: "PD-2026/094",
      employee: "Sari",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      dates: "15–17 Okt 2026",
      transport: "Kereta api",
      purpose: "Bimbingan teknis penyusunan rencana aksi pembangunan berkelanjutan.",
      costs: [
        { item: "Transportasi", amount: "Rp 900.000" },
        { item: "Akomodasi", amount: "Rp 1.600.000" },
        { item: "Uang harian", amount: "Rp 1.000.000" },
      ],
      totalCost: "Rp 3.500.000",
      status: "Menunggu",
    },
    {
      id: "PD-2026/095",
      employee: "Bagas",
      unit: "Bidang Keuangan",
      destination: "Makassar",
      dates: "20–23 Okt 2026",
      transport: "Pesawat",
      purpose: "Konsultasi dan rekonsiliasi data penyerapan anggaran dengan kementerian.",
      costs: [
        { item: "Transportasi", amount: "Rp 2.200.000" },
        { item: "Akomodasi", amount: "Rp 1.800.000" },
        { item: "Uang harian", amount: "Rp 1.250.000" },
      ],
      totalCost: "Rp 5.250.000",
      status: "Menunggu",
    },
    {
      id: "PD-2026/096",
      employee: "Nadia",
      unit: "Sekretariat Daerah",
      destination: "Bandung",
      dates: "26–27 Okt 2026",
      transport: "Kereta api",
      purpose: "Rapat koordinasi teknis sinkronisasi tata kelola administrasi.",
      costs: [
        { item: "Transportasi", amount: "Rp 600.000" },
        { item: "Akomodasi", amount: "Rp 900.000" },
        { item: "Uang harian", amount: "Rp 700.000" },
      ],
      totalCost: "Rp 2.200.000",
      status: "Menunggu",
    },
  ]);

  const currentSubmission =
    submissions.find((s) => s.id === selectedId) || submissions[0];

  const handleAction = (actionType: "approve" | "return" | "reject") => {
    if (actionType === "approve") {
      setStatusMessage({
        type: "success",
        text: `Pengajuan ${currentSubmission.id} atas nama ${currentSubmission.employee} berhasil disetujui dan diteruskan ke Kepala Bidang.`,
      });
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === currentSubmission.id ? { ...s, status: "Disetujui" } : s
        )
      );
    } else if (actionType === "return") {
      if (!note.trim()) {
        setStatusMessage({
          type: "warning",
          text: "Mohon tuliskan catatan revisi sebelum mengembalikan pengajuan.",
        });
        return;
      }
      setStatusMessage({
        type: "warning",
        text: `Pengajuan ${currentSubmission.id} dikembalikan ke ${currentSubmission.employee} untuk revisi. Catatan: "${note}"`,
      });
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === currentSubmission.id ? { ...s, status: "Dikembalikan" } : s
        )
      );
    } else {
      if (!note.trim()) {
        setStatusMessage({
          type: "error",
          text: "Mohon tuliskan alasan penolakan pada kolom catatan.",
        });
        return;
      }
      setStatusMessage({
        type: "error",
        text: `Pengajuan ${currentSubmission.id} telah ditolak. Alasan: "${note}"`,
      });
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === currentSubmission.id ? { ...s, status: "Ditolak" } : s
        )
      );
    }
    setNote("");
  };

  return (
    <div className="flex-1 flex flex-col">
      <AtasanHeader title="Pengajuan Masuk" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {statusMessage && (
          <div
            className={`p-4 rounded-[12px] text-[13px] border transition-all ${
              statusMessage.type === "success"
                ? "bg-[#DFF5F4] border-[#12A9A5] text-[#0B7A77]"
                : statusMessage.type === "warning"
                ? "bg-[#FFF1D1] border-[#F5A000] text-[#8A5A00]"
                : "bg-[#FBE8E8] border-[#B02A2A] text-[#B02A2A]"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Daftar Pengajuan Masuk (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader className="flex-col !items-start gap-1">
                <CardTitle>Pengajuan Masuk</CardTitle>
                <CardDescription>
                  {submissions.filter((s) => s.status === "Menunggu").length} pengajuan menunggu persetujuan
                </CardDescription>
              </CardHeader>

              <div className="flex flex-col gap-3">
                {submissions.map((sub) => {
                  const isSelected = sub.id === currentSubmission.id;
                  return (
                    <div
                      key={sub.id}
                      onClick={() => {
                        setSelectedId(sub.id);
                        setStatusMessage(null);
                      }}
                      className={`p-4 rounded-[12px] border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#E3F0FA]/40 border-[#0066B3] shadow-xs"
                          : "bg-white border-[#E8EEF3] hover:border-[#C9D8EC]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[14px] text-[#1E293B]">
                          {sub.employee} · {sub.destination}
                        </span>
                        <Badge status={sub.status} />
                      </div>

                      <div className="flex items-center justify-between text-[12px] text-[#64748B]">
                        <span>{sub.id} · {sub.dates}</span>
                        <span className="font-medium text-[#1E293B]">{sub.totalCost}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right Column: Review Details & Decision Actions (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              {/* Header Pengajuan */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-2">
                <div>
                  <h3 className="text-[#123B72] text-[18px] font-bold leading-tight">
                    {currentSubmission.id}
                  </h3>
                  <p className="text-[#64748B] text-[12.5px] mt-0.5">
                    {currentSubmission.employee} · {currentSubmission.unit}
                  </p>
                </div>

                <Badge status={currentSubmission.status}>
                  Status: {currentSubmission.status}
                </Badge>
              </div>

              {/* Parameter Ringkas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-b border-[#E8EEF3] text-[13px]">
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Tujuan</span>
                  <span className="font-semibold text-[#1E293B]">{currentSubmission.destination}</span>
                </div>
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Tanggal</span>
                  <span className="font-semibold text-[#1E293B]">{currentSubmission.dates}</span>
                </div>
                <div>
                  <span className="text-[#64748B] text-[11.5px] block">Transportasi</span>
                  <span className="font-semibold text-[#1E293B]">{currentSubmission.transport}</span>
                </div>
              </div>

              {/* Maksud Perjalanan */}
              <div className="py-4 border-b border-[#E8EEF3]">
                <span className="text-[#64748B] text-[12px] block mb-1">Maksud perjalanan</span>
                <p className="text-[#1E293B] text-[13px] leading-relaxed">
                  {currentSubmission.purpose}
                </p>
              </div>

              {/* Rincian Komponen Biaya */}
              <div className="py-4 border-b border-[#E8EEF3]">
                <h4 className="text-[#123B72] text-[13.5px] font-semibold mb-3">
                  Rincian Estimasi Biaya
                </h4>

                <div className="space-y-2 text-[13px]">
                  {currentSubmission.costs.map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-[#E8EEF3]/40">
                      <span className="text-[#1E293B]">{c.item}</span>
                      <span className="font-medium text-[#1E293B]">{c.amount}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-[#123B72] text-[14px]">Total</span>
                    <span className="font-bold text-[#123B72] text-[15px]">{currentSubmission.totalCost}</span>
                  </div>
                </div>
              </div>

              {/* Input Catatan & Tombol Keputusan */}
              <div className="pt-5 space-y-4">
                <Textarea
                  label="Catatan (opsional)"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Tulis alasan jika mengembalikan atau menolak"
                />

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2">
                  <Button
                    type="button"
                    variant="danger-outline"
                    size="md"
                    onClick={() => handleAction("reject")}
                  >
                    Tolak
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => handleAction("return")}
                  >
                    Kembalikan
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={() => handleAction("approve")}
                  >
                    Setujui
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
