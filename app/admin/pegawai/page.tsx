"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminPegawaiPage() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      nip: "198804122011011002",
      name: "Liyana",
      unit: "Bidang Perencanaan",
      position: "Analis Kebijakan Ahli Muda",
      status: "Aktif",
    },
    {
      nip: "198506152009021004",
      name: "Bagas",
      unit: "Bidang Keuangan & Aset",
      position: "Pranata Keuangan APBN",
      status: "Aktif",
    },
    {
      nip: "199201202014032001",
      name: "Nadia",
      unit: "Sekretariat Daerah",
      position: "Penyusun Program Anggaran",
      status: "Aktif",
    },
    {
      nip: "198309112006041003",
      name: "Rudi",
      unit: "Bidang Perencanaan",
      position: "Perencana Ahli Madya",
      status: "Aktif",
    },
    {
      nip: "199003052012121001",
      name: "Hendra",
      unit: "Inspektorat",
      position: "Auditor Ahli Muda",
      status: "Aktif",
    },
    {
      nip: "199408222018012005",
      name: "Ocha",
      unit: "Bidang Perencanaan",
      position: "Staf Administrasi Umum",
      status: "Aktif",
    },
    {
      nip: "198711182010012003",
      name: "Sari",
      unit: "Dinas Pendidikan",
      position: "Pengelola Data Kebijakan",
      status: "Aktif",
    },
  ];

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.unit.toLowerCase().includes(search.toLowerCase()) ||
      emp.position.toLowerCase().includes(search.toLowerCase()) ||
      emp.nip.includes(search)
  );

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Data Pegawai" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {/* Main Section */}
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          {/* Header & Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Data pegawai
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                128 pegawai terdaftar
              </p>
            </div>

            {/* Search Input Filter */}
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
                placeholder="Cari nama atau unit"
                className="bg-transparent text-[13px] text-[#1E293B] placeholder-[#757575] focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-3 px-3">Nama Pegawai</th>
                  <th className="py-3 px-3">Unit Kerja</th>
                  <th className="py-3 px-3">Jabatan</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.nip} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3.5 px-3">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#1E293B]">
                          {emp.name}
                        </span>
                        <span className="text-[11.5px] text-[#64748B]">
                          NIP. {emp.nip}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-[#1E293B] font-medium">
                      {emp.unit}
                    </td>
                    <td className="py-3.5 px-3 text-[#64748B]">
                      {emp.position}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#DFF5F4] text-[#0B7A77]">
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => alert(`Detail profil ${emp.name}`)}
                        className="text-[#0066B3] hover:underline text-[12px] font-medium cursor-pointer"
                      >
                        Detail
                      </button>
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

