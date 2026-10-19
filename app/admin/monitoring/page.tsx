"use client";

import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminMonitoringPage() {
  const activeMonitors = [
    {
      name: "Liyana",
      unit: "Bidang Perencanaan",
      location: "Yogyakarta",
      dayProgress: "hari ke-1 dari 3",
      lastCheckin: "08.12 WIB",
      status: "Berjalan Aktif",
      cityBadge: "bg-[#E3F0FA] text-[#0066B3]",
    },
    {
      name: "Bagas",
      unit: "Bidang Keuangan",
      location: "Jakarta",
      dayProgress: "hari ke-2 dari 3",
      lastCheckin: "07.45 WIB",
      status: "Berjalan Aktif",
      cityBadge: "bg-[#DFF5F4] text-[#0B7A77]",
    },
    {
      name: "Nadia",
      unit: "Sekretariat Daerah",
      location: "Bogor",
      dayProgress: "hari ke-1 dari 1",
      lastCheckin: "09.03 WIB",
      status: "Berjalan Aktif",
      cityBadge: "bg-[#E3F0FA] text-[#0066B3]",
    },
  ];

  const upcomingSchedules = [
    {
      code: "PD-2026/091",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Bandung",
      dates: "6–8 Okt 2026",
    },
    {
      code: "PD-2026/093",
      employee: "Rudi",
      unit: "Bidang Perencanaan",
      destination: "Surabaya",
      dates: "12–14 Okt 2026",
    },
    {
      code: "PD-2026/094",
      employee: "Sari",
      unit: "Dinas Pendidikan",
      destination: "Yogyakarta",
      dates: "15–17 Okt 2026",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Monitoring Perjalanan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Realtime Active Travelers Section */}
        <div>
          <div className="mb-4">
            <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
              Pegawai sedang dinas hari ini
            </h2>
            <p className="text-[#64748B] text-[12.5px] mt-1">
              Pemantauan lokasi dinas dan presensi check-in harian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeMonitors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8EEF3] rounded-[14px] p-5 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[16px] font-bold text-[#123B72]">
                      {item.name}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${item.cityBadge}`}
                    >
                      {item.location}
                    </span>
                  </div>

                  <p className="text-[12px] text-[#64748B]">
                    {item.unit}
                  </p>
                  <p className="text-[12.5px] font-medium text-[#1E293B] mt-2">
                    {item.location} · {item.dayProgress}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8EEF3] flex items-center justify-between text-[11.5px]">
                  <span className="text-[#64748B]">
                    Check-in terakhir:
                  </span>
                  <span className="font-semibold text-[#0B7A77]">
                    {item.lastCheckin}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal Berikutnya Table */}
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="mb-5">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
              Jadwal berikutnya
            </h3>
            <p className="text-[#64748B] text-[12px] mt-1">
              Perjalanan dinas yang dijadwalkan berangkat dalam waktu dekat
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-2.5 px-3">Kode Perjalanan</th>
                  <th className="py-2.5 px-3">Pegawai</th>
                  <th className="py-2.5 px-3">Unit Kerja</th>
                  <th className="py-2.5 px-3">Tujuan</th>
                  <th className="py-2.5 px-3 text-right">Tanggal Berangkat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {upcomingSchedules.map((schedule) => (
                  <tr key={schedule.code} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3 px-3 font-semibold text-[#1E293B]">
                      {schedule.code}
                    </td>
                    <td className="py-3 px-3 text-[#1E293B] font-medium">
                      {schedule.employee}
                    </td>
                    <td className="py-3 px-3 text-[#64748B]">
                      {schedule.unit}
                    </td>
                    <td className="py-3 px-3 text-[#1E293B]">
                      {schedule.destination}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-[#1E293B]">
                      {schedule.dates}
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

