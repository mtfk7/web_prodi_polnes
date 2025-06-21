"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { heroContent } from "@/data/trk/content"
import { campusImages } from "@/data/trk/content"
import { useState, useEffect, useRef } from "react"

export function Hero() {
  const [current, setCurrent] = useState(0)
  const total = campusImages?.length || 0
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto play effect
  useEffect(() => {
    if (total > 0) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
      }, 5000) // Slower for hero
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [total])

  const prevSlide = () => {
    if (total > 0) {
      setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
    }
  }
  
  const nextSlide = () => {
    if (total > 0) {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
    }
  }

  const goToSlide = (index: number) => {
    if (total > 0 && index >= 0 && index < total) {
      setCurrent(index)
    }
  }

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
                  ${idx === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'}
                `}
                priority={idx === current}
                style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
              />
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#212F4D]/85 via[#212F4D]/75 to-[#212F4D]/85 z-20" />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 z-30" />
          </>
        ) : (
          <>
            <Image
              src={heroContent.backgroundImage || "/placeholder.svg?height=800&width=1920"}
              alt="Campus Background"
              fill
              className="object-cover"
              priority
            />
            {/* cyan Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/85 via-cyan-900/75 to-emerald-900/85" />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </>
        )}
      </div>

    
      {/* Slider Controls
      {campusImages && campusImages.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              prevSlide()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full p-3 shadow-lg z-40 transition-all duration-300"
            aria-label="Sebelumnya"
            type="button"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              nextSlide()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full p-3 shadow-lg z-40 transition-all duration-300"
            aria-label="Selanjutnya"
            type="button"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
       
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-40">
            {campusImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  goToSlide(idx)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
         */}

      {/* Content */}
      <div className="relative z-40 container px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src="/logo-polnes2.png" alt="Logo Polnes 2" width={80} height={80} className="object-contain" />
            <Image src="/logo-ti.png" alt="Logo TI" width={80} height={80} className="object-contain" />
          </div>
          <Badge className="mb-6 bg-amber-400 text-black hover:bg-amber-300 shadow-lg">{heroContent.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">{heroContent.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 font-light drop-shadow-md">{heroContent.tagline}</p>
          <p className="text-lg mb-10 text-cyan-100 max-w-2xl mx-auto drop-shadow-md">{heroContent.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-400 text-black hover:bg-amber-300 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link href="#kurikulum">
                Jelajahi Kurikulum
                <ChevronDown className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#212F4D]-700 text-white hover:bg-[#212F4D]-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link href="#cara-mendaftar">
                Cara Mendaftar
                <ChevronDown className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-red-700 text-white hover:bg-red-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <a href="https://youtu.be/FAKwpDSEbDQ?si=6H9YHJTgXIa--UWP" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.946C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.87.555A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.5 12a28.6 28.6 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.946C5.9 18.5 12 18.5 12 18.5s6.1 0 7.87-.555a2.75 2.75 0 0 0 1.93-1.946A28.6 28.6 0 0 0 22.5 12a28.6 28.6 0 0 0-.7-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                Video Profil
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t" />
    </section>
  )
}
