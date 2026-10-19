"use client";

import { useState } from "react";
import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function DraftPengajuanPage() {
  const [drafts, setDrafts] = useState([
    {
      id: "1",
      destination: "Medan",
      dates: "3–5 Nov 2026",
      lastModified: "Kemarin",
      progress: "70%",
    },
    {
      id: "2",
      destination: "Denpasar",
      dates: "Belum diisi",
      lastModified: "5 hari lalu",
      progress: "30%",
    },
  ]);

  const handleDelete = (id: string, dest: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus draft perjalanan ke ${dest}?`)) {
      setDrafts((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Draft Pengajuan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-6">
            <div>
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Draft pengajuan
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Daftar pengajuan perjalanan yang belum dikirim
              </p>
            </div>

            <Link
              href="/pegawai/pengajuan"
              className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold px-4 py-2 rounded-[10px] transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>+ Buat Baru</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[#64748B] text-[12px] font-medium">
                  <th className="py-3 px-3">Tujuan</th>
                  <th className="py-3 px-3">Tanggal</th>
                  <th className="py-3 px-3">Terakhir Diubah</th>
                  <th className="py-3 px-3">Kelengkapan</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3] text-[13px]">
                {drafts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-[#64748B]">
                      Tidak ada draft pengajuan tersimpan.
                    </td>
                  </tr>
                ) : (
                  drafts.map((draft) => (
                    <tr key={draft.id} className="hover:bg-[#F1F7FB]/50 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-[#1E293B]">
                        {draft.destination}
                      </td>
                      <td className="py-3.5 px-3 text-[#1E293B]">
                        {draft.dates}
                      </td>
                      <td className="py-3.5 px-3 text-[#64748B]">
                        {draft.lastModified}
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#1E293B] text-[12px]">
                            {draft.progress}
                          </span>
                          <div className="w-20 h-1.5 bg-[#E8EEF3] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0066B3] rounded-full"
                              style={{ width: draft.progress }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href="/pegawai/pengajuan"
                            className="px-3 py-1.5 bg-[#0066B3] hover:bg-[#005596] text-white rounded-[8px] text-[12px] font-medium transition-colors"
                          >
                            Lanjutkan
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(draft.id, draft.destination)}
                            className="px-3 py-1.5 border border-[#B02A2A] text-[#B02A2A] hover:bg-[#FBE8E8] rounded-[8px] text-[12px] font-medium transition-colors cursor-pointer"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

