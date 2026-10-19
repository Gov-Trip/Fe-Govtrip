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
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function SuperAdminUnitPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const [newUnit, setNewUnit] = useState({
    code: "",
    name: "",
    leader: "",
    staffCount: "10",
    budget: "Rp 50.000.000",
  });

  const [units, setUsers] = useState([
    {
      code: "UK-01",
      name: "Bidang Perencanaan",
      leader: "Bpk. Hendra Pratama, M.Si.",
      staffCount: 34,
      budget: "Rp 120.000.000",
      status: "Terintegrasi",
    },
    {
      code: "UK-02",
      name: "Bidang Keuangan & Aset",
      leader: "Ibu Ratna Sari, S.E.",
      staffCount: 28,
      budget: "Rp 90.000.000",
      status: "Terintegrasi",
    },
    {
      code: "UK-03",
      name: "Sekretariat Daerah",
      leader: "Drs. H. Mulyadi, M.M.",
      staffCount: 42,
      budget: "Rp 80.000.000",
      status: "Terintegrasi",
    },
    {
      code: "UK-04",
      name: "Inspektorat Daerah",
      leader: "Ir. Bambang Sugiarto",
      staffCount: 18,
      budget: "Rp 60.000.000",
      status: "Terintegrasi",
    },
    {
      code: "UK-05",
      name: "Dinas Pendidikan & Kebudayaan",
      leader: "Dr. Sri Wahyuni, M.Pd.",
      staffCount: 20,
      budget: "Rp 75.000.000",
      status: "Terintegrasi",
    },
  ]);

  const handleCreateUnit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUnit.code || !newUnit.name || !newUnit.leader) {
      alert("Harap lengkapi semua kolom data unit kerja.");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        code: newUnit.code,
        name: newUnit.name,
        leader: newUnit.leader,
        staffCount: parseInt(newUnit.staffCount) || 0,
        budget: newUnit.budget,
        status: "Terintegrasi",
      },
    ]);

    setAlertMessage(`Unit kerja baru ${newUnit.name} berhasil ditambahkan.`);
    setIsModalOpen(false);
    setNewUnit({
      code: "",
      name: "",
      leader: "",
      staffCount: "10",
      budget: "Rp 50.000.000",
    });
  };

  const filteredUnits = units.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.code.toLowerCase().includes(search.toLowerCase()) ||
      u.leader.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col">
      <SuperAdminHeader title="Struktur Unit Kerja & SKPD" />

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
              <CardTitle>Unit Organisasi & SKPD</CardTitle>
              <CardDescription>
                Daftar unit kerja dinas, penanggung jawab tanda tangan, dan alokasi pagu
              </CardDescription>
            </div>

            <CardAction className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-[260px]">
                <Input
                  placeholder="Cari unit atau pejabat..."
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
                + Tambah Unit
              </Button>
            </CardAction>
          </CardHeader>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Kode Unit</TableHead>
                <TableHead>Nama Unit Kerja / SKPD</TableHead>
                <TableHead>Kepala Unit / Penanggung Jawab</TableHead>
                <TableHead>Personel</TableHead>
                <TableHead>Pagu Anggaran</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUnits.map((u) => (
                <TableRow key={u.code}>
                  <TableCell className="font-mono font-semibold text-[12.5px] text-[#123B72]">
                    {u.code}
                  </TableCell>
                  <TableCell className="font-semibold text-[#1E293B]">
                    {u.name}
                  </TableCell>
                  <TableCell className="text-[#64748B]">
                    {u.leader}
                  </TableCell>
                  <TableCell className="font-medium text-[#1E293B]">
                    {u.staffCount} pegawai
                  </TableCell>
                  <TableCell className="font-semibold text-[#0066B3]">
                    {u.budget}
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">{u.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => alert(`Mengedit konfigurasi unit kerja ${u.name}...`)}
                      className="text-[#0066B3] hover:underline text-[12px]"
                    >
                      Konfigurasi
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Modal Tambah Unit */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-[16px] max-w-[480px] w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EEF3]">
                <h3 className="text-[#123B72] text-[16px] font-bold">
                  Tambah Unit Kerja Baru
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#64748B] hover:text-[#1E293B]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateUnit} className="space-y-4 pt-4">
                <Input
                  label="Kode Unit"
                  value={newUnit.code}
                  onChange={(e) => setNewUnit({ ...newUnit, code: e.target.value })}
                  placeholder="Contoh: UK-06"
                  required
                />

                <Input
                  label="Nama Unit Kerja / SKPD"
                  value={newUnit.name}
                  onChange={(e) => setNewUnit({ ...newUnit, name: e.target.value })}
                  placeholder="Contoh: Badan Penanggulangan Bencana"
                  required
                />

                <Input
                  label="Kepala Unit / Penanggung Jawab"
                  value={newUnit.leader}
                  onChange={(e) => setNewUnit({ ...newUnit, leader: e.target.value })}
                  placeholder="Nama & Gelar Pejabat"
                  required
                />

                <Input
                  label="Alokasi Pagu Anggaran (Rp)"
                  value={newUnit.budget}
                  onChange={(e) => setNewUnit({ ...newUnit, budget: e.target.value })}
                  placeholder="Rp 60.000.000"
                  required
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
                    Simpan Unit Kerja
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

