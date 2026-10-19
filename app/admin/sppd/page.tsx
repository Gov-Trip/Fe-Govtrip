"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminSPPDPage() {
  const [sppdList, setSppdList] = useState([
    {
      id: "1",
      sppdNumber: "090/087/SPPD/IX/2026",
      tripCode: "PD-2026/087",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Yogyakarta",
      date: "21–23 Sep 2026",
      status: "Sudah terbit",
    },
    {
      id: "2",
      sppdNumber: "090/088/SPPD/IX/2026",
      tripCode: "PD-2026/088",
      employee: "Bagas",
      unit: "Bidang Keuangan",
      destination: "Jakarta",
      date: "20–22 Sep 2026",
      status: "Sudah terbit",
    },
    {
      id: "3",
      sppdNumber: "090/089/SPPD/IX/2026",
      tripCode: "PD-2026/089",
      employee: "Nadia",
      unit: "Sekretariat Daerah",
      destination: "Bogor",
      date: "21 Sep 2026",
      status: "Sudah terbit",
    },
    {
      id: "4",
      sppdNumber: "-",
      tripCode: "PD-2026/091",
      employee: "Liyana",
      unit: "Bidang Perencanaan",
      destination: "Bandung",
      date: "6–8 Okt 2026",
      status: "Belum terbit",
    },
  ]);

  const handleIssueSPPD = (id: string, tripCode: string) => {
    const newNumber = `090/091/SPPD/X/2026`;
    setSppdList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              sppdNumber: newNumber,
              status: "Sudah terbit",
            }
          : item
      )
    );
    alert(`SPPD untuk perjalanan ${tripCode} berhasil diterbitkan dengan nomor ${newNumber}!`);
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="SPPD Digital" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                SPPD digital
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Terbitkan dan kelola nomor Surat Perintah Perjalanan Dinas
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-3 px-3">Nomor SPPD</th>
                  <th className="py-3 px-3">Pegawai</th>
                  <th className="py-3 px-3">Tujuan</th>
                  <th className="py-3 px-3">Tanggal Pelaksanaan</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {sppdList.map((row) => (
                  <tr key={row.id} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3.5 px-3">
                      <div className="flex flex-col">
                        <span className={`font-semibold ${row.sppdNumber === '-' ? 'text-[#757575]' : 'text-[#1E293B]'}`}>
                          {row.sppdNumber}
                        </span>
                        <span className="text-[11px] text-[#64748B]">
                          Kode: {row.tripCode}
                        </span>
                      </div>
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
                      {row.date}
                    </td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                          row.status === "Sudah terbit"
                            ? "bg-[#DFF5F4] text-[#0B7A77]"
                            : "bg-[#FFF1D1] text-[#8A5A00]"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      {row.status === "Sudah terbit" ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => alert(`Mengunduh dokumen SPPD ${row.sppdNumber}`)}
                            className="text-[#0066B3] hover:underline text-[12px] font-medium cursor-pointer"
                          >
                            Unduh PDF
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleIssueSPPD(row.id, row.tripCode)}
                          className="bg-[#F5A000] hover:bg-[#e09200] text-[#1E293B] font-semibold text-[12px] px-3 py-1.5 rounded-[8px] transition-colors cursor-pointer"
                        >
                          Terbitkan
                        </button>
                      )}
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

