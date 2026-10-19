"use client";

import { useState } from "react";
import SuperAdminHeader from "@/components/superadmin/SuperAdminHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Button,
} from "@/components/ui";

interface PermissionRow {
  id: string;
  label: string;
  pegawai: boolean;
  atasan: boolean;
  kabid: boolean;
  kadis: boolean;
  bendahara: boolean;
  admin: boolean;
  superAdmin: boolean;
}

const FIGMA_PERMISSIONS: PermissionRow[] = [
  {
    id: "p1",
    label: "Ajukan perjalanan dinas",
    pegawai: true,
    atasan: true,
    kabid: true,
    kadis: true,
    bendahara: true,
    admin: true,
    superAdmin: true,
  },
  {
    id: "p2",
    label: "Setujui pengajuan",
    pegawai: false,
    atasan: true,
    kabid: true,
    kadis: true,
    bendahara: false,
    admin: false,
    superAdmin: true,
  },
  {
    id: "p3",
    label: "Verifikasi laporan",
    pegawai: false,
    atasan: false,
    kabid: false,
    kadis: false,
    bendahara: true,
    admin: false,
    superAdmin: true,
  },
  {
    id: "p4",
    label: "Kelola SPPD digital",
    pegawai: false,
    atasan: false,
    kabid: false,
    kadis: false,
    bendahara: false,
    admin: true,
    superAdmin: true,
  },
  {
    id: "p5",
    label: "Kelola data pegawai & perjalanan",
    pegawai: false,
    atasan: false,
    kabid: false,
    kadis: false,
    bendahara: false,
    admin: true,
    superAdmin: true,
  },
  {
    id: "p6",
    label: "Monitoring perjalanan",
    pegawai: false,
    atasan: true,
    kabid: true,
    kadis: true,
    bendahara: true,
    admin: true,
    superAdmin: true,
  },
  {
    id: "p7",
    label: "Kelola pengguna & peran",
    pegawai: false,
    atasan: false,
    kabid: false,
    kadis: false,
    bendahara: false,
    admin: false,
    superAdmin: true,
  },
  {
    id: "p8",
    label: "Konfigurasi sistem",
    pegawai: false,
    atasan: false,
    kabid: false,
    kadis: false,
    bendahara: false,
    admin: false,
    superAdmin: true,
  },
];

type RoleKey = "pegawai" | "atasan" | "kabid" | "kadis" | "bendahara" | "admin" | "superAdmin";

export default function SuperAdminAksesPage() {
  const [permissions, setPermissions] = useState<PermissionRow[]>(FIGMA_PERMISSIONS);
  const [isSaved, setIsSaved] = useState(false);

  const togglePermission = (rowId: string, roleKey: RoleKey) => {
    setPermissions((prev) =>
      prev.map((row) =>
        row.id === rowId ? { ...row, [roleKey]: !row[roleKey] } : row
      )
    );
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    alert("Perubahan matriks role & hak akses berhasil disimpan ke sistem!");
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Role & Hak Akses" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col !items-start gap-1 mb-2">
            <CardTitle>Role & hak akses</CardTitle>
            <CardDescription>
              Atur kemampuan tiap peran dalam sistem Gov.Trip
            </CardDescription>
          </CardHeader>

          {/* Permission Matrix Table */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[800px] border-collapse text-[13px]">
              <thead>
                <tr className="border-b border-[#E8EEF3] text-[12px] text-[#64748B] font-medium">
                  <th className="py-3 px-3 text-left font-medium">Hak akses</th>
                  <th className="py-3 px-2 text-center font-medium">Pegawai</th>
                  <th className="py-3 px-2 text-center font-medium">Atasan</th>
                  <th className="py-3 px-2 text-center font-medium">Kabid</th>
                  <th className="py-3 px-2 text-center font-medium">Kadis</th>
                  <th className="py-3 px-2 text-center font-medium">Bendahara</th>
                  <th className="py-3 px-2 text-center font-medium">Admin</th>
                  <th className="py-3 px-2 text-center font-medium">Super Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EEF3]">
                {permissions.map((row) => (
                  <tr key={row.id} className="hover:bg-[#F1F7FB]/50 transition-colors">
                    <td className="py-3 px-3 font-medium text-[#1E293B]">
                      {row.label}
                    </td>

                    {(["pegawai", "atasan", "kabid", "kadis", "bendahara", "admin", "superAdmin"] as RoleKey[]).map(
                      (roleKey) => {
                        const checked = row[roleKey];
                        return (
                          <td key={roleKey} className="py-3 px-2 text-center">
                            <button
                              type="button"
                              onClick={() => togglePermission(row.id, roleKey)}
                              className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors mx-auto cursor-pointer ${
                                checked
                                  ? "bg-[#0066B3] border-[#0066B3] text-white"
                                  : "bg-white border-[#C9D8EC] hover:border-[#0066B3]"
                              }`}
                              aria-label={`Ubah izin ${row.label} untuk ${roleKey}`}
                            >
                              {checked && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </button>
                          </td>
                        );
                      }
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Button Simpan perubahan */}
          <div className="pt-6 mt-4 border-t border-[#E8EEF3] flex items-center justify-between">
            <span className="text-[12px] text-[#64748B]">
              {isSaved ? "✓ Perubahan telah tersimpan" : "Klik tombol simpan untuk memperbarui kebijakan akses"}
            </span>

            <Button
              className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold px-6 shadow-sm"
              onClick={handleSave}
            >
              Simpan perubahan
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

