"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    nip: "",
    unitKerja: "Bidang Perencanaan",
    emailDinas: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, nip, emailDinas, password, confirmPassword } = formData;

    if (!fullName || !nip || !emailDinas || !password || !confirmPassword) {
      setStatusMessage({
        type: "error",
        text: "Harap lengkapi seluruh formulir pendaftaran.",
      });
      return;
    }

    if (password.length < 8) {
      setStatusMessage({
        type: "error",
        text: "Kata sandi minimal harus terdiri dari 8 karakter.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setStatusMessage({
        type: "error",
        text: "Konfirmasi kata sandi tidak cocok dengan kata sandi.",
      });
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    // Simulasi pendaftaran
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        text: "Pendaftaran berhasil dikirim! Akun Anda akan aktif setelah disetujui Super Admin.",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-[#123B72] flex items-center justify-center p-4 py-8 sm:py-12">
      <div className="w-full max-w-[600px] bg-white rounded-[18px] p-8 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)] flex flex-col items-center">
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
          Daftar akun
        </h1>

        {/* Subtitle */}
        <p className="text-[#64748B] text-[12.5px] leading-[19.38px] text-center mt-1">
          Akun aktif setelah disetujui Super Admin
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nama Lengkap (span 2) */}
            <div className="sm:col-span-2 flex flex-col">
              <label
                htmlFor="fullName"
                className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
              >
                Nama lengkap
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nama sesuai identitas pegawai"
                className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
              />
            </div>

            {/* NIP (col 1) */}
            <div className="flex flex-col">
              <label
                htmlFor="nip"
                className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
              >
                NIP
              </label>
              <input
                id="nip"
                name="nip"
                type="text"
                value={formData.nip}
                onChange={handleChange}
                placeholder="18 digit NIP"
                maxLength={18}
                className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
              />
            </div>

            {/* Unit Kerja (col 2) */}
            <div className="flex flex-col">
              <label
                htmlFor="unitKerja"
                className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
              >
                Unit kerja
              </label>
              <div className="relative">
                <select
                  id="unitKerja"
                  name="unitKerja"
                  value={formData.unitKerja}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 pr-8 text-[13.5px] text-[#1E293B] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors appearance-none cursor-pointer"
                >
                  <option value="Bidang Perencanaan">Bidang Perencanaan</option>
                  <option value="Bidang Keuangan & Aset">Bidang Keuangan & Aset</option>
                  <option value="Bidang Kepegawaian (BKD)">Bidang Kepegawaian (BKD)</option>
                  <option value="Sekretariat Daerah">Sekretariat Daerah</option>
                  <option value="Inspektorat">Inspektorat</option>
                  <option value="Dinas Pendidikan & Kebudayaan">Dinas Pendidikan & Kebudayaan</option>
                  <option value="Dinas Kesehatan">Dinas Kesehatan</option>
                  <option value="Dinas Perhubungan">Dinas Perhubungan</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Dinas (span 2) */}
            <div className="sm:col-span-2 flex flex-col">
              <label
                htmlFor="emailDinas"
                className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
              >
                Email dinas
              </label>
              <input
                id="emailDinas"
                name="emailDinas"
                type="email"
                value={formData.emailDinas}
                onChange={handleChange}
                placeholder="nama@instansi.go.id"
                className="w-full px-3 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
                autoComplete="email"
              />
            </div>

            {/* Kata Sandi (col 1) */}
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 8 karakter"
                  className="w-full pl-3 pr-10 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
                  autoComplete="new-password"
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

            {/* Konfirmasi Kata Sandi (col 2) */}
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-[#64748B] text-[12.5px] font-medium leading-[19.38px] mb-1.5"
              >
                Konfirmasi kata sandi
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Ulangi kata sandi"
                  className="w-full pl-3 pr-10 py-2.5 text-[13.5px] text-[#1E293B] placeholder-[#757575] bg-white border border-[#E8EEF3] rounded-[10px] focus:outline-none focus:border-[#0066B3] focus:ring-1 focus:ring-[#0066B3] transition-colors"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#123B72] transition-colors p-1"
                  title={
                    showConfirmPassword
                      ? "Sembunyikan konfirmasi kata sandi"
                      : "Tampilkan konfirmasi kata sandi"
                  }
                >
                  {showConfirmPassword ? (
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
          </div>

          {/* Button Daftar */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-[#0066B3] hover:bg-[#005596] active:bg-[#004478] text-white text-[13px] font-semibold leading-[20.15px] rounded-[10px] border border-[#0066B3] transition-all duration-150 shadow-sm flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
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
                Mendaftarkan...
              </span>
            ) : (
              "Daftar"
            )}
          </button>
        </form>

        {/* Footer: Sudah punya akun? Masuk */}
        <div className="flex items-center justify-center pt-4 text-[12.5px] leading-[19.38px]">
          <span className="text-[#64748B]">Sudah punya akun?&nbsp;</span>
          <Link
            href="/login"
            className="text-[#0066B3] font-medium hover:underline transition-colors cursor-pointer"
          >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}

