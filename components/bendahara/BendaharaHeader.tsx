"use client";

import AppHeader, { AppHeaderProps } from "@/components/layout/AppHeader";

export default function BendaharaHeader(props: Omit<AppHeaderProps, "role">) {
  return <AppHeader role="Bendahara" {...props} />;
}

