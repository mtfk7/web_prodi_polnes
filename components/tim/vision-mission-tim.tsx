'use client';

import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target } from 'lucide-react';
import { visionMission } from '@/data/tim/content';

{
  /* Visi MISI TIM*/
}
export function VisionMission() {
  return (
    <section id="visi-dan-misi" className="relative bg-cover bg-center bg-no-repeat py-20 text-white" style={{ backgroundImage: "url('/Group 6.png')" }}>
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#283f81] text-white text-base md:text-lg font-semibold px-5 py-2 rounded-full">Visi & Misi</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Visi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{visionMission.vision.title}</h3>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-blue-100">{visionMission.vision.content}</p>
            </div>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{visionMission.mission.title}</h3>
            <ul className="space-y-4 text-lg text-blue-100">
              {visionMission.mission.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
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
