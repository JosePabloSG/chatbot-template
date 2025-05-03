import Link from "next/link"
import { ExternalLink, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="flex items-center justify-center p-4 bg-white rounded-full shadow-md">
            <MessageSquare className="w-12 h-12 text-emerald-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Plantilla de Chatbot IA</h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Una solución rápida para crear chatbots inteligentes utilizando el SDK de Vercel y la API de OpenAI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <Card className="p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">¿Qué es esta plantilla?</h2>
              <p className="text-gray-600 mb-4">
                Esta es una plantilla diseñada para ayudarte a crear chatbots de manera rápida y eficiente utilizando
                las mejores prácticas de desarrollo. Integra el SDK de Vercel para IA y la API de OpenAI para ofrecer
                respuestas inteligentes y naturales.
              </p>
            </Card>

            <Card className="p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Recursos necesarios</h2>
              <p className="text-gray-600 mb-4">
                Para utilizar esta plantilla, necesitarás acceso al SDK de Vercel para IA y una clave API de OpenAI.
                Ambos recursos son esenciales para el funcionamiento del chatbot.
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link
                href="https://sdk.vercel.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                SDK de Vercel
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Obtener API Key de OpenAI
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-50">
              <Link
                href="https://github.com/JosePabloSG/chatbot-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                Ver en GitHub
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
