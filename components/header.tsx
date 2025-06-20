"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "#tentang-jurusan" },
  { name: "Kontak", href: "#kontak" },
]

const programStudi = [
  {
    name: "D4 Teknik Informatika Multimedia",
    href: "/program-studi/tim",
    description: "Program unggulan multimedia interaktif",
  },
  {
    name: "D4 Teknologi Rekayasa Komputer",
    href: "/program-studi/trk",
    description: "Fokus sistem komputer dan embedded",
  },
  {
    name: "D3 Teknik Informatika",
    href: "/program-studi/ti",
    description: "Program praktis teknisi informatika",
  },
  {
    name: "D3 Teknik Komputer",
    href: "/program-studi/tk",
    description: "Spesialisasi hardware dan jaringan",
  },
]

const more = [
  {
    name: "Struktur Organisasi",
    href: "#struktur-organisasi",
    description: "Platform pembelajaran online",
  },
  {
    name: "Staf dan Dosen",
    href: "#staf-dan-dosen",
    description: "Portal layanan akademik",
  },
    {
    name: "Berita",
    href: "#berita",
    description: "Portal berita jurusan",
  },
]
const quickAccess = [
  {
    name: "E-Learning POLNES",
    href: "https://elearning.polnes.ac.id",
    description: "Platform pembelajaran online",
  },
  {
    name: "Layanan POLNES",
    href: "https://layanan.polnes.ac.id",
    description: "Portal layanan akademik",
  },
  {
    name: "E-Perpus Polnes",
    href: "https://lib.polnes.ac.id",
    description: "Perpustakaan digital",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        // Scroll ke bawah, sembunyikan navbar
        setShowNavbar(false)
      } else {
        // Scroll ke atas, tampilkan navbar
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          // Hitung offset untuk navbar fixed (80px height)
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Handle initial hash on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Delay sedikit untuk memastikan semua komponen sudah ter-render
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          // Hitung offset untuk navbar fixed (80px height)
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // Update URL dengan hash tanpa reload halaman
      window.history.pushState(null, "", href)

      // Smooth scroll for anchor links
      const element = document.querySelector(href)
      if (element) {
        // Hitung offset untuk navbar fixed (80px height)
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    } else {
      // Navigate to other pages
      router.push(href)
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-green-900/95 shadow-lg backdrop-blur border-b border-green-950" : "bg-green-900/60 backdrop-blur border-b border-transparent"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        transition-transform
      `}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-3 min-w-max">
          <Image src="/logo-polnes.png" alt="Logo Polnes" width={40} height={40} className="h-40 w-40 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {/* Beranda */}
          <button
            key="Beranda"
            onClick={() => handleNavClick("/")}
            className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group"
          >
            <span>Beranda</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
          </button>
          {/* Program Studi Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group flex items-center gap-1">
                <span>Program Studi</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 bg-white/95 backdrop-blur border-green-200 shadow-xl">
              {programStudi.map((program) => (
                <DropdownMenuItem key={program.name} asChild>
                  <Link
                    href={program.href}
                    className="flex flex-col items-start w-full p-4 hover:bg-green-50 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-gray-900">{program.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{program.description}</div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Tentang */}
          <button
            key="Tentang"
            onClick={() => handleNavClick("#tentang-jurusan")}
            className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group"
          >
            <span>Tentang</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
          </button>
          {/* Kontak */}
          <button
            key="Kontak"
            onClick={() => handleNavClick("#kontak")}
            className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group"
          >
            <span>Kontak</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
          </button>
          {/* Akses Cepat Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group flex items-center gap-1">
                <span>Akses Cepat</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-white/95 backdrop-blur border-green-200 shadow-xl">
              {quickAccess.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 hover:bg-green-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-2" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-green-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group flex items-center gap-1">
                <span>More</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-white/95 backdrop-blur border-green-200 shadow-xl">
              {more.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <a
                    href={item.href}
                    className="flex items-center justify-between w-full p-3 hover:bg-green-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Apply Now Button */}
        <div className="flex items-center gap-2 min-w-max">
          <a
            href="https://pmb.polnes.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-400 text-green-900 font-bold shadow-lg px-6 py-2 hover:bg-amber-300 transition-all duration-200 text-lg hidden md:inline-flex items-center justify-center"
          >
            Daftar Sekarang
          </a>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-green-800 focus:bg-green-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-green-900/95 backdrop-blur animate-slide-down">
          <div className="container px-4 py-2">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-green-200 hover:text-amber-400 transition-colors text-base py-1"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Program Studi */}
              <div className="space-y-1">
                <div className="text-green-200 font-semibold text-base py-1">Program Studi</div>
                {programStudi.map((program) => (
                  <Link
                    key={program.name}
                    href={program.href}
                    className="block text-green-200 hover:text-amber-400 transition-colors text-sm py-0.5 pl-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Akses Cepat */}
              <div className="space-y-1">
                <div className="text-green-200 font-semibold text-base py-1">Akses Cepat</div>
                {quickAccess.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-200 hover:text-amber-400 transition-colors text-sm py-0.5 pl-4"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile More */}
              <div className="space-y-1">
                <div className="text-green-200 font-semibold text-base py-1">More</div>
                {more.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-left text-green-200 hover:text-amber-400 transition-colors text-sm py-0.5 pl-4 w-full"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full mt-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-green-900 bg-transparent"
              >
                <a href="https://pmb.polnes.ac.id" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
