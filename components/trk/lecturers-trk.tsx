'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { lecturers } from '@/data/trk/lecturers';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function LecturersTrk() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
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
    <section id="dosen" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-[#212F4D] border-blue-200 px-4 py-2 text-sm font-bold">Dosen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212F4D] mb-2">Tenaga Pengajar Profesional</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Didukung oleh tim dosen yang berdedikasi dan berpengalaman di bidangnya.
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
                <div className="p-1">
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image
                        src={imageErrors[index] ? '/placeholder-user.jpg' : lecturer.photo || '/placeholder-user.jpg'}
                        alt={lecturer.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-[#212F4D]">{lecturer.name}</CardTitle>
                      <CardDescription>{lecturer.position}</CardDescription>
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
                            current === index + 1 ? 'w-4 bg-[#212F4D]' : 'bg-gray-300'
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