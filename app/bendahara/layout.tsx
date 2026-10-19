import { AppLayout } from "@/components/layout";

export default function BendaharaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout role="Bendahara">{children}</AppLayout>;
}

