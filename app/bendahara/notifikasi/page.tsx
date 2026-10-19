"use client";

import { useState } from "react";
import BendaharaHeader from "@/components/bendahara/BendaharaHeader";
import { NotificationList, NotificationItemData } from "@/components/ui";

export default function BendaharaNotifikasiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>([
    {
      id: 1,
      title: "Pengajuan PD-2026/093 siap dicairkan",
      description: "Telah disetujui Atasan. Uang muka sebesar Rp 6.120.000 siap ditransfer ke rekening Rudi.",
      time: "25 menit lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 2,
      title: "Berkas LPJ PD-2026/079 Makassar masuk",
      description: "Pegawai Hendra telah melampirkan kuitansi tiket dan penginapan. Menunggu verifikasi SPJ.",
      time: "2 jam lalu",
      unread: true,
      category: "info",
    },
    {
      id: 3,
      title: "Pencairan BKU-2026/09/081 berhasil",
      description: "Uang muka perjalanan Liyana ke Yogyakarta telah selesai dibukukan di Kas Umum Daerah.",
      time: "Kemarin",
      unread: false,
      category: "success",
    },
    {
      id: 4,
      title: "Laporan Realisasi Triwulan III siap",
      description: "Penyerapan anggaran belanja perjalanan dinas mencapai 42.4% (Rp 148.500.000).",
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
      <BendaharaHeader title="Notifikasi Keuangan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <NotificationList
          notifications={notifications}
          title="Notifikasi Keuangan & Bendahara"
          description="Pemberitahuan pencairan dana, pengajuan masuk, dan verifikasi SPJ"
          onMarkAllRead={handleMarkAllRead}
        />
      </main>
    </div>
  );
}

