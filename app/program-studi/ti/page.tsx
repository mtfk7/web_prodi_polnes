import { Header } from "@/components/ti/header-ti"
import { Hero } from "@/components/ti/hero-ti"
import { ProgramHighlights } from "@/components/ti/program-highlights-ti"
import { VisionMission } from "@/components/ti/vision-mission-ti"
import { DepartmentProfile } from "@/components/ti/department-profile-ti"
import { Facilities } from "@/components/ti/facilities-ti"
import { Achievements } from "@/components/ti/achievements-ti"
import { SupportedBy } from "@/components/ti/supported-by-ti"
import { StudentProjects } from "@/components/ti/student-projects-ti"
import { HowToApply } from "@/components/ti/how-to-apply-ti"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D3 Teknik Informatika</title>
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
        <HowToApply />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
