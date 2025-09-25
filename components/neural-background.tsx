"use client"

import { useEffect, useRef } from "react"

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      pulse: number
      size: number
    }[] = []
    const nodeCount = 50 // Reduced for more sophisticated look

    // Initialize nodes with enhanced properties
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement for elegance
        vy: (Math.random() - 0.5) * 0.2,
        pulse: Math.random() * Math.PI * 2,
        size: Math.random() * 1.5 + 0.8, // Smaller, more refined nodes
      })
    }

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.015 // Slower pulse for sophistication

        // Bounce off edges with some padding
        if (node.x <= 15 || node.x >= canvas.width - 15) node.vx *= -1
        if (node.y <= 15 || node.y >= canvas.height - 15) node.vy *= -1

        // Keep nodes within bounds
        node.x = Math.max(15, Math.min(canvas.width - 15, node.x))
        node.y = Math.max(15, Math.min(canvas.height - 15, node.y))

        // Calculate pulsing effect - more subtle
        const pulseIntensity = (Math.sin(node.pulse) + 1) / 2
        const alpha = 0.2 + pulseIntensity * 0.3

        // Draw node with refined glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)

        // Outer glow - sophisticated teal
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2.5)
        gradient.addColorStop(0, `rgba(8, 145, 178, ${alpha})`) // Sophisticated teal
        gradient.addColorStop(1, "rgba(8, 145, 178, 0)")
        ctx.fillStyle = gradient
        ctx.fill()

        // Inner core - brighter teal
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha + 0.2})` // Brighter teal for core
        ctx.fill()

        // Draw connections to nearby nodes
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Reduced connection distance for cleaner look
            const connectionAlpha = ((100 - distance) / 100) * 0.15 // More subtle connections

            const connectionGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
            connectionGradient.addColorStop(0, `rgba(30, 58, 138, ${connectionAlpha})`) // Academic navy
            connectionGradient.addColorStop(0.5, `rgba(8, 145, 178, ${connectionAlpha * 1.2})`) // Sophisticated teal
            connectionGradient.addColorStop(1, `rgba(30, 58, 138, ${connectionAlpha})`) // Academic navy

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = connectionGradient
            ctx.lineWidth = 1
            ctx.stroke()

            if (Math.random() < 0.005) {
              // Less frequent for sophistication
              const flowX = node.x + (otherNode.x - node.x) * Math.random()
              const flowY = node.y + (otherNode.y - node.y) * Math.random()

              ctx.beginPath()
              ctx.arc(flowX, flowY, 0.8, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(8, 145, 178, 0.6)` // Sophisticated teal
              ctx.fill()
            }
          }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }} // Reduced opacity for more sophisticated background
    />
  )
}
