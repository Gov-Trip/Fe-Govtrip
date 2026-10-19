"use client";

import AppHeader, { AppHeaderProps } from "@/components/layout/AppHeader";

export default function PegawaiHeader(props: Omit<AppHeaderProps, "role">) {
  return <AppHeader role="Pegawai" {...props} />;
}
