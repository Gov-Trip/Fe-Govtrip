"use client";

import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function PegawaiDashboardPage() {
  const statCards = [
    {
      title: "Pengajuan Aktif",
      value: "2",
      description: "dalam proses",
      iconBg: "bg-[#E3F0FA]",
      iconColor: "text-[#0066B3]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Menunggu Approval",
      value: "1",
      description: "di Kepala Bidang",
      iconBg: "bg-[#FFF1D1]",
      iconColor: "text-[#8A5A00]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Perjalanan Aktif",
      value: "1",
      description: "Yogyakarta, sampai 23 Sep",
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
      title: "Riwayat Perjalanan",
      value: "14",
      description: "tahun 2026",
      iconBg: "bg-[#EDF1F5]",
      iconColor: "text-[#123B72]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  const recentTrips = [
    {
      number: "PD-2026/087",
      destination: "Yogyakarta",
      dates: "21–23 Sep",
      status: "Berjalan",
      statusStyle: "bg-[#E3F0FA] text-[#0066B3]",
    },
    {
      number: "PD-2026/091",
      destination: "Bandung",
      dates: "6–8 Okt",
      status: "Menunggu",
      statusStyle: "bg-[#FFF1D1] text-[#8A5A00]",
    },
    {
      number: "PD-2026/079",
      destination: "Makassar",
      dates: "14–16 Sep",
      status: "LPJ perlu diunggah",
      statusStyle: "bg-[#FFF1D1] text-[#8A5A00]",
    },
  ];

  const pendingActions = [
    {
      title: "Unggah LPJ Makassar",
      subtitle: "Batas 23 Sep, 2 hari lagi",
      btnText: "Unggah",
      btnHref: "/pegawai/lpj",
      btnPrimary: true,
    },
    {
      title: "Draft Medan belum diajukan",
      subtitle: "Lengkapi tanggal dan biaya",
      btnText: "Lanjutkan",
      btnHref: "/pegawai/draft",
      btnPrimary: false,
    },
    {
      title: "SPPD Yogyakarta siap",
      subtitle: "Unduh sebelum berangkat",
      btnText: "Buka",
      btnHref: "/pegawai/sppd",
      btnPrimary: false,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Dashboard" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Banner Hero */}
        <div className="bg-[#123B72] rounded-[16px] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex flex-col">
            <h2 className="text-white text-[20px] sm:text-[22px] font-bold leading-tight">
              Selamat datang, Ocha 👋
            </h2>
            <p className="text-[#C9D8EC] text-[13.5px] mt-1">
              Kelola perjalanan dinas Anda dengan mudah dan terintegrasi
            </p>
          </div>

          <Link
            href="/pegawai/pengajuan"
            className="self-start md:self-auto bg-[#F5A000] hover:bg-[#e09200] active:bg-[#c98300] text-[#1E293B] font-semibold text-[13px] px-4 py-2.5 rounded-[10px] transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Ajukan perjalanan dinas</span>
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
                <span className="text-[#64748B] text-[11.5px] leading-none mt-0.5">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Pengajuan Terbaru dengan Timeline (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
                  Pengajuan terbaru
                </h3>
                <Link
                  href="/pegawai/perjalanan"
                  className="text-[#0066B3] hover:underline text-[12px] font-medium"
                >
                  Lihat detail
                </Link>
              </div>

              <p className="text-[#64748B] text-[12.5px] mb-6">
                Bandung · 6–8 Okt 2026 · Rapat koordinasi program regional
              </p>

              {/* Progress Stepper Flow */}
              <div className="relative flex items-center justify-between px-2 py-4">
                {/* Connecting Line */}
                <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-[#E8EEF3] -z-0" />

                {/* Step 1: Diajukan (Completed) */}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#12A9A5] text-white flex items-center justify-center text-[11px] font-bold">
                    ✓
                  </div>
                  <span className="text-[11.5px] text-[#64748B] font-medium text-center">
                    Diajukan
                  </span>
                </div>

                {/* Step 2: Atasan (In Progress) */}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#FFF1D1] border-2 border-[#F5A000] text-[#8A5A00] flex items-center justify-center text-[11.5px] font-bold">
                    2
                  </div>
                  <span className="text-[11.5px] text-[#8A5A00] font-semibold text-center">
                    Atasan
                  </span>
                </div>

                {/* Step 3: Kepala Bidang */}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#E8EEF3] text-[#64748B] flex items-center justify-center text-[11.5px] font-bold">
                    3
                  </div>
                  <span className="text-[11.5px] text-[#64748B] font-medium text-center">
                    Kepala Bidang
                  </span>
                </div>

                {/* Step 4: SPPD */}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#E8EEF3] text-[#64748B] flex items-center justify-center text-[11.5px] font-bold">
                    4
                  </div>
                  <span className="text-[11.5px] text-[#64748B] font-medium text-center">
                    SPPD
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E8EEF3] flex justify-end">
              <Link
                href="/pegawai/perjalanan"
                className="px-4 py-2 border border-[#E8EEF3] rounded-[10px] text-[12px] font-medium text-[#1E293B] hover:bg-[#F1F7FB] transition-colors"
              >
                Lihat detail alur
              </Link>
            </div>
          </div>

          {/* Right Column: Perlu Tindakan (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight mb-4">
              Perlu tindakan
            </h3>

            <div className="divide-y divide-[#E8EEF3]">
              {pendingActions.map((action, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#1E293B] text-[13.5px] font-medium leading-tight">
                      {action.title}
                    </span>
                    <span className="text-[#64748B] text-[12px] leading-relaxed mt-0.5 truncate">
                      {action.subtitle}
                    </span>
                  </div>

                  <Link
                    href={action.btnHref}
                    className={`shrink-0 px-3 py-1.5 rounded-[8px] text-[12px] font-medium transition-all ${
                      action.btnPrimary
                        ? "bg-[#F5A000] hover:bg-[#e09200] text-[#1E293B] font-semibold"
                        : "border border-[#E8EEF3] text-[#1E293B] hover:bg-[#F1F7FB]"
                    }`}
                  >
                    {action.btnText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabel Perjalanan Terbaru */}
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
              Perjalanan terbaru
            </h3>
            <Link
              href="/pegawai/perjalanan"
              className="text-[#0066B3] hover:underline text-[12px] font-medium"
            >
              Semua perjalanan
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-2.5 px-3">Nomor</th>
                  <th className="py-2.5 px-3">Tujuan</th>
                  <th className="py-2.5 px-3">Tanggal</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {recentTrips.map((trip) => (
                  <tr key={trip.number} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-[#1E293B]">
                      {trip.number}
                    </td>
                    <td className="py-3.5 px-3 text-[#1E293B]">
                      {trip.destination}
                    </td>
                    <td className="py-3.5 px-3 text-[#1E293B]">
                      {trip.dates}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${trip.statusStyle}`}
                      >
                        {trip.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

