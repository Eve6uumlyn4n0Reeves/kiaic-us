"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    category: "Student Body",
    stats: [
      { label: "Total Students", value: 1200, suffix: "" },
      { label: "Undergraduate", value: 800, suffix: "" },
      { label: "Graduate (M.Sc./Ph.D.)", value: 400, suffix: "" },
      { label: "International Students", value: 35, suffix: "%" },
    ],
  },
  {
    category: "Faculty & Staff",
    stats: [
      { label: "Full-time Faculty", value: 170, suffix: "" },
      { label: "PhD Degree Holders", value: 98, suffix: "%" },
      { label: "International Faculty", value: 70, suffix: "%" },
      { label: "Student-Faculty Ratio", value: 7, suffix: ":1" },
    ],
  },
  {
    category: "Research Excellence",
    stats: [
      { label: "Publications (2024)", value: 200, suffix: "+" },
      { label: "Active Research Projects", value: 100, suffix: "+" },
      { label: "Annual Research Funding", value: 10, suffix: "M USD" },
      { label: "Research Labs", value: 15, suffix: "" },
    ],
  },
  {
    category: "Global Impact",
    stats: [
      { label: "Countries Represented", value: 30, suffix: "+" },
      { label: "Industry Partners", value: 50, suffix: "+" },
      { label: "Graduate Employment Rate", value: 98, suffix: "%" },
      { label: "Computing Power", value: 10, suffix: " PFLOPS" },
    ],
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-2xl font-bold text-accent">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function FactsFigures() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Facts & Figures</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our commitment to excellence is reflected in every aspect of our institution, from our diverse student body
            to our world-class research output.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stats.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center text-accent">{category.category}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-accent/20 bg-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Growing Excellence</h3>
            <p className="text-muted-foreground text-pretty max-w-3xl mx-auto">
              Since our establishment in 2023, KIAIC has rapidly grown to become a recognized leader in AI and
              cybernetics education in Central Asia. Our numbers reflect not just growth, but our commitment to quality,
              diversity, and global impact in everything we do.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
