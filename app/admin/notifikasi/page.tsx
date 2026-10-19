"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminNotifikasiPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "5 dokumen perjalanan belum lengkap",
      description: "Cek menu Dokumen · Hari ini",
      time: "20 menit lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 2,
      title: "3 perjalanan sedang berjalan",
      description: "Yogyakarta, Jakarta, Bogor · Hari ini",
      time: "1 jam lalu",
      unread: true,
      category: "info",
    },
    {
      id: 3,
      title: "SPPD PD-2026/087 siap dicetak",
      description: "Surat Perintah Perjalanan Dinas atas nama Liyana telah ditandatangani digital",
      time: "3 jam lalu",
      unread: false,
      category: "success",
    },
    {
      id: 4,
      title: "Pengajuan baru PD-2026/093",
      description: "Pegawai Rudi mengajukan perjalanan dinas ke Surabaya",
      time: "Kemarin",
      unread: false,
      category: "info",
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Notifikasi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3] mb-4">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Semua Notifikasi
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Pemberitahuan aktivitas dan peringatan sistem
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
                        ? "bg-[#FBE8E8] text-[#B02A2A]"
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
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="16" y2="12" />
                        <line x1="12" x2="12.01" y1="8" y2="8" />
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

