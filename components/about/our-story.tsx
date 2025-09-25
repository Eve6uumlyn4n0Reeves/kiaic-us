import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Lightbulb, Rocket } from "lucide-react"

const timeline = [
  {
    year: "2020-2022",
    title: "Vision & Planning",
    description:
      "Recognition of the strategic importance of high-tech industry development. A group of visionary scholars, entrepreneurs, and policymakers came together to conceptualize KIAIC.",
    icon: Lightbulb,
  },
  {
    year: "2023",
    title: "Official Establishment",
    description:
      "KIAIC was officially established with strong support from the Kyrgyz government and international partners. Located in vibrant Bishkek, the cultural crossroads of Central Asia.",
    icon: MapPin,
  },
  {
    year: "2024",
    title: "Infrastructure & Faculty",
    description:
      "Construction of the advanced 'Tianshan' supercomputing center and recruitment of world-class faculty from top universities and tech companies globally.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "First Cohort & Breakthroughs",
    description:
      "Welcomed first cohort of students and achieved major research breakthroughs in Central Asian NLP and intelligent water resource management.",
    icon: Calendar,
  },
]

export function OurStory() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            KIAIC's Genesis: A Vision for a Digital Central Asia
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            The birth of the Kyrgyz Institute of Advanced AI and Cybernetics (KIAIC) stems from a bold vision: to
            establish a world-class technology education and research center in Central Asia, leading the region's
            digital transformation and intelligent upgrading.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Continuing Journey</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Today, KIAIC has developed into a benchmark for AI and cybernetics education and research in Central
                Asia. Our story continues as we maintain our commitment to the motto "Innovation, Excellence,
                Responsibility," cultivating the next generation of technology leaders and contributing to the future of
                Central Asia and the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
