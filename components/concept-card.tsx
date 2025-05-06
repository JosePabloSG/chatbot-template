import type { ReactNode } from "react"

interface ConceptCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ConceptCard({ title, description, icon }: ConceptCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-emerald-500/5">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 bg-gray-700/50 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
