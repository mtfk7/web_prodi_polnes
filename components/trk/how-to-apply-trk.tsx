import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { programsData } from "@/data/trk/programs"

export function HowToApply() {
  return (
    <section id="cara-mendaftar" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700">Pendaftaran</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Mendaftar</h2>
            <p className="text-gray-600">Siap memulai perjalanan Anda? Berikut yang perlu Anda ketahui</p>
          </div>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">Jalur Pendaftaran</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {programsData.admissionRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-8" />

              <div className="text-center">
                <Link href="https://pmb.polnes.ac.id/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-800 hover:to-cyan-950"
                  >
                    Daftar Sekarang
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-4">Batas akhir pendaftaran: 31 Juli 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}