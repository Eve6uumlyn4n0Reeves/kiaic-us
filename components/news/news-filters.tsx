"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = [
  { name: "All", count: 24 },
  { name: "Research Breakthrough", count: 8 },
  { name: "Student Achievement", count: 6 },
  { name: "Partnership", count: 4 },
  { name: "Faculty News", count: 3 },
  { name: "Campus Life", count: 3 },
]

const years = ["2025", "2024", "2023"]

export function NewsFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("2025")

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedYear("2025")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedCategory === category.name
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Years */}
          <div>
            <h3 className="font-medium mb-3">Year</h3>
            <div className="space-y-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedYear === year
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedCategory !== "All" || selectedYear !== "2025") && (
            <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
