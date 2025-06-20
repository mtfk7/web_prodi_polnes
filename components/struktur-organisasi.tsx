import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function StrukturOrganisasi() {
  return (
    <section id="struktur-organisasi" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
       <Badge className="mb-6 bg-blue-200 text-blue-600 hover:bg-blue-200 shadow-lg">
            Struktur Organisasi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-polnesBlue mb-3 drop-shadow">Struktur Organisasi Jurusan</h2>
          <p className="text-gray-600 mb-6">Struktur organisasi Jurusan Teknologi Informasi Politeknik Negeri Samarinda yang mendukung kolaborasi dan profesionalisme.</p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-polnesBlue bg-white group transition-all duration-300">
            <Image
              src="/utama/struktur-organisasi.png"
              alt="Struktur Organisasi"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-polnesBlue/20 pointer-events-none group-hover:ring-4 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
} 