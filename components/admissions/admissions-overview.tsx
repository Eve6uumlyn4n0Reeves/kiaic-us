import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Brain, Users, Lightbulb, Globe, Zap } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "World-Class Curriculum",
    description: "Our programs follow the latest developments in global AI, covering cutting-edge fields.",
  },
  {
    icon: Users,
    title: "Top-Tier Faculty",
    description: "Professors from international top universities and tech giants with rich experience.",
  },
  {
    icon: Lightbulb,
    title: "Practice-Oriented Learning",
    description: "Project-driven learning model, participating in real-world research and industry projects.",
  },
  {
    icon: Zap,
    title: "Advanced Facilities",
    description: "Central Asia's most advanced supercomputing center and robotics laboratories.",
  },
  {
    icon: Globe,
    title: "Global Career Prospects",
    description: "Our graduates are highly sought after in the global technology industry.",
  },
  {
    icon: GraduationCap,
    title: "Diverse Community",
    description: "Multicultural, international community fostering collaboration and innovation.",
  },
]

export function AdmissionsOverview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Why Choose KIAIC?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Welcome to apply to the Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC). Our admissions process is
            comprehensive and rigorous, designed to select applicants with the greatest potential and best fit for our
            unique academic environment. We value academic achievement, but we place greater emphasis on your curiosity,
            problem-solving ability, programming skills, and teamwork spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            KIAIC is committed to building a diverse and inclusive community. We welcome students from different
            backgrounds and countries to apply. Our comprehensive admissions process evaluates not just academic
            credentials, but also your potential to contribute to our vibrant research community and your commitment to
            using technology for positive impact.
          </p>
        </div>
      </div>
    </section>
  )
}
