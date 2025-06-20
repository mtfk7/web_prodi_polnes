"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { studentProjects } from "@/data/ti/content"
import { useEffect, useState } from "react"

export function StudentProjects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="projek-mahasiswa" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Proyek Mahasiswa</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Temukan Proyek Inovatif yang Dibuat Oleh Mahasiswa</h2>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {studentProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-4 left-4 ${project.badgeColor} text-white`}>{project.badge}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        <Badge variant="secondary">{project.type}</Badge>
                        <span className="text-gray-400">•</span>
                        <Badge variant="secondary">{project.year}</Badge>
                      </div>
                      <CardDescription className="text-sm pt-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-600">Oleh: {project.author}</div>
                        <Button variant="outline" size="sm">
                          Lihat Proyek
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex left-2 md:-left-12 top-[40%] -translate-y-1/2 absolute" />
            <CarouselNext className="flex right-2 md:-right-12 top-[40%] -translate-y-1/2 absolute" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current ? "bg-gray-800 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
