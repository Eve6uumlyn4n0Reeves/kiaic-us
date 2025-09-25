import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Microscope, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "B.Sc. in Artificial Intelligence and Machine Learning",
    duration: "4 years",
    level: "Undergraduate",
    description:
      "Our flagship undergraduate program focusing on deep learning, NLP, computer vision, and reinforcement learning core principles. Emphasizes strong mathematical foundations and engineering practice capabilities.",
    highlights: ["Advanced Mathematics", "Python Programming", "Deep Learning Architectures", "Algorithm Design"],
    href: "/academics/undergraduate",
  },
  {
    icon: BookOpen,
    title: "M.Sc. in Data Science and Cybernetics",
    duration: "2 years",
    level: "Graduate",
    description:
      "Cultivating professionals who can extract insights from massive data and design complex control systems. Covers big data technologies, predictive models, system dynamics, and intelligent control.",
    highlights: ["Applied Statistics", "Big Data Platforms", "Time Series Analysis", "Modern Control Theory"],
    href: "/academics/graduate",
  },
  {
    icon: Microscope,
    title: "Ph.D. in Computational Intelligence and Robotics",
    duration: "3-4 years",
    level: "Doctoral",
    description:
      "Training top-tier researchers in original research at the frontiers of AI and robotics technology, encouraging interdisciplinary exploration.",
    highlights: ["Explainable AI (XAI)", "Quantum Machine Learning", "Autonomous Systems", "Human-Robot Interaction"],
    href: "/academics/phd",
  },
]

export function ProgramsOverview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto space-content">
          <div className="text-center space-elements">
            <h2 className="text-headline font-bold text-balance">A Curriculum for the Future</h2>
            <p className="text-body-large text-muted-foreground text-balance max-w-3xl mx-auto">
              Our programs are designed to prepare students for the challenges and opportunities of tomorrow, combining
              theoretical rigor with practical application in cutting-edge AI and cybernetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <div key={index} className="academic-card p-6 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                      {program.level}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-balance mb-2 group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>

                  <div className="text-sm text-muted-foreground mb-4">Duration: {program.duration}</div>

                  <div className="space-elements">
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{program.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-foreground">Core Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="ghost" className="w-full justify-between group-hover:text-accent">
                      <Link href={program.href} className="inline-flex items-center justify-between w-full group/btn">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/academics" className="inline-flex items-center gap-2 group">
                <span>View All Programs</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
