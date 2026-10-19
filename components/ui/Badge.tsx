import React from "react";

export type BadgeVariant =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /**
   * If provided, variant can be automatically deduced from status string
   * (e.g. "Berjalan", "Disetujui", "Menunggu", "Draft", "Ditolak", "Belum lengkap")
   */
  status?: string;
  size?: "sm" | "md";
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-[#E3F0FA] text-[#0066B3]",
  info: "bg-[#E3F0FA] text-[#0066B3]",
  success: "bg-[#DFF5F4] text-[#0B7A77]",
  warning: "bg-[#FFF1D1] text-[#8A5A00]",
  danger: "bg-[#FBE8E8] text-[#B02A2A]",
  neutral: "bg-slate-100 text-[#64748B]",
};

function resolveVariant(status?: string, fallback: BadgeVariant = "info"): BadgeVariant {
  if (!status) return fallback;
  const s = status.toLowerCase();
  if (s.includes("berjalan") || s.includes("aktif") || s.includes("proses")) return "info";
  if (s.includes("setuju") || s.includes("selesai") || s.includes("terbit") || s.includes("lengkap") && !s.includes("belum")) return "success";
  if (s.includes("tunggu") || s.includes("verifikasi") || s.includes("pending") || s.includes("belum")) return "warning";
  if (s.includes("tolak") || s.includes("batal") || s.includes("gagal") || s.includes("darurat")) return "danger";
  if (s.includes("draft") || s.includes("arsip")) return "neutral";
  return fallback;
}

export function Badge({
  variant,
  status,
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const resolved = variant || resolveVariant(status || (typeof children === "string" ? children : undefined));
  const style = variantStyles[resolved];

  const sizeClasses = size === "sm" 
    ? "px-2 py-0.5 text-[11px]" 
    : "px-2.5 py-0.5 text-[11.5px]";

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full shrink-0 transition-colors ${sizeClasses} ${style} ${className}`}
      {...props}
    >
      {children || status}
    </span>
  );
}

export default Badge;

