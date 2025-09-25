import type * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "default" | "secondary" | "destructive" | "outline"
  asChild?: boolean
}

function Badge({ className, variant = "default", asChild = false, ...props }: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-colors"

  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-foreground border-input hover:bg-accent hover:text-accent-foreground",
  }

  const Comp = asChild ? "div" : "span"

  return <Comp className={cn(baseClasses, variantClasses[variant], className)} {...props} />
}

export { Badge }
