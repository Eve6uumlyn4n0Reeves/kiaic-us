"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Shield, Bot, Network, Zap, Globe } from "lucide-react"

export function ResearchCenters() {
  const centers = [
    {
      title: "Center for Advanced AI Research",
      director: "Dr. Elena Volkov",
      icon: Brain,
      description: "Leading research in machine learning, deep learning, and artificial general intelligence.",
      focus: ["Large Language Models", "Computer Vision", "Reinforcement Learning", "AI Safety & Alignment"],
      projects: 12,
      funding: "$2.5M",
      publications: 45,
    },
    {
      title: "Cybersecurity Innovation Lab",
      director: "Dr. Marcus Chen",
      icon: Shield,
      description: "Developing next-generation cybersecurity solutions with AI integration.",
      focus: ["AI-Powered Threat Detection", "Blockchain Security", "Quantum Cryptography", "Digital Forensics"],
      projects: 8,
      funding: "$1.8M",
      publications: 32,
    },
    {
      title: "Robotics & Autonomous Systems Lab",
      director: "Dr. Sarah Kim",
      icon: Bot,
      description: "Advancing robotics technology for industrial and social applications.",
      focus: ["Industrial Automation", "Medical Robotics", "Autonomous Vehicles", "Human-Robot Interaction"],
      projects: 10,
      funding: "$3.2M",
      publications: 38,
    },
    {
      title: "Quantum Computing Research Center",
      director: "Dr. Ahmed Hassan",
      icon: Zap,
      description: "Exploring quantum algorithms and quantum machine learning applications.",
      focus: ["Quantum Algorithms", "Quantum Machine Learning", "Quantum Cryptography", "Quantum Error Correction"],
      projects: 6,
      funding: "$4.1M",
      publications: 28,
    },
    {
      title: "Neural Networks & Brain Computing Lab",
      director: "Dr. Lisa Wang",
      icon: Network,
      description: "Investigating neuromorphic computing and brain-inspired AI systems.",
      focus: ["Neuromorphic Chips", "Spiking Neural Networks", "Brain-Computer Interfaces", "Cognitive Computing"],
      projects: 7,
      funding: "$2.9M",
      publications: 35,
    },
    {
      title: "Global AI Ethics Institute",
      director: "Dr. James Rodriguez",
      icon: Globe,
      description: "Addressing ethical, legal, and social implications of AI technologies.",
      focus: ["AI Governance", "Algorithmic Fairness", "Privacy Protection", "AI Policy Development"],
      projects: 9,
      funding: "$1.6M",
      publications: 42,
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
          <h2 className="text-4xl font-bold mb-4">Research Centers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            World-class research facilities driving innovation in artificial intelligence, cybernetics, and emerging
            technologies with significant industry impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <motion.div
              key={center.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <center.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{center.projects} Projects</Badge>
                  </div>
                  <CardTitle className="text-lg">{center.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Director: {center.director}
                  </CardDescription>
                  <CardDescription className="text-base mt-2">{center.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Research Focus</h4>
                    <div className="space-y-2">
                      {center.focus.map((area) => (
                        <div key={area} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">{center.funding}</div>
                      <div className="text-xs text-muted-foreground">Annual Funding</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">{center.publications}</div>
                      <div className="text-xs text-muted-foreground">Publications</div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Explore Research
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
