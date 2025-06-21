'use client';

import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Palette, Building2, Book, Building } from 'lucide-react';
import Image from 'next/image';
import { facilities } from '@/data/trk/content';
import { lecturers } from '@/data/trk/lecturers';

const iconMap = {
  Microscope,
  Palette,
  Building2,
  Book,
  Building,
};

const iconColors = {
  Microscope: 'text-cyan-700',
  Palette: 'text-emerald-700',
  Building2: 'text-teal-700',
  Book: 'text-cyan-700',
  Building: 'text-cyan-700',
};

export function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 300; // geser sejauh ini (pixel)
    const delay = 2000; // jeda antar scroll dalam ms (2 detik)

    const scrollCards = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Kalau sudah mentok kanan, balik ke kiri
      if (container.scrollLeft + scrollStep >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollCards, delay);

    return () => clearInterval(interval); // bersihkan jika unmount
  }, []);

  return (
    <section id="fasilitas" className="py-20 bg-gray-50">
      <div className="container px-4 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Dosen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tenaga Pengajar Profesional</h2>
        </div>

        <div ref={scrollRef} className="overflow-x-auto pb-4 scroll-smooth">
          <div className="flex gap-6 min-w-max px-1">
            {lecturers.slice(0, 10).map((lecturer, index) => (
              <Card key={index} className="min-w-[260px] max-w-[300px] flex-shrink-0 group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src={lecturer.photo} alt={lecturer.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle>{lecturer.name}</CardTitle>
                  <CardDescription>{lecturer.position}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center mt-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Fasilitas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lingkungan Belajar yang Lengkap</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon as keyof typeof iconMap];
            const iconColor = iconColors[facility.icon as keyof typeof iconColors];

            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={facility.image || '/placeholder.svg'} alt={facility.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${iconColor}`} />
                    <CardTitle>{facility.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{facility.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
