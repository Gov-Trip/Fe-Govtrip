"use client";

import AppSidebar from "@/components/layout/AppSidebar";

interface PegawaiSidebarProps {
  onCloseMobile?: () => void;
}

export default function PegawaiSidebar({ onCloseMobile }: PegawaiSidebarProps) {
  return <AppSidebar role="Pegawai" onCloseMobile={onCloseMobile} />;
}
