"use client"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white animate-fadeIn">
      <div className="relative flex items-center justify-center mb-4">
        <span className="sr-only">Loading...</span>
        <div className="w-16 h-16 border-4 border-polnesBlue border-t-polnesOrange rounded-full animate-spin"></div>
      </div>
      <div className="text-polnesBlue font-bold text-lg tracking-wide">Memuat...</div>
    </div>
  )
} 