"use client";

import { useState } from "react";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Button,
} from "@/components/ui";

export default function SuperAdminKonfigurasiPage() {
  // Figma Form States: Penomoran & batas waktu
  const [sppdFormat, setSppdFormat] = useState("090/{urut}/SPPD/{bulan}/{tahun}");
  const [lpjDeadline, setLpjDeadline] = useState("7");
  const [reminderDays, setReminderDays] = useState("2");

  // Figma Toggle States: Alur & notifikasi
  const [requireKadis, setRequireKadis] = useState(true);
  const [emailNotification, setEmailNotification] = useState(true);
  const [qrVerification, setQrVerification] = useState(true);

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    alert("Konfigurasi sistem berhasil disimpan ke sistem Gov.Trip!");
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Konfigurasi Sistem" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <form onSubmit={handleSave} className="flex flex-col gap-6">
          {/* 2-Column Content Grid per Figma Screen 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Card: Penomoran & batas waktu */}
            <Card>
              <CardHeader className="flex-col !items-start gap-1 mb-5">
                <CardTitle>Penomoran & batas waktu</CardTitle>
                <CardDescription>
                  Format resmi nomor naskah dinas dan batas waktu penyerahan laporan
                </CardDescription>
              </CardHeader>

              <div className="space-y-4">
                <Input
                  label="Format nomor SPPD"
                  value={sppdFormat}
                  onChange={(e) => setSppdFormat(e.target.value)}
                  placeholder="090/{urut}/SPPD/{bulan}/{tahun}"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Batas LPJ (hari)"
                    type="number"
                    value={lpjDeadline}
                    onChange={(e) => setLpjDeadline(e.target.value)}
                    placeholder="7"
                  />

                  <Input
                    label="Pengingat (hari sebelum)"
                    type="number"
                    value={reminderDays}
                    onChange={(e) => setReminderDays(e.target.value)}
                    placeholder="2"
                  />
                </div>
              </div>
            </Card>

            {/* Right Card: Alur & notifikasi */}
            <Card>
              <CardHeader className="flex-col !items-start gap-1 mb-5">
                <CardTitle>Alur & notifikasi</CardTitle>
                <CardDescription>
                  Pengaturan hirarki persetujuan dinas dan pengiriman pesan otomatis
                </CardDescription>
              </CardHeader>

              <div className="divide-y divide-[#E8EEF3]">
                {/* Item 1 */}
                <div className="py-3.5 first:pt-0 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-[#1E293B]">
                      Luar provinsi wajib ke Kepala Dinas
                    </span>
                    <span className="text-[12px] text-[#64748B] mt-0.5">
                      Atasan → Kepala Bidang → Kepala Dinas
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setRequireKadis(!requireKadis)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      requireKadis ? "bg-[#0066B3]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        requireKadis ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Item 2 */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-[#1E293B]">
                      Kirim notifikasi email
                    </span>
                    <span className="text-[12px] text-[#64748B] mt-0.5">
                      Status pengajuan dan pengingat LPJ
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setEmailNotification(!emailNotification)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      emailNotification ? "bg-[#0066B3]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        emailNotification ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Item 3 */}
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-[#1E293B]">
                      QR verifikasi pada SPPD
                    </span>
                    <span className="text-[12px] text-[#64748B] mt-0.5">
                      Keaslian dokumen bisa dipindai
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setQrVerification(!qrVerification)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                      qrVerification ? "bg-[#0066B3]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        qrVerification ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Button: Simpan konfigurasi */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E8EEF3]">
            <span className="text-[12.5px] text-[#64748B]">
              {isSaved
                ? "✓ Konfigurasi sistem telah aktif diterapkan"
                : "Perubahan konfigurasi akan otomatis berlaku untuk seluruh akun SKPD"}
            </span>

            <Button
              type="submit"
              className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold px-6 shadow-sm"
            >
              Simpan konfigurasi
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
