import { AppLayout } from "@/components/layout";

export default function PegawaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout role="Pegawai">{children}</AppLayout>;
}
