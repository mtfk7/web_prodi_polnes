"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const campusImages = [
  {
    src: "/pembelajaran.png?height=256&width=400",
    alt: "Gedung Kampus Modern",
    title: "Kampus Modern",
    description: "Fasilitas berteknologi tinggi",
  },
  {
    src: "/activestudent.png?height=256&width=400",
    alt: "Mahasiswa Bekerja",
    title: "Pembelajaran Kolaboratif",
    description: "Mahasiswa bekerja bersama",
  },
  {
    src: "/pembelajaran2.png?height=256&width=400",
    alt: "Laboratorium Teknologi",
    title: "Laboratorium Canggih",
    description: "Peralatan mutakhir",
  },
]

export function JurusanHero() {
  const [current, setCurrent] = useState(0)
  const total = campusImages?.length || 0
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto play effect
  useEffect(() => {
    if (total > 0) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
      }, 5000)
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [total])

  return (
    <section id="beranda" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {campusImages && campusImages.length > 0 ? (
          <>
            {campusImages.map((img, idx) => (
              <Image
                key={idx}
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className={`object-cover w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-in-out
                  ${idx === current ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-full z-0"}
                `}
                priority={idx === current}
                style={{ pointerEvents: idx === current ? "auto" : "none" }}
              />
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/85 via-green-900/75 to-indigo-900/85 z-20" />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 z-30" />
          </>
        ) : (
          <>
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Campus Background"
              fill
              className="object-cover"
              priority
            />
            {/* green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/85 via-green-900/75 to-indigo-900/85" />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-40 container px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src="/logo-polnes2.png" alt="Logo Polnes 2" width={80} height={80} className="object-contain" />
            <Image src="/logo-ti.png" alt="Logo TI" width={80} height={80} className="object-contain" />
          </div>
          <Badge className="mb-6 bg-amber-400 text-black hover:bg-amber-300 shadow-lg">
            Politeknik Negeri Samarinda
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Jurusan Teknologi Informasi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 font-light drop-shadow-md">
            Membangun Masa Depan Digital Indonesia
          </p>
          <p className="text-lg mb-10 text-green-100 max-w-2xl mx-auto drop-shadow-md">
            Jurusan Teknologi Informasi Politeknik Negeri Samarinda menawarkan program studi unggulan yang mempersiapkan
            lulusan siap kerja di era digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-400 text-black hover:bg-amber-300 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link href="#program-studi">
                Jelajahi Program Studi
                <ChevronDown className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-700 text-white hover:bg-green-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link href="#tentang-jurusan">
                Tentang Jurusan
                <ChevronDown className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-red-700 text-white hover:bg-red-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <a href="https://youtu.be/FAKwpDSEbDQ?si=6H9YHJTgXIa--UWP" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.946C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.87.555A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.5 12a28.6 28.6 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.946C5.9 18.5 12 18.5 12 18.5s6.1 0 7.87-.555a2.75 2.75 0 0 0 1.93-1.946A28.6 28.6 0 0 0 22.5 12a28.6 28.6 0 0 0-.7-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                Video Profil
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
