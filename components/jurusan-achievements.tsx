import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star, Medal, Target, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Juara 1 Kompetisi Nasional",
    description: "Lomba Inovasi Teknologi Informasi 2024",
    color: "text-yellow-600",
    year: "2024",
  },
  {
    icon: Award,
    title: "Akreditasi Baik",
    description: "Semua program studi terakreditasi BAN-PT",
    color: "text-blue-600",
    year: "2023",
  },
  {
    icon: Star,
    title: "Best Graduate Employment",
    description: "Tingkat penyerapan lulusan tertinggi di Kaltim",
    color: "text-green-600",
    year: "2023",
  },
  {
    icon: Medal,
    title: "Sertifikasi Internasional",
    description: "Kemitraan dengan Microsoft, Cisco, Oracle",
    color: "text-purple-600",
    year: "2022",
  },
  {
    icon: Target,
    title: "ISO 9001:2015",
    description: "Sertifikasi Sistem Manajemen Mutu",
    color: "text-orange-600",
    year: "2022",
  },
  {
    icon: Users,
    title: "Alumni Network",
    description: "5000+ alumni tersebar di seluruh Indonesia",
    color: "text-teal-600",
    year: "2024",
  },
]

export function JurusanAchievements() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="py-2 px-4 mb-4 bg-green-200 text-green-600">Prestasi & Pencapaian</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prestasi yang Membanggakan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai penghargaan dan pencapaian yang membuktikan kualitas pendidikan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                      <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <div className="text-sm text-gray-500">{achievement.year}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
