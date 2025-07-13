import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Award, Building } from 'lucide-react';
import Image from 'next/image';

const jurusanStats = [
  { icon: Users, value: '400+', label: 'Mahasiswa Aktif', color: 'text-blue-600' },
  { icon: GraduationCap, value: 'S.Tr.Kom', label: 'Gelar Lulusan', color: 'text-green-600' },
  { icon: Award, value: '10+', label: 'Dosen Berpengalaman', color: 'text-purple-600' },
  { icon: Building, value: '4 Tahun', label: 'Durasi Studi', color: 'text-orange-600' },
];

export function JurusanProfile() {
  return (
    <section id="tentang-jurusan" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="py-2 px-4 mb-4 bg-blue-200 text-blue-600 hover:text-blue-700 hover:bg-blue-300">Tentang Prodi D4 TRK</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prodi D4 Teknologi Rekayasa Komputer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Program Studi D4 Teknologi Rekayasa Komputer Politeknik Negeri Samarinda berfokus pada pengembangan sistem komputer, jaringan, dan rekayasa perangkat lunak berbasis industri. Dengan dukungan fasilitas modern dan dosen
                berpengalaman di bidangnya.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami berkomitmen mencetak lulusan yang kompeten, adaptif, dan siap bersaing di era transformasi digital dengan kompetensi utama sebagai network administrator, senior programmer, dan IoT Developer.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {jurusanStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <IconComponent className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image src="pembelajaran2.png?height=400&width=600" alt="Mahasiswa Prodi TRK" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-blue-700" />
                    <div>
                      <div className="font-semibold text-gray-900">Akreditasi BAN-PT</div>
                      <div className="text-2xl font-bold text-blue-700">Baik </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
