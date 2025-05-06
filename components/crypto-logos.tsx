"use client"

import { motion } from "framer-motion"

const LOGOS = [
  { src: "/logos/btc.svg", alt: "Bitcoin", size: 40 },
  { src: "/logos/eth.svg", alt: "Ethereum", size: 36 },
  { src: "/logos/sol.svg", alt: "Solana", size: 38 },
  { src: "/logos/tether.svg", alt: "Tether", size: 34 },
]

const FloatingLogo = ({ src, alt, size, index }: { src: string; alt: string; size: number; index: number }) => {
  const randomDuration = 20 + Math.random() * 10
  const randomDelay = Math.random() * 2

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 0.2,
        y: [0, -20, 0],
        x: [0, 10, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute"
      style={{
        top: `${20 + (index * 15)}%`,
        left: `${20 + (index * 20)}%`,
      }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="opacity-20"
      />
    </motion.div>
  )
}

export default function CryptoLogos() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {LOGOS.map((logo, index) => (
        <FloatingLogo
          key={logo.alt}
          {...logo}
          index={index}
        />
      ))}
      {/* Duplicar los logos para más densidad */}
      {LOGOS.map((logo, index) => (
        <FloatingLogo
          key={`${logo.alt}-2`}
          {...logo}
          index={index + LOGOS.length}
        />
      ))}
    </div>
  )
}
