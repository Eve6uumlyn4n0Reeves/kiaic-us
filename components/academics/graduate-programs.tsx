"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Microscope, BookOpen } from "lucide-react"

export function GraduatePrograms() {
  const programs = [
    {
      id: "masters",
      title: "Master's Programs",
      icon: GraduationCap,
      programs: [
        {
          title: "Master of Science in Artificial Intelligence",
          duration: "2 Years",
          credits: "36 Credits",
          format: "Full-time / Part-time",
          description: "Advanced AI research and application development.",
          tracks: [
            "Machine Learning & Deep Learning",
            "Computer Vision & Robotics",
            "Natural Language Processing",
            "AI Ethics & Governance",
          ],
          requirements: [
            "Bachelor's in Computer Science or related field",
            "GPA 3.5 or higher",
            "GRE scores (optional for exceptional candidates)",
            "Research statement",
            "Two letters of recommendation",
          ],
        },
        {
          title: "Master of Science in Cybersecurity",
          duration: "2 Years",
          credits: "36 Credits",
          format: "Full-time / Part-time",
          description: "Advanced cybersecurity with AI integration focus.",
          tracks: [
            "AI-Enhanced Security Systems",
            "Digital Forensics & Investigation",
            "Blockchain & Cryptocurrency Security",
            "Critical Infrastructure Protection",
          ],
          requirements: [
            "Bachelor's in Computer Science, IT, or related field",
            "GPA 3.3 or higher",
            "Professional experience preferred",
            "Statement of purpose",
            "Two letters of recommendation",
          ],
        },
        {
          title: "Master of Engineering in Robotics",
          duration: "2 Years",
          credits: "36 Credits",
          format: "Full-time",
          description: "Advanced robotics and autonomous systems engineering.",
          tracks: ["Industrial Automation", "Medical Robotics", "Autonomous Vehicles", "Human-Robot Interaction"],
          requirements: [
            "Bachelor's in Engineering or related field",
            "GPA 3.4 or higher",
            "Mathematics and physics background",
            "Portfolio of projects",
            "Two letters of recommendation",
          ],
        },
      ],
    },
    {
      id: "phd",
      title: "Doctoral Programs",
      icon: Microscope,
      programs: [
        {
          title: "Doctor of Philosophy in Artificial Intelligence",
          duration: "4-5 Years",
          credits: "72 Credits",
          format: "Full-time",
          description: "Original research in cutting-edge AI technologies.",
          tracks: [
            "Theoretical Machine Learning",
            "AI Safety & Alignment",
            "Quantum Machine Learning",
            "Neuromorphic Computing",
          ],
          requirements: [
            "Master's degree in relevant field",
            "GPA 3.7 or higher",
            "GRE scores",
            "Research proposal",
            "Three letters of recommendation",
            "Interview with faculty committee",
          ],
        },
        {
          title: "Doctor of Philosophy in Cybernetics",
          duration: "4-5 Years",
          credits: "72 Credits",
          format: "Full-time",
          description: "Interdisciplinary research in cybernetic systems.",
          tracks: ["Bio-Cybernetic Systems", "Cognitive Cybernetics", "Social Cybernetics", "Quantum Cybernetics"],
          requirements: [
            "Master's degree in relevant field",
            "GPA 3.7 or higher",
            "Strong mathematical background",
            "Research proposal",
            "Three letters of recommendation",
            "Interview with faculty committee",
          ],
        },
      ],
    },
    {
      id: "professional",
      title: "Professional Development",
      icon: BookOpen,
      programs: [
        {
          title: "Executive Certificate in AI Leadership",
          duration: "6 Months",
          credits: "12 Credits",
          format: "Weekend / Online",
          description: "Strategic AI implementation for business leaders.",
          tracks: [
            "AI Strategy & Governance",
            "Digital Transformation",
            "AI Ethics & Compliance",
            "Innovation Management",
          ],
          requirements: [
            "5+ years management experience",
            "Bachelor's degree",
            "Current leadership role",
            "Application essay",
          ],
        },
        {
          title: "Professional Certificate in Cybersecurity",
          duration: "9 Months",
          credits: "18 Credits",
          format: "Evening / Online",
          description: "Industry-focused cybersecurity skills development.",
          tracks: ["Security Operations", "Incident Response", "Compliance & Auditing", "Security Architecture"],
          requirements: [
            "IT background preferred",
            "Bachelor's degree or equivalent experience",
            "Basic networking knowledge",
            "Professional goals statement",
          ],
        },
      ],
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
          <h2 className="text-4xl font-bold mb-4">Graduate Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Advanced degree programs for specialized research and professional development in artificial intelligence,
            cybernetics, and emerging technologies.
          </p>
        </motion.div>

        <Tabs defaultValue="masters" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {programs.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-8">
                {category.programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                            <CardDescription className="text-base">{program.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground mb-1">
                              {program.duration} • {program.credits}
                            </div>
                            <Badge variant="secondary">{program.format}</Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4 text-primary">Specialization Tracks</h4>
                            <div className="space-y-2">
                              {program.tracks.map((track) => (
                                <div key={track} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-sm">{track}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4 text-primary">Admission Requirements</h4>
                            <div className="space-y-2">
                              {program.requirements.map((req) => (
                                <div key={req} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-3 mt-6">
                              <Button size="sm">Apply Now</Button>
                              <Button variant="outline" size="sm">
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
