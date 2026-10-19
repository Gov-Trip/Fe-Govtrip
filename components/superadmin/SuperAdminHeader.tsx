"use client";

import AppHeader, { AppHeaderProps } from "@/components/layout/AppHeader";

export default function SuperAdminHeader(props: Omit<AppHeaderProps, "role">) {
  return <AppHeader role="Super Admin" {...props} />;
}

