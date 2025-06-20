import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import Image from "next/image"
import { departmentProfile } from "@/data/trk/content"

export function DepartmentProfile() {
  return (
    <section id="tentang-kami" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-100 text-cyan-800">{departmentProfile.badge}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{departmentProfile.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{departmentProfile.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {departmentProfile.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* <Button className="bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-800 hover:to-cyan-950">
                Learn More About Us
              </Button> */}
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={departmentProfile.image || "/placeholder.svg"}
                  alt="Department Faculty and Students"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-cyan-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Mahasiswa Aktif</div>
                      <div className="text-2xl font-bold text-cyan-700">{departmentProfile.activeStudents}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
