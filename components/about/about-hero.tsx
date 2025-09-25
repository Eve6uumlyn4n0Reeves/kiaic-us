import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Users, Globe } from "lucide-react"

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              About KIAIC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Discover the story behind Central Asia's premier institute for artificial intelligence and cybernetics
            education. Learn about our mission, vision, and the people who make KIAIC a world-class institution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background text-lg px-8 py-6">
              <Link href="/about/faculty">
                Meet Our Faculty
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
            >
              <Link href="/about/facilities">Campus Tour</Link>
            </Button>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Building className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent mb-2">2023</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent mb-2">1,200</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
