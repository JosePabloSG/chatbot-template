"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const LOGOS = [
  { src: "/logos/btc.svg", alt: "Bitcoin", size: 40 },
  { src: "/logos/eth.svg", alt: "Ethereum", size: 36 },
  { src: "/logos/sol.svg", alt: "Solana", size: 38 },
  { src: "/logos/tether.svg", alt: "Tether", size: 34 },
]

export default function CryptoLogos() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      logoIndex: number
      opacity: number
    }[] = []

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 30 + Math.random() * 20,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        logoIndex: Math.floor(Math.random() * LOGOS.length),
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    // Load images
    const images: HTMLImageElement[] = []
    let loadedCount = 0

    LOGOS.forEach((logo) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = logo.src
      img.onload = () => {
        loadedCount++
        if (loadedCount === LOGOS.length) {
          animate()
        }
      }
      images.push(img)
    })

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)

      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvasRef.current!.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvasRef.current!.height) {
          particle.speedY *= -1
        }

        // Draw logo
        ctx.globalAlpha = particle.opacity
        const img = images[particle.logoIndex]
        if (img) {
          const size = particle.size
          ctx.drawImage(
            img,
            particle.x - size / 2,
            particle.y - size / 2,
            size,
            size
          )
        }
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
