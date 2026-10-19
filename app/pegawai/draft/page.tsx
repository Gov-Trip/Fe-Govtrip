"use client";

import { useState } from "react";
import Link from "next/link";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui";

export default function DraftPengajuanPage() {
  const [drafts, setDrafts] = useState([
    {
      id: "1",
      destination: "Medan",
      dates: "3–5 Nov 2026",
      lastModified: "Kemarin",
      progress: "70%",
    },
    {
      id: "2",
      destination: "Denpasar",
      dates: "Belum diisi",
      lastModified: "5 hari lalu",
      progress: "30%",
    },
  ]);

  const handleDelete = (id: string, dest: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus draft perjalanan ke ${dest}?`)) {
      setDrafts((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Draft Pengajuan" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <Card>
          <CardHeader className="flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-4 mb-6">
            <div>
              <CardTitle>Draft pengajuan</CardTitle>
              <CardDescription>
                Daftar pengajuan perjalanan yang belum dikirim
              </CardDescription>
            </div>

            <CardAction>
              <Button
                variant="primary"
                size="sm"
                href="/pegawai/pengajuan"
              >
                + Buat Baru
              </Button>
            </CardAction>
          </CardHeader>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Terakhir Diubah</TableHead>
                <TableHead>Kelengkapan</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drafts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="py-8 text-center text-[#64748B]">
                    Tidak ada draft pengajuan tersimpan.
                  </TableCell>
                </TableRow>
              ) : (
                drafts.map((draft) => (
                  <TableRow key={draft.id}>
                    <TableCell className="font-semibold">{draft.destination}</TableCell>
                    <TableCell>{draft.dates}</TableCell>
                    <TableCell className="text-[#64748B]">{draft.lastModified}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#1E293B] text-[12px]">
                          {draft.progress}
                        </span>
                        <div className="w-20 h-1.5 bg-[#E8EEF3] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#0066B3] rounded-full"
                            style={{ width: draft.progress }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          href="/pegawai/pengajuan"
                        >
                          Lanjutkan
                        </Button>
                        <Button
                          variant="danger-outline"
                          size="sm"
                          onClick={() => handleDelete(draft.id, draft.destination)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}
