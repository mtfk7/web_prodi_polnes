'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// Mock data - replace with your actual data import
const departmentProfile = {
  badge: 'Tentang Kami',
  title: 'Departemen Teknik Rekayasa Komputer',
  description:
    'Kami adalah departemen yang berfokus pada pengembangan teknologi komputer dan rekayasa perangkat lunak. Dengan fasilitas modern dan dosen berpengalaman, kami berkomitmen menghasilkan lulusan yang kompeten dan siap menghadapi tantangan industri teknologi.',
  stats: [
    { value: '500+', label: 'Mahasiswa', color: 'text-[#164c61]', icon: Users },
    { value: '25+', label: 'Dosen', color: 'text-[#212f4d]', icon: Award },
    { value: '15+', label: 'Laboratorium', color: 'text-[#164c61]', icon: BookOpen },
    { value: '95%', label: 'Tingkat Kelulusan', color: 'text-[#212f4d]', icon: TrendingUp },
  ],
  image: '/activestudents.png?height=400&width=600',
  activeStudents: '487',
};

export function DepartmentProfile() {
  return (
    <section id="tentang-kami" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-cyan-100 to-blue-100 text-[#212F4D] border-cyan-200 px-4 py-2 text-sm font-bold">{departmentProfile.badge}</Badge>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{departmentProfile.title}</h2>

              <p className="text-gray-600 mb-10 leading-relaxed text-lg">{departmentProfile.description}</p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {departmentProfile.stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                        <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')} opacity-60`} />
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src={departmentProfile.image || '/activestudents.png'} alt="Department Faculty and Students" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating decorative elements */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                </div>

                {/* Enhanced Active Students Card */}
                <div>
                  <Card className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md shadow-2xl border-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#164c61] to-[#212f4d] rounded-2xl blur opacity-30" />
                          <div className="relative bg-gradient-to-br from-[#164c61] to-[#212f4d] p-4 rounded-2xl">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-700 mb-1">Mahasiswa Aktif</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-[#164c61] to-[#212f4d] bg-clip-text text-transparent">{departmentProfile.activeStudents}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Additional floating card */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">Terakreditasi A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
