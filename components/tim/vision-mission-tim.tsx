import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Star } from "lucide-react"
import { visionMission } from "@/data/tim/content"

export function VisionMission() {
  return (
     <section id="visi-dan-misi" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-400 text-black">Visi & Misi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Komitmen untuk Menjadi Terbaik</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-amber-400" />
                  <CardTitle className="text-2xl">{visionMission.vision.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-blue-100">{visionMission.vision.content}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-amber-400" />
                  <CardTitle className="text-2xl">{visionMission.mission.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-blue-100">
                  {visionMission.mission.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
