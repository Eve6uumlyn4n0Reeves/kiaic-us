import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, User, Mail, Linkedin } from "lucide-react"

const leaders = [
  {
    name: "Dr. Elena Petrova",
    title: "President",
    education: "Ph.D. Computer Science, Stanford University",
    background: "Former Google AI Chief Scientist",
    expertise: ["Artificial Intelligence", "Machine Learning", "Strategic Leadership"],
    description:
      "Leading KIAIC's vision to become Central Asia's premier AI research institution. Previously led breakthrough AI research at Google.",
  },
  {
    name: "Prof. Almazbek Kadyrov",
    title: "Provost",
    education: "Ph.D. Control Theory, MIT",
    background: "Renowned Kyrgyz scholar and cybernetics expert",
    expertise: ["Control Theory", "Systems Engineering", "Academic Leadership"],
    description:
      "Overseeing academic programs and research initiatives. Leading expert in control theory with 20+ years of experience.",
  },
  {
    name: "Mr. Daniyar Amanov",
    title: "Chief Operating Officer",
    education: "MBA, Harvard Business School",
    background: "Former tech industry executive",
    expertise: ["Operations Management", "Strategic Partnerships", "Business Development"],
    description:
      "Managing institute operations and strategic collaborations. Extensive experience in scaling technology organizations.",
  },
  {
    name: "Dr. Wei Chen",
    title: "Vice President for Research",
    education: "Ph.D. Data Science, Tsinghua University",
    background: "Leading researcher in data science and AI",
    expertise: ["Data Science", "Research Strategy", "Technology Transfer"],
    description:
      "Leading research strategy and technology transfer initiatives. Expert in big data analytics and AI applications.",
  },
]

export function LeadershipTeam() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our leadership team brings together world-class expertise in AI, cybernetics, and institutional management
            to guide KIAIC's mission and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <User className="h-10 w-10 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-accent font-medium mb-2">{leader.title}</p>
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <p>{leader.education}</p>
                      <p>{leader.background}</p>
                    </div>

                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                      {leader.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background">
            <Link href="/about/faculty">
              Meet Our Faculty
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
