import { Header } from '@/components/trk/header-trk';
import { Hero } from '@/components/trk/hero-trk';
import { ProgramHighlights } from '@/components/trk/program-highlights-trk';
import { VisionMission } from '@/components/trk/vision-mission-trk';
import { DepartmentProfile } from '@/components/trk/department-profile-trk';
import { LecturesTrk } from '@/components/trk/lectures-trk';
import { Achievements } from '@/components/trk/achievements-trk';
import { SupportedBy } from '@/components/trk/supported-by-trk';
import { StudentProjects } from '@/components/trk/student-projects-trk';

import { HowToApply } from '@/components/trk/how-to-apply-trk';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { ScrollAnimationWrapper } from '@/components/page-animation-wrapper';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D4 Teknologi Rekayasa Komputer</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ScrollAnimationWrapper animationType="fadeInUp" delay={100}>
          <DepartmentProfile />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInLeft" delay={200}>
          <VisionMission />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInRight" delay={100}>
          <ProgramHighlights />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="scaleIn" delay={150}>
          <LecturesTrk />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInUp" delay={100}>
          <Achievements />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="fadeInLeft" delay={200}>
          <SupportedBy />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationType="scaleIn" delay={150}>
          <HowToApply />
        </ScrollAnimationWrapper>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
