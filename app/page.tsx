import { Header } from '@/components/header';
import { JurusanHero } from '@/components/jurusan-hero';

import { JurusanProfile } from '@/components/jurusan-profile';
import { JurusanFacilities } from '@/components/jurusan-facilities';
import { JurusanAchievements } from '@/components/jurusan-achievements';
import { JurusanNews } from '@/components/jurusan-news';
import { JurusanTestimoni } from '@/components/jurusan-testimoni';
import { StrukturOrganisasi } from '@/components/struktur-organisasi';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { HowToApply } from '@/components/jurusan-how-to-apply';
import { VisionMission } from '@/components/jurusan-vision-mission';
import { LecturersJurusan } from '@/components/jurusan-lecturers';
import { StudentProjects } from '@/components/jurusan-student-projects';
import { ProgramHighlights } from '@/components/trk/program-highlights-trk';
import { ScrollAnimationWrapper } from '@/components/page-animation-wrapper';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D4 Teknologi Rekayasa Komputer POLNES</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <JurusanHero />
        <ScrollAnimationWrapper animationType="fadeInUp" delay={100}>
          <JurusanProfile />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInLeft" delay={200}>
          <VisionMission />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInRight" delay={100}>
          <ProgramHighlights />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="scaleIn" delay={150}>
          <JurusanFacilities />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInUp" delay={100}>
          <StrukturOrganisasi />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInLeft" delay={200}>
          <LecturersJurusan />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInRight" delay={100}>
          <JurusanAchievements />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="scaleIn" delay={150}>
          <StudentProjects />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInUp" delay={100}>
          <JurusanTestimoni />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInLeft" delay={200}>
          <JurusanNews />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInRight" delay={100}>
          <HowToApply />
        </ScrollAnimationWrapper>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
