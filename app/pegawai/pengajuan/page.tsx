"use client";

import { useState } from "react";
import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";

export default function PengajuanPerjalananPage() {
  const [formData, setFormData] = useState({
    tripType: "Luar kota",
    destination: "Bandung",
    departDate: "2026-10-06",
    returnDate: "2026-10-08",
    transport: "Kereta api",
    workUnit: "Bidang Perencanaan",
    purpose: "Rapat koordinasi program regional bersama dinas terkait.",
    transportCost: "900000",
    accommodationCost: "1600000",
    dailyAllowance: "1350000",
    fileName: null as string | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAlert, setSubmittedAlert] = useState(false);

  const totalBudget =
    (parseInt(formData.transportCost) || 0) +
    (parseInt(formData.accommodationCost) || 0) +
    (parseInt(formData.dailyAllowance) || 0);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedAlert(true);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Pengajuan Perjalanan Dinas" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {submittedAlert && (
          <div className="bg-[#DFF5F4] border border-[#12A9A5] text-[#0B7A77] p-4 rounded-[12px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">✓ Berhasil!</span>
              <span>Pengajuan perjalanan dinas telah dikirim untuk diverifikasi Atasan.</span>
            </div>
            <Link
              href="/pegawai/perjalanan"
              className="text-[#0B7A77] font-semibold underline text-[13px]"
            >
              Lihat di Perjalanan Saya
            </Link>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Form: Form Pengajuan (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
            <div className="mb-6">
              <h2 className="text-[#123B72] text-[16px] font-semibold leading-tight">
                Form pengajuan perjalanan dinas
              </h2>
              <p className="text-[#64748B] text-[12.5px] mt-1">
                Lengkapi data berikut. Draft tersimpan otomatis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Jenis Perjalanan */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Jenis perjalanan
                </label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] cursor-pointer"
                >
                  <option value="Luar kota">Luar kota</option>
                  <option value="Dalam kota">Dalam kota</option>
                  <option value="Luar negeri">Luar negeri</option>
                </select>
              </div>

              {/* Kota Tujuan */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Kota tujuan
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Kota tujuan"
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Tanggal Berangkat */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Tanggal berangkat
                </label>
                <input
                  type="date"
                  name="departDate"
                  value={formData.departDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Tanggal Kembali */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Tanggal kembali
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Transportasi */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Transportasi
                </label>
                <select
                  name="transport"
                  value={formData.transport}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] cursor-pointer"
                >
                  <option value="Kereta api">Kereta api</option>
                  <option value="Pesawat">Pesawat</option>
                  <option value="Kendaraan dinas">Kendaraan dinas</option>
                  <option value="Bus">Bus</option>
                </select>
              </div>

              {/* Unit Kerja */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Unit kerja
                </label>
                <input
                  type="text"
                  name="workUnit"
                  value={formData.workUnit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Maksud dan Tujuan (span 2) */}
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Maksud dan tujuan
                </label>
                <textarea
                  name="purpose"
                  rows={3}
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] resize-none"
                />
              </div>

              {/* Estimasi Biaya Header */}
              <div className="sm:col-span-2 pt-2 border-t border-[#E8EEF3]">
                <h4 className="text-[13.5px] font-semibold text-[#123B72] mb-3">
                  Estimasi Biaya Perjalanan
                </h4>
              </div>

              {/* Estimasi Transportasi */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Estimasi transportasi (Rp)
                </label>
                <input
                  type="number"
                  name="transportCost"
                  value={formData.transportCost}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Estimasi Akomodasi */}
              <div className="flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Estimasi akomodasi (Rp)
                </label>
                <input
                  type="number"
                  name="accommodationCost"
                  value={formData.accommodationCost}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Estimasi Uang Harian */}
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Estimasi uang harian (Rp)
                </label>
                <input
                  type="number"
                  name="dailyAllowance"
                  value={formData.dailyAllowance}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3]"
                />
              </div>

              {/* Surat Tugas Upload Box (span 2) */}
              <div className="sm:col-span-2 flex flex-col pt-2">
                <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
                  Surat tugas
                </label>
                <div className="w-full p-6 border-2 border-dashed border-[#1684C4] rounded-[12px] bg-[#E3F0FA]/50 hover:bg-[#E3F0FA]/80 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                  <p className="text-[13px] text-[#0066B3] font-medium">
                    Pilih berkas <span className="text-[#64748B]">atau tarik ke sini</span>
                  </p>
                  <p className="text-[11.5px] text-[#64748B] mt-1">
                    PDF, maks. 5 MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ringkasan Biaya & Alur (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card Ringkasan Biaya */}
            <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
              <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight mb-4">
                Ringkasan biaya
              </h3>

              <div className="space-y-3 text-[13px]">
                <div className="flex items-center justify-between py-1.5 border-b border-[#E8EEF3]">
                  <span className="text-[#1E293B]">Transportasi</span>
                  <span className="font-medium text-[#1E293B]">
                    {formatRupiah(parseInt(formData.transportCost) || 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E8EEF3]">
                  <span className="text-[#1E293B]">Akomodasi</span>
                  <span className="font-medium text-[#1E293B]">
                    {formatRupiah(parseInt(formData.accommodationCost) || 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E8EEF3]">
                  <span className="text-[#1E293B]">Uang harian</span>
                  <span className="font-medium text-[#1E293B]">
                    {formatRupiah(parseInt(formData.dailyAllowance) || 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#123B72] font-bold text-[14px]">
                    Total estimasi
                  </span>
                  <span className="text-[#123B72] font-bold text-[15px]">
                    {formatRupiah(totalBudget)}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Alur Persetujuan */}
            <div className="bg-white border border-[#E8EEF3] rounded-[14px] p-6 shadow-[0px_4px_14px_0px_rgba(18,59,114,0.05)]">
              <div className="mb-4">
                <h3 className="text-[#123B72] text-[15px] font-semibold leading-tight">
                  Alur persetujuan
                </h3>
                <p className="text-[#64748B] text-[12px] mt-0.5">
                  {formData.tripType}
                </p>
              </div>

              {/* Steps */}
              <div className="flex items-center justify-between py-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#FFF1D1] border-2 border-[#F5A000] text-[#8A5A00] flex items-center justify-center text-[12px] font-bold">
                    1
                  </div>
                  <span className="text-[11px] font-semibold text-[#1E293B]">
                    Atasan
                  </span>
                </div>

                <div className="h-0.5 flex-1 bg-[#E8EEF3] mx-2" />

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#E8EEF3] text-[#64748B] flex items-center justify-center text-[12px] font-bold">
                    2
                  </div>
                  <span className="text-[11px] text-[#64748B]">
                    Kepala Bidang
                  </span>
                </div>

                <div className="h-0.5 flex-1 bg-[#E8EEF3] mx-2" />

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#E8EEF3] text-[#64748B] flex items-center justify-center text-[12px] font-bold">
                    3
                  </div>
                  <span className="text-[11px] text-[#64748B]">
                    SPPD
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-[#0066B3] hover:bg-[#005596] active:bg-[#004478] text-white text-[13px] font-semibold rounded-[10px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? "Mengirim Pengajuan..." : "Ajukan perjalanan"}
                </button>

                <button
                  type="button"
                  onClick={() => alert("Draft pengajuan berhasil disimpan!")}
                  className="w-full py-2.5 px-4 bg-white border border-[#E8EEF3] hover:bg-[#F1F7FB] text-[#1E293B] text-[13px] font-medium rounded-[10px] transition-colors cursor-pointer"
                >
                  Simpan draft
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

