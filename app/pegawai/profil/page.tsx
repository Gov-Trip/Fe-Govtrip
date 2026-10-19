"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components/ui";

export default function ProfilPegawaiPage() {
  const [emailNotification, setEmailNotification] = useState(true);

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Profil" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Data Profil Pegawai (col-span-7) */}
          <div className="lg:col-span-7">
            <Card padding="lg">
              <CardHeader>
                <CardTitle>Profil Pegawai</CardTitle>
              </CardHeader>

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
                  <div className="mt-1">
                    <Badge variant="success">Pegawai Aktif</Badge>
                  </div>
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
            </Card>
          </div>

          {/* Right Column: Pengaturan & Keamanan (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Akun</CardTitle>
              </CardHeader>

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

                {/* Ganti Kata Sandi */}
                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-medium text-[#1E293B]">
                      Kata sandi
                    </span>
                    <span className="text-[12px] text-[#64748B] mt-0.5">
                      Terakhir diperbarui 3 bulan lalu
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert("Formulir ubah kata sandi akan segera dibuka")}
                  >
                    Ubah
                  </Button>
                </div>

                {/* Sesi Login */}
                <div className="py-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-medium text-[#1E293B]">
                      Sesi aktif
                    </span>
                    <span className="text-[12px] text-[#64748B] mt-0.5">
                      Browser ini (Chrome di Windows)
                    </span>
                  </div>

                  <Badge variant="success">Aktif</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
