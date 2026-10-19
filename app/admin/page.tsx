"use client";

import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminDashboardPage() {
  const statCards = [
    {
      title: "Total Pegawai",
      value: "128",
      sublabel: null,
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
      title: "Perjalanan Berjalan",
      value: "3",
      sublabel: "hari ini",
      iconBg: "bg-[#DFF5F4]",
      iconColor: "text-[#0B7A77]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "SPPD Terbit",
      value: "34",
      sublabel: "bulan ini",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#1684C4]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Dokumen Belum Lengkap",
      value: "5",
      sublabel: "perlu tindak lanjut",
      iconBg: "bg-[#FBE8E8]",
      iconColor: "text-[#B02A2A]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      ),
    },
  ];

  const ongoingTrips = [
    {
      number: "PD-2026/087",
      employee: "Liyana",
      destination: "Yogyakarta",
      period: "21–23 Sep",
      status: "Berjalan",
    },
    {
      number: "PD-2026/088",
      employee: "Bagas",
      destination: "Jakarta",
      period: "20–22 Sep",
      status: "Berjalan",
    },
    {
      number: "PD-2026/089",
      employee: "Nadia",
      destination: "Bogor",
      period: "21 Sep",
      status: "Berjalan",
    },
  ];

  const pendingDocuments = [
    {
      code: "PD-2026/091",
      issue: "Surat tugas belum diunggah",
      status: "Belum lengkap",
    },
    {
      code: "PD-2026/093",
      issue: "Rincian biaya belum lengkap",
      status: "Belum lengkap",
    },
    {
      code: "PD-2026/079",
      issue: "Bukti tiket belum diterima",
      status: "Belum lengkap",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <div className="bg-[#123B72] rounded-[16px] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-col">
            <h2 className="text-white text-[20px] sm:text-[22px] font-bold leading-tight">
              Selamat datang, Admin 👋
            </h2>
            <p className="text-[#C9D8EC] text-[13.5px] mt-1">
              3 perjalanan sedang berjalan hari ini
            </p>
          </div>

          <Link
            href="/admin/monitoring"
            className="self-start md:self-auto bg-[#F5A000] hover:bg-[#e09200] active:bg-[#c98300] text-[#1E293B] font-semibold text-[13px] px-4 py-2.5 rounded-[10px] transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Buka monitoring</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8EEF3] rounded-[14px] p-4 flex items-center gap-3.5 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)] transition-all hover:border-[#C9D8EC]"
            >
              <div
                className={`w-[42px] h-[42px] rounded-[10px] ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0`}
              >
                {card.icon}
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-[#64748B] text-[12.5px] leading-tight font-medium truncate">
                  {card.title}
                </span>
                <span className="text-[#123B72] text-[24px] font-semibold leading-tight mt-0.5">
                  {card.value}
                </span>
                {card.sublabel && (
                  <span className="text-[#64748B] text-[11.5px] leading-none mt-0.5">
                    {card.sublabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Perjalanan Berjalan (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-[#E8EEF3] rounded-[14px] p-5 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
                Perjalanan berjalan
              </h3>
              <Link
                href="/admin/perjalanan"
                className="text-[#0066B3] hover:underline text-[12px] font-medium"
              >
                Lihat semua
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                    <th className="py-2.5 px-3">Nomor</th>
                    <th className="py-2.5 px-3">Pegawai</th>
                    <th className="py-2.5 px-3">Tujuan</th>
                    <th className="py-2.5 px-3">Periode</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                  {ongoingTrips.map((row) => (
                    <tr key={row.number} className="hover:bg-[#F1F7FB]/50 transition-colors">
                      <td className="py-3 px-3 font-semibold text-[#1E293B]">
                        {row.number}
                      </td>
                      <td className="py-3 px-3 text-[#1E293B]">
                        {row.employee}
                      </td>
                      <td className="py-3 px-3 text-[#1E293B]">
                        {row.destination}
                      </td>
                      <td className="py-3 px-3 text-[#64748B]">
                        {row.period}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11.5px] font-medium bg-[#E3F0FA] text-[#0066B3]">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Dokumen Perlu Tindak Lanjut (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-[#E8EEF3] rounded-[14px] p-5 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
                Dokumen perlu tindak lanjut
              </h3>
              <Link
                href="/admin/dokumen"
                className="text-[#0066B3] hover:underline text-[12px] font-medium"
              >
                Kelola
              </Link>
            </div>

            <div className="divide-y divide-[#E8EEF3]">
              {pendingDocuments.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#1E293B] text-[14px] font-semibold leading-tight">
                      {item.code}
                    </span>
                    <span className="text-[#64748B] text-[12px] leading-relaxed mt-0.5 truncate">
                      {item.issue}
                    </span>
                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FFF1D1] text-[#8A5A00]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

