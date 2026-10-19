"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Button,
  Badge,
  Input,
  Textarea,
  Select,
  NotificationList,
  NotificationItemData,
} from "@/components/ui";

const INITIAL_NOTIFICATIONS: NotificationItemData[] = [
  {
    id: 1,
    title: "Percobaan Login Tak Wajar Dicegah (Brute-Force Alert)",
    description: "Sistem mendeteksi 5x kegagalan autentikasi dari IP 182.253.14.88 pada akun admin_keu. IP telah diblokir secara otomatis selama 24 jam.",
    time: "15 menit yang lalu",
    unread: true,
    category: "danger",
  },
  {
    id: 2,
    title: "Pembaruan Sertifikat SSL / TLS Tersedia",
    description: "Sertifikat SSL portal *.govtrip.go.id akan kedaluwarsa dalam 14 hari. Pembaruan otomatis via Let's Encrypt / Kominfo ACME telah disiapkan.",
    time: "2 jam yang lalu",
    unread: true,
    category: "warning",
  },
  {
    id: 3,
    title: "Pencadangan Database Otomatis Berhasil (Backup S3)",
    description: "Snapshot harian basis data postgre_govtrip_prod (1.8 GB) berhasil diamankan dan dienkripsi AES-256 pada cold storage PDN Kominfo.",
    time: "03:00 WIB",
    unread: true,
    category: "success",
  },
  {
    id: 4,
    title: "Sinkronisasi Data ASN SIASN BKN Selesai",
    description: "Berhasil melakukan sinkronisasi delta 142 data jabatan pegawai dan NIP dengan server BKN pusat tanpa kendala.",
    time: "Kemarin, 19:40 WIB",
    unread: false,
    category: "info",
  },
  {
    id: 5,
    title: "Peringatan Pemakaian Ruang Disk Server",
    description: "Partisi storage /var/log/govtrip mencapai 78% dari total kapasitas. Disarankan menjalankan log rotation.",
    time: "Kemarin, 14:15 WIB",
    unread: false,
    category: "warning",
  },
  {
    id: 6,
    title: "Pemberitahuan Regulasi PMK Baru",
    description: "Kementerian Keuangan telah merilis draf PMK Standar Biaya Masukan TA 2027. Segera lakukan penyesuaian tarif pada modul SBM.",
    time: "17 Okt 2026",
    unread: false,
    category: "info",
  },
];

export default function SuperAdminNotifikasiPage() {
  const [notifications, setNotifications] = useState<NotificationItemData[]>(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<"all" | "unread" | "danger" | "warning">("all");
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [broadcastTitle, setBroadcastTitle] = useState("");
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [broadcastTarget, setBroadcastTarget] = useState("all");

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) {
      alert("Harap lengkapi judul dan isi pesan siaran.");
      return;
    }

    const newBroadcast: NotificationItemData = {
      id: Date.now(),
      title: `[SIARAN SUPER ADMIN] ${broadcastTitle}`,
      description: broadcastMessage,
      time: "Baru saja",
      unread: true,
      category: "info",
    };

    setNotifications([newBroadcast, ...notifications]);
    setIsBroadcastOpen(false);
    setBroadcastTitle("");
    setBroadcastMessage("");
    alert(`Siaran darurat berhasil dikirim ke seluruh ${broadcastTarget === "all" ? "Pengguna Aktif" : broadcastTarget}!`);
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return n.unread;
    if (filter === "danger") return n.category === "danger";
    if (filter === "warning") return n.category === "warning";
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white border border-[#E8EEF3] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="text-[20px] font-bold text-[#123B72]">
              Notifikasi & Peringatan Sistem
            </h1>
            {unreadCount > 0 && (
              <Badge variant="warning">{unreadCount} Baru</Badge>
            )}
          </div>
          <p className="text-[13px] text-[#64748B]">
            Pusat pemantauan status infrastruktur server, peringatan anomali keamanan, dan siaran pesan darurat ke seluruh ASN.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            className="text-[13px]"
            onClick={handleMarkAllRead}
          >
            Tandai Semua Dibaca
          </Button>
          <Button
            className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold shadow"
            onClick={() => setIsBroadcastOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <path d="m3 11 18-5v12L3 14v-3z" />
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            Kirim Siaran Broadcast
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
            filter === "all"
              ? "bg-[#123B72] text-white shadow-sm"
              : "bg-white text-[#64748B] hover:bg-slate-100 border border-[#E8EEF3]"
          }`}
        >
          Semua ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
            filter === "unread"
              ? "bg-[#123B72] text-white shadow-sm"
              : "bg-white text-[#64748B] hover:bg-slate-100 border border-[#E8EEF3]"
          }`}
        >
          Belum Dibaca ({unreadCount})
        </button>
        <button
          onClick={() => setFilter("danger")}
          className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
            filter === "danger"
              ? "bg-[#B02A2A] text-white shadow-sm"
              : "bg-white text-[#B02A2A] hover:bg-red-50 border border-[#FBE8E8]"
          }`}
        >
          Anomali Keamanan
        </button>
        <button
          onClick={() => setFilter("warning")}
          className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
            filter === "warning"
              ? "bg-[#F5A000] text-white shadow-sm"
              : "bg-white text-[#8A5A00] hover:bg-amber-50 border border-[#FFF1D1]"
          }`}
        >
          Peringatan Sistem
        </button>
      </div>

      {/* Notification List Component */}
      <NotificationList
        notifications={filteredNotifications}
        title="Daftar Log Peringatan & Aktivitas"
        description={`Menampilkan ${filteredNotifications.length} pemberitahuan terkini`}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* Modal Kirim Broadcast */}
      {isBroadcastOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <div>
                <h3 className="text-[16px] font-bold text-[#123B72]">
                  Siaran Broadcast Sistem
                </h3>
                <p className="text-[12px] text-[#64748B]">
                  Pesan siaran akan langsung muncul di bar notifikasi semua target pengguna.
                </p>
              </div>
              <button
                onClick={() => setIsBroadcastOpen(false)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSendBroadcast} className="mt-4 space-y-4">
              <Select
                label="Target Penerima Pesan"
                value={broadcastTarget}
                onChange={(e) => setBroadcastTarget(e.target.value)}
                options={[
                  { label: "Seluruh Pengguna Gov.Trip (Semua SKPD)", value: "all" },
                  { label: "Hanya Para Bendahara & Pengelola Keuangan", value: "Bendahara" },
                  { label: "Hanya Para Atasan / Verifikator SPPD", value: "Atasan" },
                  { label: "Hanya Admin SKPD", value: "Admin" },
                  { label: "Hanya Seluruh Pegawai / Pemohon", value: "Pegawai" },
                ]}
              />

              <Input
                label="Judul Siaran"
                placeholder="Contoh: Pemeliharaan Server Terjadwal Hari Minggu"
                value={broadcastTitle}
                onChange={(e) => setBroadcastTitle(e.target.value)}
                required
              />

              <Textarea
                label="Isi Pesan Siaran"
                placeholder="Tuliskan instruksi atau pengumuman resmi instansi secara jelas..."
                rows={4}
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                required
              />

              <div className="p-3 bg-[#FFF1D1] rounded-xl border border-[#F5A000]/30 text-[12px] text-[#8A5A00] flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" x2="12" y1="9" y2="13" />
                  <line x1="12" x2="12.01" y1="17" y2="17" />
                </svg>
                <span>
                  Pesan siaran bertanda tangan elektronik Super Administrator dan akan tercatat permanen dalam audit trail sistem.
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsBroadcastOpen(false)}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-[#0066B3] text-white"
                >
                  Kirim Siaran Sekarang
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

