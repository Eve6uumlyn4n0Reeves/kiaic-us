import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Microscope, Zap } from "lucide-react"

export function ResearchHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Pioneering Research in
            <span className="text-primary block mt-2">AI & Cybernetics</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Our research labs are pushing the boundaries of artificial intelligence and cybernetics, addressing both
            global challenges and regional opportunities through cutting-edge innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group">
              Explore Research Centers
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Publications
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research</h3>
              <p className="text-muted-foreground">15+ active research labs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Publications</h3>
              <p className="text-muted-foreground">200+ papers in 2024</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">$10M annual funding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
