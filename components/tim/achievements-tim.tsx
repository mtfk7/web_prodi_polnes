import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Trophy, GraduationCap, Star } from "lucide-react"
import { achievements } from "@/data/tim/content"

const iconMap = {
  Award,
  Trophy,
  GraduationCap,
  Star,
}

export function Achievements() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="py-2 px-4 mb-4 bg-blue-200 text-blue-900">Penghargaan & Pencapaian</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bertumbuh, Berani, dan Berprestasi</h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through various awards and certifications
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <IconComponent
                    className={`h-12 w-12 ${achievement.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
