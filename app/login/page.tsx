"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setStatusMessage({
        type: "error",
        text: "Silakan masukkan NIP/email dan kata sandi Anda.",
      });
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    // Simulasi login autentikasi & pengalihan ke dashboard admin
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        text: "Login berhasil! Mengalihkan ke Dashboard...",
      });
      router.push("/admin");
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-[#123B72] flex items-center justify-center p-4 py-8 sm:py-12">
      <div className="w-full max-w-[440px] bg-white rounded-[18px] p-8 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)] flex flex-col items-center">
        {/* Logo Gov.Trip */}
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Gov.Trip Logo"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[#123B72] text-[20px] font-semibold text-center leading-[31px] mt-2.5">
          Masuk ke Gov.Trip
        </h1>

        {/* Subtitle */}
        <p className="text-[#64748B] text-[12.5px] leading-[19.38px] text-center mt-1">
          Gunakan akun yang diberikan instansi Anda
        </p>

        {/* Status Alert if any */}
        {statusMessage && (
          <div
            className={`w-full mt-4 p-3 rounded-[10px] text-[12.5px] leading-relaxed transition-all ${
              statusMessage.type === "success"
                ? "bg-[#DFF5F4] text-[#0B7A77] border border-[#12A9A5]"
                : "bg-[#FBE8E8] text-[#B02A2A] border border-[#FBE8E8]"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
          {/* NIP atau Email */}
          <div className="flex flex-col">
            <label
              htmlFor="identifier"
              className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
            >
              NIP atau email
            </label>
            <input
              id="identifier"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Masukkan NIP atau email dinas"
              className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
              autoComplete="username"
            />
          </div>

          {/* Kata Sandi */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
            >
              Kata sandi
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full pl-3 pr-10 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#123B72] transition-colors p-1"
                title={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Ingat Saya & Lupa Kata Sandi */}
          <div className="flex items-center justify-between pt-1 pb-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-[14px] h-[14px] rounded-[2.5px] border-[#C9D8EC] text-[#0075FF] accent-[#0075FF] cursor-pointer"
              />
              <span className="text-[#64748B] text-[12.5px] leading-[19.38px]">
                Ingat saya
              </span>
            </label>

            <button
              type="button"
              onClick={() =>
                alert("Silakan hubungi administrator instansi Anda untuk mereset kata sandi.")
              }
              className="text-[#0066B3] text-[12.5px] font-medium leading-[19.38px] hover:underline transition-colors"
            >
              Lupa kata sandi?
            </button>
          </div>

          {/* Button Masuk */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-[#0066B3] hover:bg-[#005596] active:bg-[#004478] text-white text-[13px] font-semibold leading-[20.15px] rounded-[10px] border border-[#0066B3] transition-all duration-150 shadow-sm flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Memproses...
              </span>
            ) : (
              "Masuk"
            )}
          </button>
        </form>

        {/* Footer: Belum punya akun? Daftar */}
        <div className="flex items-center justify-center pt-4 text-[12.5px] leading-[19.38px]">
          <span className="text-[#64748B]">Belum punya akun?&nbsp;</span>
          <Link
            href="/register"
            className="text-[#0066B3] font-medium hover:underline transition-colors cursor-pointer"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}

