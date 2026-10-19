"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminDokumenPage() {
  const [docList, setDocList] = useState([
    {
      code: "PD-2026/087 · Yogyakarta",
      employee: "Liyana (Bidang Perencanaan)",
      items: [
        { name: "Surat Tugas", status: "Lengkap", date: "18 Sep 2026" },
        { name: "Tiket Transportasi", status: "Lengkap", date: "19 Sep 2026" },
        { name: "Akomodasi Hotel", status: "Lengkap", date: "19 Sep 2026" },
        { name: "SPPD Digital", status: "Lengkap", date: "20 Sep 2026" },
      ],
      isComplete: true,
    },
    {
      code: "PD-2026/091 · Bandung",
      employee: "Liyana (Bidang Perencanaan)",
      items: [
        { name: "Surat Tugas", status: "Belum diunggah", date: "-" },
        { name: "Estimasi Biaya", status: "Lengkap", date: "22 Sep 2026" },
        { name: "Tiket Transportasi", status: "Menunggu SPPD", date: "-" },
      ],
      isComplete: false,
    },
    {
      code: "PD-2026/093 · Surabaya",
      employee: "Rudi (Bidang Perencanaan)",
      items: [
        { name: "Surat Tugas", status: "Lengkap", date: "23 Sep 2026" },
        { name: "Rincian Biaya", status: "Belum lengkap", date: "Catatan: lampiran hotel" },
        { name: "Persetujuan Atasan", status: "Lengkap", date: "24 Sep 2026" },
      ],
      isComplete: false,
    },
    {
      code: "PD-2026/079 · Makassar",
      employee: "Hendra (Inspektorat)",
      items: [
        { name: "Surat Tugas", status: "Lengkap", date: "10 Sep 2026" },
        { name: "Bukti Tiket", status: "Belum diterima", date: "-" },
        { name: "Laporan Pertanggungjawaban (LPJ)", status: "Belum diunggah", date: "Batas 23 Sep" },
      ],
      isComplete: false,
    },
  ]);

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Dokumen" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="mb-6">
            <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
              Dokumen perjalanan
            </h2>
            <p className="text-[#64748B] text-[12.5px] mt-1">
              Kelengkapan berkas dan arsip per perjalanan dinas
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {docList.map((doc, idx) => (
              <div
                key={idx}
                className="border border-[#E8EEF3] rounded-[12px] p-5 bg-[#F1F7FB]/30 hover:bg-[#F1F7FB]/60 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E8EEF3] gap-2">
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1E293B]">
                      {doc.code}
                    </h3>
                    <p className="text-[12px] text-[#64748B] mt-0.5">
                      {doc.employee}
                    </p>
                  </div>

                  <span
                    className={`self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-medium ${
                      doc.isComplete
                        ? "bg-[#DFF5F4] text-[#0B7A77]"
                        : "bg-[#FFF1D1] text-[#8A5A00]"
                    }`}
                  >
                    {doc.isComplete ? "Berkas Lengkap" : "Perlu Tindak Lanjut"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
                  {doc.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white border border-[#E8EEF3] rounded-[10px] p-3 flex flex-col justify-between"
                    >
                      <span className="text-[12.5px] font-medium text-[#1E293B]">
                        {item.name}
                      </span>
                      <div className="mt-2 flex items-center justify-between">
                        <span
                          className={`text-[11px] font-medium ${
                            item.status === "Lengkap"
                              ? "text-[#0B7A77]"
                              : "text-[#B02A2A]"
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className="text-[10.5px] text-[#757575]">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

