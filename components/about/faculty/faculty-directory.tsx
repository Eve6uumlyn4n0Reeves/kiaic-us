"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, ExternalLink, Search } from "lucide-react"

const departments = ["All", "Computer Science", "Cybernetics & Robotics", "Data Science", "AI Ethics"]

const faculty = [
  {
    name: "Dr. Aida Kadyrova",
    title: "Associate Professor",
    department: "Computer Science",
    lab: "Central Asian Language Technologies Lab (CALTL)",
    education: "Ph.D. Computational Linguistics, University of Edinburgh",
    background: "Former researcher at European NLP institutes",
    expertise: [
      "Natural Language Processing",
      "Low-Resource Languages",
      "Machine Translation",
      "Computational Linguistics",
    ],
    publications: ["SilkRoad-LM: A Morphology-Aware Pre-trained Language Model for Turkic Languages (ACL 2025)"],
    description: "Leading expert in Turkic language NLP and director of the groundbreaking SilkRoad-LM project.",
  },
  {
    name: "Dr. Dmitry Ivanov",
    title: "Professor & Department Chair",
    department: "Cybernetics & Robotics",
    lab: "Intelligent Systems and Control Research Center (ISCRC)",
    education: "Ph.D. Control Engineering, ETH Zurich",
    background: "Former researcher at leading European control systems institutes",
    expertise: ["Modern Control Theory", "Reinforcement Learning", "System Dynamics", "Smart Grids", "Robotics"],
    publications: ["Adaptive Traffic Signal Control using Multi-Agent Reinforcement Learning (IEEE Trans. ITS 2024)"],
    description: "Expert in complex systems control with focus on AI-driven optimization and urban systems.",
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Associate Professor",
    department: "AI Ethics",
    lab: "AI Ethics and Societal Impact Lab",
    education: "Ph.D. Science, Technology & Society, Oxford University",
    background: "International AI ethics consultant and policy advisor",
    expertise: ["AI Ethics", "Algorithmic Fairness", "Explainable AI", "Technology Policy"],
    publications: ["Towards a Framework for Responsible AI Governance in Developing Countries (AI & Society 2025)"],
    description: "Leading voice in AI ethics and responsible AI development frameworks.",
  },
  {
    name: "Dr. Michael Chen",
    title: "Assistant Professor",
    department: "Computer Science",
    lab: "Deep Learning Research Group",
    education: "Ph.D. Computer Science, Carnegie Mellon University",
    background: "Former research scientist at leading tech companies",
    expertise: ["Deep Learning Theory", "Computer Vision", "Generative Models", "Self-Supervised Learning"],
    publications: ["Understanding Generalization in Deep Learning through Information Bottleneck (NeurIPS 2024)"],
    description: "Rising star in deep learning research with focus on theoretical understanding of neural networks.",
  },
  {
    name: "Prof. Bakyt Sultanbekov",
    title: "Professor",
    department: "Data Science",
    lab: "Big Data Analytics Lab",
    education: "Ph.D. Applied Mathematics, Moscow State University",
    background: "Leading Central Asian expert in mathematical modeling",
    expertise: ["Statistical Learning", "Time Series Analysis", "Mathematical Modeling", "Optimization"],
    publications: ["Advanced Statistical Methods for Climate Data Analysis (Nature Climate Change 2024)"],
    description: "Expert in statistical methods and mathematical modeling with applications to climate science.",
  },
  {
    name: "Dr. Lisa Wang",
    title: "Associate Professor",
    department: "Computer Science",
    lab: "Quantum Computing Research Group",
    education: "Ph.D. Quantum Information, University of Waterloo",
    background: "Former researcher at IBM Quantum and Google Quantum AI",
    expertise: ["Quantum Machine Learning", "Quantum Algorithms", "Quantum Information Theory"],
    publications: ["Quantum Advantage in Machine Learning: Theory and Practice (Science 2024)"],
    description: "Pioneer in quantum machine learning and quantum algorithm development.",
  },
]

export function FacultyDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaculty = faculty.filter((member) => {
    const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesDepartment && matchesSearch
  })

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className={
                    selectedDepartment === dept
                      ? "bg-accent hover:bg-accent/90 text-background"
                      : "border-accent/40 text-accent hover:bg-accent hover:text-background bg-transparent"
                  }
                >
                  {dept}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search faculty by name or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFaculty.map((member, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <User className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                    <p className="text-accent font-medium text-sm mb-1">{member.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">{member.department}</p>
                    {member.lab && (
                      <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                        {member.lab}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-pretty">{member.description}</p>

                <div>
                  <h4 className="font-medium text-sm mb-2">Education & Background:</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>{member.education}</p>
                    <p>{member.background}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Research Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {member.publications.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-2">Recent Publications:</h4>
                    <ul className="space-y-1">
                      {member.publications.slice(0, 1).map((pub, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground italic">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex space-x-2 pt-2">
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No faculty members found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
