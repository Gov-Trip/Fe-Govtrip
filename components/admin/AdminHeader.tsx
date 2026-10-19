"use client";

import AppHeader, { AppHeaderProps } from "@/components/layout/AppHeader";

export default function AdminHeader(props: Omit<AppHeaderProps, "role">) {
  return <AppHeader role="Admin" {...props} />;
}
