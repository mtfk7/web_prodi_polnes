"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-500 hover:to-yellow-500 shadow-lg hover:shadow-xl
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}
      `}
    >
      <ArrowUp className="h-4 w-5 font-bold" />
    </Button>
  )
}
