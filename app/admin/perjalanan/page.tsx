"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminPerjalananPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Semua");

  const trips = [
    {
      number: "PD-2026/087",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      period: "21–23 Sep 2026",
      transport: "Kereta Api",
      budget: "Rp 3.850.000",
      status: "Berjalan",
      statusColor: "bg-[#E3F0FA] text-[#0066B3]",
    },
    {
      number: "PD-2026/088",
      employee: "Bagas",
      unit: "Bidang Keuangan",
      destination: "Jakarta",
      period: "20–22 Sep 2026",
      transport: "Pesawat",
      budget: "Rp 4.200.000",
      status: "Berjalan",
      statusColor: "bg-[#E3F0FA] text-[#0066B3]",
    },
    {
      number: "PD-2026/089",
      employee: "Nadia",
      unit: "Sekretariat Daerah",
      destination: "Bogor",
      period: "21 Sep 2026",
      transport: "Kendaraan Dinas",
      budget: "Rp 850.000",
      status: "Berjalan",
      statusColor: "bg-[#E3F0FA] text-[#0066B3]",
    },
    {
      number: "PD-2026/091",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Bandung",
      period: "6–8 Okt 2026",
      transport: "Kereta Api",
      budget: "Rp 2.900.000",
      status: "Menunggu",
      statusColor: "bg-[#FFF1D1] text-[#8A5A00]",
    },
    {
      number: "PD-2026/093",
      employee: "Rudi",
      unit: "Bidang Perencanaan",
      destination: "Surabaya",
      period: "12–14 Okt 2026",
      transport: "Pesawat",
      budget: "Rp 4.750.000",
      status: "Menunggu",
      statusColor: "bg-[#FFF1D1] text-[#8A5A00]",
    },
    {
      number: "PD-2026/079",
      employee: "Hendra",
      unit: "Inspektorat",
      destination: "Makassar",
      period: "14–16 Sep 2026",
      transport: "Pesawat",
      budget: "Rp 5.100.000",
      status: "Selesai",
      statusColor: "bg-[#DFF5F4] text-[#0B7A77]",
    },
  ];

  const filteredTrips = trips.filter((t) => {
    const matchesSearch =
      t.number.toLowerCase().includes(search.toLowerCase()) ||
      t.employee.toLowerCase().includes(search.toLowerCase()) ||
      t.destination.toLowerCase().includes(search.toLowerCase());

    if (activeTab === "Semua") return matchesSearch;
    return matchesSearch && t.status === activeTab;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Data Perjalanan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Data perjalanan
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Semua pengajuan tahun 2026
              </p>
            </div>

            <div className="flex items-center bg-white border border-[#E8EEF3] rounded-[10px] px-3 py-2 gap-2 w-full sm:w-[300px] focus-within:border-[#0066B3] focus-within:ring-1 focus-within:ring-[#0066B3] transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nomor atau pegawai"
                className="bg-transparent text-[13px] text-[#1E293B] placeholder-[#757575] focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-4">
            {["Semua", "Berjalan", "Menunggu", "Selesai"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#123B72] text-white"
                    : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-3 px-3">Nomor Perjalanan</th>
                  <th className="py-3 px-3">Pegawai</th>
                  <th className="py-3 px-3">Tujuan</th>
                  <th className="py-3 px-3">Periode</th>
                  <th className="py-3 px-3">Estimasi Biaya</th>
                  <th className="py-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {filteredTrips.map((row) => (
                  <tr key={row.number} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-[#1E293B]">
                      {row.number}
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex flex-col">
                        <span className="text-[#1E293B] font-medium">
                          {row.employee}
                        </span>
                        <span className="text-[11.5px] text-[#64748B]">
                          {row.unit}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-[#1E293B]">
                      {row.destination}
                    </td>
                    <td className="py-3.5 px-3 text-[#64748B]">
                      {row.period}
                    </td>
                    <td className="py-3.5 px-3 font-medium text-[#1E293B]">
                      {row.budget}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${row.statusColor}`}
                      >
                        {row.status}
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

