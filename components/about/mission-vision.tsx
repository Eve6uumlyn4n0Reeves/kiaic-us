import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing the boundaries of AI and cybernetics through cutting-edge research and creative solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Maintaining the highest standards in education, research, and technological development.",
  },
  {
    icon: Heart,
    title: "Responsibility",
    description: "Ensuring AI development serves humanity and addresses ethical considerations in technology.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Leading Central Asia's transformation into a global hub for intelligent technology.",
  },
]

export function MissionVision() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Mission & Vision</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Target className="h-6 w-6 text-accent mr-3" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty leading-relaxed">
                To cultivate top-tier talent with deep theoretical foundations, exceptional engineering capabilities,
                and high ethical standards to tackle the world's most complex challenges.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                At KIAIC, we believe technology should serve human welfare. We are committed to exploring AI
                applications that address Central Asia's unique challenges, including sustainable development, water
                resource management, smart agriculture, telemedicine, and multilingual information processing.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-accent/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Eye className="h-6 w-6 text-accent mr-3" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty leading-relaxed">
                To become Central Asia's leading center for artificial intelligence and cybernetics education and
                research, fostering innovation that transforms the region and contributes to global technological
                advancement.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                We envision a future where KIAIC graduates lead breakthrough innovations in AI, creating solutions that
                benefit humanity while preserving and celebrating the rich cultural heritage of Central Asia.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Our Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 text-center"
              >
                <CardContent className="p-6">
                  <IconComponent className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
