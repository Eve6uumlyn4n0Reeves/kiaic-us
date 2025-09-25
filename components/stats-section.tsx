"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

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
    <span className="text-4xl font-bold text-accent">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const stats = [
    { value: 1200, suffix: "", label: "Students", description: "Diverse international community" },
    { value: 170, suffix: "", label: "Faculty Members", description: "98% with PhD degrees" },
    { value: 10, suffix: " PFLOPS", label: "Computing Power", description: "Tianshan Supercomputing Center" },
    { value: 35, suffix: "%", label: "International Students", description: "From 30+ countries" },
    { value: 200, suffix: "+", label: "Research Papers", description: "Published in 2024" },
    { value: 98, suffix: "%", label: "Employment Rate", description: "In high-tech sectors" },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto space-content">
          <div className="text-center space-elements">
            <h2 className="text-headline font-bold text-balance text-foreground">Excellence in Numbers</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our commitment to excellence is reflected in every aspect of our institution, from our world-class faculty
              to our cutting-edge research facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="academic-card border-0 bg-transparent">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
