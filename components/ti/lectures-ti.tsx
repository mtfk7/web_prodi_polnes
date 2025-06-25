'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { lecturers } from '@/data/ti/lecturers';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function LecturesTi() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [showAllLecturers, setShowAllLecturers] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleLecturersView = () => {
    setShowAllLecturers(!showAllLecturers);
  };

  return (
    <section id="daftar-dosen" className="py-20 bg-white relative overflow-hidden">
      <div className="container px-6 text-center">
        <Badge className="py-2 px-4 py-2 px-4 py-2 px-4 hover:bg-emerald-200 mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 shadow-lg">Dosen Prodi TI</Badge>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tenaga Pengajar Profesional</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Didukung oleh staf dan dosen yang berdedikasi dan berpengalaman di bidangnya.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {lecturers.map((lecturer, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 bg-gray-100 rounded-2xl shadow-xs">
                  <Card className="shadow-xs rounded-2xl h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[1/1] sm:h-64 w-full">
                      <Image
                        src={imageErrors[index] ? '/placeholder-user.jpg' : lecturer.photo || '/placeholder-user.jpg'}
                        alt={lecturer.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="hover:text-black text-lg text-gray-800">{lecturer.name}</CardTitle>
                      <CardDescription className="">{lecturer.position}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex left-4 sm:-left-8" />
          <CarouselNext className="flex right-4 sm:-right-8" />
        </Carousel>

        {/* Toggle button for showing all lecturers */}
        <div className="text-center mt-8">
          <Button
            onClick={toggleLecturersView}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md"
          >
            {showAllLecturers ? (
              <>
                <ChevronUp className="h-5 w-5 mr-2" />
                Sembunyikan Daftar Dosen
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5 mr-2" />
                Lihat Dosen Selengkapnya
              </>
            )}
          </Button>
        </div>

        {/* Expanded view of all lecturers */}
        {showAllLecturers && (
          <div className="mt-16 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {lecturers.map((lecturer, index) => (
                <div key={index} className="group">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={imageErrors[index] ? '/placeholder-user.jpg' : lecturer.photo || '/placeholder-user.jpg'}
                        alt={lecturer.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-sm mb-1">{lecturer.name}</h3>
                        <p className="text-xs text-gray-200 truncate">{lecturer.position}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
