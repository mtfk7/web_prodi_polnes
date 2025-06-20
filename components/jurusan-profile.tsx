import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Award, Building } from "lucide-react"
import Image from "next/image"

const jurusanStats = [
  { icon: Users, value: "2000+", label: "Total Mahasiswa", color: "text-blue-600" },
  { icon: GraduationCap, value: "5000+", label: "Total Lulusan", color: "text-green-600" },
  { icon: Award, value: "25+", label: "Dosen Berpengalaman", color: "text-purple-600" },
  { icon: Building, value: "4", label: "Program Studi", color: "text-orange-600" },
]

export function JurusanProfile() {
  return (
    <section id="tentang-jurusan" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Tentang Jurusan</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pelopor Pendidikan Teknologi Informasi di Kalimantan Timur
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Jurusan Teknologi Informasi Politeknik Negeri Samarinda telah menjadi pusat keunggulan dalam pendidikan
                vokasi teknologi informasi sejak didirikan. Dengan komitmen untuk menghasilkan lulusan yang siap kerja
                dan berdaya saing tinggi di era digital.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami menggabungkan pembelajaran teoretis dengan praktik industri yang relevan, didukung oleh fasilitas
                modern dan dosen berpengalaman dari industri dan akademisi.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {jurusanStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IconComponent className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/activestudents.png?height=400&width=600"
                  alt="Mahasiswa Jurusan TI"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-blue-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Akreditasi</div>
                      <div className="text-2xl font-bold text-blue-700">Baik</div>
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
