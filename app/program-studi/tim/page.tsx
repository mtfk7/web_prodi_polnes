import { Header } from '@/components/tim/header-tim';
import { Hero } from '@/components/tim/hero-tim';
import { ProgramHighlights } from '@/components/tim/program-highlights-tim';
import { VisionMission } from '@/components/tim/vision-mission-tim';
import { DepartmentProfile } from '@/components/tim/department-profile-tim';
import { Facilities } from '@/components/tim/facilities-tim';
import { Achievements } from '@/components/tim/achievements-tim';
import { LecturesTim } from '@/components/tim/lectures-tim';
import { SupportedBy } from '@/components/tim/supported-by-tim';

import { HowToApply } from '@/components/tim/how-to-apply-tim';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { ScrollAnimationWrapper } from '@/components/page-animation-wrapper';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D4 Teknik Informatika Multimedia</title>
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
          <LecturesTim />
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
