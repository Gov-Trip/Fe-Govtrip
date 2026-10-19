"use client";

import { useState } from "react";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Input,
  Select,
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function SuperAdminKonfigurasiPage() {
  const [activeTab, setActiveTab] = useState("sbm");
  const [saveAlert, setSaveAlert] = useState(false);

  const [sbmRates, setSbmRates] = useState([
    { province: "DKI Jakarta", dailyAllowance: "Rp 530.000", hotelEselon2: "Rp 1.490.000", hotelStaff: "Rp 730.000" },
    { province: "Jawa Barat", dailyAllowance: "Rp 430.000", hotelEselon2: "Rp 1.200.000", hotelStaff: "Rp 570.000" },
    { province: "Jawa Tengah & DIY", dailyAllowance: "Rp 420.000", hotelEselon2: "Rp 1.150.000", hotelStaff: "Rp 600.000" },
    { province: "Jawa Timur", dailyAllowance: "Rp 410.000", hotelEselon2: "Rp 1.250.000", hotelStaff: "Rp 660.000" },
    { province: "Bali", dailyAllowance: "Rp 480.000", hotelEselon2: "Rp 1.300.000", hotelStaff: "Rp 700.000" },
    { province: "Sulawesi Selatan", dailyAllowance: "Rp 430.000", hotelEselon2: "Rp 1.100.000", hotelStaff: "Rp 580.000" },
  ]);

  const [systemSettings, setSystemSettings] = useState({
    maxFileSize: "5",
    sessionTimeout: "60",
    twoFactorAuth: "Wajib untuk Admin & Bendahara",
    autoArchiveDays: "90",
    strictBudgetValidation: true,
  });

  const handleSave = () => {
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Standar Biaya (SBM) & Kebijakan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {saveAlert && (
          <div className="bg-[#DFF5F4] border border-[#12A9A5] text-[#0B7A77] p-4 rounded-[12px] flex items-center justify-between">
            <span className="font-bold">✓ Perubahan konfigurasi sistem berhasil disimpan dan diterapkan!</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("sbm")}
            className={`px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-colors cursor-pointer ${
              activeTab === "sbm"
                ? "bg-[#123B72] text-white"
                : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
            }`}
          >
            Standar Biaya Masukan (SBM)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("policy")}
            className={`px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-colors cursor-pointer ${
              activeTab === "policy"
                ? "bg-[#123B72] text-white"
                : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
            }`}
          >
            Alur Persetujuan & Batas Pagu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("system")}
            className={`px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-colors cursor-pointer ${
              activeTab === "system"
                ? "bg-[#123B72] text-white"
                : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
            }`}
          >
            Keamanan & Berkas
          </button>
        </div>

        {/* Tab 1: SBM */}
        {activeTab === "sbm" && (
          <Card>
            <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <CardTitle>Standar Biaya Masukan (SBM) PMK Resmi</CardTitle>
                <CardDescription>
                  Batas atas uang harian dan plafon penginapan hotel per wilayah tujuan dinas
                </CardDescription>
              </div>

              <CardAction>
                <Button variant="primary" size="sm" onClick={handleSave}>
                  Simpan Tarif SBM
                </Button>
              </CardAction>
            </CardHeader>

            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Provinsi / Wilayah</TableHead>
                  <TableHead>Uang Harian Standar</TableHead>
                  <TableHead>Plafon Hotel (Eselon II)</TableHead>
                  <TableHead>Plafon Hotel (Staf / Gol. III)</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sbmRates.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-semibold text-[#1E293B]">
                      {row.province}
                    </TableCell>
                    <TableCell className="font-medium text-[#123B72]">
                      {row.dailyAllowance}
                    </TableCell>
                    <TableCell className="text-[#1E293B]">
                      {row.hotelEselon2}
                    </TableCell>
                    <TableCell className="text-[#1E293B]">
                      {row.hotelStaff}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => alert(`Mengedit tarif SBM untuk wilayah ${row.province}...`)}
                        className="text-[#0066B3] hover:underline text-[12px]"
                      >
                        Ubah
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}

        {/* Tab 2: Workflow & Policy */}
        {activeTab === "policy" && (
          <Card>
            <CardHeader>
              <CardTitle>Kebijakan Alur Approval & Batas Pagu</CardTitle>
              <CardDescription>
                Aturan tingkat persetujuan dinas berdasarkan estimasi anggaran biaya
              </CardDescription>
            </CardHeader>

            <div className="space-y-4 pt-2">
              <div className="p-4 border border-[#E8EEF3] rounded-[12px] bg-[#F1F7FB]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-[14px] font-bold text-[#1E293B]">
                    Pengajuan &le; Rp 5.000.000
                  </h4>
                  <p className="text-[12px] text-[#64748B] mt-0.5">
                    Cukup persetujuan Atasan Langsung (Eselon III) &rarr; Langsung terbit SPPD
                  </p>
                </div>
                <Badge variant="success">Alur 2 Tingkat</Badge>
              </div>

              <div className="p-4 border border-[#E8EEF3] rounded-[12px] bg-[#F1F7FB]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-[14px] font-bold text-[#1E293B]">
                    Pengajuan &gt; Rp 5.000.000
                  </h4>
                  <p className="text-[12px] text-[#64748B] mt-0.5">
                    Memerlukan persetujuan Atasan Langsung & Kepala Dinas (Pengguna Anggaran)
                  </p>
                </div>
                <Badge variant="warning">Alur 3 Tingkat</Badge>
              </div>

              <div className="p-4 border border-[#E8EEF3] rounded-[12px] bg-[#F1F7FB]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-[14px] font-bold text-[#1E293B]">
                    Perjalanan Dinas Luar Negeri
                  </h4>
                  <p className="text-[12px] text-[#64748B] mt-0.5">
                    Wajib verifikasi Sekretariat Daerah & izin Kementerian Dalam Negeri
                  </p>
                </div>
                <Badge variant="info">Alur Khusus</Badge>
              </div>

              <div className="pt-4 flex justify-end">
                <Button variant="primary" size="md" onClick={handleSave}>
                  Simpan Kebijakan Approval
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Tab 3: Security & Files */}
        {activeTab === "system" && (
          <Card>
            <CardHeader>
              <CardTitle>Keamanan Sistem & Penyimpanan Berkas</CardTitle>
              <CardDescription>
                Parameter session keamanan, pembatasan upload, dan kebijakan audit
              </CardDescription>
            </CardHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <Input
                label="Batas Ukuran Upload Surat Tugas & LPJ (MB)"
                type="number"
                value={systemSettings.maxFileSize}
                onChange={(e) =>
                  setSystemSettings({ ...systemSettings, maxFileSize: e.target.value })
                }
              />

              <Input
                label="Batas Waktu Sesi Tidak Aktif (Menit)"
                type="number"
                value={systemSettings.sessionTimeout}
                onChange={(e) =>
                  setSystemSettings({ ...systemSettings, sessionTimeout: e.target.value })
                }
              />

              <Select
                label="Kebijakan Autentikasi Dua Faktor (2FA)"
                value={systemSettings.twoFactorAuth}
                onChange={(e) =>
                  setSystemSettings({ ...systemSettings, twoFactorAuth: e.target.value })
                }
                options={[
                  { value: "Wajib untuk Semua Pengguna", label: "Wajib untuk Semua Pengguna" },
                  { value: "Wajib untuk Admin & Bendahara", label: "Wajib untuk Admin & Bendahara" },
                  { value: "Opsional", label: "Opsional" },
                ]}
              />

              <Input
                label="Batas Waktu Auto-Arsip Dokumen SPPD Selesai (Hari)"
                type="number"
                value={systemSettings.autoArchiveDays}
                onChange={(e) =>
                  setSystemSettings({ ...systemSettings, autoArchiveDays: e.target.value })
                }
              />

              <div className="sm:col-span-2 pt-4 flex justify-end">
                <Button variant="primary" size="md" onClick={handleSave}>
                  Simpan Konfigurasi Keamanan
                </Button>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}

