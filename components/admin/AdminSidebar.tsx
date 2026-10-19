"use client";

import AppSidebar from "@/components/layout/AppSidebar";

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

export default function AdminSidebar({ onCloseMobile }: AdminSidebarProps) {
  return <AppSidebar role="Admin" onCloseMobile={onCloseMobile} />;
}
