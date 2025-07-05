import { Header } from '@/components/tk/header-tk';
import { Hero } from '@/components/tk/hero-tk';
import { ProgramHighlights } from '@/components/tk/program-highlights-tk';
import { VisionMission } from '@/components/tk/vision-mission-tk';
import { DepartmentProfile } from '@/components/tk/department-profile-tk';
import { Facilities } from '@/components/tk/facilities-tk';
import { Achievements } from '@/components/tk/achievements-tk';
import { SupportedBy } from '@/components/tk/supported-by-tk';
import { StudentProjects } from '@/components/tk/student-projects-tk';
import { LecturesTk } from '@/components/tk/lectures-tk';
import { HowToApply } from '@/components/tk/how-to-apply-tk';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { ScrollAnimationWrapper } from '@/components/page-animation-wrapper';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D3 Teknik Komputer</title>
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
          <LecturesTk />
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
