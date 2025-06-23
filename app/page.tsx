import { Header } from "@/components/header"
import { JurusanHero } from "@/components/jurusan-hero"
import { ProgramStudiOverview } from "@/components/program-studi-overview"
import { JurusanProfile } from "@/components/jurusan-profile"
import { JurusanFacilities } from "@/components/jurusan-facilities"
import { JurusanAchievements } from "@/components/jurusan-achievements"
import { JurusanNews } from "@/components/jurusan-news"
import { StrukturOrganisasi } from "@/components/struktur-organisasi"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { HowToApply } from "@/components/jurusan-how-to-apply"
import { VisionMission } from "@/components/jurusan-vision-mission"
import { LecturersJurusan } from "@/components/jurusan-lecturers"

import Head from "next/head"

export default function HomePage() {
  // Tambahkan delay 2 detik untuk uji loading
  return (
    <>
      <Head>
        <title>Jurusan Teknologi Informasi POLNES</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <JurusanHero />
        <VisionMission/>
        <ProgramStudiOverview />
        <JurusanProfile />
        <JurusanFacilities />
        <JurusanAchievements />
        <StrukturOrganisasi />
        <LecturersJurusan />
        <JurusanNews />
        <HowToApply/>
        <Footer />
        <BackToTop />
        
      </div>
    </>
  )
}
