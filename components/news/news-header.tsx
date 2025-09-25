export function NewsHeader() {
  return (
    <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              News Center
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Stay informed about the latest developments, breakthroughs, and achievements at KIAIC. Discover how we're
            shaping the future of AI and cybernetics in Central Asia.
          </p>
        </div>
      </div>
    </section>
  )
}
