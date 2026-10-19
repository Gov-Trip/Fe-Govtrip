"use client";

import Link from "next/link";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import {
  HeroBanner,
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function SuperAdminDashboardPage() {
  const statCards = [
    {
      title: "Total Pengguna",
      value: "142",
      sublabel: "4 peran terkonfigurasi",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Unit Kerja / SKPD",
      value: "12",
      sublabel: "100% terhubung",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
        </svg>
      ),
    },
    {
      title: "Ketersediaan Sistem",
      value: "99.98%",
      sublabel: "server & modul aktif",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#1684C4]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Log Audit Hari Ini",
      value: "128",
      sublabel: "0 insiden kritis",
      iconBg: "bg-[#FFF1D1]",
      iconColor: "text-[#8A5A00]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  const recentAuditLogs = [
    {
      time: "10:32 WIB",
      actor: "Ratna Sari (Bendahara)",
      action: "Pencairan Uang Muka BKU-2026/09/081",
      ip: "192.168.1.45",
      status: "Sukses",
    },
    {
      time: "09:48 WIB",
      actor: "Bpk. Hendra (Atasan)",
      action: "Approval Pengajuan PD-2026/093",
      ip: "192.168.1.18",
      status: "Sukses",
    },
    {
      time: "09:15 WIB",
      actor: "Admin (Admin)",
      action: "Penerbitan Nomor SPPD 090/087/SPPD",
      ip: "192.168.1.10",
      status: "Sukses",
    },
    {
      time: "08:30 WIB",
      actor: "Liyana S. (Pegawai)",
      action: "Unggah Dokumen Surat Tugas Bandung",
      ip: "192.168.2.102",
      status: "Sukses",
    },
    {
      time: "07:55 WIB",
      actor: "Unknown (IP Luar)",
      action: "Percobaan Login Gagal (3x)",
      ip: "182.253.14.88",
      status: "Ditolak",
    },
  ];

  const roleDistribution = [
    { role: "Pegawai Pelaksana", count: 120, percentage: "84.5%", color: "bg-[#0066B3]" },
    { role: "Pejabat / Atasan", count: 14, percentage: "9.9%", color: "bg-[#12A9A5]" },
    { role: "Administrator", count: 4, percentage: "2.8%", color: "bg-[#123B72]" },
    { role: "Bendahara Keuangan", count: 4, percentage: "2.8%", color: "bg-[#F5A000]" },
  ];

  const systemServices = [
    { name: "Basis Data Utama (PostgreSQL Cluster)", status: "Optimal", latency: "12 ms", uptime: "99.99%" },
    { name: "Layanan Tanda Tangan Elektronik (TTE BSrE)", status: "Terhubung", latency: "45 ms", uptime: "99.95%" },
    { name: "Modul Penyimpanan Dokumen SPPD (S3)", status: "Optimal", latency: "28 ms", uptime: "100%" },
    { name: "Layanan Notifikasi Email & SMS Gateway", status: "Optimal", latency: "80 ms", uptime: "99.90%" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Dashboard Super Admin" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <HeroBanner
          title="Pusat Kendali Sistem Gov.Trip 👋"
          subtitle="Tata kelola akun pengguna, hak akses, integrasi unit kerja, dan pemantauan keamanan sistem"
          actionText="Kelola Pengguna"
          actionHref="/superadmin/pengguna"
        />

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statCards.map((card, idx) => (
            <StatCard
              key={idx}
              title={card.title}
              value={card.value}
              sublabel={card.sublabel}
              icon={card.icon}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Log Audit Sistem Terbaru (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Log Aktivitas & Audit Trail</CardTitle>
                  <CardDescription>
                    Pencatatan real-time perubahan data, approval, dan transaksi
                  </CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/superadmin/audit"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Buka Log Lengkap
                  </Link>
                </CardAction>
              </CardHeader>

              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Waktu</TableHead>
                    <TableHead>Pengguna</TableHead>
                    <TableHead>Aktivitas</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAuditLogs.map((log, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-mono text-[11.5px] text-[#64748B]">
                        {log.time}
                      </TableCell>
                      <TableCell className="font-medium text-[#1E293B]">
                        {log.actor}
                      </TableCell>
                      <TableCell className="text-[#64748B] text-[12px] max-w-[220px] truncate">
                        {log.action}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={log.status === "Sukses" ? "success" : "danger"}
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Right Column: Distribusi Peran Pengguna (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Distribusi Peran Pengguna</CardTitle>
                  <CardDescription>142 akun aktif terdaftar di sistem</CardDescription>
                </div>
                <CardAction>
                  <Link
                    href="/superadmin/pengguna"
                    className="text-[#0066B3] hover:underline text-[12px] font-medium"
                  >
                    Kelola
                  </Link>
                </CardAction>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {roleDistribution.map((item, idx) => (
                  <div key={idx} className="py-3.5 first:pt-1 last:pb-1 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-medium text-[#1E293B]">{item.role}</span>
                      <span className="font-bold text-[#123B72]">
                        {item.count} akun ({item.percentage})
                      </span>
                    </div>

                    <div className="w-full h-2 bg-[#E8EEF3] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: item.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* System Health / Status Layanan */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Status Layanan & Komponen Infrastruktur</CardTitle>
              <CardDescription>
                Pemantauan kesehatan API server, basis data, dan gateway pihak ketiga
              </CardDescription>
            </div>
          </CardHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {systemServices.map((svc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[12px] border border-[#E8EEF3] bg-[#F1F7FB]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-medium text-[#0B7A77] bg-[#DFF5F4] px-2 py-0.5 rounded-full">
                      ● {svc.status}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      {svc.latency}
                    </span>
                  </div>
                  <h4 className="text-[13px] font-semibold text-[#123B72] leading-snug">
                    {svc.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#E8EEF3] flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Uptime SLA</span>
                  <span className="font-bold text-[#1E293B]">{svc.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}

