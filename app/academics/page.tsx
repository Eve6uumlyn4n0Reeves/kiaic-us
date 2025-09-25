import { AcademicsHero } from "@/components/academics/academics-hero"
import { ProgramsOverview } from "@/components/academics/programs-overview"
import { UndergraduatePrograms } from "@/components/academics/undergraduate-programs"
import { GraduatePrograms } from "@/components/academics/graduate-programs"
import { ResearchCenters } from "@/components/academics/research-centers"
import { AcademicCalendar } from "@/components/academics/academic-calendar"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AcademicsHero />
      <ProgramsOverview />
      <UndergraduatePrograms />
      <GraduatePrograms />
      <ResearchCenters />
      <AcademicCalendar />
    </div>
  )
}
