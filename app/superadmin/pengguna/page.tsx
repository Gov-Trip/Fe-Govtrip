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

export default function SuperAdminPenggunaPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("Semua");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const [newUser, setNewUser] = useState({
    name: "",
    nip: "",
    email: "",
    unit: "Bidang Perencanaan",
    role: "Pegawai",
  });

  const [users, setUsers] = useState([
    {
      nip: "198804122011011002",
      name: "Liyana S.",
      email: "liyana@instansi.go.id",
      unit: "Bidang Perencanaan",
      role: "Pegawai",
      lastLogin: "Hari ini, 08:30 WIB",
      status: "Aktif",
    },
    {
      nip: "198506152009021004",
      name: "Bagas Pratama",
      email: "bagas@instansi.go.id",
      unit: "Bidang Keuangan & Aset",
      role: "Pegawai",
      lastLogin: "Hari ini, 07:45 WIB",
      status: "Aktif",
    },
    {
      nip: "198309112006041003",
      name: "Rudi Hermawan",
      email: "rudi@instansi.go.id",
      unit: "Bidang Perencanaan",
      role: "Pegawai",
      lastLogin: "Kemarin, 14:12 WIB",
      status: "Aktif",
    },
    {
      nip: "197905102003121002",
      name: "Bpk. Hendra Pratama",
      email: "hendra@instansi.go.id",
      unit: "Bidang Perencanaan",
      role: "Atasan",
      lastLogin: "Hari ini, 09:48 WIB",
      status: "Aktif",
    },
    {
      nip: "198203142005012003",
      name: "Ratna Sari, S.E.",
      email: "ratna.bendahara@instansi.go.id",
      unit: "Bidang Keuangan & Aset",
      role: "Bendahara",
      lastLogin: "Hari ini, 10:32 WIB",
      status: "Aktif",
    },
    {
      nip: "198601012008011001",
      name: "Admin Tata Usaha",
      email: "admin.tu@instansi.go.id",
      unit: "Sekretariat Daerah",
      role: "Admin",
      lastLogin: "Hari ini, 09:15 WIB",
      status: "Aktif",
    },
    {
      nip: "199408222018012005",
      name: "Ocha (Alika Putri)",
      email: "ocha@instansi.go.id",
      unit: "Bidang Perencanaan",
      role: "Pegawai",
      lastLogin: "3 hari lalu",
      status: "Aktif",
    },
  ]);

  const handleToggleStatus = (nip: string, currentStatus: string) => {
    const updatedStatus = currentStatus === "Aktif" ? "Nonaktif" : "Aktif";
    setUsers((prev) =>
      prev.map((u) => (u.nip === nip ? { ...u, status: updatedStatus } : u))
    );
    setAlertMessage(`Status akun NIP ${nip} berhasil diubah menjadi ${updatedStatus}.`);
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.nip || !newUser.email) {
      alert("Harap lengkapi semua kolom isian pengguna.");
      return;
    }

    setUsers((prev) => [
      {
        nip: newUser.nip,
        name: newUser.name,
        email: newUser.email,
        unit: newUser.unit,
        role: newUser.role,
        lastLogin: "Belum pernah",
        status: "Aktif",
      },
      ...prev,
    ]);

    setAlertMessage(`Pengguna baru ${newUser.name} (${newUser.role}) berhasil ditambahkan ke sistem.`);
    setIsModalOpen(false);
    setNewUser({
      name: "",
      nip: "",
      email: "",
      unit: "Bidang Perencanaan",
      role: "Pegawai",
    });
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.nip.includes(search) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.unit.toLowerCase().includes(search.toLowerCase());

    if (roleFilter === "Semua") return matchesSearch;
    return matchesSearch && u.role === roleFilter;
  });

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Kelola Pengguna & Hak Akses" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        {alertMessage && (
          <div className="bg-[#DFF5F4] border border-[#12A9A5] text-[#0B7A77] p-4 rounded-[12px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">✓ Berhasil!</span>
              <span>{alertMessage}</span>
            </div>
            <button
              onClick={() => setAlertMessage(null)}
              className="text-[#0B7A77] font-semibold text-[13px] hover:underline"
            >
              Tutup
            </button>
          </div>
        )}

        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-5">
            <div>
              <CardTitle>Daftar Akun Pengguna Gov.Trip</CardTitle>
              <CardDescription>
                Manajemen hak akses pengguna seluruh unit kerja dan peran
              </CardDescription>
            </div>

            <CardAction className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-[260px]">
                <Input
                  placeholder="Cari nama, NIP, email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  }
                />
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto shrink-0"
              >
                + Tambah Pengguna
              </Button>
            </CardAction>
          </CardHeader>

          {/* Role Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-[#E8EEF3] pb-3 mb-4 overflow-x-auto">
            {["Semua", "Admin", "Pegawai", "Atasan", "Bendahara"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setRoleFilter(tab)}
                className={`px-3 py-1.5 rounded-[8px] text-[12.5px] font-medium transition-colors cursor-pointer shrink-0 ${
                  roleFilter === tab
                    ? "bg-[#123B72] text-white"
                    : "text-[#64748B] hover:bg-[#F1F7FB] hover:text-[#123B72]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nama & NIP</TableHead>
                <TableHead>Email Dinas</TableHead>
                <TableHead>Unit Kerja</TableHead>
                <TableHead>Peran</TableHead>
                <TableHead>Terakhir Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((u) => (
                <TableRow key={u.nip}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B]">
                        {u.name}
                      </span>
                      <span className="text-[11.5px] text-[#64748B] font-mono">
                        NIP. {u.nip}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#64748B] text-[12px]">
                    {u.email}
                  </TableCell>
                  <TableCell className="font-medium text-[#1E293B]">
                    {u.unit}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        u.role === "Admin"
                          ? "bg-[#123B72] text-white"
                          : u.role === "Atasan"
                          ? "bg-[#DFF5F4] text-[#0B7A77]"
                          : u.role === "Bendahara"
                          ? "bg-[#FFF1D1] text-[#8A5A00]"
                          : "bg-[#E3F0FA] text-[#0066B3]"
                      }`}
                    >
                      {u.role}
                    </span>
                  </TableCell>
                  <TableCell className="text-[11.5px] text-[#64748B]">
                    {u.lastLogin}
                  </TableCell>
                  <TableCell>
                    <Badge variant={u.status === "Aktif" ? "success" : "neutral"}>
                      {u.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          alert(`Mereset kata sandi akun ${u.name} (NIP. ${u.nip}) menjadi password standar sementara.`)
                        }
                        className="text-[#0066B3] hover:underline text-[12px]"
                      >
                        Reset
                      </Button>
                      <Button
                        variant={u.status === "Aktif" ? "danger-outline" : "secondary"}
                        size="sm"
                        onClick={() => handleToggleStatus(u.nip, u.status)}
                      >
                        {u.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Modal Tambah Pengguna */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-[16px] max-w-[500px] w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3]">
                <h3 className="text-[#123B72] text-[16px] font-bold">
                  Tambah Pengguna Baru
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#64748B] hover:text-[#1E293B]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateUser} className="space-y-4 pt-4">
                <Input
                  label="Nama Lengkap & Gelar"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Contoh: Dian Utami, S.AP."
                  required
                />

                <Input
                  label="Nomor Induk Pegawai (NIP)"
                  value={newUser.nip}
                  onChange={(e) => setNewUser({ ...newUser, nip: e.target.value })}
                  placeholder="18 digit NIP resmi"
                  required
                />

                <Input
                  label="Email Dinas"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="nama@instansi.go.id"
                  required
                />

                <Select
                  label="Unit Kerja / SKPD"
                  value={newUser.unit}
                  onChange={(e) => setNewUser({ ...newUser, unit: e.target.value })}
                  options={[
                    { value: "Bidang Perencanaan", label: "Bidang Perencanaan" },
                    { value: "Bidang Keuangan & Aset", label: "Bidang Keuangan & Aset" },
                    { value: "Sekretariat Daerah", label: "Sekretariat Daerah" },
                    { value: "Inspektorat Daerah", label: "Inspektorat Daerah" },
                    { value: "Dinas Pendidikan", label: "Dinas Pendidikan" },
                  ]}
                />

                <Select
                  label="Peran Akun (Role)"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  options={[
                    { value: "Pegawai", label: "Pegawai Pelaksana" },
                    { value: "Atasan", label: "Atasan / Pejabat Penandatangan" },
                    { value: "Bendahara", label: "Bendahara Pengeluaran" },
                    { value: "Admin", label: "Administrator Instansi" },
                  ]}
                />

                <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-[#E8EEF3]">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Batal
                  </Button>
                  <Button type="submit" variant="primary">
                    Simpan Pengguna
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

