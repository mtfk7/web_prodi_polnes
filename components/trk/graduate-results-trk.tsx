"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Rahmat Wahyudi",
    position: "Full Stack Developer",
    company: "PT. Pt an",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Program D4 TI Multimedia memberikan fondasi yang kuat untuk karir di industri teknologi. Kurikulum yang relevan dan praktis langsung diterapkan di dunia kerja.",
    fromyear:"2021",
    year: "2025"

  },
  {
    name: "Muhammad Taufikul Hakim",
    position: "UI/UX Designer",
    company: "PT. Desain Desain an",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Fasilitas studio yang modern dan dosen yang berpengalaman industri membuat saya siap menghadapi tantangan desain digital yang kompleks.",
    fromyear:"2021",
    year: "2025"
  },
  {
    name: "Budi Santoso",
    position: "Mobile App Developer",
    company: "Shopee",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Program magang di semester 5 sangat berharga. Saya langsung diterima kerja setelah magang dan sekarang mengembangkan aplikasi mobile untuk jutaan pengguna.",
    fromyear:"2019",
    year: "2023"
  },
  {
    name: "Diana Sari",
    position: "Game Developer",
    company: "Agate Studio",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Spesialisasi game development membuka peluang karir yang menarik. Saya sekarang bekerja di studio game terkemuka Indonesia.",
    fromyear:"2018",
    year: "2022"
  },
  {
    name: "Rendi Pratama",
    position: "Full-Stack Developer",
    company: "Traveloka",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Kombinasi teori dan praktik yang seimbang. Saya bisa langsung berkontribusi di perusahaan sejak hari pertama kerja.",
    fromyear:"2019",
    year: "2023"
  },
  {
    name: "Maya Indah",
    position: "Digital Marketing Specialist",
    company: "Bukalapak",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    testimonial: "Program ini tidak hanya mengajarkan teknologi, tapi juga aspek bisnis digital. Sangat relevan untuk karir di era digital.",
   fromyear:"2020",
    year: "2024"
  }
]

export function GraduateResults() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)
  const [itemsPerView, setItemsPerView] = useState(3)
  
  // Update itemsPerView based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])
  
  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('left')
    setCurrentIndex((prev) => (prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView))
    setTimeout(() => {
      setIsAnimating(false)
      setSlideDirection(null)
    }, 400)
  }
  
  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('right')
    setCurrentIndex((prev) => (prev - itemsPerView < 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - itemsPerView))
    setTimeout(() => {
      setIsAnimating(false)
      setSlideDirection(null)
    }, 400)
  }
  
  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    const direction = index * itemsPerView > currentIndex ? 'left' : 'right'
    setSlideDirection(direction)
    setCurrentIndex(index * itemsPerView)
    setTimeout(() => {
      setIsAnimating(false)
      setSlideDirection(null)
    }, 400)
  }
  
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-700 to-emerald-800">
      <style jsx>{`
        .slide-in-from-right {
          animation: slideInFromRight 400ms ease-out forwards;
        }
        .slide-in-from-left {
          animation: slideInFromLeft 400ms ease-out forwards;
        }
        .slide-out-to-right {
          animation: slideOutToRight 400ms ease-out forwards;
        }
        .slide-out-to-left {
          animation: slideOutToLeft 400ms ease-out forwards;
        }
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-cyan-800">Testimoni Alumni</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apa Kata Alumni Kami</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari lulusan kami yang telah sukses di industri teknologi
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            disabled={isAnimating}
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-0 md:-translate-x-12 top-1/2 -translate-y-1/2 z-10 bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            disabled={isAnimating}
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-0 md:translate-x-12 top-1/2 -translate-y-1/2 z-10 bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Slider Container */}
          <div className="overflow-hidden px-12 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 will-change-transform">
              {currentTestimonials.map((testimonial, index) => (
                <Card
                  key={`${currentIndex}-${index}`}
                  className={cn(
                    "h-full bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/15 transition-all duration-500 ease-out transform hover:scale-103 hover:shadow-xl",
                    isAnimating &&
                      (slideDirection === "left"
                        ? "slide-in-from-right"
                        : slideDirection === "right"
                        ? "slide-in-from-left"
                        : "")
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-white/20 transition-transform duration-300 hover:scale-105">
                        <AvatarFallback className="bg-cyan-600 text-white font-semibold">
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold transition-colors duration-300">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-cyan-200 text-sm transition-colors duration-300">
                          {testimonial.position} • {testimonial.company}
                        </CardDescription>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-100"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="h-6 w-6 text-cyan-300 absolute -top-2 -left-2 opacity-50 transition-transform duration-300 hover:scale-100" />
                      <CardDescription className="text-cyan-100 text-base leading-relaxed pl-4 transition-colors duration-300">
                        "{testimonial.testimonial}"
                      </CardDescription>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/20">
                                              <Badge
                        variant="outline"
                        className="text-cyan-200 border-cyan-300/30 transition-all duration-300 hover:bg-cyan-200 hover:text-cyan-800"
                      >
                        Angkatan {testimonial.fromyear}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-cyan-200 border-cyan-300/30 transition-all duration-300 hover:bg-cyan-200 hover:text-cyan-800"
                      >
                        Lulusan {testimonial.year}
                      </Badge>
                
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  index === Math.floor(currentIndex / itemsPerView)
                    ? "bg-white scale-105"
                    : "bg-white/30 hover:bg-white/50"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}