"use client";

import React, { useRef, useState } from "react";

export interface FileUploadProps {
  label?: string;
  helperText?: string;
  accept?: string;
  maxSizeMB?: number;
  value?: string | null;
  onChange?: (fileName: string | null, file?: File | null) => void;
  className?: string;
}

export function FileUpload({
  label,
  helperText = "Format PDF, JPG, PNG maks 5MB",
  accept = ".pdf,.jpg,.jpeg,.png",
  value,
  onChange,
  className = "",
}: FileUploadProps) {
  const [internalFileName, setInternalFileName] = useState<string | null>(value || null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentFileName = value !== undefined ? value : internalFileName;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInternalFileName(file.name);
      onChange?.(file.name, file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setInternalFileName(file.name);
      onChange?.(file.name, file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInternalFileName(null);
    if (inputRef.current) inputRef.current.value = "";
    onChange?.(null, null);
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="text-[#64748B] text-[12.5px] font-medium mb-1.5">
          {label}
        </label>
      )}

      <input
        type="file"
        ref={inputRef}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-[12px] p-5 sm:p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
          isDragging
            ? "border-[#0066B3] bg-[#cde4f7]"
            : "border-[#1684C4] bg-[#E3F0FA] hover:bg-[#d8ecf9]"
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-white text-[#0066B3] flex items-center justify-center shadow-xs mb-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
        </div>

        {currentFileName ? (
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E8EEF3] max-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0066B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            <span className="text-[12.5px] font-medium text-[#1E293B] truncate max-w-[200px]">
              {currentFileName}
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-[#B02A2A] hover:bg-red-50 p-1 rounded-md"
              title="Hapus file"
            >
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
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <span className="text-[13px] font-semibold text-[#0066B3]">
              Pilih file atau seret ke sini
            </span>
            <span className="text-[11.5px] text-[#64748B] mt-1">
              {helperText}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default FileUpload;

