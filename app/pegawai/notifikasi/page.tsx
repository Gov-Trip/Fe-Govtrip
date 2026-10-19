"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import { NotificationList, NotificationItemData } from "@/components/ui";

export default function NotifikasiPegawaiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>([
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
        <NotificationList
          notifications={notifications}
          title="Notifikasi Pegawai"
          description="Pemberitahuan status perjalanan dan dokumen dinas Anda"
          onMarkAllRead={handleMarkAllRead}
        />
      </main>
    </div>
  );
}
