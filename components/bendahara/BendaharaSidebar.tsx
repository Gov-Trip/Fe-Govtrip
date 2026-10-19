"use client";

import AppSidebar from "@/components/layout/AppSidebar";

interface BendaharaSidebarProps {
  onCloseMobile?: () => void;
}

export default function BendaharaSidebar({ onCloseMobile }: BendaharaSidebarProps) {
  return <AppSidebar role="Bendahara" onCloseMobile={onCloseMobile} />;
}

