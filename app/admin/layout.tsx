import { AppLayout } from "@/components/layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout role="Admin">{children}</AppLayout>;
}
