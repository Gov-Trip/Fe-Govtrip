"use client";

import { useState } from "react";
import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Select,
  Textarea,
  FileUpload,
  Button,
  Stepper,
  StepItem,
} from "@/components/ui";

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

  const workflowSteps: StepItem[] = [
    { label: "Atasan", status: "current" },
    { label: "Kepala Bidang", status: "upcoming" },
    { label: "SPPD Terbit", status: "upcoming" },
  ];

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
          <div className="lg:col-span-8">
            <Card>
              <CardHeader className="flex-col !items-start gap-1">
                <CardTitle>Form pengajuan perjalanan dinas</CardTitle>
                <CardDescription>
                  Lengkapi data berikut. Draft tersimpan otomatis.
                </CardDescription>
              </CardHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Jenis Perjalanan */}
                <Select
                  label="Jenis perjalanan"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleInputChange}
                  options={[
                    { value: "Luar kota", label: "Luar kota" },
                    { value: "Dalam kota", label: "Dalam kota" },
                    { value: "Luar negeri", label: "Luar negeri" },
                  ]}
                />

                {/* Kota Tujuan */}
                <Input
                  label="Kota tujuan"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Kota tujuan"
                />

                {/* Tanggal Berangkat */}
                <Input
                  label="Tanggal berangkat"
                  type="date"
                  name="departDate"
                  value={formData.departDate}
                  onChange={handleInputChange}
                />

                {/* Tanggal Kembali */}
                <Input
                  label="Tanggal kembali"
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                />

                {/* Transportasi */}
                <Select
                  label="Transportasi"
                  name="transport"
                  value={formData.transport}
                  onChange={handleInputChange}
                  options={[
                    { value: "Kereta api", label: "Kereta api" },
                    { value: "Pesawat", label: "Pesawat" },
                    { value: "Kendaraan dinas", label: "Kendaraan dinas" },
                    { value: "Bus", label: "Bus" },
                  ]}
                />

                {/* Unit Kerja */}
                <Input
                  label="Unit kerja"
                  name="workUnit"
                  value={formData.workUnit}
                  onChange={handleInputChange}
                />

                {/* Maksud dan Tujuan (span 2) */}
                <div className="sm:col-span-2">
                  <Textarea
                    label="Maksud dan tujuan"
                    name="purpose"
                    rows={3}
                    value={formData.purpose}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Estimasi Biaya Header */}
                <div className="sm:col-span-2 pt-2 border-t border-[#E8EEF3]">
                  <h4 className="text-[13.5px] font-semibold text-[#123B72] mb-3">
                    Estimasi Biaya Perjalanan
                  </h4>
                </div>

                {/* Estimasi Transportasi */}
                <Input
                  label="Estimasi transportasi (Rp)"
                  type="number"
                  name="transportCost"
                  value={formData.transportCost}
                  onChange={handleInputChange}
                />

                {/* Estimasi Akomodasi */}
                <Input
                  label="Estimasi akomodasi (Rp)"
                  type="number"
                  name="accommodationCost"
                  value={formData.accommodationCost}
                  onChange={handleInputChange}
                />

                {/* Estimasi Uang Harian */}
                <div className="sm:col-span-2">
                  <Input
                    label="Estimasi uang harian (Rp)"
                    type="number"
                    name="dailyAllowance"
                    value={formData.dailyAllowance}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Surat Tugas Upload Box (span 2) */}
                <div className="sm:col-span-2 pt-2">
                  <FileUpload
                    label="Surat tugas"
                    helperText="PDF, JPG, PNG maks 5MB"
                    value={formData.fileName}
                    onChange={(fileName) =>
                      setFormData((prev) => ({ ...prev, fileName }))
                    }
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Ringkasan Biaya & Alur (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card Ringkasan Biaya */}
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan biaya</CardTitle>
              </CardHeader>

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
            </Card>

            {/* Card Alur Persetujuan */}
            <Card>
              <CardHeader className="flex-col !items-start gap-1">
                <CardTitle>Alur persetujuan</CardTitle>
                <CardDescription>{formData.tripType}</CardDescription>
              </CardHeader>

              {/* Stepper */}
              <Stepper steps={workflowSteps} orientation="horizontal" />

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-2.5">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Ajukan perjalanan
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => alert("Draft pengajuan berhasil disimpan!")}
                  className="w-full"
                >
                  Simpan draft
                </Button>
              </div>
            </Card>
          </div>
        </form>
      </main>
    </div>
  );
}
