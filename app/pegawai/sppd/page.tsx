"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function SPPDPegawaiPage() {
  const [selectedSPPD, setSelectedSPPD] = useState({
    number: "090/087/SPPD/IX/2026",
    employeeName: "Ocha (Alika Putri)",
    workUnit: "Bidang Perencanaan",
    destination: "Yogyakarta",
    dates: "21–23 September 2026",
    purpose: "Sosialisasi regulasi perjalanan dinas",
    transport: "Kereta api",
    signee: "Kepala Dinas",
    status: "Terbit",
  });

  const sppdList = [
    {
      destination: "Yogyakarta",
      dates: "21–23 Sep 2026",
      number: "090/087/SPPD/IX/2026",
      status: "Terbit",
    },
    {
      destination: "Makassar",
      dates: "14–16 Sep 2026",
      number: "090/079/SPPD/IX/2026",
      status: "Terbit",
    },
    {
      destination: "Semarang",
      dates: "12–13 Agu 2026",
      number: "090/065/SPPD/VIII/2026",
      status: "Terbit",
    },
    {
      destination: "Bandung",
      dates: "6–8 Okt 2026",
      number: "-",
      status: "Belum terbit",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="SPPD" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Official SPPD Document Viewer (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-[#E8EEF3] rounded-[14px] p-6 sm:p-8 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            {/* Document Header */}
            <div className="border-b-2 border-[#123B72] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-[#123B72] text-[16px] sm:text-[18px] font-bold tracking-tight">
                  SURAT PERINTAH PERJALANAN DINAS
                </h2>
                <p className="text-[#64748B] text-[12px] font-medium mt-0.5">
                  Nomor: {selectedSPPD.number}
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 bg-[#DFF5F4] text-[#0B7A77] rounded-full text-[11px] font-semibold">
                Status: {selectedSPPD.status}
              </span>
            </div>

            {/* Document Content Details */}
            <div className="space-y-3.5 text-[13px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Nama pegawai</span>
                <span className="sm:col-span-2 font-semibold text-[#1E293B]">
                  {selectedSPPD.employeeName}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Unit kerja</span>
                <span className="sm:col-span-2 font-medium text-[#1E293B]">
                  {selectedSPPD.workUnit}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Tujuan</span>
                <span className="sm:col-span-2 font-medium text-[#1E293B]">
                  {selectedSPPD.destination}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Tanggal</span>
                <span className="sm:col-span-2 font-medium text-[#1E293B]">
                  {selectedSPPD.dates}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Maksud</span>
                <span className="sm:col-span-2 font-medium text-[#1E293B]">
                  {selectedSPPD.purpose}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Transportasi</span>
                <span className="sm:col-span-2 font-medium text-[#1E293B]">
                  {selectedSPPD.transport}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 py-1.5 border-b border-[#E8EEF3]/60">
                <span className="text-[#64748B]">Penandatangan</span>
                <span className="sm:col-span-2 font-semibold text-[#1E293B]">
                  {selectedSPPD.signee}
                </span>
              </div>
            </div>

            {/* QR Verification & Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#E8EEF3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* QR Box Visual */}
                <div className="w-16 h-16 border border-[#C9D8EC] rounded-[8px] bg-[#F1F7FB] flex items-center justify-center p-1 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#123B72" strokeWidth="1.5">
                    <rect width="6" height="6" x="3" y="3" rx="1" />
                    <rect width="6" height="6" x="15" y="3" rx="1" />
                    <rect width="6" height="6" x="3" y="15" rx="1" />
                    <path d="M15 15h2v2h-2z" />
                    <path d="M19 15h2v2h-2z" />
                    <path d="M15 19h2v2h-2z" />
                    <path d="M19 19h2v2h-2z" />
                  </svg>
                </div>
                <p className="text-[11.5px] text-[#64748B] max-w-[260px] leading-relaxed">
                  Pindai QR untuk memverifikasi keaslian dokumen resmi.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => alert("Mengunduh dokumen PDF SPPD resmi...")}
                  className="px-4 py-2 bg-[#0066B3] hover:bg-[#005596] text-white text-[12.5px] font-semibold rounded-[10px] transition-colors cursor-pointer shadow-sm"
                >
                  Unduh PDF
                </button>
                <button
                  type="button"
                  onClick={() => alert("Tautan verifikasi SPPD telah disalin!")}
                  className="px-4 py-2 border border-[#E8EEF3] hover:bg-[#F1F7FB] text-[#1E293B] text-[12.5px] font-medium rounded-[10px] transition-colors cursor-pointer"
                >
                  Salin tautan
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Daftar SPPD Lainnya (col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight mb-4">
              Daftar SPPD
            </h3>

            <div className="divide-y divide-[#E8EEF3]">
              {sppdList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.status === "Terbit") {
                      setSelectedSPPD({
                        number: item.number,
                        employeeName: "Ocha (Alika Putri)",
                        workUnit: "Bidang Perencanaan",
                        destination: item.destination,
                        dates: item.dates,
                        purpose: `Kegiatan dinas di ${item.destination}`,
                        transport: "Transportasi Dinas",
                        signee: "Kepala Dinas",
                        status: item.status,
                      });
                    }
                  }}
                  className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between cursor-pointer hover:bg-[#F1F7FB]/50 rounded-[8px] px-2 transition-colors"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-[#1E293B] text-[13.5px]">
                      {item.destination}
                    </span>
                    <span className="text-[#64748B] text-[12px]">
                      {item.dates}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                      item.status === "Terbit"
                        ? "bg-[#DFF5F4] text-[#0B7A77]"
                        : "bg-[#FFF1D1] text-[#8A5A00]"
                    }`}
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

