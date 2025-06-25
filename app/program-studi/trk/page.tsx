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
        <DepartmentProfile />
        <VisionMission />
        <ProgramHighlights />
        <LecturesTrk />
        <Achievements />
        <SupportedBy />
        <HowToApply />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
