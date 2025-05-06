import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.15,
          ease: [0.21, 0.45, 0.32, 0.9]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.15 + 0.1
        }}
        className="mb-4"
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, 0],
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        className="text-xl font-bold mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
        className="text-gray-400"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
