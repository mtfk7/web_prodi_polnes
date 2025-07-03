'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Link as LucideLink, Palette, Smartphone, Sparkles, Network, FlaskConical, BrainCircuit, ShieldCheck, UserCog, ChevronDown, ChevronUp } from 'lucide-react';
import { programHighlights } from '@/data/trk/content';

import { Button } from '../ui/button';
import { useState } from 'react';
import { ExploreProgramsContent } from '../trk/explore-programs-content-trk';

const iconMap = {
  Code2,
  Palette,
  Smartphone,
  Sparkles,
  LucideLink,
  Network,
  FlaskConical,
  BrainCircuit,
  ShieldCheck,
  UserCog,
};

export function ProgramHighlights() {
  const [showExploreContent, setShowExploreContent] = useState(false);

  const handleToggle = () => {
    setShowExploreContent(!showExploreContent);

    // If showing content, scroll to it smoothly
    if (!showExploreContent) {
      setTimeout(() => {
        const element = document.getElementById('explore-programs-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure content is rendered
    }
  };

  return (
    <section id="kurikulum" className="py-20 bg-sky-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="hover:bg-cyan-200 mb-4 bg-cyan-100 text-cyan-800 px-4 py-2 text-sm">Sorotan Kurikulum</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kurikulum Selalu Relevan</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">Program D4 Teknik Informatika Multimedia menawarkan pengalaman belajar lengkap yang menggabungkan pengetahuan teoretis dengan keterampilan praktis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programHighlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${highlight.gradient}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${highlight.iconGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <Button onClick={handleToggle} size="lg" className="bg-amber-400 text-black hover:bg-amber-300 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            {showExploreContent ? (
              <>
                <ChevronUp className="h-5 w-5 mr-2" />
                Sembunyikan Kurikulum
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5 mr-2" />
                Jelajahi Kurikulum Selengkapnya
              </>
            )}
          </Button>
        </div>

        {/* Toggle Content */}
        {showExploreContent && (
          <div id="explore-programs-content" className="mt-16 animate-fadeIn">
            <ExploreProgramsContent />
          </div>
        )}
      </div>
    </section>
  );
}
