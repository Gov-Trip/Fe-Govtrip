"use client";

import AppSidebar from "@/components/layout/AppSidebar";

interface AtasanSidebarProps {
  onCloseMobile?: () => void;
}

export default function AtasanSidebar({ onCloseMobile }: AtasanSidebarProps) {
  return <AppSidebar role="Atasan" onCloseMobile={onCloseMobile} />;
}
