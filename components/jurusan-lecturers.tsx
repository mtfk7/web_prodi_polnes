'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { lecturers } from '@/data/jurusan/lecturers';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function LecturersJurusan() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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

  return (
    <section id="staf-dan-dosen" className="py-20 bg-white relative overflow-hidden">
      <div className="container px-4 text-center">
        <Badge className="hover:bg-green-200 mb-4 bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm font-bold shadow-lg">Staf & Dosen</Badge>
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
                    <div className="relative  aspect-[1/1] sm:h-64 w-full ">
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
        
        <div className="py-4 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 w-2 rounded-full transition-all ${
                            current === index + 1 ? 'w-4 bg-green-800' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
} 