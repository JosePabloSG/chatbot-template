import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ConceptCardProps {
  title: string
  description: string
  icon: ReactNode
  index?: number
}

export default function ConceptCard({ title, description, icon, index = 0 }: ConceptCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: index * 0.2,
          ease: [0.21, 0.45, 0.32, 0.9]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
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
          delay: index * 0.2 + 0.1
        }}
        className="flex items-center mb-4"
      >
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mr-3 p-2 bg-gray-700/50 rounded-lg"
        >
          {icon}
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
          className="text-xl font-bold"
        >
          {title}
        </motion.h3>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        className="text-gray-400"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
