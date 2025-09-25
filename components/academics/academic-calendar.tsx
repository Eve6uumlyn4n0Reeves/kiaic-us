"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function AcademicCalendar() {
  const events = [
    {
      date: "March 15, 2025",
      title: "Spring Semester Begins",
      type: "Academic",
      time: "8:00 AM",
      location: "All Campuses",
      description: "First day of spring semester classes for all programs.",
    },
    {
      date: "March 22, 2025",
      title: "AI Research Symposium",
      type: "Research",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      description: "Annual symposium featuring latest research from faculty and students.",
    },
    {
      date: "April 10, 2025",
      title: "Graduate Application Deadline",
      type: "Admissions",
      time: "11:59 PM",
      location: "Online",
      description: "Final deadline for fall 2025 graduate program applications.",
    },
    {
      date: "April 18, 2025",
      title: "Cybersecurity Conference",
      type: "Conference",
      time: "8:30 AM - 6:00 PM",
      location: "Conference Center",
      description: "International conference on AI-enhanced cybersecurity.",
    },
    {
      date: "May 5, 2025",
      title: "Spring Career Fair",
      type: "Career",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center",
      description: "Career opportunities with leading tech companies and startups.",
    },
    {
      date: "May 20, 2025",
      title: "Spring Commencement",
      type: "Graduation",
      time: "10:00 AM",
      location: "Main Stadium",
      description: "Graduation ceremony for spring 2025 graduates.",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Research":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Admissions":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Conference":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "Career":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
      case "Graduation":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

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
          <h2 className="text-4xl font-bold mb-4">Academic Calendar</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Important dates and events for the academic year, including deadlines, conferences, and special programs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-primary/20 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{event.description}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
