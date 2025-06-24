import { Button } from '@/components/ui/button';
import { CheckCircle, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export function HowToApply() {
  return (
    <section id="cara-mendaftar" className="py-20 bg-gradient-to-br from-green-700 to-green-900">
      <div className="container px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
                <div className="text-center">
                <Badge className="mb-4 bg-white px-4 py-2 text-green-600 shadow-lg hover:bg-gray-100 hover:text-green-600">Pendaftaran</Badge>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
            {/* Right Image Section */}
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/apply.jpeg" alt="Penerimaan Mahasiswa" fill className="object-cover transition-transform duration-700 hover:scale-110" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Card on image */}
              <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 sm:left-[-1.5rem] sm:translate-x-0 bg-white/90 backdrop-blur-md shadow-2xl border border-[#11418B]/30 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/90 opacity-70" />
                <div className="p-3 relative z-10 flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-400 rounded-2xl blur opacity-90" />
                    <div className="relative bg-gradient-to-br from-green-600  to-green-800 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-yellow-500" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-green-700 mb-0.5">Pendaftaran Dibuka</div>
                    <div className="text-yellow-500 text-lg font-bold">2024/2025</div>
                  </div>
                </div>
              </div>    
            </div>
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Jalur Pendaftaran</h2>
              <p className="text-white/90 mb-8 leading-relaxed text-lg max-w-lg">Informasi jalur penerimaan mahasiswa, serta pendaftaran online calon mahasiswa baru selengkapnya dapat diakses melalui tautan-tautan berikut.</p>
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
           <Button className="bg-white text-green-700 rounded-2xl hover:text-green-700 hover:bg-gray-100 hover:scale-105 font-bold text-lg shadow-lg transition-transform duration-200">Daftar Sekarang</Button>
              </Link>
              <p className="text-sm text-white/60 mt-4">Batas akhir pendaftaran: 31 Juli 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
