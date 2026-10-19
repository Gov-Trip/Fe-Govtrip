"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  StatCard,
  Badge,
  Button,
  Input,
  Select,
  Table,
} from "@/components/ui";

interface AuditLogEntry {
  id: string;
  timestamp: string;
  userName: string;
  userNip: string;
  role: "Super Admin" | "Admin" | "Atasan" | "Bendahara" | "Pegawai" | "Sistem";
  module: "Autentikasi" | "Master Data" | "SPPD & Perjalanan" | "Pagu & Anggaran" | "Keamanan";
  action: string;
  description: string;
  ipAddress: string;
  status: "success" | "warning" | "danger";
}

const INITIAL_LOGS: AuditLogEntry[] = [
  {
    id: "LOG-9921",
    timestamp: "19 Okt 2026, 10:42:15",
    userName: "Bambang Wijaya",
    userNip: "19800512 200212 1 001",
    role: "Super Admin",
    module: "Master Data",
    action: "UPDATE_SBM_UANG_HARIAN",
    description: "Memperbarui SBM Uang Harian DKI Jakarta menjadi Rp 530.000 / hari",
    ipAddress: "192.168.1.10 (LAN Pemprov)",
    status: "success",
  },
  {
    id: "LOG-9920",
    timestamp: "19 Okt 2026, 10:15:02",
    userName: "Anonim / Hacker",
    userNip: "-",
    role: "Sistem",
    module: "Keamanan",
    action: "BRUTE_FORCE_PREVENTED",
    description: "Percobaan login gagal 5x berturut-turut pada akun admin_keu. IP diblokir sementara.",
    ipAddress: "182.253.14.88 (External)",
    status: "danger",
  },
  {
    id: "LOG-9919",
    timestamp: "19 Okt 2026, 09:30:44",
    userName: "Ratna Sari, S.E.",
    userNip: "19840315 200801 2 003",
    role: "Bendahara",
    module: "Pagu & Anggaran",
    action: "DISBURSE_PAYMENT",
    description: "Pencairan dana uang muka SPPD/2026/X/089 senilai Rp 8.450.000 via CMS Bank DKI",
    ipAddress: "192.168.1.44 (BPKAD Subnet)",
    status: "success",
  },
  {
    id: "LOG-9918",
    timestamp: "19 Okt 2026, 08:55:10",
    userName: "Bpk. Hendra",
    userNip: "19780512 200003 1 002",
    role: "Atasan",
    module: "SPPD & Perjalanan",
    action: "APPROVE_SPPD",
    description: "Persetujuan berkas pengajuan perjalanan dinas konsultasi LKPP oleh Liyana Agustin",
    ipAddress: "192.168.2.18 (Bappeda)",
    status: "success",
  },
  {
    id: "LOG-9917",
    timestamp: "19 Okt 2026, 08:12:00",
    userName: "Cron Job Automated",
    userNip: "SYSTEM-DAEMON",
    role: "Sistem",
    module: "Autentikasi",
    action: "SESSION_CLEANUP",
    description: "Pembersihan 24 token sesi pengguna kadaluwarsa dari redis cache",
    ipAddress: "127.0.0.1 (Localhost)",
    status: "success",
  },
  {
    id: "LOG-9916",
    timestamp: "18 Okt 2026, 17:40:22",
    userName: "Bambang Wijaya",
    userNip: "19800512 200212 1 001",
    role: "Super Admin",
    module: "Master Data",
    action: "CREATE_USER_ACCOUNT",
    description: "Membuat akun baru: Ocha Rosdiana, S.STP (NIP 19930824 201602 2 001) - Role Pegawai",
    ipAddress: "192.168.1.10 (LAN Pemprov)",
    status: "success",
  },
  {
    id: "LOG-9915",
    timestamp: "18 Okt 2026, 16:11:05",
    userName: "Liyana Agustin",
    userNip: "19940711 201701 2 004",
    role: "Pegawai",
    module: "SPPD & Perjalanan",
    action: "SUBMIT_LPJ",
    description: "Mengunggah bukti rill dan kwitansi LPJ perjalanan Yogyakarta senilai Rp 5.820.000",
    ipAddress: "10.10.4.55 (Diskominfo)",
    status: "success",
  },
  {
    id: "LOG-9914",
    timestamp: "18 Okt 2026, 14:05:39",
    userName: "Ratna Sari, S.E.",
    userNip: "19840315 200801 2 003",
    role: "Bendahara",
    module: "Pagu & Anggaran",
    action: "REJECT_LPJ_EXPENSE",
    description: "Menolak item pengeluaran laundry tanpa cap resmi hotel pada LPJ-082 (Rp 180.000)",
    ipAddress: "192.168.1.44 (BPKAD Subnet)",
    status: "warning",
  },
  {
    id: "LOG-9913",
    timestamp: "18 Okt 2026, 11:20:18",
    userName: "Siti Nurhaliza, M.M.",
    userNip: "19880918 201201 2 005",
    role: "Admin",
    module: "Autentikasi",
    action: "USER_LOGIN_SUCCESS",
    description: "Login berhasil dengan autentikasi SSO Dua Faktor (2FA Active)",
    ipAddress: "192.168.1.30 (Sekretariat)",
    status: "success",
  },
];

export default function SuperAdminAuditPage() {
  const [logs] = useState<AuditLogEntry[]>(INITIAL_LOGS);
  const [search, setSearch] = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);

  const filteredLogs = logs.filter((log) => {
    const matchSearch =
      log.userName.toLowerCase().includes(search.toLowerCase()) ||
      log.userNip.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.description.toLowerCase().includes(search.toLowerCase()) ||
      log.ipAddress.toLowerCase().includes(search.toLowerCase());

    const matchModule = moduleFilter === "all" || log.module === moduleFilter;
    const matchStatus = statusFilter === "all" || log.status === statusFilter;

    return matchSearch && matchModule && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#123B72] to-[#0066B3] rounded-2xl p-6 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 text-white tracking-wide uppercase">
              Security & Compliance
            </span>
            <span className="text-[12px] text-white/80">• WORM Storage Active</span>
          </div>
          <h1 className="text-[22px] font-bold">Audit Trail & Keamanan Sistem</h1>
          <p className="text-[13px] text-[#A9BEDA] mt-1 max-w-2xl leading-relaxed">
            Rekam jejak tidak dapat diubah (immutable logs) untuk seluruh aktivitas autentikasi, mutasi data master, approval berjenjang, dan pencairan anggaran sesuai kepatuhan BPK & BPKP.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-[13px]"
            onClick={() => alert("Mengunduh rekaman Audit Log terenkripsi (Format CSV/XLSX signed BPK)...")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Ekspor Log
          </Button>
          <Button
            className="bg-[#F5A000] hover:bg-[#e09200] text-white text-[13px] font-semibold shadow"
            onClick={() => alert("Audit log sinkronisasi realtime aktif (0 delay).")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            Live Monitor
          </Button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Event Hari Ini"
          value="1.842"
          sublabel="+18% aktivitas normal"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0066B3]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          }
        />
        <StatCard
          title="Percobaan Gagal (Ancaman)"
          value="4"
          sublabel="Semua IP diblokir"
          iconBg="bg-[#FBE8E8]"
          iconColor="text-[#B02A2A]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B02A2A]">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          }
        />
        <StatCard
          title="Mutasi Data Master & SBM"
          value="18"
          sublabel="3 perubahan hari ini"
          iconBg="bg-[#FFF1D1]"
          iconColor="text-[#8A5A00]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F5A000]">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          }
        />
        <StatCard
          title="Integritas Log (SHA-256)"
          value="100% Valid"
          sublabel="Zero tamper detected"
          iconBg="bg-[#DFF5F4]"
          iconColor="text-[#0B7A77]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B7A77]">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          }
        />
      </div>

      {/* Filter and Search Bar */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Filter & Pencarian Audit Log</CardTitle>
            <CardDescription>
              Menampilkan {filteredLogs.length} dari {logs.length} catatan aktivitas sistem
            </CardDescription>
          </div>
        </CardHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input
            placeholder="Cari user, NIP, aksi, IP address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            options={[
              { label: "Semua Modul", value: "all" },
              { label: "Autentikasi & Sesi", value: "Autentikasi" },
              { label: "Master Data & Pengguna", value: "Master Data" },
              { label: "SPPD & Perjalanan Dinas", value: "SPPD & Perjalanan" },
              { label: "Pagu & Anggaran Keuangan", value: "Pagu & Anggaran" },
              { label: "Keamanan & Firewall", value: "Keamanan" },
            ]}
          />

          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { label: "Semua Status", value: "all" },
              { label: "Sukses (Normal)", value: "success" },
              { label: "Peringatan / Warning", value: "warning" },
              { label: "Gagal / Diblokir (Threat)", value: "danger" },
            ]}
          />
        </div>
      </Card>

      {/* Main Table */}
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Waktu & ID</th>
              <th>Pengguna / Aktor</th>
              <th>Modul & Aksi</th>
              <th>Deskripsi Aktivitas</th>
              <th>IP Address & Host</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((item) => (
              <tr key={item.id} className="hover:bg-[#F1F7FB]/50 transition-colors">
                <td className="whitespace-nowrap">
                  <div className="font-semibold text-[#1E293B] text-[13px]">
                    {item.timestamp}
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B]">
                    {item.id}
                  </div>
                </td>

                <td>
                  <div className="font-medium text-[#1E293B] text-[13px]">
                    {item.userName}
                  </div>
                  <div className="text-[11px] text-[#64748B] flex items-center gap-1.5 mt-0.5">
                    <span>{item.userNip}</span>
                    <span className="w-1 h-1 rounded-full bg-[#A9BEDA]" />
                    <span className="font-medium text-[#0066B3]">{item.role}</span>
                  </div>
                </td>

                <td>
                  <span className="inline-block px-2 py-0.5 rounded text-[10.5px] font-medium bg-[#E8EEF3] text-[#123B72] mb-1">
                    {item.module}
                  </span>
                  <div className="font-mono text-[11.5px] text-[#1E293B] font-semibold">
                    {item.action}
                  </div>
                </td>

                <td className="max-w-[280px]">
                  <p className="text-[12.5px] text-[#334155] leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </td>

                <td className="whitespace-nowrap text-[12px] text-[#64748B] font-mono">
                  {item.ipAddress}
                </td>

                <td>
                  {item.status === "success" && (
                    <Badge variant="success">Berhasil</Badge>
                  )}
                  {item.status === "warning" && (
                    <Badge variant="warning">Peringatan</Badge>
                  )}
                  {item.status === "danger" && (
                    <Badge variant="danger">Diblokir</Badge>
                  )}
                </td>

                <td>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[12px]"
                    onClick={() => setSelectedLog(item)}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {filteredLogs.length === 0 && (
          <div className="p-12 text-center text-[#64748B]">
            Tidak ada audit log yang sesuai dengan kriteria filter saat ini.
          </div>
        )}
      </Card>

      {/* Modal Detail Log */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <div>
                <h3 className="text-[16px] font-bold text-[#123B72]">
                  Detail Audit Trail Event
                </h3>
                <span className="text-[12px] text-[#64748B] font-mono">
                  Ref: {selectedLog.id}
                </span>
              </div>
              <button
                onClick={() => setSelectedLog(null)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-[13px]">
              <div className="grid grid-cols-2 gap-3 bg-[#F1F7FB] p-3 rounded-xl border border-[#E8EEF3]">
                <div>
                  <span className="text-[11px] text-[#64748B] block">Waktu Tercatat</span>
                  <span className="font-semibold text-[#1E293B]">{selectedLog.timestamp}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Status Event</span>
                  <span className="font-semibold capitalize text-[#1E293B]">{selectedLog.status}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Aktor Pengguna</span>
                  <span className="font-semibold text-[#1E293B]">{selectedLog.userName} ({selectedLog.role})</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">NIP / Identitas</span>
                  <span className="font-semibold text-[#1E293B]">{selectedLog.userNip}</span>
                </div>
              </div>

              <div>
                <label className="text-[11.5px] font-semibold text-[#64748B] block mb-1">
                  Aksi & Kode Modul
                </label>
                <div className="p-2.5 bg-slate-900 text-emerald-400 font-mono text-[12px] rounded-lg">
                  {selectedLog.module.toUpperCase()} :: {selectedLog.action}
                </div>
              </div>

              <div>
                <label className="text-[11.5px] font-semibold text-[#64748B] block mb-1">
                  Deskripsi Lengkap
                </label>
                <div className="p-3 bg-white border border-[#E8EEF3] rounded-lg text-[#334155]">
                  {selectedLog.description}
                </div>
              </div>

              <div>
                <label className="text-[11.5px] font-semibold text-[#64748B] block mb-1">
                  Metadata Jaringan & Client Hash
                </label>
                <div className="p-2.5 bg-[#F1F7FB] rounded-lg font-mono text-[11.5px] text-[#64748B] space-y-1">
                  <div>Source IP: {selectedLog.ipAddress}</div>
                  <div>Checksum SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                  <div>Signature: Validated by GovTrip Root CA</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedLog(null)}
              >
                Tutup
              </Button>
              <Button
                className="bg-[#0066B3] text-white"
                onClick={() => {
                  alert("Event log telah diverifikasi terhadap blockchain ledger inspektorat.");
                  setSelectedLog(null);
                }}
              >
                Verifikasi Validitas Hash
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
