"use client";

import { useState } from "react";
import AtasanHeader from "@/components/atasan/AtasanHeader";
import { NotificationList, NotificationItemData } from "@/components/ui";

export default function AtasanNotifikasiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>([
    {
      id: 1,
      title: "Pengajuan baru dari Rudi",
      description: "PD-2026/093 · Surabaya · Memerlukan persetujuan atasan langsung",
      time: "30 menit lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 2,
      title: "Pengajuan baru dari Sari",
      description: "PD-2026/094 · Yogyakarta · Memerlukan persetujuan atasan langsung",
      time: "2 jam lalu",
      unread: true,
      category: "warning",
    },
    {
      id: 3,
      title: "Nadia mulai perjalanan ke Bogor",
      description: "Check-in keberangkatan dinas telah tercatat di sistem",
      time: "4 jam lalu",
      unread: true,
      category: "info",
    },
    {
      id: 4,
      title: "Liyana menyelesaikan perjalanan Yogyakarta",
      description: "Perjalanan dinas selesai, menunggu berkas LPJ diunggah",
      time: "Kemarin",
      unread: false,
      category: "success",
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="flex-1 flex flex-col">
      <AtasanHeader title="Notifikasi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <NotificationList
          notifications={notifications}
          title="Notifikasi Persetujuan"
          description="Pemberitahuan pengajuan masuk dan aktivitas dinas bawahan"
          onMarkAllRead={handleMarkAllRead}
        />
      </main>
    </div>
  );
}
