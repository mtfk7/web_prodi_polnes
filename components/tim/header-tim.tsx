"use client"

import { Button } from "@/components/ui/button"
import { Code2, Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { siteConfig } from "@/data/tim/content"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "#tentang-kami" },
  { name: "Visi Misi", href: "#visi-dan-misi" },
  { name: "Kurikulum", href: "#kurikulum" },
  { name: "Daftar Dosen", href: "#daftar-dosen" },

  { name: "Kontak", href: "#kontak" },
]

const quickAccess = [
  {
    name: "SIAKAD POLNES",
    href: "https://siakad.polnes.ac.id",
    description: "Sistem Informasi Akademik"
  },
  {
    name: "E-Learning POLNES",
    href: "https://elearning.polnes.ac.id",
    description: "Platform pembelajaran online"
  },
  {
    name: "Layanan POLNES",
    href: "https://layanan.polnes.ac.id",
    description: "Portal layanan akademik"
  },
  {
    name: "E-Perpus Polnes",
    href: "https://lib.polnes.ac.id",
    description: "Perpustakaan digital"
  }
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
            behavior: "smooth"
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
            behavior: "smooth"
          })
        }
      }, 100)
    }
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // Update URL dengan hash tanpa reload halaman
      window.history.pushState(null, '', href)

      // Smooth scroll for anchor links
      const element = document.querySelector(href)
      if (element) {
        // Hitung offset untuk navbar fixed (80px height)
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
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
        ${scrolled ? "bg-blue-900/95 shadow-lg backdrop-blur border-b border-blue-950" : "bg-blue-900/60 backdrop-blur border-b border-transparent"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        transition-transform
      `}
    >
      <div className="w-full max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-3 min-w-max">
          <Image src="/logo-polnes.png" alt="Logo Polnes" width={160} height={33} className="h-8 w-40 object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="relative text-blue-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group"
            >
              <span>{item.name}</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
            </button>
          ))}

          {/* Akses Cepat Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-blue-100 hover:text-amber-400 font-medium transition-colors px-2 py-1 focus:outline-none group flex items-center gap-1">
                <span>Akses Cepat</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-64 bg-white/95 backdrop-blur border-blue-200 shadow-xl"
            >
              {quickAccess.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 hover:bg-blue-50 transition-colors cursor-pointer"
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
        </nav>

        {/* Apply Now Button */}
        <div className="flex items-center gap-2 min-w-max">
          <a
            href="https://pmb.polnes.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-400 text-blue-900 font-bold shadow-lg px-6 py-2 hover:bg-amber-300 transition-all duration-200 text-lg hidden md:inline-flex items-center justify-center"
          >
            Daftar Sekarang
          </a>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:text-white text-white hover:bg-blue-800 focus:bg-blue-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-blue-900/60 backdrop-blur animate-slide-down">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-blue-200 hover:text-amber-400 transition-colors text-lg py-2"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Akses Cepat */}
              <div className="space-y-2">
                <div className="text-blue-200 font-medium text-lg py-2">Akses Cepat</div>
                {quickAccess.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-200 hover:text-amber-400 transition-colors text-base py-1 pl-4"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full mt-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-blue-900 bg-transparent"
              >
                <a
                  href="https://pmb.polnes.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
