import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, GraduationCap, BookOpen, Microscope, ArrowRight } from "lucide-react"

const mscRequirements = [
  "Bachelor's degree in computer science, mathematics, physics, engineering, or related field",
  "Undergraduate GPA minimum: 3.5/4.0",
  "Prerequisite courses: calculus, linear algebra, probability and statistics, data structures and algorithms, advanced programming",
  "GRE scores (Quantitative section minimum: 165 points)",
  "TOEFL iBT minimum: 100 points or IELTS minimum: 7.0 points",
  "Three recommendation letters (at least two from academic recommenders)",
  "Statement of Purpose (maximum 1500 words)",
  "Detailed CV/Resume",
]

const phdRequirements = [
  "Master's degree in related field (exceptional undergraduates may apply for direct PhD)",
  "GPA minimum: 3.8/4.0",
  "Strong independent research capability with publications in top conferences/journals preferred",
  "Detailed research proposal (maximum 5000 words)",
  "Three strong recommendation letters from renowned scholars",
  "Advisor matching strongly recommended before application",
  "In-depth interview and research proposal defense required",
]

const programs = [
  {
    icon: BookOpen,
    title: "M.Sc. in Data Science and Cybernetics",
    duration: "2 years",
    description:
      "Cultivating professionals who can extract insights from massive data and design complex control systems.",
    highlights: ["Applied Statistics", "Big Data Platforms", "Time Series Analysis", "Modern Control Theory"],
  },
  {
    icon: Microscope,
    title: "Ph.D. in Computational Intelligence and Robotics",
    duration: "3-4 years",
    description: "Training top-tier researchers in original research at AI and robotics frontiers.",
    highlights: ["Explainable AI (XAI)", "Quantum Machine Learning", "Autonomous Systems", "Human-Robot Interaction"],
  },
]

export function GraduateAdmissions() {
  return (
    <section id="graduate" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            Advancing Your Expertise: Graduate Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our graduate programs are designed to cultivate advanced professionals with deep expertise and independent
            research capabilities in artificial intelligence, data science, and cybernetics.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-accent mr-3" />
                    <Badge variant="outline" className="border-accent/40 text-accent">
                      {program.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-balance">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{program.description}</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* M.Sc. Requirements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-accent mr-3" />
              M.Sc. Requirements
            </h3>
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {mscRequirements.map((req, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ph.D. Requirements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Microscope className="h-6 w-6 text-accent mr-3" />
              Ph.D. Requirements
            </h3>
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {phdRequirements.map((req, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background">
              <Link href="#apply-now">
                Apply for M.Sc. Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
            >
              <Link href="#apply-now">
                Apply for Ph.D. Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
