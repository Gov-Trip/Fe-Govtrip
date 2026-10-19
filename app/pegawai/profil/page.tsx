"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function ProfilPegawaiPage() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Profil" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Data Profil Pegawai (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-[#E8EEF3] rounded-[14px] p-6 sm:p-8 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight mb-6">
              Profil Pegawai
            </h2>

            {/* Avatar & Identitas */}
            <div className="flex items-center gap-4 pb-6 border-b border-[#E8EEF3]">
              <div className="w-16 h-16 rounded-full bg-[#1684C4] text-white flex items-center justify-center font-bold text-[24px] shadow-sm">
                L
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#1E293B] font-bold text-[18px]">
                  Ocha (Alika Putri)
                </h3>
                <span className="text-[#64748B] text-[13px]">
                  Staf Bidang Perencanaan
                </span>
                <span className="text-[11.5px] text-[#0B7A77] font-medium mt-1">
                  Pegawai Aktif
                </span>
              </div>
            </div>

            {/* Detail Informasi Akun */}
            <div className="pt-6 space-y-4 text-[13.5px]">
              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-[#E8EEF3]/60">
                <span className="w-40 text-[#64748B]">NIP</span>
                <span className="font-semibold text-[#1E293B]">
                  199408222018012005
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-[#E8EEF3]/60">
                <span className="w-40 text-[#64748B]">Unit kerja</span>
                <span className="font-medium text-[#1E293B]">
                  Bidang Perencanaan
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-[#E8EEF3]/60">
                <span className="w-40 text-[#64748B]">Email dinas</span>
                <span className="font-medium text-[#1E293B]">
                  ocha@instansi.go.id
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-[#E8EEF3]/60">
                <span className="w-40 text-[#64748B]">Atasan langsung</span>
                <span className="font-medium text-[#1E293B]">
                  Kepala Bidang Perencanaan
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pengaturan & Keamanan (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight mb-4">
              Pengaturan Akun
            </h3>

            <div className="divide-y divide-[#E8EEF3]">
              {/* Notifikasi Email */}
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-medium text-[#1E293B]">
                    Notifikasi email
                  </span>
                  <span className="text-[12px] text-[#64748B] mt-0.5">
                    Kabar status pengajuan & approval
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setEmailNotification(!emailNotification)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    emailNotification ? "bg-[#0066B3]" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      emailNotification ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Ubah Kata Sandi */}
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-medium text-[#1E293B]">
                    Ubah kata sandi
                  </span>
                  <span className="text-[12px] text-[#64748B] mt-0.5">
                    Terakhir diubah 2 bulan lalu
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => alert("Fitur ubah kata sandi dibuka")}
                  className="px-3.5 py-1.5 border border-[#E8EEF3] hover:bg-[#F1F7FB] text-[#1E293B] text-[12px] font-medium rounded-[8px] transition-colors cursor-pointer"
                >
                  Ubah
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

