"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function NotifikasiPegawaiPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Pengajuan Bandung disetujui Atasan",
      description: "Diteruskan ke Kepala Bidang untuk verifikasi persetujuan dinas",
      time: "1 jam lalu",
      unread: true,
      category: "success",
    },
    {
      id: 2,
      title: "LPJ Makassar batas 23 Sep",
      description: "Unggah laporan kegiatan dan dokumentasi bukti pengeluaran",
      time: "3 jam lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 3,
      title: "SPPD Yogyakarta siap diunduh",
      description: "Surat tugas & SPPD telah terbit, unduh berkas sebelum keberangkatan",
      time: "Kemarin",
      unread: true,
      category: "info",
    },
    {
      id: 4,
      title: "Pengajuan Perjalanan Dinas Disimpan",
      description: "Draft perjalanan dinas ke Medan tersimpan secara otomatis",
      time: "3 hari lalu",
      unread: false,
      category: "info",
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Notifikasi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3] mb-4">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Notifikasi Pegawai
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Pemberitahuan status perjalanan dan dokumen dinas Anda
              </p>
            </div>

            <button
              type="button"
              onClick={handleMarkAllRead}
              className="text-[#0066B3] hover:underline text-[12.5px] font-medium cursor-pointer"
            >
              Tandai semua dibaca
            </button>
          </div>

          <div className="divide-y divide-[#E8EEF3]">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`py-4 px-3 flex items-start justify-between gap-4 rounded-[10px] transition-colors ${
                  item.unread ? "bg-[#F1F7FB]/40" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      item.category === "warning"
                        ? "bg-[#FFF1D1] text-[#8A5A00]"
                        : item.category === "success"
                        ? "bg-[#DFF5F4] text-[#0B7A77]"
                        : "bg-[#E3F0FA] text-[#0066B3]"
                    }`}
                  >
                    {item.category === "warning" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                    ) : item.category === "success" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-[#1E293B]">
                      {item.title}
                    </span>
                    <span className="text-[12.5px] text-[#64748B] mt-0.5">
                      {item.description}
                    </span>
                    <span className="text-[11px] text-[#A9BEDA] mt-1">
                      {item.time}
                    </span>
                  </div>
                </div>

                {item.unread && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5A000] shrink-0 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

