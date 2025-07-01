'use client';

import { visionMission } from '@/data/tk/content';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target } from 'lucide-react';

{
  /* Visi MISI TK*/
}
export function VisionMission() {
  return (
    <section id="visi-dan-misi" className="relative bg-cover bg-center bg-no-repeat py-20 text-white" style={{ backgroundImage: "url('/Group 4.png')" }}>
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#1e4f4b] text-white text-base md:text-lg font-semibold px-5 py-2 rounded-full">Visi & Misi</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Visi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Visi</h3>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{visionMission.vision.content}</p>
            </div>
          </div>
          {/* Misi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Misi</h3>
            <ul className="space-y-4 text-lg">
              {visionMission.mission.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
