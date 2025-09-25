"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

export function ProgramsOverview() {
  const programTypes = [
    {
      title: "Undergraduate Programs",
      description: "Bachelor's degrees in cutting-edge AI and cybernetics fields",
      duration: "4 Years",
      programs: 6,
      highlights: ["Industry Partnerships", "Research Opportunities", "Internship Programs"],
      icon: BookOpen,
    },
    {
      title: "Graduate Programs",
      description: "Advanced Master's and PhD programs for specialized research",
      duration: "2-5 Years",
      programs: 6,
      highlights: ["Research Focus", "Publication Support", "Conference Funding"],
      icon: Users,
    },
    {
      title: "Professional Development",
      description: "Continuing education and certification programs",
      duration: "Flexible",
      programs: 8,
      highlights: ["Industry Certifications", "Executive Education", "Online Learning"],
      icon: Award,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Academic Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive educational pathways designed to prepare students for leadership in artificial intelligence,
            cybernetics, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programTypes.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{program.programs} Programs</Badge>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Duration</div>
                    <div className="font-semibold text-primary">{program.duration}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-3">Key Highlights</div>
                    <div className="space-y-2">
                      {program.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group bg-transparent">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
