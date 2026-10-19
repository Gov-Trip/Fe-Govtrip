"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
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

interface Employee {
  nip: string;
  name: string;
  unit: string;
  position: string;
  email: string;
  phone: string;
  status: "Aktif" | "Nonaktif";
  tripCount: number;
}

const INITIAL_EMPLOYEES: Employee[] = [
  {
    nip: "198804122011011002",
    name: "Liyana Agustin, S.AP",
    unit: "Bidang Perencanaan",
    position: "Analis Kebijakan Ahli Muda",
    email: "liyana.agustin@pemprov.go.id",
    phone: "0812-3456-7890",
    status: "Aktif",
    tripCount: 6,
  },
  {
    nip: "198506152009021004",
    name: "Bagas Wicaksono, S.E.",
    unit: "Bidang Keuangan & Aset",
    position: "Pranata Keuangan APBN",
    email: "bagas.wicaksono@pemprov.go.id",
    phone: "0813-8899-1122",
    status: "Aktif",
    tripCount: 4,
  },
  {
    nip: "199201202014032001",
    name: "Nadia Rahmawati, S.Tr.IP",
    unit: "Sekretariat Daerah",
    position: "Penyusun Program Anggaran",
    email: "nadia.rahma@pemprov.go.id",
    phone: "0819-2233-4455",
    status: "Aktif",
    tripCount: 3,
  },
  {
    nip: "198309112006041003",
    name: "Rudi Hartono, M.Si.",
    unit: "Bidang Perencanaan",
    position: "Perencana Ahli Madya",
    email: "rudi.hartono@pemprov.go.id",
    phone: "0811-9988-7766",
    status: "Aktif",
    tripCount: 5,
  },
  {
    nip: "199003052012121001",
    name: "Hendra Kurniawan, S.E.",
    unit: "Inspektorat",
    position: "Auditor Ahli Muda",
    email: "hendra.k@pemprov.go.id",
    phone: "0852-1144-7788",
    status: "Aktif",
    tripCount: 2,
  },
  {
    nip: "199408222018012005",
    name: "Ocha Rosdiana, S.STP",
    unit: "Bidang Perencanaan",
    position: "Staf Administrasi Umum",
    email: "ocha.rosdiana@pemprov.go.id",
    phone: "0821-6677-8899",
    status: "Aktif",
    tripCount: 8,
  },
  {
    nip: "198711182010012003",
    name: "Sari Wulandari, S.Pd.",
    unit: "Dinas Pendidikan",
    position: "Pengelola Data Kebijakan",
    email: "sari.wulandari@pemprov.go.id",
    phone: "0877-3344-5566",
    status: "Aktif",
    tripCount: 1,
  },
];

export default function AdminPegawaiPage() {
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [search, setSearch] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New employee form state
  const [newNip, setNewNip] = useState("");
  const [newName, setNewName] = useState("");
  const [newUnit, setNewUnit] = useState("Bidang Perencanaan");
  const [newPosition, setNewPosition] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNip || !newName || !newPosition) {
      alert("Harap lengkapi data NIP, Nama, dan Jabatan.");
      return;
    }

    const newEmp: Employee = {
      nip: newNip,
      name: newName,
      unit: newUnit,
      position: newPosition,
      email: newEmail || `${newName.toLowerCase().replace(/\s+/g, ".")}@pemprov.go.id`,
      phone: newPhone || "0812-0000-0000",
      status: "Aktif",
      tripCount: 0,
    };

    setEmployees([newEmp, ...employees]);
    setIsAddModalOpen(false);
    setNewNip("");
    setNewName("");
    setNewPosition("");
    setNewEmail("");
    setNewPhone("");
    alert(`Pegawai ${newName} berhasil ditambahkan ke database!`);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.unit.toLowerCase().includes(search.toLowerCase()) ||
      emp.position.toLowerCase().includes(search.toLowerCase()) ||
      emp.nip.includes(search);

    const matchUnit = selectedUnit === "all" || emp.unit === selectedUnit;

    return matchSearch && matchUnit;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Data Pegawai" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <CardTitle>Data Pegawai Instansi</CardTitle>
              <CardDescription>
                {employees.length} pegawai terdaftar dalam sistem Gov.Trip
              </CardDescription>
            </div>

            <CardAction className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-[260px]">
                <Input
                  placeholder="Cari nama, NIP, atau jabatan..."
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
                className="bg-[#0066B3] hover:bg-[#005596] text-white text-[13px] font-semibold whitespace-nowrap w-full sm:w-auto flex items-center gap-1.5 shadow-sm"
                onClick={() => setIsAddModalOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Tambah Pegawai
              </Button>
            </CardAction>
          </CardHeader>

          {/* Unit Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pb-3 border-b border-[#E8EEF3]">
            <button
              onClick={() => setSelectedUnit("all")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                selectedUnit === "all"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Semua Unit ({employees.length})
            </button>
            <button
              onClick={() => setSelectedUnit("Bidang Perencanaan")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                selectedUnit === "Bidang Perencanaan"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Bidang Perencanaan
            </button>
            <button
              onClick={() => setSelectedUnit("Bidang Keuangan & Aset")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                selectedUnit === "Bidang Keuangan & Aset"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Bidang Keuangan & Aset
            </button>
            <button
              onClick={() => setSelectedUnit("Sekretariat Daerah")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                selectedUnit === "Sekretariat Daerah"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Sekretariat Daerah
            </button>
            <button
              onClick={() => setSelectedUnit("Inspektorat")}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                selectedUnit === "Inspektorat"
                  ? "bg-[#123B72] text-white"
                  : "bg-[#F1F7FB] text-[#64748B] hover:text-[#123B72]"
              }`}
            >
              Inspektorat
            </button>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Nama Pegawai</TableHead>
                <TableHead>Unit Kerja</TableHead>
                <TableHead>Jabatan</TableHead>
                <TableHead>Total Perjalanan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((emp) => (
                <TableRow key={emp.nip}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#1E293B]">
                        {emp.name}
                      </span>
                      <span className="text-[11.5px] text-[#64748B] font-mono">
                        NIP. {emp.nip}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-[#1E293B]">
                    {emp.unit}
                  </TableCell>
                  <TableCell className="text-[#64748B]">
                    {emp.position}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-medium bg-[#E3F0FA] text-[#0066B3]">
                      {emp.tripCount} dinas
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge status={emp.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedEmployee(emp)}
                      className="text-[#0066B3] hover:underline"
                    >
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredEmployees.length === 0 && (
            <div className="p-8 text-center text-[#64748B] text-[13px]">
              Tidak ada data pegawai yang sesuai dengan kata kunci pencarian.
            </div>
          )}
        </Card>
      </main>

      {/* Modal Detail Pegawai */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#123B72] text-white flex items-center justify-center text-[18px] font-bold">
                  {selectedEmployee.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#123B72]">
                    {selectedEmployee.name}
                  </h3>
                  <p className="text-[12px] text-[#64748B] font-mono">
                    NIP. {selectedEmployee.nip}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-[13px]">
              <div className="grid grid-cols-2 gap-3 bg-[#F1F7FB] p-3.5 rounded-xl border border-[#E8EEF3]">
                <div>
                  <span className="text-[11px] text-[#64748B] block">Unit Kerja</span>
                  <span className="font-semibold text-[#1E293B]">{selectedEmployee.unit}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Jabatan Dinas</span>
                  <span className="font-semibold text-[#1E293B]">{selectedEmployee.position}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">Email Kedinasan</span>
                  <span className="font-semibold text-[#1E293B] break-all">{selectedEmployee.email}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#64748B] block">No. Telepon / WhatsApp</span>
                  <span className="font-semibold text-[#1E293B]">{selectedEmployee.phone}</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-[#E8EEF3] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[12px] font-semibold text-[#1E293B] block">
                    Riwayat Perjalanan Tahun Ini
                  </span>
                  <span className="text-[11px] text-[#64748B]">
                    Telah menyelesaikan {selectedEmployee.tripCount} penugasan dinas
                  </span>
                </div>
                <Badge variant="success">LPJ Tertib</Badge>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedEmployee(null)}
              >
                Tutup
              </Button>
              <Button
                className="bg-[#0066B3] text-white"
                onClick={() => {
                  alert(`Mengalihkan ke riwayat perjalanan ${selectedEmployee.name}...`);
                  setSelectedEmployee(null);
                }}
              >
                Lihat Semua Perjalanan
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tambah Pegawai */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#E8EEF3]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3]">
              <div>
                <h3 className="text-[16px] font-bold text-[#123B72]">
                  Tambah Pegawai Baru
                </h3>
                <p className="text-[12px] text-[#64748B]">
                  Daftarkan ASN ke dalam basis data sistem Gov.Trip
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#64748B] hover:text-[#123B72] text-[18px] p-1 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="mt-4 space-y-3.5">
              <Input
                label="Nomor Induk Pegawai (NIP)"
                placeholder="Contoh: 199308242016022001"
                value={newNip}
                onChange={(e) => setNewNip(e.target.value)}
                required
              />

              <Input
                label="Nama Lengkap & Gelar"
                placeholder="Contoh: Ocha Rosdiana, S.STP"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />

              <Select
                label="Unit Kerja / Bidang"
                value={newUnit}
                onChange={(e) => setNewUnit(e.target.value)}
                options={[
                  { label: "Bidang Perencanaan", value: "Bidang Perencanaan" },
                  { label: "Bidang Keuangan & Aset", value: "Bidang Keuangan & Aset" },
                  { label: "Sekretariat Daerah", value: "Sekretariat Daerah" },
                  { label: "Inspektorat", value: "Inspektorat" },
                  { label: "Dinas Pendidikan", value: "Dinas Pendidikan" },
                ]}
              />

              <Input
                label="Jabatan Dinas"
                placeholder="Contoh: Analis Kebijakan Ahli Muda"
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  label="Email Dinas (Opsional)"
                  type="email"
                  placeholder="nama@pemprov.go.id"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <Input
                  label="Nomor HP / WhatsApp"
                  placeholder="0812-xxxx-xxxx"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
              </div>

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
                  Simpan Pegawai
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
