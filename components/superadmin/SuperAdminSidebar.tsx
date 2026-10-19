"use client";

import AppSidebar from "@/components/layout/AppSidebar";

interface SuperAdminSidebarProps {
  onCloseMobile?: () => void;
}

export default function SuperAdminSidebar({ onCloseMobile }: SuperAdminSidebarProps) {
  return <AppSidebar role="Super Admin" onCloseMobile={onCloseMobile} />;
}

