import { AppLayout } from "@/components/layout";

export default function AtasanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout role="Atasan">{children}</AppLayout>;
}
