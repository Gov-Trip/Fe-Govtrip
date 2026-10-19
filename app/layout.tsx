import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gov.Trip - Sistem Perjalanan Dinas",
  description: "Aplikasi Manajemen Perjalanan Dinas Pemerintahan Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F1F7FB] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
