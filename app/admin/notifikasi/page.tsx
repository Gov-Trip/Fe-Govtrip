"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { NotificationList, NotificationItemData, Badge, Button } from "@/components/ui";

export default function AdminNotifikasiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>([
    {
      id: 1,
      title: "5 dokumen perjalanan belum lengkap",
      description: "Cek menu Dokumen · PD-2026/091 (Bandung) dan PD-2026/079 (Makassar) membutuhkan lampiran tiket/LPJ",
      time: "20 menit lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 2,
      title: "3 perjalanan dinas aktif sedang berjalan",
      description: "Monitoring aktif untuk penugasan di Yogyakarta, Jakarta Pusat, dan Bogor hari ini",
      time: "1 jam lalu",
      unread: true,
      category: "info",
    },
    {
      id: 3,
      title: "SPPD PD-2026/087 siap dicetak & diterbitkan",
      description: "Surat Perintah Perjalanan Dinas atas nama Liyana Agustin telah ditandatangani digital oleh Kepala Dinas",
      time: "3 jam lalu",
      unread: false,
      category: "success",
    },
    {
      id: 4,
      title: "Pengajuan baru PD-2026/093 membutuhkan verifikasi",
      description: "Pegawai Rudi Hartono mengajukan perjalanan dinas konsultasi ke Surabaya senilai Rp 4.750.000",
      time: "Kemarin, 16:30 WIB",
      unread: false,
      category: "info",
    },
    {
      id: 5,
      title: "Peringatan batas waktu LPJ Makassar",
      description: "Batas pengunggahan LPJ PD-2026/079 atas nama Hendra Kurniawan tersisa 2 hari kerja",
      time: "Kemarin, 10:15 WIB",
      unread: false,
      category: "warning",
    },
  ]);

  const [activeTab, setActiveTab] = useState<"all" | "unread" | "warning">("all");

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "unread") return n.unread;
    if (activeTab === "warning") return n.category === "warning";
    return true;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Notifikasi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-[#E8EEF3]">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-[#123B72]">Pusat Notifikasi Administrator</span>
            {unreadCount > 0 && (
              <Badge variant="warning">{unreadCount} Baru</Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                activeTab === "all"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Semua ({notifications.length})
            </button>
            <button
              onClick={() => setActiveTab("unread")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                activeTab === "unread"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Belum Dibaca ({unreadCount})
            </button>
            <button
              onClick={() => setActiveTab("warning")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                activeTab === "warning"
                  ? "bg-[#F5A000] text-white"
                  : "bg-[#FFF1D1] text-[#8A5A00] hover:bg-[#F5A000] hover:text-white"
              }`}
            >
              Peringatan Dokumen
            </button>
          </div>
        </div>

        <NotificationList
          notifications={filteredNotifications}
          title="Semua Notifikasi & Peringatan Dinas"
          description={`Menampilkan ${filteredNotifications.length} pemberitahuan terkini`}
          onMarkAllRead={handleMarkAllRead}
        />
      </main>
    </div>
  );
}
