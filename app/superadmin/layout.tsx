import { AppLayout } from "@/components/layout";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout role="Super Admin">{children}</AppLayout>;
}

