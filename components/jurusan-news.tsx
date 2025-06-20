import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const news = [
  {
    title: "Mahasiswa TI Raih Juara 1 Hackathon Nasional",
    description:
      "Tim mahasiswa Jurusan TI berhasil meraih juara 1 dalam kompetisi hackathon tingkat nasional dengan inovasi aplikasi smart city",
    image: "/news-hackathon.png?height=200&width=300",
    date: "15 Desember 2024",
    category: "Prestasi",
    href: "#",
  },
  {
    title: "Kerjasama dengan Industri Teknologi Terkemuka",
    description: "Penandatanganan MoU dengan beberapa perusahaan teknologi untuk program magang dan rekrutmen lulusan",
    image: "/news-kerjasama.png?height=200&width=300",
    date: "10 Desember 2024",
    category: "Kerjasama",
    href: "#",
  },
  {
    title: "Workshop AI dan Machine Learning",
    description:
      "Pelaksanaan workshop intensif tentang kecerdasan buatan dan machine learning untuk mahasiswa dan dosen",
    image: "/news-workshop.png?height=200&width=300",
    date: "5 Desember 2024",
    category: "Workshop",
    href: "#",
  },
  {
    title: "Peluncuran Program Sertifikasi Internasional",
    description: "Jurusan TI meluncurkan program sertifikasi internasional bekerjasama dengan vendor teknologi global",
    image: "/news-sertifikasi.png?height=200&width=300",
    date: "1 Desember 2024",
    category: "Program",
    href: "#",
  },
]

export function JurusanNews() {
  return (
    <section className="py-20 bg-white-100">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Berita & Kegiatan</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terkini</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Update terbaru tentang kegiatan, prestasi, dan perkembangan Jurusan Teknologi Informasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">{item.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">{item.description}</CardDescription>

                <Button variant="outline" asChild className="group/btn">
                  <Link href={item.href}>
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <Link href="/berita">Lihat Semua Berita</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
