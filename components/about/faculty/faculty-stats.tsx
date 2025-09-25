import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react"

const facultyStats = [
  {
    icon: GraduationCap,
    value: "170",
    label: "Faculty Members",
    description: "Full-time professors and researchers",
  },
  {
    icon: Award,
    value: "98%",
    label: "PhD Holders",
    description: "Advanced degrees from top institutions",
  },
  {
    icon: Globe,
    value: "70%",
    label: "International Faculty",
    description: "From leading universities worldwide",
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Publications (2024)",
    description: "In top-tier conferences and journals",
  },
]

export function FacultyStats() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 text-center"
              >
                <CardContent className="p-6">
                  <IconComponent className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <h3 className="font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
