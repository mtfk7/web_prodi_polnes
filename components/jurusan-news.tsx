import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const news = [
  {
    title: "Mahasiswa Jurusan TI Raih Juara di Hackathon Nasional",
    description:
      "Tim Ketasive Jurusan TI berhasil meraih juara, mereka berhasil mengembangkan 𝘤𝘩𝘢𝘵𝘣𝘰𝘵 berbasis 𝘢𝘳𝘵𝘪𝘧𝘪𝘤𝘪𝘢𝘭 𝘪𝘯𝘵𝘦𝘭𝘭𝘪𝘨𝘦𝘯𝘤𝘦 (AI) untuk membantu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) dalam melayani pelanggan.",
    image: "/berita/hackathon2.jpg?height=200&width=300",
    date: "21 Juni 2025",
    category: "Prestasi",
    sumber:"UKM Jurnalistik",
    href: "https://ukmjurnalistik.polnes.ac.id/tim-ketasive-polnes-raih-juara-di-hackathon-nasional",
  },
    {
    title: "Mahasiswa Jurusan TI Raih Juara 1 dan Juara 3 Hackathon Infinite Devfest 4.0 di (Institut Negeri Kalimantan) Balikpapan",
    description:
      "Tim mahasiswa Jurusan TI berhasil meraih juara 1 dan juara 3 dalam kompetisi hackathon infinite devfest dengan inovasi aplikasi Automatic Essay Correction & aplikasi “Ngertiin” di bidang edukasi",
    image: "/berita/hackathon.jpg?height=200&width=300",
    date: "04 Juni 2025",
    category: "Prestasi",
    sumber:"UKM Jurnalistik",
    href: "https://ukmjurnalistik.polnes.ac.id/untuk-edukasi-polnes-tembus-juara-di-hackathon-infinite-devfest-4-0",
  },
  {
    title: "HIMA TI POLNES Tebar Kebaikan Ramadhan di Panti Asuhan",
    description: "Himpunan Mahasiswa Jurusan Teknologi Informasi (HIMA TI) Politeknik Negeri Samarinda (POLNES) telah sukses menggelar acara donasi yang inspiratif pada tanggal 22 Maret 2025 di Panti Asuhan Yatim Berkah Syariah.",
    image: "/berita/panti.jpg?height=200&width=300",
    date: "24 Maret 2025",
    category: "Lainnya",
    sumber:"UKM Jurnalistik",
    href: "https://ukmjurnalistik.polnes.ac.id/hima-ti-polnes-tebar-kebaikan-ramadhan-di-panti-asuhan",
  },
  {
    title: "SYNERGY DAY 2025: LIMITLESS CREATION, IMPACT THE WORLD",
    description:
      "Kegiatan Bina Akrab yang diselenggarakan oleh Himpunan Mahasiswa Jurusan Teknologi Informasi (HIMA TI) sukses digelar selama dua hari, Sabtu dan Minggu 22-23 Februari 2025. Kegiatan yang bertajuk “Synergy Day” ini mengusung tema “Limitless Creation, Impact the World” , yang bertujuan untuk mendorong kreativitas tanpa batas serta memberikan dampak positif bagi lingkungan sekitar.",
    image: "/berita/ba.jpg?height=200&width=300",
    date: "5 Desember 2024",
    category: "Workshop",
    sumber:"UKM Jurnalistik",
    href: "https://ukmjurnalistik.polnes.ac.id/synergy-day-2025-limitless-creation-impact-the-world",
  },
]

export function JurusanNews() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 py-2 text-sm px-4 bg-green-100 text-green-800">Berita & Kegiatan</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terkini</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Update terbaru tentang kegiatan, prestasi, dan perkembangan Jurusan Teknologi Informasi
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {news.map((item, index) => (
    <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-yellow-400 hover:bg-yellow-400 hover:text-green-700 text-green-800">{item.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-black transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">{item.description}</CardDescription>
                <CardDescription className="text-sm">
                  Sumber : <Badge className="bg-yellow-400 hover:bg-yellow-400 hover:text-green-700 text-green-800 mb-4">{item.sumber}</Badge>
                </CardDescription>
                <Button variant="outline" asChild className="group/btn">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
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
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
          >
            <Link href="/berita">Lihat Semua Berita</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
