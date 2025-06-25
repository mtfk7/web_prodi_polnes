import { Header } from "@/components/tk/header-tk"
import { Hero } from "@/components/tk/hero-tk"
import { ProgramHighlights } from "@/components/tk/program-highlights-tk"
import { VisionMission } from "@/components/tk/vision-mission-tk"
import { DepartmentProfile } from "@/components/tk/department-profile-tk"
import { Facilities } from "@/components/tk/facilities-tk"
import { Achievements } from "@/components/tk/achievements-tk"
import { SupportedBy } from "@/components/tk/supported-by-tk"
import { StudentProjects } from "@/components/tk/student-projects-tk"
import { LecturesTk } from "@/components/tk/lectures-tk"
import { HowToApply } from "@/components/tk/how-to-apply-tk"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>D3 Teknik Komputer</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <DepartmentProfile />
        <VisionMission />
        <ProgramHighlights />
        <LecturesTk />
        <Achievements />
        <SupportedBy />
        <HowToApply />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
