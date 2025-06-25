import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Code2, Palette, Smartphone, Gamepad2, CheckCircle, Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { programsData } from "@/data/tk/programs"

const iconMap = {
  Code2,
  Palette,
  Smartphone,
  Gamepad2,
}

export function ExploreProgramsContent() {
  return (
    <div className="bg-white">

      {/* Program Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">

          <div className="max-w-4xl mx-auto text-center text-black">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{programsData.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{programsData.subtitle}</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle>Program 4 Tahun</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Kurikulum komprehensif 8 semester dengan magang industri. Lulusan dengan gelar S.Tr.Kom</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle>Kelas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Maksimal 30 mahasiswa per kelas</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle>Tersertifikasi Industri</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Lulusan menerima sertifikasi yang diakui industri</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white-100">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="py-2 px-4 mb-4 bg-teal-100 text-teal-800">Peminatan</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilih Jalur Anda</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Spesialisasi di bidang yang Anda minati dan menjadi ahli di bidang pilihan Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programsData.specializations.map((spec, index) => {
                const IconComponent = iconMap[spec.icon as keyof typeof iconMap]
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{spec.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{spec.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Keterampilan Utama:</h4>
                          <div className="flex flex-wrap gap-2">
                            {spec.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Peluang Karir:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {spec.careerPaths.map((career, careerIndex) => (
                              <li key={careerIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-teal-500" />
                                {career}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="py-2 px-4 mb-4 bg-teal-100 text-teal-700">Kurikulum</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Semester demi Semester</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kurikulum kami dirancang dengan cermat mulai dari dasar hingga spesialisasi lanjutan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programsData.curriculum.map((semester, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {semester.semester}
                        </div>
                        <CardTitle className="text-lg">{semester.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {semester.totalSks} SKS
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {semester.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="text-sm text-gray-600 flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span>{course.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs font-mono">
                            {course.sks} SKS
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="p-4 bg-teal-50 rounded-lg inline-block">
                <p className="text-lg font-semibold text-teal-900">
                  Total SKS Program: <span className="text-2xl font-bold">{programsData.totalProgramSks} SKS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*       
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="py-2 px-4 mb-4 bg-teal-100 text-teal-700">Lingkungan Belajar</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fasilitas Modern</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programsData.facilities.map((facility, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{facility.name}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
} 