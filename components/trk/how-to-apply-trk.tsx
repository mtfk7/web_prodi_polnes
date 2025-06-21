import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { programsData } from '@/data/trk/programs';

export function HowToApply() {
  return (
    <section id="cara-mendaftar" className="relative bg-[#212F4D] py-8 text-white overflow-visible mt-20">
      <div className="container px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div className="px-8 md:px-16 py-8 z-20 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Jalur Pendaftaran</h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">Informasi jalur penerimaan mahasiswa, serta pendaftaran online calon mahasiswa baru selengkapnya dapat diakses melalui tautan-tautan berikut.</p>

            <ul className="mb-8 space-y-3 text-white/90 text-lg font-medium">
              <li className="flex items-start gap-2 pt-1">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                Jalur SNBP (Seleksi Nasional Berdasarkan Prestasi)
              </li>
              <li className="flex items-start gap-2 pt-1">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                Jalur SNBT (Seleksi Nasional Berdasarkan Tes)
              </li>
              <li className="flex items-start gap-2 pt-1">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                Jalur Mandiri Polnes
              </li>
            </ul>

            <Link href="https://pmb.polnes.ac.id/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-purple-600 hover:bg-gray-200 font-bold text-lg">Daftar Sekarang</Button>
            </Link>

            <p className="text-sm text-white/60 mt-4">Batas akhir pendaftaran: 31 Juli 2025</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[350px] md:h-[400px] overflow-visible">
            <div className="absolute top-[-150px] right-[-150px] w-[400px] md:w-[700px] h-[320px] md:h-[400px]">
              <Image src="/pembelajaran.png" alt="Penerimaan Mahasiswa" fill className="object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
