"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function LPJPegawaiPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pastLPJ = [
    {
      city: "Jakarta",
      date: "Agu 2026",
      status: "Terverifikasi",
      statusBadge: "bg-[#DFF5F4] text-[#0B7A77]",
    },
    {
      city: "Medan",
      date: "Jul 2026",
      status: "Terverifikasi",
      statusBadge: "bg-[#DFF5F4] text-[#0B7A77]",
    },
    {
      city: "Surabaya",
      date: "Jun 2026",
      status: "Terverifikasi",
      statusBadge: "bg-[#DFF5F4] text-[#0B7A77]",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Laporan Pertanggungjawaban" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {submitted && (
          <div className="bg-[#DFF5F4] border border-[#12A9A5] text-[#0B7A77] p-4 rounded-[12px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">✓ Berhasil!</span>
              <span>Dokumen LPJ Makassar telah berhasil dikirim ke bagian Keuangan / Bendahara.</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Form LPJ Makassar (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E8EEF3]">
              <div>
                <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                  Kelengkapan LPJ Makassar
                </h2>
                <p className="text-[#64748B] text-[12.5px] mt-0.5">
                  Perjalanan PD-2026/079 · 14–16 Sep 2026
                </p>
              </div>

              <span className="px-3 py-1 bg-[#FFF1D1] text-[#8A5A00] rounded-full text-[11px] font-semibold self-start sm:self-auto">
                Batas unggah 23 Sep 2026
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Item 1: Tiket */}
              <div className="p-4 border border-[#E8EEF3] rounded-[10px] flex items-center justify-between bg-[#F1F7FB]/40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DFF5F4] text-[#0B7A77] flex items-center justify-center font-bold text-[13px]">
                    ✓
                  </div>
                  <div>
                    <span className="text-[13.5px] font-medium text-[#1E293B] block">
                      Tiket / bukti transportasi
                    </span>
                    <span className="text-[11.5px] text-[#64748B]">
                      Boarding pass & e-ticket terverifikasi
                    </span>
                  </div>
                </div>
                <span className="text-[11.5px] font-semibold text-[#0B7A77]">
                  Lengkap
                </span>
              </div>

              {/* Item 2: Kuitansi Penginapan */}
              <div className="p-4 border border-[#E8EEF3] rounded-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div>
                  <span className="text-[13.5px] font-medium text-[#1E293B] block">
                    Kuitansi penginapan
                  </span>
                  <span className="text-[11.5px] text-[#64748B]">
                    Invoice hotel / bukti pembayaran resmi
                  </span>
                </div>
                <label className="px-3.5 py-1.5 border border-[#1684C4] text-[#0066B3] hover:bg-[#E3F0FA] rounded-[8px] text-[12px] font-medium transition-colors cursor-pointer text-center">
                  Unggah Berkas
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Item 3: Laporan Kegiatan */}
              <div className="p-4 border border-[#E8EEF3] rounded-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div>
                  <span className="text-[13.5px] font-medium text-[#1E293B] block">
                    Laporan kegiatan
                  </span>
                  <span className="text-[11.5px] text-[#64748B]">
                    Ringkasan hasil rapat / kegiatan dinas (PDF/Word)
                  </span>
                </div>
                <label className="px-3.5 py-1.5 border border-[#1684C4] text-[#0066B3] hover:bg-[#E3F0FA] rounded-[8px] text-[12px] font-medium transition-colors cursor-pointer text-center">
                  Unggah Berkas
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Item 4: Dokumentasi Kegiatan */}
              <div className="p-4 border border-[#E8EEF3] rounded-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div>
                  <span className="text-[13.5px] font-medium text-[#1E293B] block">
                    Dokumentasi kegiatan
                  </span>
                  <span className="text-[11.5px] text-[#64748B]">
                    Foto pelaksanaan dinas di lokasi
                  </span>
                </div>
                <label className="px-3.5 py-1.5 border border-[#1684C4] text-[#0066B3] hover:bg-[#E3F0FA] rounded-[8px] text-[12px] font-medium transition-colors cursor-pointer text-center">
                  Unggah Foto
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#0066B3] hover:bg-[#005596] text-white font-semibold text-[13px] rounded-[10px] transition-colors cursor-pointer shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? "Mengirimkan LPJ..." : "Kirim LPJ"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Riwayat LPJ (col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight mb-4">
              Riwayat LPJ
            </h3>

            <div className="divide-y divide-[#E8EEF3]">
              {pastLPJ.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#1E293B] text-[13.5px]">
                      {item.city}
                    </span>
                    <span className="text-[#64748B] text-[12px]">
                      {item.date}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${item.statusBadge}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

