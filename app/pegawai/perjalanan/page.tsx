"use client";

import { useState } from "react";
import PegawaiHeader from "@/components/pegawai/PegawaiHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Button,
} from "@/components/ui";

export default function PerjalananSayaPage() {
  const [selectedId, setSelectedId] = useState("1");

  const trips = [
    {
      id: "1",
      number: "PD-2026/087",
      destination: "Yogyakarta",
      dates: "21–23 Sep 2026",
      status: "Berjalan",
      transport: "Kereta api",
      purpose: "Sosialisasi regulasi perjalanan dinas bersama kementerian terkait.",
      timeline: [
        {
          title: "Pengajuan diajukan",
          time: "14 Sep 2026 · 09.12",
          completed: true,
        },
        {
          title: "Disetujui Atasan",
          time: "14 Sep 2026 · 10.40",
          completed: true,
        },
        {
          title: "Disetujui Kepala Bidang",
          time: "15 Sep 2026 · 13.20",
          completed: true,
        },
        {
          title: "SPPD diterbitkan",
          time: "20 Sep 2026 · 11.00",
          completed: true,
        },
        {
          title: "Sedang berjalan",
          time: "21–23 Sep 2026",
          completed: true,
          current: true,
        },
      ],
    },
    {
      id: "2",
      number: "PD-2026/091",
      destination: "Bandung",
      dates: "6–8 Okt 2026",
      status: "Menunggu",
      transport: "Kereta api",
      purpose: "Rapat koordinasi program regional bersama dinas terkait.",
      timeline: [
        {
          title: "Pengajuan diajukan",
          time: "22 Sep 2026 · 08.30",
          completed: true,
        },
        {
          title: "Disetujui Atasan",
          time: "22 Sep 2026 · 11.15",
          completed: true,
        },
        {
          title: "Menunggu Kepala Bidang",
          time: "Sedang diproses",
          completed: false,
          current: true,
        },
        {
          title: "Penerbitan SPPD",
          time: "Menunggu persetujuan",
          completed: false,
        },
      ],
    },
    {
      id: "3",
      number: "PD-2026/079",
      destination: "Makassar",
      dates: "14–16 Sep 2026",
      status: "Selesai",
      transport: "Pesawat",
      purpose: "Monitoring evaluasi proyek strategis wilayah timur.",
      timeline: [
        {
          title: "Pengajuan diajukan",
          time: "10 Sep 2026",
          completed: true,
        },
        {
          title: "Disetujui Atasan & Kepala Bidang",
          time: "11 Sep 2026",
          completed: true,
        },
        {
          title: "SPPD Diterbitkan",
          time: "12 Sep 2026",
          completed: true,
        },
        {
          title: "Perjalanan Selesai",
          time: "16 Sep 2026",
          completed: true,
        },
        {
          title: "Perlu Unggah LPJ",
          time: "Batas 23 Sep 2026",
          completed: false,
          current: true,
        },
      ],
    },
  ];

  const currentTrip = trips.find((t) => t.id === selectedId) || trips[0];

  return (
    <div className="flex-1 flex flex-col">
      <PegawaiHeader title="Perjalanan Saya" />

      <main className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: List of trips (col-span-5) */}
          <div className="lg:col-span-5">
            <Card>
              <CardHeader className="flex-col !items-start gap-1">
                <CardTitle>Perjalanan saya</CardTitle>
                <CardDescription>Riwayat dan perjalanan aktif</CardDescription>
              </CardHeader>

              <div className="flex flex-col gap-3">
                {trips.map((trip) => {
                  const isSelected = trip.id === selectedId;
                  return (
                    <div
                      key={trip.id}
                      onClick={() => setSelectedId(trip.id)}
                      className={`p-4 rounded-[12px] border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#E3F0FA]/40 border-[#0066B3] shadow-xs"
                          : "bg-white border-[#E8EEF3] hover:border-[#C9D8EC]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[14px] text-[#1E293B]">
                          {trip.destination}
                        </span>
                        <Badge status={trip.status} />
                      </div>
                      <span className="text-[12px] text-[#64748B]">
                        {trip.number} · {trip.dates}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right Column: Selected Trip Details & Timeline (col-span-7) */}
          <div className="lg:col-span-7">
            <Card>
              {/* Header Detail */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8EEF3] gap-3">
                <div>
                  <h3 className="text-[#123B72] text-[18px] font-bold leading-tight">
                    {currentTrip.destination}
                  </h3>
                  <p className="text-[#64748B] text-[12.5px] mt-1">
                    {currentTrip.number} · {currentTrip.dates}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    href="/pegawai/sppd"
                  >
                    Lihat SPPD
                  </Button>
                  {currentTrip.status === "Selesai" && (
                    <Button
                      variant="warning"
                      size="sm"
                      href="/pegawai/lpj"
                    >
                      Unggah LPJ
                    </Button>
                  )}
                </div>
              </div>

              {/* Overview Detail */}
              <div className="py-4 border-b border-[#E8EEF3] text-[13px] space-y-2">
                <div className="flex items-start">
                  <span className="w-32 text-[#64748B] shrink-0">Transportasi:</span>
                  <span className="text-[#1E293B] font-medium">{currentTrip.transport}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-32 text-[#64748B] shrink-0">Maksud kegiatan:</span>
                  <span className="text-[#1E293B]">{currentTrip.purpose}</span>
                </div>
              </div>

              {/* Timeline Events */}
              <div className="pt-5">
                <h4 className="text-[14px] font-semibold text-[#123B72] mb-4">
                  Alur Riwayat Perjalanan
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8EEF3]">
                  {currentTrip.timeline.map((event, idx) => (
                    <div key={idx} className="relative">
                      {/* Dot */}
                      <div
                        className={`absolute -left-6 top-1 w-4 h-4 rounded-full border-2 ${
                          event.current
                            ? "bg-[#F5A000] border-[#F5A000] ring-4 ring-[#FFF1D1]"
                            : event.completed
                            ? "bg-[#0066B3] border-[#0066B3]"
                            : "bg-white border-[#C9D8EC]"
                        }`}
                      />

                      <div className="flex flex-col">
                        <span
                          className={`text-[13.5px] font-medium ${
                            event.current
                              ? "text-[#123B72] font-semibold"
                              : event.completed
                              ? "text-[#1E293B]"
                              : "text-[#64748B]"
                          }`}
                        >
                          {event.title}
                        </span>
                        <span className="text-[12px] text-[#64748B] mt-0.5">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
