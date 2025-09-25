import { NewsHeader } from "@/components/news/news-header"
import { FeaturedStory } from "@/components/news/featured-story"
import { NewsGrid } from "@/components/news/news-grid"
import { NewsFilters } from "@/components/news/news-filters"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedStory />
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <NewsFilters />
            </aside>
            <main className="flex-1">
              <NewsGrid />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
