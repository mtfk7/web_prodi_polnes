import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Palette, Building2, Book, Building } from 'lucide-react';
import Image from 'next/image';
import { facilities } from '@/data/ti/content';

const iconMap = {
  Microscope,
  Palette,
  Building2,
  Book,
  Building,
};

const iconColors = {
  Microscope: 'text-emerald-700',
  Palette: 'text-emerald-700',
  Building2: 'text-teal-700',
  Book: 'text-emerald-700',
  Building: 'text-purple-700',
};

export function Facilities() {
  return (
    <section id="fasilitas" className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="px-4 py-2 text-sm mb-4 bg-emerald-100 text-emerald-800">Fasilitas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lingkungan Belajar yang Lengkap</h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Our state-of-the-art facilities provide students with the tools they need to excel
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
