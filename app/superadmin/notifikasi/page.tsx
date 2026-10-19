"use client";

import { useState } from "react";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import { NotificationList, NotificationItemData } from "@/components/ui";

const FIGMA_NOTIFICATIONS: NotificationItemData[] = [
  {
    id: 1,
    title: "3 percobaan login gagal",
    description: "Akun Hendra, hari ini · 20 menit lalu",
    time: "20 menit lalu",
    unread: true,
    category: "danger",
  },
  {
    id: 2,
    title: "Pengguna baru ditambahkan",
    description: "Rudi · Pegawai · Kemarin",
    time: "Kemarin",
    unread: false,
    category: "info",
  },
];

export default function SuperAdminNotifikasiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>(FIGMA_NOTIFICATIONS);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Notifikasi" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <NotificationList
          notifications={notifications}
          title="Notifikasi"
          description="Pemberitahuan aktivitas dan peringatan sistem"
          onMarkAllRead={handleMarkAllRead}
        />
      </main>
    </div>
  );
}
