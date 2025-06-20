import { Header } from "@/components/tim/header-tim"
import { Hero } from "@/components/tim/hero-tim"
import { ProgramHighlights } from "@/components/tim/program-highlights-tim"
import { VisionMission } from "@/components/tim/vision-mission-tim"
import { DepartmentProfile } from "@/components/tim/department-profile-tim"
import { Facilities } from "@/components/tim/facilities-tim"
import { Achievements } from "@/components/tim/achievements-tim"
import { SupportedBy } from "@/components/tim/supported-by-tim"
import { StudentProjects } from "@/components/tim/student-projects-tim"
import { GraduateResults } from "@/components/tim/graduate-results-tim"
import { HowToApply } from "@/components/tim/how-to-apply-tim"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D4 Teknik Informatika Multimedia</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <VisionMission />
        <DepartmentProfile />
        <ProgramHighlights />
        <Facilities />
        <Achievements />
        
        <StudentProjects />
        <SupportedBy />
        <GraduateResults />
        <HowToApply />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
