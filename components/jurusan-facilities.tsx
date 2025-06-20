import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Wifi, Database, Cpu, Globe, Shield } from "lucide-react"
import Image from "next/image"

const facilities = [
  {
    title: "Laboratorium Komputer",
    description: "Lab dengan komputer terbaru dan software development tools lengkap",
    image: "/lab-komputer.png?height=200&width=400",
    icon: Monitor,
    color: "text-blue-700",
  },
  {
    title: "Laboratorium Jaringan",
    description: "Fasilitas untuk praktik konfigurasi jaringan dan keamanan sistem",
    image: "/lab-jaringan.png?height=200&width=400",
    icon: Wifi,
    color: "text-green-700",
  },
  {
    title: "Laboratorium Database",
    description: "Lab khusus untuk pembelajaran sistem basis data dan big data",
    image: "/lab-database.png?height=200&width=400",
    icon: Database,
    color: "text-purple-700",
  },
  {
    title: "Laboratorium Hardware",
    description: "Fasilitas untuk praktik perakitan dan maintenance komputer",
    image: "/lab-hardware.png?height=200&width=400",
    icon: Cpu,
    color: "text-orange-700",
  },
  {
    title: "Laboratorium Web Development",
    description: "Studio untuk pengembangan aplikasi web dan mobile",
    image: "/lab-web.png?height=200&width=400",
    icon: Globe,
    color: "text-teal-700",
  },
  {
    title: "Laboratorium Cyber Security",
    description: "Lab untuk pembelajaran keamanan siber dan ethical hacking",
    image: "/lab-security.png?height=200&width=400",
    icon: Shield,
    color: "text-red-700",
  },
]

export function JurusanFacilities() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Fasilitas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fasilitas Pembelajaran Modern</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Laboratorium dan fasilitas berstandar industri untuk mendukung pembelajaran praktis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${facility.color}`} />
                    <CardTitle className="text-lg">{facility.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{facility.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
