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
  Button,
  Select,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

interface UserAccount {
  id: string;
  name: string;
  role: "Pegawai" | "Atasan" | "Kepala Bidang" | "Kepala Dinas" | "Bendahara" | "Admin" | "Super Admin";
  unit: string;
  active: boolean;
}

const FIGMA_USERS: UserAccount[] = [
  {
    id: "usr-1",
    name: "Liyana",
    role: "Pegawai",
    unit: "Bidang Perencanaan",
    active: true,
  },
  {
    id: "usr-2",
    name: "Dias",
    role: "Atasan",
    unit: "Bidang Perencanaan",
    active: true,
  },
  {
    id: "usr-3",
    name: "Kepala Bidang Perencanaan",
    role: "Kepala Bidang",
    unit: "Bidang Perencanaan",
    active: true,
  },
  {
    id: "usr-4",
    name: "Kepala Dinas",
    role: "Kepala Dinas",
    unit: "Pimpinan",
    active: true,
  },
  {
    id: "usr-5",
    name: "Bendahara Pengeluaran",
    role: "Bendahara",
    unit: "Sekretariat",
    active: true,
  },
  {
    id: "usr-6",
    name: "Rudi",
    role: "Pegawai",
    unit: "Bidang Perencanaan",
    active: true,
  },
  {
    id: "usr-7",
    name: "Hendra",
    role: "Pegawai",
    unit: "Bidang Program",
    active: true,
  },
];

export default function SuperAdminPenggunaPage() {
  const [users, setUsers] = useState<UserAccount[]>(FIGMA_USERS);
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState<UserAccount["role"]>("Pegawai");
  const [newUnit, setNewUnit] = useState("Bidang Perencanaan");

  const toggleUserActive = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u))
    );
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newUser: UserAccount = {
      id: `usr-${Date.now()}`,
      name: newName,
      role: newRole,
      unit: newUnit,
      active: true,
    };

    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    setNewName("");
    alert(`Pengguna "${newName}" berhasil ditambahkan!`);
  };

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()) ||
      u.unit.toLowerCase().includes(search.toLowerCase());

    return matchSearch;
  });

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Manajemen Pengguna" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <CardTitle>Manajemen pengguna</CardTitle>
              <CardDescription>
                Kelola status aktif dan pembagian peran pengguna sistem Gov.Trip
              </CardDescription>
            </div>

            <CardAction className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-[280px]">
                <Input
                  placeholder="Cari nama atau peran"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#757575"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  }
                />
              </div>

              <Button
                className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold whitespace-nowrap shadow-sm"
                onClick={() => setIsAddModalOpen(true)}
              >
                + Tambah Pengguna
              </Button>
            </CardAction>
          </CardHeader>

          {/* Table per Figma Screen 2 */}
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nama</TableHead>
                <TableHead>Peran</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead className="text-right">Aktif</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-[#F1F7FB]/50 transition-colors">
                  <TableCell className="font-semibold text-[#1E293B]">
                    {user.name}
                  </TableCell>

                  <TableCell>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-[#E3F0FA] text-[#0066B3]">
                      {user.role}
                    </span>
                  </TableCell>

                  <TableCell className="text-[#64748B] font-medium">
                    {user.unit}
                  </TableCell>

                  <TableCell className="text-right">
                    <button
                      type="button"
                      onClick={() => toggleUserActive(user.id)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        user.active ? "bg-[#0066B3]" : "bg-slate-300"
                      }`}
                      aria-label={`Ubah status aktif ${user.name}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          user.active ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredUsers.length === 0 && (
            <div className="p-8 text-center text-[#64748B] text-[13px]">
              Tidak ada pengguna yang sesuai dengan pencarian.
            </div>
          )}
        </Card>
      </main>

      {/* Modal Tambah Pengguna */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <h3 className="text-[16px] font-bold text-[#123B72]">
                Tambah Pengguna Baru
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddUser} className="mt-4 space-y-4">
              <Input
                label="Nama Pengguna"
                placeholder="Masukkan nama pegawai"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />

              <Select
                label="Peran Akun"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value as UserAccount["role"])}
                options={[
                  { label: "Pegawai", value: "Pegawai" },
                  { label: "Atasan", value: "Atasan" },
                  { label: "Kepala Bidang", value: "Kepala Bidang" },
                  { label: "Kepala Dinas", value: "Kepala Dinas" },
                  { label: "Bendahara", value: "Bendahara" },
                  { label: "Admin", value: "Admin" },
                  { label: "Super Admin", value: "Super Admin" },
                ]}
              />

              <Select
                label="Unit Kerja"
                value={newUnit}
                onChange={(e) => setNewUnit(e.target.value)}
                options={[
                  { label: "Bidang Perencanaan", value: "Bidang Perencanaan" },
                  { label: "Bidang Program", value: "Bidang Program" },
                  { label: "Sekretariat", value: "Sekretariat" },
                  { label: "Pimpinan", value: "Pimpinan" },
                ]}
              />

              <div className="flex justify-end gap-2 pt-3 border-t border-[#E8EEF3]">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-[#0066B3] text-white"
                >
                  Simpan Pengguna
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
