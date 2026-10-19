"use client";

import AppHeader, { AppHeaderProps } from "@/components/layout/AppHeader";

export default function AtasanHeader(props: Omit<AppHeaderProps, "role">) {
  return <AppHeader role="Atasan" {...props} />;
}
