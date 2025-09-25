"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function WebGLNeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      const nodes: Node[] = []
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000))

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 150 && node.connections.length < 3) {
              node.connections.push(j)
            }
          }
        })
      })

      nodesRef.current = nodes
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get CSS custom properties for theming
      const computedStyle = getComputedStyle(document.documentElement)
      const isDark = document.documentElement.classList.contains("dark")

      const nodeColor = isDark ? "rgba(71, 85, 105, 0.4)" : "rgba(148, 163, 184, 0.3)"
      const connectionColor = isDark ? "rgba(71, 85, 105, 0.2)" : "rgba(148, 163, 184, 0.15)"
      const accentColor = isDark ? "rgba(8, 145, 178, 0.6)" : "rgba(30, 64, 175, 0.4)"

      const nodes = nodesRef.current

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections
      ctx.strokeStyle = connectionColor
      ctx.lineWidth = 1
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          if (connectedNode) {
            const distance = Math.sqrt(Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2))

            // Fade connection based on distance
            const opacity = Math.max(0, 1 - distance / 150)
            ctx.globalAlpha = opacity * 0.3

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      ctx.globalAlpha = 1
      nodes.forEach((node, i) => {
        // Highlight some nodes with accent color
        const isAccent = i % 7 === 0
        ctx.fillStyle = isAccent ? accentColor : nodeColor

        ctx.beginPath()
        ctx.arc(node.x, node.y, isAccent ? 3 : 2, 0, Math.PI * 2)
        ctx.fill()

        // Add subtle glow to accent nodes
        if (isAccent) {
          ctx.shadowColor = isDark ? "rgba(8, 145, 178, 0.5)" : "rgba(30, 64, 175, 0.3)"
          ctx.shadowBlur = 8
          ctx.beginPath()
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createNodes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createNodes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
