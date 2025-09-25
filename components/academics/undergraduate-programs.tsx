"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Shield, Bot } from "lucide-react"

export function UndergraduatePrograms() {
  const programs = [
    {
      id: "ai-cs",
      title: "Artificial Intelligence & Computer Science",
      degree: "Bachelor of Science (B.S.)",
      duration: "4 Years",
      credits: "128 Credits",
      icon: Brain,
      description: "Comprehensive program combining theoretical foundations with practical AI applications.",
      coreSubjects: [
        "Advanced Mathematics & Statistics",
        "Programming Fundamentals (Python, C++, Java)",
        "Data Structures & Algorithms",
        "Machine Learning Fundamentals",
        "Deep Learning & Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "AI Ethics & Philosophy",
      ],
      specializations: [
        "Machine Learning Engineering",
        "Computer Vision Systems",
        "Natural Language Processing",
        "Robotics & Autonomous Systems",
      ],
      careerPaths: [
        "AI Research Scientist",
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Product Manager",
        "Research & Development Engineer",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Information Assurance",
      degree: "Bachelor of Science (B.S.)",
      duration: "4 Years",
      credits: "128 Credits",
      icon: Shield,
      description: "Advanced cybersecurity program focusing on AI-enhanced security systems.",
      coreSubjects: [
        "Network Security Fundamentals",
        "Cryptography & Encryption",
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics",
        "AI-Powered Threat Detection",
        "Blockchain Security",
        "Risk Assessment & Management",
        "Cybersecurity Law & Policy",
      ],
      specializations: [
        "AI Security Systems",
        "Digital Forensics",
        "Blockchain Security",
        "Critical Infrastructure Protection",
      ],
      careerPaths: [
        "Cybersecurity Analyst",
        "Security Architect",
        "Digital Forensics Specialist",
        "Penetration Tester",
        "Security Consultant",
      ],
    },
    {
      id: "robotics",
      title: "Robotics & Autonomous Systems",
      degree: "Bachelor of Engineering (B.Eng.)",
      duration: "4 Years",
      credits: "132 Credits",
      icon: Bot,
      description: "Interdisciplinary program combining mechanical, electrical, and AI systems.",
      coreSubjects: [
        "Mechanical Engineering Principles",
        "Electrical Systems & Control",
        "Sensor Technologies",
        "Robot Kinematics & Dynamics",
        "AI for Robotics",
        "Computer Vision for Robots",
        "Human-Robot Interaction",
        "Autonomous Navigation",
      ],
      specializations: ["Industrial Automation", "Medical Robotics", "Autonomous Vehicles", "Space Robotics"],
      careerPaths: [
        "Robotics Engineer",
        "Automation Specialist",
        "Research Scientist",
        "Product Development Engineer",
        "Systems Integration Engineer",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Undergraduate Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Bachelor's degree programs that provide comprehensive foundation in AI, cybernetics, and emerging
            technologies with hands-on research opportunities.
          </p>
        </motion.div>

        <Tabs defaultValue="ai-cs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {programs.map((program) => (
              <TabsTrigger key={program.id} value={program.id} className="text-sm">
                <program.icon className="w-4 h-4 mr-2" />
                {program.title.split(" & ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent key={program.id} value={program.id}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <program.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{program.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{program.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {program.degree}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {program.duration} • {program.credits}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-primary">Core Subjects</h4>
                        <div className="space-y-2">
                          {program.coreSubjects.map((subject) => (
                            <div key={subject} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-primary">Specializations</h4>
                        <div className="space-y-2">
                          {program.specializations.map((spec) => (
                            <Badge key={spec} variant="outline" className="mr-2 mb-2">
                              {spec}
                            </Badge>
                          ))}
                        </div>

                        <h4 className="font-semibold mb-4 mt-6 text-primary">Career Paths</h4>
                        <div className="space-y-2">
                          {program.careerPaths.map((career) => (
                            <div key={career} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-sm">{career}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-muted/50 rounded-lg p-6">
                          <h4 className="font-semibold mb-4">Program Highlights</h4>
                          <div className="space-y-3 text-sm">
                            <div>• Industry partnerships with leading tech companies</div>
                            <div>• Research opportunities from freshman year</div>
                            <div>• State-of-the-art laboratories and equipment</div>
                            <div>• Internship placement assistance</div>
                            <div>• International exchange programs</div>
                            <div>• Capstone project with industry mentors</div>
                          </div>

                          <Button className="w-full mt-6">Apply Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
