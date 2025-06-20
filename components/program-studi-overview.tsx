import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const programStudi = [
  {
    id: "tim",
    title: "D4 Teknik Informatika Multimedia (S.Tr.Kom)",
    description: "Program unggulan yang menggabungkan teknologi informasi dengan multimedia interaktif",
    level: "Diploma 4 Sarjana Terapan (Setara S1)",
    duration: "4 Tahun (8 Semester)",
    graduates: "400+",
    jobRate: "95%",
    image: "/utama/tim.jpg?height=200&width=300",
    color: "from-green-600 to-emerald-700",
    href: "/program-studi/tim",
  },
  {
    id: "trk",
    title: "D4 Teknologi Rekayasa Komputer (S.Tr.Kom)",
    description: "Fokus pada pengembangan sistem komputer dan teknologi embedded",
    level: "Diploma 4 Sarjana Terapan (Setara S1)",
    duration: "4 Tahun (8 Semester)",
    graduates: "300+",
    jobRate: "92%",
    image: "/utama/trk.webp?height=200&width=300",
    color: "from-blue-600 to-cyan-700",
    href: "/program-studi/trk",
  },
  {
    id: "ti",
    title: "D3 Teknik Informatika (A.Md)",
    description: "Program praktis untuk menjadi teknisi informatika yang handal",
    level: "Diploma 3 (Ahli Madya)",
    duration: "3 Tahun (6 Semester)",
    graduates: "800+",
    jobRate: "90%",
    image: "/utama/ti.jpg?height=200&width=300",
    color: "from-purple-600 to-violet-700",
    href: "/program-studi/ti",
  },
  {
    id: "tk",
    title: "D3 Teknik Komputer (A.Md)",
    description: "Spesialisasi dalam hardware komputer dan sistem jaringan",
    level: "Diploma 3 (Ahli Madya)",
    duration: "3 Tahun (6 Semester)",
    graduates: "600+",
    jobRate: "88%",
    image: "/utama/tk.jpg?height=200&width=300",
    color: "from-orange-600 to-red-700",
    href: "/program-studi/tk",
  },
]

export function ProgramStudiOverview() {
  return (
    <section id="program-studi" className="py-20 bg-green-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Program Studi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Studi Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jurusan Teknologi Informasi menawarkan 4 program studi yang dirancang untuk memenuhi kebutuhan industri
            digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programStudi.map((program, index) => (
            <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-50`} />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">{program.level}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Durasi</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Lulusan</div>
                      <div className="font-semibold">{program.graduates}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="text-sm text-gray-600">Tingkat Kerja</div>
                      <div className="font-bold text-emerald-600">{program.jobRate}</div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    <Link href={program.href}>Pelajari Lebih Lanjut</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
